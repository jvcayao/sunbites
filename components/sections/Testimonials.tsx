import * as React from "react";
import { SbEyebrow, SbHeart } from "@/components/primitives";

export const Testimonials = () => {
  return (
    <section id="parents" className="sb-section-pad" style={{
      background: 'var(--sb-cream-100)', position: 'relative', overflow: 'hidden',
    }}>
      <div className="sb-container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: 820, marginBottom: 48 }}>
          <SbEyebrow>From real parents, no edits</SbEyebrow>
          <h2 style={{ margin: '0 0 16px' }}>
            The thing we read every night before closing the kitchen.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: 680 }}>
            These are unedited Messenger threads from Sunbites parents. We kept the
            Taglish, the typos, and the hearts — because that's what trust sounds like.
          </p>
        </div>

        {/* Featured big quote */}
        <div style={{
          background: 'var(--sb-red-500)', color: '#FFFFFF',
          borderRadius: 24, padding: 'clamp(28px,5vw,56px) clamp(20px,4vw,48px)',
          border: '2.5px solid var(--sb-ink-900)',
          boxShadow: '10px 10px 0 var(--sb-yellow-300), 10px 10px 0 2.5px var(--sb-ink-900)',
          marginBottom: 48, position: 'relative', overflow: 'hidden',
        }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" style={{
            position: 'absolute', top: 20, left: 24, opacity: 0.2,
          }}>
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          <div style={{
            fontSize: 'clamp(20px, 3.4vw, 44px)', fontWeight: 800, lineHeight: 1.2,
            maxWidth: 1000, marginBottom: 24, position: 'relative', textWrap: 'balance',
          }}>
            "Yes po ma'am, nag gain weight po sya. ❤️ Mabigat at Malaman po sya now.
            Tamang balance po Ng food Yung nakukuha nya sa school meals po.
            It encouraged him to try more food at home din po."
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', flexWrap: 'wrap' }}>
            <div style={{
              width: 44, height: 44, borderRadius: 999, background: 'var(--sb-yellow-300)',
              border: '2.5px solid var(--sb-ink-900)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--sb-ink-900)',
            }}>L</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Lyn</div>
              <div style={{ fontSize: 12, opacity: 0.85, fontWeight: 600 }}>Mom of Ivan, Grade 3 · Sunbites parent since 2024</div>
            </div>
          </div>
        </div>

        {/* 3-up cards */}
        <div className="sb-testimonials-grid">
          {/* Card 1 */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--sb-yellow-300)', border: '2px solid var(--sb-ink-900)', display: 'grid', placeItems: 'center', fontWeight: 900, color: 'var(--sb-ink-900)', flexShrink: 0 }}>E</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>Em</div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)' }}>Mom · Grade 4</div>
              </div>
            </div>
            <div style={{ background: '#F0F2F5', padding: '12px 14px', borderRadius: '18px 18px 18px 4px', fontSize: 14, lineHeight: 1.45, color: 'var(--fg-1)', fontWeight: 500 }}>
              Thank you so much mam, for taking good care of our kids! We truly appreciate
              the heart you always put into preparing the delicious food. God bless always! 😊
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20,
          }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--fg-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, textAlign: 'center' }}>
              Jun 30 at 5:18 PM
            </div>
            <div style={{ background: '#0084FF', padding: '12px 14px', borderRadius: '18px 18px 4px 18px', fontSize: 14, lineHeight: 1.45, color: '#FFFFFF', fontWeight: 500, marginLeft: 20, marginBottom: 8 }}>
              Welcome po mommy! ❤️ Naubos po ba ni Z ung food nya? Para lang po masure ako kung gusto nya.
            </div>
            <div style={{ background: '#F0F2F5', padding: '12px 14px', borderRadius: '18px 18px 18px 4px', fontSize: 14, lineHeight: 1.45, color: 'var(--fg-1)', fontWeight: 500, marginRight: 20 }}>
              Thank you Ms. Jen!! Laking minus sa alalahanin namin talaga yung lunchtime nila. 😊
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20,
          }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--sb-red-500)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <SbHeart size={16} /> Parents sent flowers
            </div>
            <div style={{ background: '#F0F2F5', padding: '12px 14px', borderRadius: '18px 18px 18px 4px', fontSize: 13.5, lineHeight: 1.45, color: 'var(--fg-1)', fontWeight: 500, marginBottom: 10 }}>
              <em>"Ms. Nej, Thank you so much for the yummy foods, care and love."</em>
              <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 5 }}>— handwritten note from a parent</div>
            </div>
            <div style={{ background: '#0084FF', padding: '12px 14px', borderRadius: '18px 18px 4px 18px', fontSize: 14, lineHeight: 1.45, color: '#FFFFFF', fontWeight: 500 }}>
              Will always be grateful po for the trust you give to sunbites. We will continue to provide healthy meals for the kids! ❤️
            </div>
            <div style={{ fontFamily: 'var(--font-hand)', fontSize: 20, color: 'var(--sb-red-500)', marginTop: 10, textAlign: 'right', lineHeight: 1, transform: 'rotate(-3deg)' }}>
              — Ms. Nej, founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
