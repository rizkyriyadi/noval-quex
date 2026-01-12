'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    Send,
    ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const currentYear = new Date().getFullYear();

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulate newsletter subscription
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const socialLinks = [
        { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
        { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
        { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
        { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
        { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-serif font-bold mb-2">
                                Stay Updated with Our Latest Projects
                            </h3>
                            <p className="text-gray-400">
                                Subscribe to our newsletter for exclusive offers and property updates.
                            </p>
                        </div>
                        <form
                            onSubmit={handleNewsletterSubmit}
                            className="flex w-full lg:w-auto gap-3"
                        >
                            <div className="relative flex-1 lg:w-80">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                                {isSubscribed ? (
                                    'Subscribed!'
                                ) : (
                                    <>
                                        Subscribe
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold">
                                <span className="text-emerald-500">{SITE_CONFIG.name.slice(0, 4)}</span>
                                <span className="text-white">{SITE_CONFIG.name.slice(4)}</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {SITE_CONFIG.footer.description}
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {SITE_CONFIG.footer.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Property Types</h4>
                        <ul className="space-y-3">
                            {SITE_CONFIG.footer.services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-400">{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li>
                                <a
                                    href={`tel:${SITE_CONFIG.contact.phone}`}
                                    className="flex gap-3 text-gray-400 hover:text-emerald-500 transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="flex gap-3 text-gray-400 hover:text-emerald-500 transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                        <p>{SITE_CONFIG.footer.copyright}</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-emerald-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-emerald-500 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
