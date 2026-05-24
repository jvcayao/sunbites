import * as React from "react";
import { SbEyebrow, SbHighlight } from "@/components/primitives";

export const Solution = () => {
  const steps = [
    {
      n: '01', title: 'A school partners with Sunbites',
      body: "We meet your admin and parents, plan a 4-week rotating menu, and set up the counter — the way we did at our Antipolo and Iloilo integrated-school branches.",
      tint: 'var(--sb-yellow-300)',
    },
    {
      n: '02', title: 'We cook fresh, every single morning',
      body: 'Rice, ulam, vegetables, fresh fruit, bottled water. Real cooking, in a real kitchen. No reheated factory food.',
      tint: 'var(--sb-green-400)',
    },
    {
      n: '03', title: 'Kids eat — and finish — their lunch',
      body: "Tray-served, kid-portioned, kid-priced. Parents get a daily Messenger update with a photo of their kid's tray.",
      tint: 'var(--sb-red-500)',
    },
  ];

  return (
    <section id="solution" className="sb-section-pad" style={{
      background: 'var(--sb-cream-100)', position: 'relative', overflow: 'hidden',
    }}>
      <div className="sb-container">
        <div style={{ maxWidth: 820, marginBottom: 48 }}>
          <SbEyebrow>The Sunbites swap</SbEyebrow>
          <h2 style={{ margin: '0 0 16px' }}>
            We replace the snack rack with a <SbHighlight color="var(--sb-green-200)">real kitchen</SbHighlight>.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: 680 }}>
            Same hour. Same canteen. Same peso. We just changed what gets handed across
            the counter — and the difference shows up at the dinner table.
          </p>
        </div>

        {/* Before / After */}
        <div className="sb-before-after">
          {/* BEFORE */}
          <div style={{
            background: 'var(--sb-ink-900)', color: '#FFFFFF',
            borderRadius: 24, padding: 28,
            border: '2.5px solid var(--sb-ink-900)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -16, left: 24,
              background: 'var(--sb-ink-900)', color: '#FFFFFF',
              border: '2.5px solid var(--sb-ink-900)',
              padding: '6px 14px', borderRadius: 999,
              fontWeight: 900, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Before</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, marginTop: 8 }}>
              The typical school canteen
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {['Chips, chocolates, instant noodles','Soft drinks and sugary juices','Recess sugar crash by 11am','Kids skip lunch, fill up on candy','Parents have no idea what they ate'].map((s, i) => (
                <li key={i} style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
                    display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.45 }}>
                  <span style={{ color: 'var(--sb-red-300)', fontWeight: 900, fontSize: 16, lineHeight: 1.5 }}>✕</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ARROW */}
          <div className="sb-ba-arrow">
            <div className="sb-ba-arrow-icon" style={{
              display: 'grid', placeItems: 'center',
              background: 'var(--sb-yellow-300)',
              border: '2.5px solid var(--sb-ink-900)',
              borderRadius: 999, width: 64, height: 64,
              boxShadow: '4px 4px 0 var(--sb-ink-900)',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sb-ink-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* AFTER */}
          <div style={{
            background: '#FFFFFF', borderRadius: 24, padding: 28,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '8px 8px 0 var(--sb-green-400)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -16, left: 24,
              background: 'var(--sb-green-400)', color: '#FFFFFF',
              border: '2.5px solid var(--sb-ink-900)',
              padding: '6px 14px', borderRadius: 999,
              fontWeight: 900, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>After Sunbites</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, marginTop: 8 }}>
              A real kitchen on campus
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {['Rice meals, ulam, vegetables, fresh fruit','Bottled water and natural drinks','Steady energy through afternoon class','Trays come back empty — naubos po!',"Daily photo update of your kid's lunch"].map((s, i) => (
                <li key={i} style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)',
                    display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.45 }}>
                  <span style={{
                    color: '#FFFFFF', background: 'var(--sb-green-400)',
                    fontWeight: 900, width: 18, height: 18, borderRadius: 999,
                    display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2,
                    border: '1.5px solid var(--sb-ink-900)',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3 steps */}
        <div style={{ marginBottom: 24 }}>
          <SbEyebrow>How it works</SbEyebrow>
          <h2 style={{ margin: '0 0 12px' }}>Three steps. Zero drama.</h2>
        </div>

        <div className="sb-grid-3">
          {steps.map((s, i) => (
            <div key={i} style={{
              background: '#FFFFFF', borderRadius: 20, padding: 24,
              border: '2.5px solid var(--sb-ink-900)',
              boxShadow: '6px 6px 0 var(--sb-ink-900)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -24, right: 16,
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 72, lineHeight: 1, color: s.tint,
                WebkitTextStroke: '2.5px var(--sb-ink-900)',
              }}>{s.n}</div>
              <h3 style={{ fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: 800, margin: '28px 0 10px',
                  lineHeight: 1.2, color: 'var(--fg-1)', textWrap: 'balance' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--fg-2)', margin: 0, lineHeight: 1.55 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Solution;
