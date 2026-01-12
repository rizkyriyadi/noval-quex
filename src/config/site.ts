import { NavItem, Feature } from '@/types';

export const SITE_CONFIG = {
    name: 'AsriDev',
    tagline: 'Your Dream Home is Here',
    description: 'Premium residential property developer creating luxurious living spaces across Indonesia.',

    contact: {
        phone: '+62 21 1234 5678',
        whatsapp: '+62 812 3456 7890',
        email: 'info@asridev.com',
        address: 'Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190',
    },

    social: {
        facebook: 'https://facebook.com/asridev',
        instagram: 'https://instagram.com/asridev',
        twitter: 'https://twitter.com/asridev',
        linkedin: 'https://linkedin.com/company/asridev',
        youtube: 'https://youtube.com/@asridev',
    },

    navigation: [
        { label: 'Home', href: '/' },
        { label: 'Our Projects', href: '/projects' },
        { label: 'About Us', href: '/about' },
        { label: 'News & Event', href: '/news' },
        { label: 'Contact Us', href: '/contact' },
    ] as NavItem[],

    hero: {
        title: 'Your',
        highlight: 'Dream Home',
        subtitle: 'is Here, Let\'s Step Inside',
        description: 'Discover the pinnacle of luxury living with our exclusive collection of premium residences. Experience elegance, comfort, and modern sophistication.',
        ctaText: 'View Projects',
        ctaLink: '/projects',
    },

    features: [
        {
            id: '1',
            title: 'Premium Quality',
            description: 'Built with the finest materials and craftsmanship for lasting excellence.',
            icon: 'Shield',
        },
        {
            id: '2',
            title: 'Strategic Location',
            description: 'Prime locations with easy access to business centers and amenities.',
            icon: 'MapPin',
        },
        {
            id: '3',
            title: 'Modern Design',
            description: 'Contemporary architecture that blends style with functionality.',
            icon: 'Palette',
        },
        {
            id: '4',
            title: 'Smart Investment',
            description: 'Properties with high appreciation value and rental potential.',
            icon: 'TrendingUp',
        },
    ] as Feature[],

    footer: {
        description: 'AsriDev is a leading property developer committed to creating exceptional living spaces that inspire and elevate everyday life.',
        quickLinks: [
            { label: 'Home', href: '/' },
            { label: 'Our Projects', href: '/projects' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
        ],
        services: [
            { label: 'House', href: '/projects?type=house' },
            { label: 'Apartment', href: '/projects?type=apartment' },
            { label: 'Villa', href: '/projects?type=villa' },
            { label: 'Commercial', href: '/projects?type=commercial' },
        ],
        copyright: `© ${new Date().getFullYear()} AsriDev. All rights reserved.`,
    },

    cta: {
        title: 'Grand Launching',
        subtitle: 'Ranca Asri Terrace',
        description: 'Get exclusive early bird pricing and special payment plans. Limited units available!',
        features: ['Free DP', 'Free Smart Home System', 'Cicilan 7 Juta/Bulan'],
        ctaText: 'Book Now',
        ctaLink: '/contact',
    },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
