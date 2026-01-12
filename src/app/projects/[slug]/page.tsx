import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bed, Bath, Square, MapPin, Home, Star, Check, Phone, MessageCircle } from 'lucide-react';
import { getPropertyBySlug, getProperties } from '@/lib/api';
import { SITE_CONFIG } from '@/config/site';
import Button from '@/components/ui/Button';

// Force dynamic rendering to fetch fresh data from Firestore
export const dynamic = 'force-dynamic';

interface PropertyPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
    const { slug } = await params;
    const property = await getPropertyBySlug(slug);

    if (!property) {
        notFound();
    }

    const formatPrice = (price: number) => {
        if (price >= 1000000000) {
            return `Rp ${(price / 1000000000).toFixed(1)} Miliar`;
        }
        return `Rp ${(price / 1000000).toFixed(0)} Juta`;
    };

    return (
        <div className="pt-20">
            {/* Back Navigation */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 lg:px-8 py-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Projects
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <section className="relative h-[50vh] lg:h-[60vh]">
                {property.image ? (
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <Home className="w-20 h-20 text-gray-400" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Property Type Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-full capitalize">
                        {property.type}
                    </span>
                    {property.featured && (
                        <span className="ml-2 px-4 py-2 bg-yellow-500 text-yellow-900 text-sm font-semibold rounded-full inline-flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            Featured
                        </span>
                    )}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="container mx-auto">
                        <h1 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-2">
                            {property.title}
                        </h1>
                        <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="w-5 h-5" />
                            <span>{property.location}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Price & Specs */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                                    <div>
                                        <p className="text-gray-500 text-sm">Price</p>
                                        <p className="text-3xl font-bold text-emerald-600">
                                            {formatPrice(property.price)}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-6 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Bed className="w-5 h-5 text-emerald-600" />
                                            <span className="font-semibold">{property.bedrooms}</span>
                                            <span className="text-sm">Beds</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Bath className="w-5 h-5 text-emerald-600" />
                                            <span className="font-semibold">{property.bathrooms}</span>
                                            <span className="text-sm">Baths</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Square className="w-5 h-5 text-emerald-600" />
                                            <span className="font-semibold">{property.area}</span>
                                            <span className="text-sm">m²</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                    Description
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {property.description || 'No description available.'}
                                </p>
                            </div>

                            {/* Amenities */}
                            {property.amenities && property.amenities.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                        Amenities
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {property.amenities.map((amenity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-gray-600"
                                            >
                                                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Gallery */}
                            {property.images && property.images.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                        Gallery
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {property.images.map((image, index) => (
                                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`${property.title} - Image ${index + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Contact Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Interested in this property?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Contact our sales team for more information or to schedule a viewing.
                                </p>

                                <div className="space-y-3">
                                    <Button
                                        href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in ${property.title}`}
                                        className="w-full justify-center"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </Button>
                                    <Button
                                        href={`tel:${SITE_CONFIG.contact.phone}`}
                                        variant="outline"
                                        className="w-full justify-center"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </Button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 mb-2">Sales Office Hours:</p>
                                    <p className="text-sm text-gray-700">Mon - Sat: 09:00 - 17:00</p>
                                    <p className="text-sm text-gray-700">Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
