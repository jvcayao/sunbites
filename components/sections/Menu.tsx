import * as React from "react";
import { SbBadge, SbEyebrow, SbNoise } from "@/components/primitives";

export const Menu = () => {
  const days = [
    { day: 'Mon', label: 'Monday', meal: 'Chicken adobo, rice, kalabasa', tag: 'Protein day', tagColor: 'var(--sb-red-500)', price: '₱135', emoji: '🍛' },
    { day: 'Tue', label: 'Tuesday', meal: 'Beef giniling, rice, fresh mango', tag: 'Iron-rich', tagColor: 'var(--sb-yellow-400)', price: '₱135', emoji: '🥭' },
    { day: 'Wed', label: 'Wednesday', meal: 'Fish fillet, rice, sayote + carrots', tag: 'Veggie day', tagColor: 'var(--sb-green-400)', price: '₱135', emoji: '🥬' },
    { day: 'Thu', label: 'Thursday', meal: 'Pork menudo, rice, banana', tag: 'Comfort meal', tagColor: 'var(--sb-red-500)', price: '₱135', emoji: '🍚' },
    { day: 'Fri', label: 'Friday', meal: 'Pancit canton, sliced pineapple', tag: 'Fun Friday', tagColor: 'var(--sb-yellow-400)', price: '₱135', emoji: '🍜' },
  ];

  return (
    <section id="menu" className="sb-section-pad" style={{
      background: 'var(--sb-yellow-300)',
      position: 'relative', overflow: 'hidden',
      borderTop: '2.5px solid var(--sb-ink-900)',
      borderBottom: '2.5px solid var(--sb-ink-900)',
    }}>
      <SbNoise opacity={0.06} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.18,
        backgroundImage: 'radial-gradient(var(--sb-ink-900) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px', pointerEvents: 'none',
      }} />

      <div className="sb-container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40,
        }}>
          <div style={{ maxWidth: 700 }}>
            <SbEyebrow color="var(--sb-red-600)">This week at Sunbites</SbEyebrow>
            <h2 style={{ margin: '0 0 14px' }}>
              A week of real meals — just{' '}
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                color: 'var(--sb-red-500)',
                WebkitTextStroke: '2px var(--sb-ink-900)',
                display: 'inline-block', transform: 'rotate(-3deg)',
              }}>135</span>{' '}
              pesos a tray.
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', color: 'var(--fg-1)', fontWeight: 500, maxWidth: 600 }}>
              A 4-week rotating menu, planned with a registered nutritionist.
              Allergies and halal options handled on enrollment.
            </p>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#FFFFFF', padding: '10px 14px',
            border: '2.5px solid var(--sb-ink-900)', borderRadius: 999,
            fontWeight: 800, fontSize: 13,
          }}>
            <span style={{
              width: 10, height: 10, borderRadius: 999, background: 'var(--sb-green-400)',
              boxShadow: '0 0 0 4px rgba(63, 170, 75, 0.25)', flexShrink: 0,
            }} />
            Updated every Sunday at Parent's Portal
          </div>
        </div>

        {/* Menu day cards */}
        <div className="sb-menu-days">
          {days.map((d, i) => (
            <div key={i} style={{
              background: '#FFFFFF', borderRadius: 16,
              border: '2.5px solid var(--sb-ink-900)',
              boxShadow: '4px 4px 0 var(--sb-ink-900)',
              padding: 16, display: 'flex', flexDirection: 'column', gap: 10,
              minHeight: 240,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, color: 'var(--fg-1)', lineHeight: 1 }}>{d.day}</div>
              <div style={{ fontSize: 48, lineHeight: 1, margin: '2px 0 4px' }}>{d.emoji}</div>
              <div style={{
                display: 'inline-block', alignSelf: 'flex-start',
                background: d.tagColor, color: '#FFFFFF',
                border: '2px solid var(--sb-ink-900)',
                padding: '3px 8px', borderRadius: 999,
                fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{d.tag}</div>
              <div style={{ fontWeight: 800, fontSize: 13, color: 'var(--fg-1)', lineHeight: 1.3, flex: 1 }}>{d.meal}</div>
              <div style={{
                paddingTop: 8, borderTop: '1.5px dashed var(--border-1)',
                fontWeight: 900, fontSize: 16, color: 'var(--fg-1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{d.price}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--fg-3)', textTransform: 'uppercase' }}>per tray</span>
              </div>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div style={{ marginTop: 48 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: 12, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--sb-red-600)', marginBottom: 10,
            }}>Two ways to eat at Sunbites</div>
            <h3 style={{
              fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0,
              color: 'var(--fg-1)', textWrap: 'balance',
            }}>
              Same food. Same ₱135.{' '}
              <em style={{
                fontStyle: 'normal',
                background: '#fff', padding: '0 0.18em', borderRadius: 8,
                border: '2px solid var(--sb-ink-900)',
                display: 'inline-block', transform: 'rotate(-1deg)',
              }}>Pick how you pay.</em>
            </h3>
          </div>

          <div className="sb-grid-2">
            {/* SUBSCRIPTION PLAN */}
            <div style={{
              background: '#FFFFFF', borderRadius: 22,
              border: '2.5px solid var(--sb-ink-900)',
              borderLeft: '8px solid var(--sb-red-500)',
              boxShadow: '6px 6px 0 var(--sb-ink-900)',
              padding: 24, position: 'relative',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                position: 'absolute', top: -14, right: 16,
                background: 'var(--sb-red-500)', color: '#fff',
                border: '2.5px solid var(--sb-ink-900)', borderRadius: 999, padding: '4px 12px',
                fontSize: 10, fontWeight: 900, letterSpacing: '0.08em',
                textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>📋 Most popular</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: 20, fontWeight: 900, margin: 0, color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>Subscription Plan</h4>
                <span style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 600 }}>for daily eaters</span>
              </div>

              <div style={{ background: 'var(--sb-red-50)', padding: '12px 14px', border: '1.5px solid var(--sb-red-200)', borderRadius: 12, marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1, color: 'var(--sb-red-500)', WebkitTextStroke: '1.5px var(--sb-ink-900)' }}>₱945–₱2,970</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-2)', fontWeight: 600, lineHeight: 1.2 }}>/month</div>
                </div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)', fontWeight: 600, marginTop: 4, lineHeight: 1.35 }}>Varies by school days (₱135 × 7–22 days). See breakdown below.</div>
              </div>

              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--sb-red-600)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>How it works</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                  {['Pre-pay the month before it starts (Cash, GCash, or Bank)','Your kid scans their QR at the counter, every school day','Their tray is already paid — no balance to worry about'].map((s, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.45 }}>
                      <span style={{ width: 16, height: 16, borderRadius: 999, background: 'var(--sb-red-500)', color: '#fff', fontWeight: 900, fontSize: 10, flexShrink: 0, marginTop: 1, display: 'grid', placeItems: 'center', border: '1.5px solid var(--sb-ink-900)' }}>{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'grid', gap: 6 }}>
                {['One predictable bill, paid 10 months a year (Jun – Mar)','Pay by Cash, GCash, or Bank Transfer','Track paid / unpaid months in the parent portal','14-day reminder banner before the next month is due','Wallet still works — use it for snacks, drinks, extras','₱300 emergency credit if the wallet runs short'].map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}
                      dangerouslySetInnerHTML={{ __html: `<span style="width:16px;height:16px;border-radius:999px;background:var(--sb-red-500);color:#fff;flex-shrink:0;margin-top:2px;display:grid;place-items:center;border:1.5px solid var(--sb-ink-900);font-size:9px;font-weight:900;">✓</span><span>${s}</span>` }} />
                ))}
              </ul>

              <div style={{ marginTop: 4, padding: '10px 12px', background: 'var(--sb-cream-200)', borderRadius: 10, fontSize: 12, lineHeight: 1.4, color: 'var(--fg-2)', borderLeft: '3px solid var(--sb-red-500)' }}>
                <strong style={{ color: 'var(--fg-1)' }}>Best for:</strong> kids who eat lunch every day.
              </div>
            </div>

            {/* WALLET */}
            <div style={{
              background: '#FFFFFF', borderRadius: 22,
              border: '2.5px solid var(--sb-ink-900)',
              borderLeft: '8px solid var(--sb-green-400)',
              boxShadow: '6px 6px 0 var(--sb-ink-900)',
              padding: 24, position: 'relative',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                position: 'absolute', top: -14, right: 16,
                background: 'var(--sb-green-400)', color: '#fff',
                border: '2.5px solid var(--sb-ink-900)', borderRadius: 999, padding: '4px 12px',
                fontSize: 10, fontWeight: 900, letterSpacing: '0.08em',
                textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>🪙 Flexible</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: 20, fontWeight: 900, margin: 0, color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>Wallet Only</h4>
                <span style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 600 }}>pay as you go</span>
              </div>

              <div style={{ background: 'var(--sb-green-50)', padding: '12px 14px', border: '1.5px solid var(--sb-green-200)', borderRadius: 12, marginTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1, color: 'var(--sb-green-500)', WebkitTextStroke: '1.5px var(--sb-ink-900)' }}>₱135</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-2)', fontWeight: 600, lineHeight: 1.2 }}>/tray <span style={{ color: 'var(--fg-3)' }}>(deducted when they eat)</span></div>
                </div>
                <div style={{ fontSize: 11, color: 'var(--fg-3)', fontWeight: 600, marginTop: 4, lineHeight: 1.35 }}>No monthly fee. You only spend what they actually eat.</div>
              </div>

              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--sb-green-500)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>How it works</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                  {["Top up your kid's wallet (any amount, any time)",'They scan their QR when they want to eat','₱135 deducted per tray; balance shows in the portal'].map((s, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.45 }}>
                      <span style={{ width: 16, height: 16, borderRadius: 999, background: 'var(--sb-green-400)', color: '#fff', fontWeight: 900, fontSize: 10, flexShrink: 0, marginTop: 1, display: 'grid', placeItems: 'center', border: '1.5px solid var(--sb-ink-900)' }}>{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'grid', gap: 6 }}>
                {['Top up anytime, any amount — no minimum','₱135 deducted automatically per tray','Skip days, weeks, or whole months — no commitment','₱300 emergency credit if the wallet runs short','Email alert when balance drops below your threshold','Portal tabs: Profile · Food History · Feedback'].map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}
                      dangerouslySetInnerHTML={{ __html: `<span style="width:16px;height:16px;border-radius:999px;background:var(--sb-green-400);color:#fff;flex-shrink:0;margin-top:2px;display:grid;place-items:center;border:1.5px solid var(--sb-ink-900);font-size:9px;font-weight:900;">✓</span><span>${s}</span>` }} />
                ))}
              </ul>

              <div style={{ marginTop: 4, padding: '10px 12px', background: 'var(--sb-cream-200)', borderRadius: 10, fontSize: 12, lineHeight: 1.4, color: 'var(--fg-2)', borderLeft: '3px solid var(--sb-green-400)' }}>
                <strong style={{ color: 'var(--fg-1)' }}>Best for:</strong> kids with unpredictable schedules.
              </div>
            </div>
          </div>

          {/* Month breakdown */}
          <div style={{ marginTop: 28, padding: 20, background: '#FFFFFF', borderRadius: 22, border: '2.5px solid var(--sb-ink-900)', boxShadow: '6px 6px 0 var(--sb-ink-900)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sb-red-600)', marginBottom: 4 }}>Subscription school year at a glance</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--fg-1)' }}>10 monthly bills. ₱135 × the school days in that month.</div>
              </div>
              <div style={{ background: 'var(--sb-ink-900)', color: '#fff', padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800 }}>
                Full year: <span style={{ color: 'var(--sb-yellow-300)' }}>₱24,570</span>
                <span style={{ opacity: 0.7, marginLeft: 6 }}>(182 days)</span>
              </div>
            </div>

            <div className="sb-month-scroll">
              <div className="sb-month-grid">
                {[{m:'Jun',d:22,t:'2,970'},{m:'Jul',d:22,t:'2,970'},{m:'Aug',d:18,t:'2,430'},{m:'Sep',d:22,t:'2,970'},{m:'Oct',d:22,t:'2,970'},{m:'Nov',d:16,t:'2,160'},{m:'Dec',d:15,t:'2,025'},{m:'Jan',d:20,t:'2,700'},{m:'Feb',d:18,t:'2,430'},{m:'Mar',d:7,t:'945'}].map((mo, i) => (
                  <div key={i} style={{
                    background: 'var(--sb-cream-100)', border: '2px solid var(--sb-ink-900)',
                    borderRadius: 10, padding: '8px 4px',
                    textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2,
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1, color: 'var(--sb-ink-900)' }}>{mo.m}</div>
                    <div style={{ fontSize: 9, color: 'var(--fg-3)', fontWeight: 700, letterSpacing: '0.04em' }}>{mo.d}d</div>
                    <div style={{ fontSize: 11, fontWeight: 900, color: 'var(--sb-red-500)', marginTop: 2 }}>₱{mo.t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--fg-3)', fontWeight: 600, marginTop: 10, textAlign: 'center' }}>
              Bills follow the school calendar. Holidays and breaks are already factored in.
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 28 }}>
            <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sb-red-600)', marginBottom: 14 }}>What parents ask us</div>
            <div className="sb-grid-3">
              {[
                { q: "Can I switch plans mid-year?", a: "Yes — talk to your branch admin (Antipolo or Iloilo). Plans are set at enrollment; switching is a manual change so we get the math right." },
                { q: "What if my subscriber kid is absent?", a: "The subscription is monthly, not per-meal. If your child will miss a long stretch, talk to the branch admin about pausing." },
                { q: "Can my non-subscriber kid get snacks?", a: "Yes — both plans give your child a working wallet. Subscribers can also load it for snacks, drinks, and extras." },
              ].map((f, i) => (
                <div key={i} style={{
                  background: '#FFFFFF', borderRadius: 16,
                  border: '2.5px solid var(--sb-ink-900)',
                  boxShadow: '4px 4px 0 var(--sb-ink-900)',
                  padding: 16,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ width: 24, height: 24, borderRadius: 999, background: 'var(--sb-yellow-300)', border: '2px solid var(--sb-ink-900)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--sb-ink-900)', flexShrink: 0 }}>?</span>
                    <div style={{ fontWeight: 800, fontSize: 13.5, color: 'var(--fg-1)', lineHeight: 1.25 }}>{f.q}</div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.5 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--fg-2)', fontWeight: 600, maxWidth: 720, margin: '20px auto 0' }}>
            <strong style={{ color: 'var(--fg-1)' }}>Both plans</strong> include the QR card, the parent portal, and loyalty points (1 pt per ₱1,000 spent).
          </div>
        </div>

        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
          <SbBadge color="cream">🥗 No MSG</SbBadge>
          <SbBadge color="cream">💧 Bottled water included</SbBadge>
          <SbBadge color="cream">🥦 Veggies every day</SbBadge>
          <SbBadge color="cream">🍎 Fresh fruit, never canned</SbBadge>
          <SbBadge color="cream">📱 Daily Messenger update</SbBadge>
        </div>
      </div>
    </section>
  );
};
export default Menu;
