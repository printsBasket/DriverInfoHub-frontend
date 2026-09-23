import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href?: string }[];
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, breadcrumbs, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 border-b border-slate-200">
      {/* Background gradients */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 text-center">
        {breadcrumbs && (
          <nav className="mb-8 flex justify-center text-sm font-medium text-slate-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-blue-600">{crumb.name}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
          {title}
        </h1>
        {subtitle && <p className="mx-auto max-w-3xl text-lg sm:text-xl leading-8 text-slate-600 mb-6">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
