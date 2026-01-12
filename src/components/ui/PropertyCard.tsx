import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Ruler } from 'lucide-react';
import { Property } from '@/types';

interface PropertyCardProps {
    property: Property;
    className?: string;
}

export default function PropertyCard({ property, className = '' }: PropertyCardProps) {
    const formatPrice = (price: number) => {
        if (price >= 1000000000) {
            return `Rp ${(price / 1000000000).toFixed(1)} M`;
        }
        return `Rp ${(price / 1000000).toFixed(0)} Jt`;
    };

    return (
        <Link
            href={`/projects/${property.slug}`}
            className={`group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold rounded-full capitalize">
                        {property.type}
                    </span>
                </div>

                {/* Featured Badge */}
                {property.featured && (
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                            Featured
                        </span>
                    </div>
                )}

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-emerald-600 text-white text-lg font-bold rounded-lg shadow-lg">
                        {formatPrice(property.price)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                </h3>

                <div className="flex items-center gap-1 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{property.location}</span>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-600">{property.area} m²</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
