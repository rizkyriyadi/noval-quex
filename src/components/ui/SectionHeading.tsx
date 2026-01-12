interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    highlight?: string;
    centered?: boolean;
    className?: string;
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    highlight,
    centered = true,
    className = '',
    light = false,
}: SectionHeadingProps) {
    return (
        <div className={`${centered ? 'text-center' : ''} ${className}`}>
            {subtitle && (
                <span className={`text-sm font-medium tracking-widest uppercase mb-3 block ${light ? 'text-emerald-400' : 'text-emerald-600'
                    }`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight ${light ? 'text-white' : 'text-gray-900'
                }`}>
                {title.split(highlight || '').map((part, index, array) => (
                    <span key={index}>
                        {part}
                        {index < array.length - 1 && (
                            <span className="text-emerald-600">{highlight}</span>
                        )}
                    </span>
                ))}
            </h2>
        </div>
    );
}
