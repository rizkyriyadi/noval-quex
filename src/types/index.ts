// Property Types
export interface Property {
    id: string;
    title: string;
    slug: string;
    type: 'house' | 'apartment' | 'villa';
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    images?: string[];
    featured: boolean;
    description: string;
    amenities?: string[];
}

// News/Blog Types
export interface NewsArticle {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    publishedAt: string;
    category: string;
}

// Testimonial Types
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    content: string;
    avatar: string;
    rating: number;
}

// Team Member Types
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

// Navigation Types
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

// Contact Form Types
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

// Feature/Why Choose Us Types
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}
