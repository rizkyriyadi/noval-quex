'use client';

import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react';
import { Property } from '@/types';
import { properties } from '@/lib/mockData';
import PropertyCard from '@/components/ui/PropertyCard';
import SectionHeading from '@/components/ui/SectionHeading';

type PropertyType = 'all' | 'house' | 'apartment' | 'villa';
type ViewMode = 'grid' | 'list';

const filterTabs: { value: PropertyType; label: string }[] = [
    { value: 'all', label: 'All Properties' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<PropertyType>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

    useEffect(() => {
        let result = properties;

        // Filter by type
        if (activeFilter !== 'all') {
            result = result.filter((p) => p.type === activeFilter);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.location.toLowerCase().includes(query)
            );
        }

        setFilteredProperties(result);
    }, [activeFilter, searchQuery]);

    const formatPrice = (price: number) => {
        if (price >= 1000000000) {
            return `Rp ${(price / 1000000000).toFixed(1)} Miliar`;
        }
        return `Rp ${(price / 1000000).toFixed(0)} Juta`;
    };

    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-700">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <SectionHeading
                        title="Our Projects"
                        highlight="Projects"
                        subtitle="Discover Your Future Home"
                        light
                    />
                    <p className="text-emerald-100 max-w-2xl mx-auto mt-6">
                        Explore our collection of premium properties ranging from modern houses
                        to luxurious villas across the best locations in Indonesia.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {filterTabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveFilter(tab.value)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === tab.value
                                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Search & View Toggle */}
                        <div className="flex items-center gap-4">
                            {/* Search Input */}
                            <div className="relative flex-1 lg:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search properties..."
                                    className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-full text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                                />
                            </div>

                            {/* View Mode Toggle */}
                            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-full transition-all ${viewMode === 'grid'
                                            ? 'bg-white shadow text-emerald-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    aria-label="Grid view"
                                >
                                    <Grid3X3 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-full transition-all ${viewMode === 'list'
                                            ? 'bg-white shadow text-emerald-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    aria-label="List view"
                                >
                                    <LayoutList className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Advanced Filters */}
                            <button className="p-2.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                                <SlidersHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Results Count */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties
                        </p>
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500">
                            <option>Sort by: Newest</option>
                            <option>Sort by: Price (Low to High)</option>
                            <option>Sort by: Price (High to Low)</option>
                        </select>
                    </div>

                    {/* Properties */}
                    {filteredProperties.length > 0 ? (
                        <div
                            className={
                                viewMode === 'grid'
                                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                    : 'space-y-6'
                            }
                        >
                            {filteredProperties.map((property, index) => (
                                <div
                                    key={property.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {viewMode === 'grid' ? (
                                        <PropertyCard property={property} />
                                    ) : (
                                        // List View Card
                                        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="relative w-full md:w-80 h-64 md:h-auto">
                                                <img
                                                    src={property.image}
                                                    alt={property.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold rounded-full capitalize">
                                                        {property.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-1 p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                                                            {property.title}
                                                        </h3>
                                                        <p className="text-gray-500">{property.location}</p>
                                                    </div>
                                                    <span className="text-xl font-bold text-emerald-600">
                                                        {formatPrice(property.price)}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 mb-4 line-clamp-2">
                                                    {property.description}
                                                </p>
                                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                                    <span>{property.bedrooms} Beds</span>
                                                    <span>{property.bathrooms} Baths</span>
                                                    <span>{property.area} m²</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No properties found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
