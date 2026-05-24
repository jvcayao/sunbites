"use client";
import * as React from "react";
import { SbButton, SbBadge, SbNoise, SbHeart } from "@/components/primitives";

export const CTA = () => {
  return (
    <section id="cta" className="sb-section-pad" style={{
      background: 'var(--sb-red-500)',
      position: 'relative', overflow: 'hidden',
      borderTop: '2.5px solid var(--sb-ink-900)',
    }}>
      <SbNoise opacity={0.08} />

      {/* Decorative hearts */}
      {[
        { top: 60, left: '8%', size: 32, rot: -15, delay: 0 },
        { top: 80, right: '12%', size: 26, rot: 12, delay: 0.4 },
        { bottom: 60, left: '15%', size: 40, rot: 8, delay: 0.8 },
        { bottom: 80, right: '8%', size: 28, rot: -10, delay: 0.2 },
      ].map((h, i) => (
        <SbHeart key={i} size={h.size} style={{
          position: 'absolute', ...h,
          transform: `rotate(${h.rot}deg)`,
          filter: 'drop-shadow(3px 3px 0 var(--sb-ink-900))',
          animation: `sb-float ${3 + i * 0.3}s ease-in-out infinite ${h.delay}s`,
          opacity: 0.85,
        }} />
      ))}

      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SbBadge color="yellow">For school administrators & PTA leads</SbBadge>

        <h2 style={{
          fontFamily: 'var(--font-body)', fontWeight: 900,
          fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.98,
          letterSpacing: '-0.025em', margin: '20px 0 20px',
          color: '#FFFFFF', textWrap: 'balance',
        }}>
          Bring{' '}
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            color: 'var(--sb-yellow-300)',
            WebkitTextStroke: '2.5px var(--sb-ink-900)',
            display: 'inline-block',
          }}>Sunbites</span>{' '}
          to your school.
        </h2>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 20px)', color: 'rgba(255,255,255,0.92)',
          fontWeight: 500, maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.5,
        }}>
          We'll come visit, taste-test with your kids, and have your canteen
          serving real food in 6 weeks. No setup fee.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <SbButton variant="yellow" size="lg" href="#">
            Book a kitchen visit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </SbButton>
          <SbButton variant="ghost" size="lg" href="tel:+639074984172">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Contact us
          </SbButton>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, flexWrap: 'wrap', justifyContent: 'center' }}>
          <SbHeart size={16} />
          Already serving integrated-school branches in Antipolo &amp; Iloilo
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--sb-ink-900)', color: '#FFFFFF', padding: 'clamp(40px,6vw,64px) 20px 36px' }}>
      <div className="sb-container">
        <div className="sb-footer-grid">
          <div>
            <div style={{
              display: 'inline-block',
              background: 'var(--sb-cream-100)',
              padding: '8px 12px', borderRadius: 14,
              border: '2.5px solid var(--sb-ink-900)',
              boxShadow: '4px 4px 0 var(--sb-yellow-300)',
              marginBottom: 16,
            }}>
              <img src="/sunbites-logo.png" alt="Sunbites" style={{ height: 48, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', maxWidth: 320, lineHeight: 1.55 }}>
              A school canteen run by a real kitchen. Cooked fresh every morning by
              Ms. Nej and team. Serving Filipino school kids since 2023.
            </p>
          </div>
          {[
            {
              h: 'Explore',
              items: [
                { l: 'The problem', href: '#problem' },
                { l: 'How it works', href: '#wallet' },
                { l: "This week's menu", href: '#menu' },
                { l: 'Our apps', href: '#products' },
                { l: 'Parent stories', href: '#parents' },
              ],
            },
            {
              h: 'How to start',
              items: [
                { l: 'Visit our canteen', href: '#cta' },
                { l: 'Pricing & plans', href: '#menu' },
                { l: 'The QR wallet', href: '#wallet' },
                { l: 'Parent portal', href: '#portal' },
              ],
            },
            {
              h: 'Contact',
              items: [
                { l: 'sunbiteskitchen@gmail.com', href: 'mailto:sunbiteskitchen@gmail.com' },
                { l: '+63 907 498 4172', href: 'tel:+639074984172' },
                { l: 'Antipolo & Iloilo, Philippines', href: null },
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <div style={{
                fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--sb-yellow-300)', marginBottom: 14,
              }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {col.items.map((it, j) => (
                  <li key={j}>
                    {it.href ? (
                      <a href={it.href} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 13.5, fontWeight: 600 }}>{it.l}</a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, fontWeight: 600 }}>{it.l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: 22, display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 14,
          fontSize: 12.5, color: 'rgba(255,255,255,0.6)', fontWeight: 600,
        }}>
          <div>© 2025 Sunbites Kitchen Inc. — Made with ❤️ in the Philippines.</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="https://www.facebook.com/profile.php?id=61576901724784" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTA;
