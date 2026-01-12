import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, MapPin, Palette, TrendingUp, ChevronRight, Play } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { getFeaturedProperties } from '@/lib/api';
import PropertyCard from '@/components/ui/PropertyCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Icon mapping for features
const iconMap: { [key: string]: React.ElementType } = {
  Shield,
  MapPin,
  Palette,
  TrendingUp,
};

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Luxury modern home interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Premium Property Developer
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in delay-100">
              {SITE_CONFIG.hero.title}{' '}
              <span className="text-emerald-400">{SITE_CONFIG.hero.highlight}</span>{' '}
              <span className="block">{SITE_CONFIG.hero.subtitle}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 animate-fade-in delay-200">
              {SITE_CONFIG.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
              <Button href="/projects" size="lg">
                {SITE_CONFIG.hero.ctaText}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-in delay-400">
              <div>
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">2000+</div>
                <div className="text-white/60 text-sm">Happy Families</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              title="Featured Projects"
              highlight="Featured"
              subtitle="Our Best Properties"
              centered={false}
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-3 transition-all group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Why Choose Us?"
            highlight="Choose"
            subtitle="Our Advantages"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONFIG.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div
                  key={feature.id}
                  className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                    <IconComponent className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Modern house exterior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                {SITE_CONFIG.cta.title}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                {SITE_CONFIG.cta.subtitle}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                {SITE_CONFIG.cta.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8">
                {SITE_CONFIG.cta.features.map((feature, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Button href={SITE_CONFIG.cta.ctaLink} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 shadow-yellow-500/25">
                {SITE_CONFIG.cta.ctaText}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Right - Stats Card */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white mb-8">
                  <div className="text-6xl font-serif font-bold text-yellow-400 mb-2">7</div>
                  <div className="text-xl">Juta / Bulan</div>
                  <div className="text-white/60 text-sm mt-2">Mulai dari cicilan</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <span>Free Biaya Booking</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <span>Free DP 0%</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <span>Free Smart Home System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            highlight="Clients"
            subtitle="Testimonials"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Budi Santoso',
                role: 'Business Owner',
                content: 'AsriDev exceeded our expectations. The quality of construction and attention to detail is remarkable.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
              },
              {
                name: 'Sarah Wijaya',
                role: 'Doctor',
                content: 'Professional service from start to finish. The team was responsive and helpful throughout.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
              },
              {
                name: 'Ahmad Rahman',
                role: 'IT Director',
                content: 'Invested in Green Valley Residence and couldn\'t be happier. Top-notch build quality.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Find Your Dream Home?"
            highlight="Dream Home"
            subtitle="Get Started Today"
            className="mb-8"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our team of experts today and let us help you find the perfect property
            that matches your lifestyle and investment goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`} variant="outline" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
