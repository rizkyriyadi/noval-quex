import Image from 'next/image';
import { Target, Eye, Users, Award, Building2, Calendar, Linkedin, Mail } from 'lucide-react';
import { getTeamMembers } from '@/lib/api';
import { SITE_CONFIG } from '@/config/site';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
    title: 'About Us',
    description: 'Learn about AsriDev - A leading property developer creating exceptional living spaces.',
};

export default async function AboutPage() {
    const teamMembers = await getTeamMembers();

    const stats = [
        { icon: Building2, value: '50+', label: 'Projects Completed' },
        { icon: Users, value: '2,000+', label: 'Happy Families' },
        { icon: Calendar, value: '15+', label: 'Years Experience' },
        { icon: Award, value: '25+', label: 'Awards Won' },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                        alt="Modern architecture"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4 block">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                            Building Dreams,<br />
                            <span className="text-emerald-400">Creating Homes</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl">
                            {SITE_CONFIG.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white relative -mt-12 z-10">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-7 h-7 text-emerald-600" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                                    alt="Luxury modern home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                                <div className="text-4xl font-bold mb-1">15+</div>
                                <div className="text-emerald-100">Years of Excellence</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <SectionHeading
                                title="Our Story"
                                highlight="Story"
                                subtitle="Who We Are"
                                centered={false}
                                className="mb-8"
                            />
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2010, {SITE_CONFIG.name} has grown to become one of Indonesia&apos;s most
                                    trusted property developers. Our journey began with a simple vision: to create
                                    homes that inspire and elevate the lives of their residents.
                                </p>
                                <p>
                                    Over the years, we have developed over 50 residential projects across Java and
                                    Bali, from modern housing clusters to luxury villas and premium apartments. Each
                                    project reflects our commitment to quality, innovation, and customer satisfaction.
                                </p>
                                <p>
                                    Today, we continue to push the boundaries of residential development, incorporating
                                    smart home technology, sustainable practices, and world-class design into every
                                    property we build.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        title="Vision & Mission"
                        highlight="Vision"
                        subtitle="Our Purpose"
                        className="mb-16"
                    />

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be Indonesia&apos;s most trusted and innovative property developer, creating
                                sustainable communities where families can thrive and build lasting memories.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Mission</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                                    Deliver exceptional quality in every project we undertake
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                                    Embrace innovation and sustainable building practices
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                                    Provide transparent and customer-centric service
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                                    Create value for stakeholders and communities
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionHeading
                        title="Meet Our Team"
                        highlight="Team"
                        subtitle="Leadership"
                        className="mb-16"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className="group text-center"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative mb-6 overflow-hidden rounded-2xl">
                                    <div className="aspect-[3/4] relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Overlay with social links */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            {member.social?.linkedin && (
                                                <a
                                                    href={member.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.social?.email && (
                                                <a
                                                    href={`mailto:${member.social.email}`}
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-emerald-600 font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-emerald-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                        Ready to Find Your <span className="text-emerald-400">Dream Home</span>?
                    </h2>
                    <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
                        Let our team of experts guide you through our portfolio of premium properties
                        and help you find the perfect home for your family.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-white text-emerald-900 font-medium rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                        >
                            Contact Us Today
                        </a>
                        <a
                            href="/projects"
                            className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-emerald-900 transition-colors"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
