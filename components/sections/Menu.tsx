import * as React from "react";
import { SbBadge, SbEyebrow, SbNoise } from "@/components/primitives";

// Menu section — this week's menu sample
export const Menu = () => {
  const days = [
    {
      day: 'Mon', label: 'Monday',
      meal: 'Chicken adobo, rice, kalabasa',
      tag: 'Protein day', tagColor: 'var(--sb-red-500)',
      price: '₱135',
      emoji: '🍛',
    },
    {
      day: 'Tue', label: 'Tuesday',
      meal: 'Beef giniling, rice, fresh mango',
      tag: 'Iron-rich', tagColor: 'var(--sb-yellow-400)',
      price: '₱135',
      emoji: '🥭',
    },
    {
      day: 'Wed', label: 'Wednesday',
      meal: 'Fish fillet, rice, sayote + carrots',
      tag: 'Veggie day', tagColor: 'var(--sb-green-400)',
      price: '₱135',
      emoji: '🥬',
    },
    {
      day: 'Thu', label: 'Thursday',
      meal: 'Pork menudo, rice, banana',
      tag: 'Comfort meal', tagColor: 'var(--sb-red-500)',
      price: '₱135',
      emoji: '🍚',
    },
    {
      day: 'Fri', label: 'Friday',
      meal: 'Pancit canton, sliced pineapple',
      tag: 'Fun Friday', tagColor: 'var(--sb-yellow-400)',
      price: '₱135',
      emoji: '🍜',
    },
  ];

  return (
    <section id="menu" style={{
      background: 'var(--sb-yellow-300)',
      padding: '120px 32px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '2.5px solid var(--sb-ink-900)',
      borderBottom: '2.5px solid var(--sb-ink-900)',
    }}>
      <SbNoise opacity={0.06} />

      {/* Decorative dots */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.18,
        backgroundImage: 'radial-gradient(var(--sb-ink-900) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48,
        }}>
          <div style={{ maxWidth: 700 }}>
            <SbEyebrow color="var(--sb-red-600)">This week at Sunbites</SbEyebrow>
            <h2 style={{ margin: '0 0 16px' }}>
              A week of real meals — just{' '}
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '3vh',
                color: 'var(--sb-red-500)',
                WebkitTextStroke: '2px var(--sb-ink-900)',
                display: 'inline-block', transform: 'rotate(-3deg)',
              }}>135</span>{' '}
              pesos a tray.
            </h2>
            <p style={{ fontSize: 18, color: 'var(--fg-1)', fontWeight: 500, maxWidth: 600 }}>
              A 4-week rotating menu, planned with a registered nutritionist.
              Allergies and halal options handled on enrollment.
            </p>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#FFFFFF', padding: '12px 16px',
            border: '2.5px solid var(--sb-ink-900)', borderRadius: 999,
            fontWeight: 800, fontSize: 14,
          }}>
            <span style={{
              width: 10, height: 10, borderRadius: 999, background: 'var(--sb-green-400)',
              boxShadow: '0 0 0 4px rgba(63, 170, 75, 0.25)',
            }} />
            Updated every Sunday at Parent's Portal
          </div>
        </div>

        {/* Menu cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 16,
        }}>
          {days.map((d, i) => (
            <div key={i} style={{
              background: '#FFFFFF', borderRadius: 18,
              border: '2.5px solid var(--sb-ink-900)',
              boxShadow: '5px 5px 0 var(--sb-ink-900)',
              padding: 20,
              display: 'flex', flexDirection: 'column', gap: 12,
              minHeight: 280,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 28, color: 'var(--fg-1)', lineHeight: 1,
              }}>{d.day}</div>
              <div style={{
                fontSize: 56, lineHeight: 1, margin: '4px 0 8px',
              }}>{d.emoji}</div>
              <div style={{
                display: 'inline-block', alignSelf: 'flex-start',
                background: d.tagColor, color: '#FFFFFF',
                border: '2px solid var(--sb-ink-900)',
                padding: '4px 10px', borderRadius: 999,
                fontSize: 11, fontWeight: 800, letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{d.tag}</div>
              <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--fg-1)',
                  lineHeight: 1.3, flex: 1 }}>{d.meal}</div>
              <div style={{
                paddingTop: 10, borderTop: '1.5px dashed var(--border-1)',
                fontWeight: 900, fontSize: 18, color: 'var(--fg-1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{d.price}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--fg-3)', textTransform: 'uppercase' }}>
                  per tray
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subscriber vs Wallet — two payment plans */}
        <div style={{ marginTop: 56 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 800,
              fontSize: 13, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--sb-red-600)',
              marginBottom: 10,
            }}>Two ways to eat at Sunbites</div>
            <h3 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0,
              color: 'var(--fg-1)', textWrap: 'balance',
            }}>
              Same food. Same ₱135. <em style={{ fontStyle: 'normal',
                background: '#fff', padding: '0 0.18em', borderRadius: 8,
                border: '2px solid var(--sb-ink-900)',
                display: 'inline-block', transform: 'rotate(-1deg)',
              }}>Pick how you pay.</em>
            </h3>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 20, alignItems: 'stretch',
          }}>
            {/* SUBSCRIPTION PLAN */}
            <div style={{
              background: '#FFFFFF', borderRadius: 22,
              border: '2.5px solid var(--sb-ink-900)',
              borderLeft: '8px solid var(--sb-red-500)',
              boxShadow: '6px 6px 0 var(--sb-ink-900)',
              padding: 28, position: 'relative',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                position: 'absolute', top: -14, right: 20,
                background: 'var(--sb-red-500)', color: '#fff',
                border: '2.5px solid var(--sb-ink-900)',
                borderRadius: 999, padding: '4px 12px',
                fontSize: 11, fontWeight: 900, letterSpacing: '0.08em',
                textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>📋 Most popular</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: 22, fontWeight: 900, margin: 0,
                    color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>
                  Subscription Plan
                </h4>
                <span style={{ fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>
                  for daily eaters
                </span>
              </div>

              <div style={{
                background: 'var(--sb-red-50)', padding: '14px 16px',
                border: '1.5px solid var(--sb-red-200)', borderRadius: 12,
                marginTop: 4,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 400,
                    fontSize: 36, lineHeight: 1, color: 'var(--sb-red-500)',
                    WebkitTextStroke: '1.5px var(--sb-ink-900)',
                  }}>₱945–₱2,970</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 600, lineHeight: 1.2 }}>
                    /month
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>
                  Varies by school days that month (₱135 × 7–22 days). See the full school-year breakdown below.
                </div>
              </div>

              {/* How subscription works */}
              <div style={{ marginTop: 4 }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: 'var(--sb-red-600)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginBottom: 8,
                }}>How it works</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6,
                    counterReset: 'sub' }}>
                  {[
                    'Pre-pay the month before it starts (Cash, GCash, or Bank)',
                    'Your kid scans their QR at the counter, every school day',
                    'Their tray is already paid — no balance to worry about',
                  ].map((s, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: 13.5, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.45 }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 999,
                        background: 'var(--sb-red-500)', color: '#fff',
                        fontWeight: 900, fontSize: 11, flexShrink: 0, marginTop: 1,
                        display: 'grid', placeItems: 'center',
                        border: '1.5px solid var(--sb-ink-900)',
                      }}>{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* What's included */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0',
                  display: 'grid', gap: 8 }}>
                {[
                  'One predictable bill, paid 10 months a year (Jun – Mar)',
                  'Pay by Cash, GCash, or Bank Transfer',
                  'Track paid / unpaid months in the parent portal',
                  '14-day reminder banner before the next month is due',
                  'Wallet still works — use it for snacks, drinks, extras',
                  '₱300 emergency credit if the wallet runs short',
                  'Portal tabs: Profile · Monthly Menu · Food History · Payments · Feedback',
                ].map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 14.5, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}
                      dangerouslySetInnerHTML={{ __html:
                        `<span style="width:18px;height:18px;border-radius:999px;background:var(--sb-red-500);color:#fff;flex-shrink:0;margin-top:2px;display:grid;place-items:center;border:1.5px solid var(--sb-ink-900);font-size:10px;font-weight:900;">✓</span><span>${s}</span>` }}
                  />
                ))}
              </ul>

              <div style={{
                marginTop: 4, padding: '10px 12px',
                background: 'var(--sb-cream-200)', borderRadius: 10,
                fontSize: 12.5, lineHeight: 1.4, color: 'var(--fg-2)',
                borderLeft: '3px solid var(--sb-red-500)',
              }}>
                <strong style={{ color: 'var(--fg-1)' }}>Best for:</strong> kids who eat lunch at school every day, parents who want one fewer thing to remember on Monday morning.
              </div>
            </div>

            {/* WALLET / NON-SUBSCRIPTION */}
            <div style={{
              background: '#FFFFFF', borderRadius: 22,
              border: '2.5px solid var(--sb-ink-900)',
              borderLeft: '8px solid var(--sb-green-400)',
              boxShadow: '6px 6px 0 var(--sb-ink-900)',
              padding: 28, position: 'relative',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                position: 'absolute', top: -14, right: 20,
                background: 'var(--sb-green-400)', color: '#fff',
                border: '2.5px solid var(--sb-ink-900)',
                borderRadius: 999, padding: '4px 12px',
                fontSize: 11, fontWeight: 900, letterSpacing: '0.08em',
                textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>🪙 Flexible</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: 22, fontWeight: 900, margin: 0,
                    color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>
                  Wallet Only
                </h4>
                <span style={{ fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>
                  pay as you go
                </span>
              </div>

              <div style={{
                background: 'var(--sb-green-50)', padding: '14px 16px',
                border: '1.5px solid var(--sb-green-200)', borderRadius: 12,
                marginTop: 4,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 400,
                    fontSize: 36, lineHeight: 1, color: 'var(--sb-green-500)',
                    WebkitTextStroke: '1.5px var(--sb-ink-900)',
                  }}>₱135</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 600, lineHeight: 1.2 }}>
                    /tray <span style={{ color: 'var(--fg-3)' }}>(deducted only when they eat)</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>
                  No monthly fee. You only spend what they actually eat.
                </div>
              </div>

              {/* How wallet works */}
              <div style={{ marginTop: 4 }}>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: 'var(--sb-green-500)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginBottom: 8,
                }}>How it works</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                  {[
                    'Top up your kid\'s wallet (any amount, any time)',
                    'They scan their QR when they want to eat',
                    '₱135 deducted per tray; balance shows in the portal',
                  ].map((s, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: 13.5, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.45 }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 999,
                        background: 'var(--sb-green-400)', color: '#fff',
                        fontWeight: 900, fontSize: 11, flexShrink: 0, marginTop: 1,
                        display: 'grid', placeItems: 'center',
                        border: '1.5px solid var(--sb-ink-900)',
                      }}>{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* What's included */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0',
                  display: 'grid', gap: 8 }}>
                {[
                  'Top up anytime, any amount — no minimum',
                  '₱135 deducted automatically per tray',
                  'Skip days, weeks, or whole months — no commitment',
                  '₱300 emergency credit if the wallet runs short',
                  'Email alert when balance drops below your threshold',
                  'Portal tabs: Profile · Food History · Feedback (no payment tab)',
                  
                ].map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 14.5, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}
                      dangerouslySetInnerHTML={{ __html:
                        `<span style="width:18px;height:18px;border-radius:999px;background:var(--sb-green-400);color:#fff;flex-shrink:0;margin-top:2px;display:grid;place-items:center;border:1.5px solid var(--sb-ink-900);font-size:10px;font-weight:900;">✓</span><span>${s}</span>` }}
                  />
                ))}
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div style={{
                marginTop: 4, padding: '10px 12px',
                background: 'var(--sb-cream-200)', borderRadius: 10,
                fontSize: 12.5, lineHeight: 1.4, color: 'var(--fg-2)',
                borderLeft: '3px solid var(--sb-green-400)',
              }}>
                <strong style={{ color: 'var(--fg-1)' }}>Best for:</strong> kids who bring baon some days, eat at Sunbites others, or have unpredictable schedules.
              </div>
            </div>
          </div>

          {/* School year at a glance — subscription monthly breakdown */}
          <div style={{
            marginTop: 32, padding: 24,
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--sb-red-600)', marginBottom: 4,
                }}>Subscription school year at a glance</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--fg-1)' }}>
                  10 monthly bills. ₱135 × the school days in that month.
                </div>
              </div>
              <div style={{
                background: 'var(--sb-ink-900)', color: '#fff',
                padding: '8px 14px', borderRadius: 999,
                fontSize: 12.5, fontWeight: 800,
              }}>
                Full year: <span style={{ color: 'var(--sb-yellow-300)' }}>₱24,570</span>
                <span style={{ opacity: 0.7, marginLeft: 8 }}>(182 school days)</span>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
              gap: 6,
            }}>
              {[
                { m: 'Jun', d: 22, t: '2,970' },
                { m: 'Jul', d: 22, t: '2,970' },
                { m: 'Aug', d: 18, t: '2,430' },
                { m: 'Sep', d: 22, t: '2,970' },
                { m: 'Oct', d: 22, t: '2,970' },
                { m: 'Nov', d: 16, t: '2,160' },
                { m: 'Dec', d: 15, t: '2,025' },
                { m: 'Jan', d: 20, t: '2,700' },
                { m: 'Feb', d: 18, t: '2,430' },
                { m: 'Mar', d: 7,  t: '945'   },
              ].map((mo, i) => (
                <div key={i} style={{
                  background: 'var(--sb-cream-100)',
                  border: '2px solid var(--sb-ink-900)',
                  borderRadius: 10, padding: '10px 6px',
                  textAlign: 'center', display: 'flex',
                  flexDirection: 'column', gap: 2,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18,
                      lineHeight: 1, color: 'var(--sb-ink-900)' }}>{mo.m}</div>
                  <div style={{ fontSize: 10, color: 'var(--fg-3)',
                      fontWeight: 700, letterSpacing: '0.04em' }}>{mo.d} days</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--sb-red-500)',
                      marginTop: 4 }}>₱{mo.t}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--fg-3)', fontWeight: 600,
                marginTop: 12, textAlign: 'center' }}>
              Bills follow the school calendar. Holidays, breaks, and shortened months are already factored in.
            </div>
          </div>

          {/* Common questions / FAQ */}
          <div style={{ marginTop: 32 }}>
            <div style={{
              textAlign: 'center', fontSize: 12, fontWeight: 800,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--sb-red-600)', marginBottom: 16,
            }}>What parents ask us</div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 16,
            }}>
              {[
                {
                  q: "Can I switch plans mid-year?",
                  a: "Yes — but it's not self-serve. Talk to your branch admin (Antipolo or Iloilo) and they'll switch your child's plan. Plans are set at enrollment; switching is a manual change so we get the math right.",
                },
                {
                  q: "What if my subscriber kid is absent or sick?",
                  a: "The subscription is monthly, not per-meal — refunds aren't offered for absences. If your child will miss a long stretch (a week or more), talk to the branch admin about pausing.",
                },
                {
                  q: "Can my non-subscriber kid still get snacks?",
                  a: "Yes — both plans give your child a working wallet. Wallet-only kids load the wallet with any amount; subscribers can load it too for snacks, drinks, and extras outside the meal tray.",
                },
              ].map((f, i) => (
                <div key={i} style={{
                  background: '#FFFFFF', borderRadius: 16,
                  border: '2.5px solid var(--sb-ink-900)',
                  boxShadow: '4px 4px 0 var(--sb-ink-900)',
                  padding: 18,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{
                      width: 26, height: 26, borderRadius: 999,
                      background: 'var(--sb-yellow-300)',
                      border: '2px solid var(--sb-ink-900)',
                      display: 'grid', placeItems: 'center',
                      fontFamily: 'var(--font-display)', fontSize: 14,
                      color: 'var(--sb-ink-900)',
                    }}>?</span>
                    <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--fg-1)', lineHeight: 1.25 }}>
                      {f.q}
                    </div>
                  </div>
                  <div style={{ fontSize: 13.5, color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.5 }}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            textAlign: 'center', marginTop: 24,
            fontSize: 14, color: 'var(--fg-2)', fontWeight: 600,
            maxWidth: 760, margin: '24px auto 0',
          }}>
            <strong style={{ color: 'var(--fg-1)' }}>Both plans</strong> include the QR card, the parent portal,
            and loyalty points (1 pt per ₱1,000 spent). Your plan is chosen at
            enrollment; switching mid-year is handled by your branch admin.
          </div>
        </div>

        <div style={{
          marginTop: 40, display: 'flex',
          justifyContent: 'center', flexWrap: 'wrap', gap: 12,
        }}>
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
