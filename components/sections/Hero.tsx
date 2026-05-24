import * as React from "react";
import { SbButton, SbBadge, SbNoise, SbHeart } from "@/components/primitives";

export const Hero = () => {
  return (
    <section id="top" className="sb-hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <SbNoise opacity={0.05} />

      {/* Background sunburst */}
      <svg viewBox="0 0 200 200" aria-hidden="true" style={{
        position: 'absolute', top: -90, right: -90, width: 480, height: 480,
        opacity: 0.6, zIndex: 0, pointerEvents: 'none',
      }}>
        <g fill="var(--sb-yellow-200)">
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x="98" y="0" width="4" height="80"
              transform={`rotate(${i * 30} 100 100)`} />
          ))}
        </g>
      </svg>

      <div className="sb-hero-grid">
        {/* LEFT — copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <SbBadge color="yellow">🇵🇭 A real kitchen, not a vending machine</SbBadge>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 900,
            fontSize: 'clamp(40px, 6.5vw, 88px)',
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
            color: 'var(--fg-1)',
            margin: '0 0 24px',
            textWrap: 'balance',
          }}>
            Healthy meals your kids will{' '}
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              color: 'var(--sb-red-500)',
              WebkitTextStroke: '2px var(--sb-ink-900)',
              display: 'inline-block',
              transform: 'rotate(-2deg)',
            }}>actually</span>{' '}
            finish.
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.5, color: 'var(--fg-2)',
            maxWidth: 560, margin: '0 0 32px', fontWeight: 500,
          }}>
            Sunbites is a school canteen that swaps chips and instant noodles for{' '}
            <strong style={{ color: 'var(--fg-1)' }}>rice meals, fresh fruit, and real veggies</strong>{' '}
            — cooked fresh every morning, served by people who know your kid's name.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 28 }}>
            <SbButton variant="primary" size="lg" href="#cta">
              Bring Sunbites to your school
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </SbButton>
            <SbButton variant="ghost" size="lg" href="#menu">
              See this week's menu
            </SbButton>
          </div>

          {/* Mini trust strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              {['#FFD23F', '#3FAA4B', '#E5322A', '#FFD23F'].map((c, i) => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: 999,
                  background: c, border: '2.5px solid var(--sb-ink-900)',
                  marginLeft: i === 0 ? 0 : -10,
                  display: 'grid', placeItems: 'center',
                  fontWeight: 900, fontSize: 13, color: i === 2 ? '#fff' : 'var(--sb-ink-900)',
                }}>{['N','A','M','J'][i]}</div>
              ))}
            </div>
            <div style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 600, lineHeight: 1.3 }}>
              Trusted by <strong style={{ color: 'var(--fg-1)' }}>200+ Filipino families</strong><br />
              at our Antipolo &amp; Iloilo integrated-school branches
            </div>
          </div>
        </div>

        {/* RIGHT — photo collage */}
        <div className="sb-hero-img">
          {/* Main photo */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '92%', height: '68%',
            minHeight: 220,
            borderRadius: 24, overflow: 'hidden',
            border: '5px solid var(--sb-yellow-300)',
            outline: '2.5px solid var(--sb-ink-900)',
            boxShadow: '8px 8px 0 var(--sb-ink-900)',
            transform: 'rotate(2deg)',
            background: '#000',
          }}>
            <img src="/photo-sunbites-counter.webp" alt="Sunbites counter at school" style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }} />
          </div>

          {/* Secondary photo */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: '48%', height: '42%',
            minHeight: 140,
            borderRadius: 18, overflow: 'hidden',
            border: '4px solid #FFFFFF',
            outline: '2.5px solid var(--sb-ink-900)',
            boxShadow: '5px 5px 0 var(--sb-ink-900)',
            transform: 'rotate(-4deg)',
            zIndex: 2,
          }}>
            <img src="/photo-students-lunch.webp" alt="Students eating Sunbites meals" style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }} />
          </div>

          {/* Sticker */}
          <div style={{
            position: 'absolute', bottom: '12%', right: 0, zIndex: 3,
            background: '#FFFFFF',
            border: '2.5px solid var(--sb-ink-900)',
            borderRadius: 18,
            boxShadow: '5px 5px 0 var(--sb-ink-900)',
            padding: '12px 16px',
            transform: 'rotate(6deg)',
            maxWidth: 200,
          }}>
            <div style={{
              fontFamily: 'var(--font-hand)', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 700,
              color: 'var(--sb-red-500)', lineHeight: 1.05,
            }}>
              "Naubos po niya — masarap daw!"
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--fg-3)', marginTop: 6 }}>
              — Em, mom of Ivan, Grade 4
            </div>
          </div>

          {/* Floating hearts */}
          <SbHeart size={28} style={{
            position: 'absolute', top: 28, left: 8, zIndex: 4,
            animation: 'sb-float 3.2s ease-in-out infinite',
            filter: 'drop-shadow(2px 2px 0 var(--sb-ink-900))',
          }} />
          <SbHeart size={20} style={{
            position: 'absolute', top: 88, left: -8, zIndex: 4,
            animation: 'sb-float 3.6s ease-in-out infinite 0.3s',
            filter: 'drop-shadow(2px 2px 0 var(--sb-ink-900))',
          }} />
          <SbHeart size={16} style={{
            position: 'absolute', top: 180, right: 12, zIndex: 4,
            animation: 'sb-float 4s ease-in-out infinite 0.6s',
            filter: 'drop-shadow(2px 2px 0 var(--sb-ink-900))',
          }} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
