import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getNews } from '@/lib/api';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
    title: 'News & Events',
    description: 'Stay updated with the latest news, events, and insights from AsriDev.',
};

export default async function NewsPage() {
    const news = await getNews();

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <SectionHeading
                        title="News & Events"
                        highlight="News"
                        subtitle="Latest Updates"
                        light
                    />
                    <p className="text-emerald-100 max-w-2xl mx-auto mt-6">
                        Stay informed about our latest projects, events, and industry insights.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid gap-8">
                        {/* Featured Article */}
                        {news[0] && (
                            <Link
                                href={`/news/${news[0].slug}`}
                                className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64 lg:h-full min-h-[300px]">
                                    <Image
                                        src={news[0].image}
                                        alt={news[0].title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                                            {news[0].category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(news[0].publishedAt).toLocaleDateString('id-ID', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {news[0].author}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                        {news[0].title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {news[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                                        Read More
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Other Articles */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {news.slice(1).map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/news/${article.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
