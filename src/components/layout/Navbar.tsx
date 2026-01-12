'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-serif font-bold text-emerald-700">
                            {SITE_CONFIG.name.slice(0, 4)}
                            <span className="text-gray-800">
                                {SITE_CONFIG.name.slice(4)}
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {SITE_CONFIG.navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors hover:text-emerald-600 ${isActive(item.href)
                                        ? 'text-emerald-600'
                                        : isScrolled
                                            ? 'text-gray-700'
                                            : 'text-gray-700'
                                    }`}
                            >
                                {item.label.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        className={
                                            item.label === 'Our Projects' && i === 0
                                                ? ''
                                                : item.label === 'Our Projects' && i === 1
                                                    ? 'text-emerald-600'
                                                    : item.label === 'About Us' && i === 1
                                                        ? 'text-emerald-600'
                                                        : item.label === 'News & Event' && i === 1
                                                            ? ''
                                                            : item.label === 'News & Event' && i === 2
                                                                ? 'text-emerald-600'
                                                                : item.label === 'Contact Us' && i === 1
                                                                    ? 'text-emerald-600'
                                                                    : ''
                                        }
                                    >
                                        {word}{' '}
                                    </span>
                                ))}
                                {isActive(item.href) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href={`tel:${SITE_CONFIG.contact.phone}`}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>{SITE_CONFIG.contact.phone}</span>
                        </a>
                        <Link
                            href="/projects"
                            className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
                        >
                            Lihat Project
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ${isOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-4'
                        }`}
                >
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {SITE_CONFIG.navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 text-base font-medium transition-colors ${isActive(item.href)
                                        ? 'text-emerald-600'
                                        : 'text-gray-700 hover:text-emerald-600'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100">
                            <a
                                href={`tel:${SITE_CONFIG.contact.phone}`}
                                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4"
                            >
                                <Phone className="w-4 h-4" />
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </a>
                            <Link
                                href="/projects"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-6 py-3 bg-emerald-600 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors"
                            >
                                Lihat Project
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
