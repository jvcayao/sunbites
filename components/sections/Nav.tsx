"use client";
import * as React from "react";
import { SbButton } from "@/components/primitives";

export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#problem', label: 'The problem' },
    { href: '#wallet', label: 'How it works' },
    { href: '#menu', label: 'Menu & plans' },
    { href: '#products', label: 'Our apps' },
    { href: '#parents', label: 'Parents' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255, 249, 236, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1.5px solid var(--border-1)' : '1.5px solid transparent',
      transition: 'background 200ms ease, border-color 200ms ease',
    }}>
      <div className="sb-nav-inner">
        <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/sunbites-logo.png" alt="Sunbites — Your Healthy Kitchen" style={{ height: 44, width: 'auto' }} />
        </a>

        {/* Desktop nav links */}
        <div className="sb-nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="sb-nav-cta">
          <SbButton variant="primary" size="sm" href="https://portal.sunbites.com.ph/login">
            Login to Parent{"'"}s Portal
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </SbButton>
        </div>

        {/* Hamburger */}
        <button
          className="sb-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none', border: '2px solid var(--sb-ink-900)',
            borderRadius: 10, padding: '8px 10px', cursor: 'pointer',
            color: 'var(--fg-1)',
          }}
        >
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sb-mobile-menu${menuOpen ? ' open' : ''}`}
        style={{ background: 'var(--sb-cream-100)', borderTop: '1.5px solid var(--border-1)' }}
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', padding: '16px 20px',
              color: 'var(--fg-1)', textDecoration: 'none',
              fontWeight: 700, fontSize: 16,
              borderBottom: '1px solid var(--border-1)',
            }}
          >
            {l.label}
          </a>
        ))}
        <div style={{ padding: '16px 20px' }}>
          <SbButton variant="primary" size="md" href="#cta" onClick={() => setMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
            Bring Sunbites to your school →
          </SbButton>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
