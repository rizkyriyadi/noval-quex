/**
 * API Layer - Firebase-Backed Data Fetching Functions
 * 
 * Fetches data from Firestore with fallback to mock data when empty.
 */

import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit as firestoreLimit
} from 'firebase/firestore';
import { db } from './firebase';
import { Property, NewsArticle, Testimonial, TeamMember } from '@/types';
import { properties as mockProperties, news as mockNews, testimonials, teamMembers } from './mockData';

// ============ PROPERTIES ============

export async function getProperties(): Promise<Property[]> {
    try {
        const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            // Fallback to mock data if Firestore is empty
            return mockProperties;
        }

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Property));
    } catch (error) {
        console.error('Error fetching properties:', error);
        return mockProperties;
    }
}

export async function getFeaturedProperties(): Promise<Property[]> {
    try {
        const q = query(
            collection(db, 'properties'),
            where('featured', '==', true)
        );
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockProperties.filter(p => p.featured);
        }

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Property));
    } catch (error) {
        console.error('Error fetching featured properties:', error);
        return mockProperties.filter(p => p.featured);
    }
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
    try {
        const q = query(collection(db, 'properties'), where('slug', '==', slug));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockProperties.find(p => p.slug === slug) || null;
        }

        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() } as Property;
    } catch (error) {
        console.error('Error fetching property by slug:', error);
        return mockProperties.find(p => p.slug === slug) || null;
    }
}

export async function getPropertiesByType(type: Property['type']): Promise<Property[]> {
    try {
        const q = query(collection(db, 'properties'), where('type', '==', type));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockProperties.filter(p => p.type === type);
        }

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Property));
    } catch (error) {
        console.error('Error fetching properties by type:', error);
        return mockProperties.filter(p => p.type === type);
    }
}

// ============ NEWS ============

export async function getNews(): Promise<NewsArticle[]> {
    try {
        const q = query(collection(db, 'news'), orderBy('publishedAt', 'desc'));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockNews;
        }

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as NewsArticle));
    } catch (error) {
        console.error('Error fetching news:', error);
        return mockNews;
    }
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
    try {
        const q = query(collection(db, 'news'), where('slug', '==', slug));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockNews.find(n => n.slug === slug) || null;
        }

        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() } as NewsArticle;
    } catch (error) {
        console.error('Error fetching news by slug:', error);
        return mockNews.find(n => n.slug === slug) || null;
    }
}

export async function getLatestNews(limit: number = 3): Promise<NewsArticle[]> {
    try {
        const q = query(
            collection(db, 'news'),
            orderBy('publishedAt', 'desc'),
            firestoreLimit(limit)
        );
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return mockNews.slice(0, limit);
        }

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as NewsArticle));
    } catch (error) {
        console.error('Error fetching latest news:', error);
        return mockNews.slice(0, limit);
    }
}

// ============ TESTIMONIALS ============
// (Still using mock data - can be migrated to Firestore later)

export async function getTestimonials(): Promise<Testimonial[]> {
    return testimonials;
}

// ============ TEAM ============
// (Still using mock data - can be migrated to Firestore later)

export async function getTeamMembers(): Promise<TeamMember[]> {
    return teamMembers;
}

// ============ CONTACT FORM ============

import { addDoc, serverTimestamp } from 'firebase/firestore';

export async function submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}): Promise<{ success: boolean; message: string }> {
    try {
        await addDoc(collection(db, 'contacts'), {
            ...data,
            createdAt: serverTimestamp(),
            status: 'new',
        });

        return {
            success: true,
            message: 'Thank you for your message. We will contact you soon!',
        };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return {
            success: false,
            message: 'Failed to submit form. Please try again.',
        };
    }
}

// ============ NEWSLETTER ============

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    try {
        await addDoc(collection(db, 'newsletter'), {
            email,
            subscribedAt: serverTimestamp(),
        });

        return {
            success: true,
            message: 'Successfully subscribed to our newsletter!',
        };
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        return {
            success: false,
            message: 'Failed to subscribe. Please try again.',
        };
    }
}
