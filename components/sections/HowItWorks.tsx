"use client";
import * as React from "react";
import { SbButton, SbBadge, SbNoise, SbHeart } from "@/components/primitives";

// How Sunbites Works — comprehensive explainer page
// Sections cover: 3-piece system overview, Wallet deep-dive, POS deep-dive,
// Portal deep-dive, Benefits for kids, Benefits for parents

interface HowSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  dark?: boolean;
}

export const HowSection = ({ id, eyebrow, title, intro, children, dark = false }: HowSectionProps) => (
  <section id={id} style={{
    background: dark ? 'var(--sb-ink-900)' : 'var(--sb-cream-100)',
    color: dark ? '#fff' : 'var(--fg-1)',
    padding: '88px 32px', position: 'relative', overflow: 'hidden',
  }}>
    {dark && <SbNoise opacity={0.08} />}
    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div style={{ maxWidth: 760, marginBottom: 40 }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 800,
          fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: dark ? 'var(--sb-yellow-300)' : 'var(--sb-red-500)',
          marginBottom: 12,
        }}>{eyebrow}</div>
        <h2 style={{
          fontFamily: 'var(--font-body)', fontWeight: 900,
          fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.02,
          letterSpacing: '-0.025em', margin: '0 0 18px',
          color: dark ? '#fff' : 'var(--fg-1)', textWrap: 'balance',
        }}>{title}</h2>
        {intro && (
          <p style={{
            fontSize: 18, lineHeight: 1.55, fontWeight: 500,
            color: dark ? 'rgba(255,255,255,0.78)' : 'var(--fg-2)',
            margin: 0, maxWidth: 700,
          }}>{intro}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export const StepCard = ({ n, title, body, accent = 'var(--sb-red-500)' }) => (
  <div style={{
    background: '#FFFFFF', borderRadius: 18,
    border: '2.5px solid var(--sb-ink-900)',
    boxShadow: '5px 5px 0 var(--sb-ink-900)',
    padding: 22, position: 'relative',
  }}>
    <div style={{
      position: 'absolute', top: -22, left: 18,
      width: 44, height: 44, borderRadius: 999,
      background: accent, color: '#fff',
      border: '2.5px solid var(--sb-ink-900)',
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1,
    }}>{n}</div>
    <h4 style={{ fontSize: 17, fontWeight: 800, color: 'var(--fg-1)',
        margin: '24px 0 8px', letterSpacing: '-0.01em' }}>{title}</h4>
    <p style={{ fontSize: 14, color: 'var(--fg-2)', margin: 0, lineHeight: 1.5 }}>
      {body}
    </p>
  </div>
);

export const HowHero = () => (
  <section style={{
    background: 'var(--sb-cream-100)',
    padding: '88px 32px 64px',
    position: 'relative', overflow: 'hidden',
  }}>
    <SbNoise opacity={0.05} />
    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative',
        textAlign: 'center' }}>
      <SbBadge color="yellow">How Sunbites works</SbBadge>
      <h1 style={{
        fontFamily: 'var(--font-body)', fontWeight: 900,
        fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 0.98,
        letterSpacing: '-0.025em', margin: '20px auto 20px',
        color: 'var(--fg-1)', textWrap: 'balance', maxWidth: 900,
      }}>
        One QR card, one wallet,{' '}
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          color: 'var(--sb-red-500)',
          WebkitTextStroke: '2px var(--sb-ink-900)',
          display: 'inline-block', transform: 'rotate(-2deg)',
        }}>zero fuss.</span>
      </h1>
      <p style={{
        fontSize: 20, lineHeight: 1.55, color: 'var(--fg-2)',
        fontWeight: 500, maxWidth: 720, margin: '0 auto 36px',
      }}>
        Here's the whole Sunbites system explained, end to end —
        how the wallet works, what happens at the counter, and what
        you see in the parent portal. No surprises, no fine print.
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <SbButton variant="primary" size="md" href="#wallet">
          Start with the wallet
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </SbButton>
        <SbButton variant="ghost" size="md" href="Sunbites Landing Page.html">
          ← Back to home
        </SbButton>
      </div>
    </div>
  </section>
);

export const HowOverview = () => (
  <HowSection
    id="overview"
    eyebrow="The Sunbites system"
    title="Three pieces, working together."
    intro="Sunbites isn't just a canteen — it's a connected system. Each piece does one job, and they talk to each other so kids eat well and parents stay in the loop."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 24, marginTop: 8,
    }}>
      {[
        {
          icon: '🪪', accent: 'var(--sb-yellow-300)',
          title: 'For your kid',
          sub: 'The QR Card & Wallet',
          body: 'A printed QR card linked to a digital wallet. They scan to buy lunch, no cash to lose, no change to count.',
          href: '#wallet',
        },
        {
          icon: '🍽️', accent: 'var(--sb-red-500)',
          title: 'For the canteen',
          sub: 'The Sunbites POS',
          body: 'The counter app. QR scan, ring up the order, deduct from wallet, hand over the tray. Fast recess lines, every time.',
          href: '#pos',
        },
        {
          icon: '📱', accent: 'var(--sb-green-400)',
          title: 'For you',
          sub: 'The Parent Portal',
          body: "See what your kid ate, how much they spent, what's on the menu, and send feedback — all from your phone.",
          href: '#portal',
        },
      ].map((p, i) => (
        <a key={i} href={p.href} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            background: '#FFFFFF', borderRadius: 22,
            border: '2.5px solid var(--sb-ink-900)',
            boxShadow: '6px 6px 0 var(--sb-ink-900)',
            padding: 24, height: '100%',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: p.accent, color: '#fff',
              border: '2.5px solid var(--sb-ink-900)',
              display: 'grid', placeItems: 'center', fontSize: 28,
            }}>{p.icon}</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--fg-3)',
                  letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.title}</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, margin: '4px 0 0',
                  color: 'var(--fg-1)', letterSpacing: '-0.01em' }}>{p.sub}</h3>
            </div>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', margin: 0, lineHeight: 1.5,
                flex: 1 }}>{p.body}</p>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--sb-red-500)',
                marginTop: 4 }}>Read more ↓</div>
          </div>
        </a>
      ))}
    </div>
  </HowSection>
);

export const HowWallet = () => (
  <HowSection
    id="wallet"
    eyebrow="🪪 For your kid — Wallet"
    title="How the Sunbites Wallet works."
    intro="Every enrolled student gets a printed QR card linked to a digital wallet. You load money in, your kid uses the card at the counter, and the system handles the rest."
    dark
  >
    {/* 5-step flow */}
    <div style={{ position: 'relative', marginTop: 28 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: 16, marginBottom: 40,
      }}>
        <StepCard n="1" title="Enroll, get a card"
          body="On enrollment, your kid is assigned a unique QR code (SB-XXXXXXXXXXXX) and a digital wallet is created. We print the card." />
        <StepCard n="2" title="Top up the wallet"
          body="Add money any time, any amount — Cash, GCash, or Bank Transfer. The new balance shows up immediately." accent="var(--sb-yellow-400)" />
        <StepCard n="3" title="Kid scans at counter"
          body="They show the card; the cashier scans it. The system finds your kid, shows balance, and adds items to the cart." accent="var(--sb-green-400)" />
        <StepCard n="4" title="System deducts"
          body="₱135 (or item price) deducted from the wallet. Receipt shows new balance. All in 5 seconds." accent="var(--sb-red-500)" />
        <StepCard n="5" title="You see it in the portal"
          body="Every transaction shows up in your portal — date, time, items, amount, balance after." accent="var(--sb-ink-700)" />
      </div>
    </div>

    {/* Safety features */}
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '2px solid rgba(255,255,255,0.18)',
      borderRadius: 22, padding: 32, marginTop: 16,
    }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--sb-yellow-300)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>
        Built-in safety nets
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: 24,
      }}>
        {[
          {
            t: '₱300 emergency credit',
            b: 'If your kid runs out of wallet balance, Sunbites can extend up to ₱300 in canteen credit so they still eat lunch. You settle it on the next top-up.',
          },
          {
            t: 'Low-balance email alert',
            b: 'Set a threshold (e.g. ₱100) and you get an email the moment the wallet drops below it. No more "I had no money for lunch" texts.',
          },
          {
            t: 'Inline reload at the counter',
            b: 'If your kid is at the counter with not enough balance, the cashier can take cash on the spot, top up the wallet for the exact shortfall, and finish the order in seconds.',
          },
          {
            t: 'Lost-QR replacement',
            b: 'Lost or damaged card? The branch admin regenerates a new QR in minutes — the old one is instantly invalidated. Wallet balance carries over.',
          },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 14 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999, flexShrink: 0,
              background: 'var(--sb-yellow-300)', color: 'var(--sb-ink-900)',
              border: '2px solid var(--sb-ink-900)',
              display: 'grid', placeItems: 'center',
            }}>
              <SbHeart size={18} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)',
                  fontWeight: 500, lineHeight: 1.5 }}>{s.b}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Loyalty points */}
    <div style={{
      marginTop: 28, padding: '20px 24px',
      background: 'var(--sb-yellow-300)', color: 'var(--sb-ink-900)',
      border: '2.5px solid var(--sb-ink-900)', borderRadius: 18,
      boxShadow: '6px 6px 0 var(--sb-red-500), 6px 6px 0 2.5px var(--sb-ink-900)',
      display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
    }}>
      <div style={{ fontSize: 40, lineHeight: 1 }}>⭐</div>
      <div style={{ flex: 1, minWidth: 240 }}>
        <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.01em' }}>
          1 loyalty point per ₱1,000 spent.
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>
          Points are tracked automatically across every purchase and shown in the portal. Redemption rules vary by branch — ask your branch admin.
        </div>
      </div>
    </div>
  </HowSection>
);

export const HowPos = () => (
  <HowSection
    id="pos"
    eyebrow="🍽️ For the canteen — POS"
    title="What happens at the counter."
    intro="Sunbites POS is the cashier app. Here's what your kid (and the cashier) actually do during recess, step by step."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 16, marginTop: 28,
    }}>
      <StepCard n="1" title="Cashier picks the items"
        body="They tap meal trays, drinks, snacks, or extras on the POS — items are categorized (meal / snack / drink / extra) for fast finding." />
      <StepCard n="2" title="Scan the QR card"
        body="USB scanner reads your kid's QR. The system loads their name, photo, wallet balance, and current credit balance instantly." accent="var(--sb-yellow-400)" />
      <StepCard n="3" title="Pick payment"
        body="Cash, GCash, or Student Wallet — cashier picks. Wallet shows live balance and what's left after this order." accent="var(--sb-green-400)" />
      <StepCard n="4" title="Receipt + handover"
        body="System creates the order, deducts from wallet (or takes cash/GCash), prints a receipt, and shows points earned. Done." accent="var(--sb-red-500)" />
    </div>

    <div style={{
      marginTop: 32, padding: 24,
      background: '#FFFFFF', borderRadius: 18,
      border: '2.5px solid var(--sb-ink-900)',
      boxShadow: '6px 6px 0 var(--sb-ink-900)',
    }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--sb-red-600)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
        What payments are accepted
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 16,
      }}>
        {[
          { e: '💵', t: 'Cash', b: 'Pay tendered amount; change calculated and given. Standard for walk-ins.' },
          {
            e: <img src="/gcash-logo.png" alt="GCash"
                    style={{ width: '100%', height: '100%', objectFit: 'cover',
                             display: 'block', borderRadius: 'inherit' }} />,
            t: 'GCash',
            b: 'Show GCash payment, cashier records the reference number (optional).',
          },
          { e: '🪙', t: 'Student Wallet', b: 'QR scan deducts the meal cost from your kid\'s pre-loaded wallet — fastest option.' },
        ].map((p, i) => (
          <div key={i} style={{
            padding: 16, background: 'var(--sb-cream-100)',
            border: '2px solid var(--sb-ink-900)', borderRadius: 14,
          }}>
            <div style={{
              width: 56, height: 56, marginBottom: 10,
              borderRadius: 12, overflow: 'hidden',
              border: typeof p.e === 'string' ? 'none' : '2px solid var(--sb-ink-900)',
              background: typeof p.e === 'string' ? 'transparent' : '#0084FF',
              display: 'grid', placeItems: 'center',
              fontSize: typeof p.e === 'string' ? 36 : undefined,
              lineHeight: 1,
            }}>{p.e}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg-1)' }}>{p.t}</div>
            <div style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 500,
                marginTop: 4, lineHeight: 1.45 }}>{p.b}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      marginTop: 24, padding: '16px 20px',
      background: 'var(--sb-cream-200)', borderRadius: 14,
      border: '2px solid var(--sb-ink-900)',
      fontSize: 14, lineHeight: 1.5, color: 'var(--fg-2)', fontWeight: 500,
    }}>
      <strong style={{ color: 'var(--fg-1)' }}>Walk-ins welcome.</strong>{' '}
      You don't need to be enrolled to eat at Sunbites — anyone can pay Cash or GCash.
      But enrolled kids get the wallet, loyalty points, and the parent-portal benefits.
    </div>
  </HowSection>
);

export const HowPortal = () => (
  <HowSection
    id="portal"
    eyebrow="📱 For you — Parent Portal"
    title="What you see — and what you control."
    intro="The Sunbites Portal at portal.sunbites.com.ph is where parents live. Sign in, see your kids, watch every meal, top up balance, send feedback — all on your phone."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 20, marginTop: 8,
    }}>
      {[
        { e: '💰', t: 'Wallet & balance', b: 'See current balance, last top-up date, full transaction history. Top up any time.', a: 'var(--sb-yellow-300)' },
        { e: '📊', t: 'Spending breakdown', b: "Today, this week, this month — itemized. What they bought, when, and how much.", a: 'var(--sb-red-500)' },
        { e: '🍽️', t: 'Weekly meal plan', b: 'See what\'s being served Mon–Fri: Ulam · Vegetables · Fruit · Soup. Plan ahead.', a: 'var(--sb-green-400)' },
        { e: '📋', t: 'Subscription payments', b: '(Subscribers only) Track paid / unpaid months Jun–Mar with 14-day reminders.', a: 'var(--sb-yellow-400)' },
        { e: '🔔', t: 'Low-balance alerts', b: "Set a threshold and get an email the moment the wallet drops below it.", a: 'var(--sb-red-400)' },
        { e: '💬', t: 'Feedback & replies', b: 'Send a star rating + message to the kitchen. Ms. Nej and team reply by email.', a: 'var(--sb-green-500)' },
      ].map((f, i) => (
        <div key={i} style={{
          background: '#FFFFFF', borderRadius: 16, padding: 20,
          border: '2px solid var(--sb-ink-900)',
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: f.a, border: '2px solid var(--sb-ink-900)',
            display: 'grid', placeItems: 'center', fontSize: 24,
          }}>{f.e}</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg-1)' }}>{f.t}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-2)', fontWeight: 500,
                marginTop: 4, lineHeight: 1.5 }}>{f.b}</div>
          </div>
        </div>
      ))}
    </div>

    <div style={{
      marginTop: 24, padding: '18px 22px',
      background: 'var(--sb-red-50)', borderRadius: 14,
      border: '2px solid var(--sb-red-200)',
      fontSize: 14, lineHeight: 1.5, color: 'var(--fg-2)', fontWeight: 500,
    }}>
      <strong style={{ color: 'var(--fg-1)' }}>How to get a portal account.</strong>{' '}
      Self-register at <strong style={{ color: 'var(--sb-red-500)' }}>portal.sunbites.com.ph</strong>,
      verify your email, then request to link your kid by providing their name and branch.
      Our branch admin approves the link (it's a manual step — for your kid's safety).
    </div>
  </HowSection>
);

export const HowBenefits = () => (
  <HowSection
    id="benefits"
    eyebrow="What you and your kid actually get"
    title="Why this beats cash in a coin purse."
    intro="The system isn't tech for tech's sake. Every piece exists to solve a real problem that real parents and real kids run into."
    dark
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 28, marginTop: 12,
    }}>
      {/* For kids */}
      <div style={{
        background: 'rgba(255, 210, 63, 0.08)',
        border: '2px solid var(--sb-yellow-300)',
        borderRadius: 22, padding: 28,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 800, color: 'var(--sb-yellow-300)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8,
        }}>For your kid</div>
        <h3 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 18px' }}>
          No more lost money, no more "I forgot."
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {[
            "Nothing to lose: card replaces a wad of coins they'd lose anyway",
            'No "may baon ka ba?" — the wallet is loaded, they just scan',
            'Earn loyalty points for every meal — a small reward',
            'Healthy meals every day, planned by a nutritionist',
            'Allergies and halal needs are flagged on enrollment',
            'No queue stress — scan, take tray, sit down',
          ].map((s, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.45 }}>
              <span style={{
                width: 20, height: 20, borderRadius: 999, flexShrink: 0, marginTop: 2,
                background: 'var(--sb-yellow-300)', color: 'var(--sb-ink-900)',
                border: '1.5px solid var(--sb-ink-900)',
                display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 12,
              }}>✓</span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* For parents */}
      <div style={{
        background: 'rgba(229, 50, 42, 0.1)',
        border: '2px solid var(--sb-red-400)',
        borderRadius: 22, padding: 28,
      }}>
        <div style={{
          fontSize: 11, fontWeight: 800, color: 'var(--sb-red-300)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8,
        }}>For you, parent</div>
        <h3 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 18px' }}>
          See everything. Worry about nothing.
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {[
            "See every peso your kid spent — itemized, by the minute",
            "Know what they ate today — and what's coming tomorrow",
            'Top up the wallet from your phone, anytime',
            "Get an email alert before the wallet hits zero",
            'Subscriber? One predictable bill 10 months a year',
            'Send feedback to Ms. Nej directly — she actually reads it',
          ].map((s, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: 14.5, color: '#fff', fontWeight: 500, lineHeight: 1.45 }}>
              <span style={{
                width: 20, height: 20, borderRadius: 999, flexShrink: 0, marginTop: 2,
                background: 'var(--sb-red-500)', color: '#fff',
                border: '1.5px solid var(--sb-ink-900)',
                display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 12,
              }}>✓</span>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </HowSection>
);

export const HowCta = () => (
  <section style={{
    background: 'var(--sb-red-500)',
    padding: '88px 32px', position: 'relative', overflow: 'hidden',
    borderTop: '2.5px solid var(--sb-ink-900)',
  }}>
    <SbNoise opacity={0.08} />
    <div style={{
      maxWidth: 880, margin: '0 auto', textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <h2 style={{
        fontFamily: 'var(--font-body)', fontWeight: 900,
        fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.02,
        letterSpacing: '-0.02em', margin: '0 0 18px',
        color: '#fff', textWrap: 'balance',
      }}>
        Ready to set it up for your child?
      </h2>
      <p style={{
        fontSize: 19, color: 'rgba(255,255,255,0.9)', fontWeight: 500,
        maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.5,
      }}>
        Drop by any Sunbites canteen — Antipolo or Iloilo branch — and we'll
        walk you through enrollment, the wallet, and how the portal works.
        No appointment needed.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <SbButton variant="yellow" size="lg" href="Sunbites Landing Page.html#cta">
          Visit our canteen to inquire
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </SbButton>
        <SbButton variant="ghost" size="lg" href="Sunbites Landing Page.html">
          ← Back to home
        </SbButton>
      </div>
    </div>
  </section>
);