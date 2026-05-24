import * as React from "react";
import { SbEyebrow, SbHighlight, SbNoise } from "@/components/primitives";

export const Problem = () => {
  return (
    <section id="problem" className="sb-section-pad" style={{
      position: 'relative',
      background: 'var(--sb-ink-900)',
      color: '#FFFFFF',
      overflow: 'hidden',
    }}>
      <SbNoise opacity={0.12} />

      <div className="sb-container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: 820, marginBottom: 48 }}>
          <SbEyebrow color="var(--sb-yellow-300)">The truth about school canteens</SbEyebrow>
          <h2 style={{
            fontFamily: 'var(--font-body)', fontWeight: 900,
            fontSize: 'clamp(30px, 5vw, 64px)', lineHeight: 1.02,
            letterSpacing: '-0.02em', margin: '0 0 20px', color: '#FFFFFF',
            textWrap: 'balance',
          }}>
            What's <SbHighlight>actually</SbHighlight> in your kid's canteen right now?
          </h2>
          <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.78)', fontWeight: 500, maxWidth: 700 }}>
            We pulled the receipts. A study of three school canteens (DLSAU, Philippines)
            counted what kids were buying. The results aren't great.
          </p>
        </div>

        {/* Big stat row */}
        <div className="sb-problem-stat">
          {/* Stat */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 'clamp(80px, 20vw, 260px)', lineHeight: 0.9,
              color: 'var(--sb-yellow-300)',
              WebkitTextStroke: '3px var(--sb-ink-900)',
              textShadow: '6px 6px 0 var(--sb-red-500)',
              margin: '0 0 8px',
            }}>
              74%
            </div>
            <div style={{
              fontSize: 'clamp(16px, 2.2vw, 22px)', fontWeight: 800, color: '#FFFFFF',
              lineHeight: 1.3, marginBottom: 12, maxWidth: 460,
            }}>
              of food sold at school canteens is{' '}
              <span style={{ color: 'var(--sb-yellow-300)' }}>unhealthy</span>.
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
              Source: DLSAU canteen audit, three campuses, 2021
            </div>
          </div>

          {/* List */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '2px solid rgba(255,255,255,0.12)',
            borderRadius: 20, padding: 24,
          }}>
            <div style={{
              fontSize: 12, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--sb-yellow-300)', marginBottom: 16,
            }}>
              What kids are buying right now
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {['Candies','Chocolates','Curls & chips','Instant noodles','Soft drinks','Ice cream','Coffee','Packed cakes','Doughnuts'].map((item) => (
                <li key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 'clamp(14px, 1.8vw, 17px)', fontWeight: 600, color: 'rgba(255,255,255,0.92)',
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: 999,
                    background: 'var(--sb-red-500)',
                    display: 'grid', placeItems: 'center',
                    border: '2px solid var(--sb-ink-900)', flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" style={{ color: '#FFFFFF' }}>
                      <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
                    </svg>
                  </span>
                  <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,0.4)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* News + photo */}
        <div className="sb-grid-2">
          {/* Junk food photo */}
          <div style={{
            position: 'relative', borderRadius: 20, overflow: 'hidden',
            border: '4px solid var(--sb-yellow-300)',
            outline: '2.5px solid var(--sb-ink-900)',
            minHeight: 280, background: '#000',
          }}>
            <img src="/photo-junk-food.webp" alt="Junk food in school canteens" style={{
              width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '60px 20px 20px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
              color: '#FFFFFF',
            }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--sb-yellow-300)', marginBottom: 4 }}>
                Recess, 10:15 AM
              </div>
              <div style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 800, lineHeight: 1.2 }}>
                This is what an average peso buys in most school canteens.
              </div>
            </div>
          </div>

          {/* News clipping */}
          <div style={{
            background: '#FFFFFF', color: 'var(--fg-1)',
            borderRadius: 20, padding: 24,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '8px 8px 0 var(--sb-yellow-300)',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8, background: '#1877F2',
                display: 'grid', placeItems: 'center', color: '#FFFFFF',
                fontWeight: 900, fontSize: 20, fontFamily: 'Helvetica, Arial, sans-serif', flexShrink: 0,
              }}>f</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>Smart Parenting</div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)' }}>July 14 · Public</div>
              </div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>
              "Chronic Kidney Disease, or CKD, is on the rise among Filipino children,
              according to the Department of Health."
            </div>
            <div style={{
              borderRadius: 12, overflow: 'hidden',
              border: '1.5px solid var(--border-1)',
              aspectRatio: '16 / 9',
            }}>
              <img src="/news-ckd.webp" alt="News article on rising CKD in Filipino children"
                   style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              fontSize: 13, fontWeight: 800, color: 'var(--sb-red-600)',
              padding: '10px 12px', background: 'var(--sb-red-50)',
              borderRadius: 10, lineHeight: 1.4,
            }}>
              The food kids eat at 7 years old is the body they're carrying at 27.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Problem;
