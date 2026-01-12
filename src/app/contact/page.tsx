'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Us',
            content: SITE_CONFIG.contact.address,
            action: 'Get Directions',
            href: 'https://maps.google.com',
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: SITE_CONFIG.contact.phone,
            action: 'Call Now',
            href: `tel:${SITE_CONFIG.contact.phone}`,
        },
        {
            icon: Mail,
            title: 'Email Us',
            content: SITE_CONFIG.contact.email,
            action: 'Send Email',
            href: `mailto:${SITE_CONFIG.contact.email}`,
        },
        {
            icon: Clock,
            title: 'Working Hours',
            content: 'Mon - Sat: 09:00 - 17:00',
            action: 'Book Appointment',
            href: '#form',
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <SectionHeading
                        title="Get In Touch"
                        highlight="Touch"
                        subtitle="Contact Us"
                        light
                    />
                    <p className="text-emerald-100 max-w-2xl mx-auto mt-6">
                        Have questions about our properties? We&apos;d love to hear from you.
                        Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-white relative -mt-12 z-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all group"
                            >
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                                    <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{item.content}</p>
                                <a
                                    href={item.href}
                                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                                >
                                    {item.action} →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 lg:py-32 bg-gray-50" id="form">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
                            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-500 mb-8">
                                Fill out the form below and we&apos;ll get back to you shortly.
                            </p>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-500">
                                        Thank you for contacting us. We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                                                placeholder="+62 812 3456 7890"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="inquiry">General Inquiry</option>
                                                <option value="viewing">Property Viewing</option>
                                                <option value="pricing">Pricing Information</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                                            placeholder="Tell us about what you're looking for..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        fullWidth
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="h-full min-h-[400px] lg:min-h-0 relative bg-gray-100">
                                {/* Map Placeholder with styled background */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-10 h-10 text-emerald-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Our Location
                                        </h3>
                                        <p className="text-gray-500 text-sm max-w-xs mx-auto mb-4">
                                            {SITE_CONFIG.contact.address}
                                        </p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>

                                {/* Decorative Map Grid */}
                                <div className="absolute inset-0 opacity-10" style={{
                                    backgroundImage: `
                    linear-gradient(to right, #059669 1px, transparent 1px),
                    linear-gradient(to bottom, #059669 1px, transparent 1px)
                  `,
                                    backgroundSize: '40px 40px',
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        title="Frequently Asked Questions"
                        highlight="Questions"
                        subtitle="FAQ"
                        className="mb-16"
                    />

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: 'What types of properties do you offer?',
                                answer: 'We offer a diverse range of properties including modern houses, luxury apartments, and exclusive villas across prime locations in Indonesia.',
                            },
                            {
                                question: 'How can I schedule a property viewing?',
                                answer: 'You can schedule a viewing by filling out the contact form above, calling us directly, or messaging us on WhatsApp. Our team will arrange a convenient time for you.',
                            },
                            {
                                question: 'Do you offer financing options?',
                                answer: 'Yes, we work with major banks to provide flexible KPR (home loan) options. We also offer in-house payment plans for select properties.',
                            },
                            {
                                question: 'What is included in the property price?',
                                answer: 'Our property prices typically include the land, building, basic finishing, and standard fixtures. Smart home features and premium upgrades may be available at additional cost.',
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors"
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
