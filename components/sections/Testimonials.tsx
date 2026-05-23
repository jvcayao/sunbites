import * as React from "react";
import { SbEyebrow, SbHeart } from "@/components/primitives";

// Testimonials section — real parent messages, kept in Taglish
export const Testimonials = () => {
  return (
    <section id="parents" style={{
      background: 'var(--sb-cream-100)',
      padding: '120px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 820, marginBottom: 56 }}>
          <SbEyebrow>From real parents, no edits</SbEyebrow>
          <h2 style={{ margin: '0 0 20px' }}>
            The thing we read every night before closing the kitchen.
          </h2>
          <p style={{ fontSize: 19, maxWidth: 680 }}>
            These are unedited Messenger threads from Sunbites parents. We kept the
            Taglish, the typos, and the hearts — because that's what trust sounds like.
          </p>
        </div>

        {/* Featured big quote */}
        <div style={{
          background: 'var(--sb-red-500)', color: '#FFFFFF',
          borderRadius: 28, padding: '56px 48px',
          border: '2.5px solid var(--sb-ink-900)',
          boxShadow: '10px 10px 0 var(--sb-yellow-300), 10px 10px 0 2.5px var(--sb-ink-900)',
          marginBottom: 64, position: 'relative', overflow: 'hidden',
        }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" style={{
            position: 'absolute', top: 24, left: 32, opacity: 0.2,
          }}>
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          <div style={{
            fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 800, lineHeight: 1.2,
            maxWidth: 1000, marginBottom: 28, position: 'relative', textWrap: 'balance',
          }}>
            "Yes po ma'am, nag gain weight po sya. ❤️ Mabigat at Malaman po sya now.
            Tamang balance po Ng food Yung nakukuha nya sa school meals po.
            It encouraged him to try more food at home din po."
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 999, background: 'var(--sb-yellow-300)',
              border: '2.5px solid var(--sb-ink-900)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--sb-ink-900)',
            }}>L</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Lyn</div>
              <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 600 }}>Mom of Ivan, Grade 3 · Sunbites parent since 2024</div>
            </div>
          </div>
        </div>

        {/* 3-up phone screenshot frames */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 32, alignItems: 'flex-start',
        }}>
          {/* Card 1 — Messenger style */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20, transform: 'rotate(-1.5deg)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999, background: 'var(--sb-yellow-300)',
                border: '2px solid var(--sb-ink-900)', display: 'grid', placeItems: 'center',
                fontWeight: 900, color: 'var(--sb-ink-900)',
              }}>E</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>Em</div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)' }}>Mom · Grade 4</div>
              </div>
            </div>
            <div style={{
              background: '#F0F2F5', padding: '12px 14px',
              borderRadius: '18px 18px 18px 4px',
              fontSize: 14.5, lineHeight: 1.45, color: 'var(--fg-1)',
              fontWeight: 500,
            }}>
              Thank you so much mam, for taking good care of our kids! We truly appreciate
              the heart you always put into preparing the delicious food. God bless always! 😊
            </div>
          </div>

          {/* Card 2 — iMessage blue style */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20, transform: 'rotate(1deg)', marginTop: 12,
          }}>
            <div style={{
              fontSize: 11, fontWeight: 800, color: 'var(--fg-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10,
              textAlign: 'center',
            }}>
              Jun 30 at 5:18 PM
            </div>
            <div style={{
              background: '#0084FF', padding: '12px 14px',
              borderRadius: '18px 18px 4px 18px',
              fontSize: 14.5, lineHeight: 1.45, color: '#FFFFFF',
              fontWeight: 500, marginLeft: 24, marginBottom: 8,
              alignSelf: 'flex-end',
            }}>
              Welcome po mommy! ❤️ Naubos po ba ni Z ung food nya?
              Para lang po masure ako kung gusto nya.
            </div>
            <div style={{
              background: '#F0F2F5', padding: '12px 14px',
              borderRadius: '18px 18px 18px 4px',
              fontSize: 14.5, lineHeight: 1.45, color: 'var(--fg-1)',
              fontWeight: 500, marginRight: 24,
            }}>
              Thank you Ms. Jen!! Appreciate din po your help with the kids!
              Laking minus sa alalahanin namin talaga yung lunchtime nila. 😊
            </div>
          </div>

          {/* Card 3 — bouquet/gift photo */}
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 20, transform: 'rotate(-0.5deg)',
          }}>
            <div style={{
              fontSize: 13, fontWeight: 800, color: 'var(--sb-red-500)',
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <SbHeart size={16} /> Parents sent flowers
            </div>
            <div style={{
              background: '#F0F2F5', padding: '12px 14px',
              borderRadius: '18px 18px 18px 4px',
              fontSize: 14, lineHeight: 1.45, color: 'var(--fg-1)',
              fontWeight: 500, marginBottom: 10,
            }}>
              <em>"Ms. Nej, Thank you so much for the yummy foods, care and love."</em>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 6 }}>
                — handwritten note from a parent
              </div>
            </div>
            <div style={{
              background: '#0084FF', padding: '12px 14px',
              borderRadius: '18px 18px 4px 18px',
              fontSize: 14.5, lineHeight: 1.45, color: '#FFFFFF',
              fontWeight: 500,
            }}>
              Will always be grateful po for the trust you give to sunbites.
              We will continue to provide healthy meals for the kids! ❤️
            </div>
            <div style={{
              fontFamily: 'var(--font-hand)', fontSize: 22,
              color: 'var(--sb-red-500)', marginTop: 12, textAlign: 'right',
              lineHeight: 1, transform: 'rotate(-3deg)',
            }}>
              — Ms. Nej, founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
