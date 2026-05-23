"use client";
import * as React from "react";
import { SbButton } from "@/components/primitives";

// Sticky top navigation
export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255, 249, 236, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1.5px solid var(--border-1)' : '1.5px solid transparent',
      transition: 'background 200ms ease, border-color 200ms ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/sunbites-logo.png" alt="Sunbites — Your Healthy Kitchen" style={{ height: 52, width: 'auto' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontWeight: 700, fontSize: 15 }}>
          <a href="#problem" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>The problem</a>
          <a href="#wallet" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>How it works</a>
          <a href="#menu" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>Menu &amp; plans</a>
          <a href="#products" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>Our apps</a>
          <a href="#parents" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>Parents</a>
        </div>

        <SbButton variant="primary" size="sm" href="#cta">
          Bring Sunbites to your school
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </SbButton>
      </div>
    </nav>
  );
};
export default Nav;
