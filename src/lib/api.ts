/**
 * API Layer - Firebase-Ready Data Fetching Functions
 * 
 * These functions currently fetch from mock data but are structured
 * to easily swap out for Firebase SDK calls in the future.
 * 
 * Example Firebase migration:
 * import { collection, getDocs, query, where } from 'firebase/firestore';
 * import { db } from '@/lib/firebase';
 */

import { Property, NewsArticle, Testimonial, TeamMember } from '@/types';
import { properties, news, testimonials, teamMembers } from './mockData';

// Simulate async fetch delay (remove when using real API)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ============ PROPERTIES ============

export async function getProperties(): Promise<Property[]> {
    // Future Firebase implementation:
    // const snapshot = await getDocs(collection(db, 'properties'));
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    await delay(100);
    return properties;
}

export async function getFeaturedProperties(): Promise<Property[]> {
    // Future Firebase implementation:
    // const q = query(collection(db, 'properties'), where('featured', '==', true));
    // const snapshot = await getDocs(q);
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    await delay(100);
    return properties.filter(p => p.featured);
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
    // Future Firebase implementation:
    // const q = query(collection(db, 'properties'), where('slug', '==', slug));
    // const snapshot = await getDocs(q);
    // return snapshot.empty ? null : { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };

    await delay(100);
    return properties.find(p => p.slug === slug) || null;
}

export async function getPropertiesByType(type: Property['type']): Promise<Property[]> {
    // Future Firebase implementation:
    // const q = query(collection(db, 'properties'), where('type', '==', type));
    // const snapshot = await getDocs(q);
    // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    await delay(100);
    return properties.filter(p => p.type === type);
}

// ============ NEWS ============

export async function getNews(): Promise<NewsArticle[]> {
    await delay(100);
    return news;
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
    await delay(100);
    return news.find(n => n.slug === slug) || null;
}

export async function getLatestNews(limit: number = 3): Promise<NewsArticle[]> {
    await delay(100);
    return news.slice(0, limit);
}

// ============ TESTIMONIALS ============

export async function getTestimonials(): Promise<Testimonial[]> {
    await delay(100);
    return testimonials;
}

// ============ TEAM ============

export async function getTeamMembers(): Promise<TeamMember[]> {
    await delay(100);
    return teamMembers;
}

// ============ CONTACT FORM ============

export async function submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}): Promise<{ success: boolean; message: string }> {
    // Future Firebase implementation:
    // await addDoc(collection(db, 'contacts'), {
    //   ...data,
    //   createdAt: serverTimestamp(),
    //   status: 'new',
    // });

    await delay(500);
    console.log('Contact form submission:', data);

    return {
        success: true,
        message: 'Thank you for your message. We will contact you soon!',
    };
}

// ============ NEWSLETTER ============

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    // Future Firebase implementation:
    // await addDoc(collection(db, 'newsletter'), {
    //   email,
    //   subscribedAt: serverTimestamp(),
    // });

    await delay(300);
    console.log('Newsletter subscription:', email);

    return {
        success: true,
        message: 'Successfully subscribed to our newsletter!',
    };
}
