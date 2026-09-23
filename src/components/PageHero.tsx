import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

interface Crumb { label: string; href?: string }

interface CardItem {
  label: string
  icon?: string
}

interface PageHeroCard {
  icon?: React.ReactNode
  title: string
  subtitle: string
  items: (CardItem | string)[]
  statNum?: string
  statLabel?: string
}

interface PageHeroProps {
  kicker: string
  title: string               // supports <br/> via dangerouslySetInnerHTML — pass plain string
  accentWords?: string        // last part of title rendered in blue
  description: string
  breadcrumbs: Crumb[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { num: string; label: string }[]
  accentColor?: string        // defaults to blue
  card?: PageHeroCard
}

export default function PageHero({
  kicker,
  title,
  accentWords,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  stats,
  card,
}: PageHeroProps) {
  return (
    <section className="ph-wrap" aria-label={kicker}>
      {/* geometric decoration — no image */}
      <div className="ph-geo ph-geo-1" aria-hidden="true" />
      <div className="ph-geo ph-geo-2" aria-hidden="true" />
      <div className="ph-geo ph-geo-3" aria-hidden="true" />
      <div className="ph-noise"        aria-hidden="true" />

      <div className="container ph-outer">
        <div className="ph-left">
          {/* breadcrumb */}
          <nav className="ph-bread" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((c, i) => (
                <li key={i} aria-current={i === breadcrumbs.length - 1 ? 'page' : undefined}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>

          {/* kicker pill */}
          <div className="ph-kicker">
            <span className="ph-kicker-dot" aria-hidden="true" />
            {kicker}
          </div>

          {/* headline */}
          <h1 className="ph-title">
            {accentWords
              ? <>{title} <span className="ph-accent">{accentWords}</span></>
              : title
            }
          </h1>

          {/* description */}
          <p className="ph-desc">{description}</p>

          {/* CTA buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="ph-actions">
              {primaryCta && (
                <Link href={primaryCta.href} className="ph-btn-primary">
                  {primaryCta.label}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="ph-btn-ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {/* optional stats row */}
          {stats && stats.length > 0 && (
            <div className="ph-stats">
              {stats.map((s, i) => (
                <div key={i} className="ph-stat">
                  <span className="ph-stat-num">{s.num}</span>
                  <span className="ph-stat-lbl">{s.label}</span>
                  {i < stats.length - 1 && <div className="ph-stat-div" aria-hidden="true" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side card */}
        {card && (
          <div className="ph-right">
            <div className="ph-card">
              <div className="ph-card-head">
                {card.icon && (
                  <div className="ph-card-icon">
                    {card.icon}
                  </div>
                )}
                <div>
                  <p className="ph-card-title">{card.title}</p>
                  <p className="ph-card-sub">{card.subtitle}</p>
                </div>
              </div>
              <div className="ph-card-items">
                {card.items.map((item, i) => {
                  const itemLabel = typeof item === 'string' ? item : item.label
                  return (
                    <div key={i} className="ph-card-item">
                      <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{itemLabel}</span>
                    </div>
                  )
                })}
              </div>
              {card.statNum && card.statLabel && (
                <div className="ph-card-stat">
                  <p className="ph-card-stat-num">{card.statNum}</p>
                  <p className="ph-card-stat-lbl">{card.statLabel}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
