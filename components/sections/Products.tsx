"use client";
import * as React from "react";
import { SbButton, SbBadge, SbEyebrow, SbHighlight, SbNoise, SbHeart } from "@/components/primitives";

// Products section — promotes Sunbites Portal (parents) + Sunbites POS (staff)
//                  + Sunbites Card & Wallet system (all 3 LIVE per .kiro/specs)
// Mockups match the actual sunbites-portal & sunbites-pos Next.js apps;
// feature lists match the actual specs in sunbites-api/.kiro/specs/04-08.

// ===== Tiny inline icon set (matches lucide stroke + sizing) =====
const Ic = {
  dashboard: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>,
  cart:      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>,
  chart:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  users:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  wallet:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4z"/></svg>,
  pkg:       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  file:      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  archive:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>,
  cal:       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  userCog:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 0 4-4h4"/><circle cx="19" cy="15" r="2"/><path d="m18.5 19-1 1"/><path d="m20.5 19 1 1"/></svg>,
};

interface FeatureCheckProps {
  children: React.ReactNode;
  color?: string;
}

const FeatureCheck = ({ children, color = 'var(--sb-green-400)' }: FeatureCheckProps) => (
  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
      fontSize: 15, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}>
    <span style={{
      width: 18, height: 18, borderRadius: 999, background: color,
      color: '#fff', flexShrink: 0, marginTop: 2,
      display: 'grid', placeItems: 'center',
      border: '1.5px solid var(--sb-ink-900)',
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </span>
    {children}
  </li>
);

// ===== PORTAL MOCKUP — Parent app =====
const PortalMockup = () => (
  <div style={{
    background: '#FFFFFF',
    border: '2.5px solid var(--sb-ink-900)',
    borderRadius: 18,
    overflow: 'hidden',
    fontFamily: "'Poppins', var(--font-body)",
    color: 'var(--fg-1)',
    fontSize: 13,
  }}>
    {/* Browser chrome */}
    <div style={{
      background: '#F4F4F5', padding: '8px 12px',
      display: 'flex', alignItems: 'center', gap: 8,
      borderBottom: '1px solid #E4E4E7',
    }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FF5F57' }} />
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FEBC2E' }} />
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#28C840' }} />
      </div>
      <div style={{
        flex: 1, background: '#fff', borderRadius: 6,
        padding: '4px 10px', fontSize: 11, color: '#71717A',
        border: '1px solid #E4E4E7', maxWidth: 320, margin: '0 auto',
      }}>portal.sunbites.com.ph / dashboard</div>
    </div>

    {/* App topbar */}
    <div style={{
      background: '#FFFFFF', borderBottom: '1px solid #E4E4E7',
      padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          background: '#E5322A', color: '#fff',
          display: 'grid', placeItems: 'center',
          fontWeight: 800, fontSize: 16,
        }}>S</div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>Sunbites</div>
          <div style={{ fontSize: 10, color: '#71717A', fontWeight: 500 }}>Your Healthy Kitchen</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <div style={{ padding: '6px 10px', fontWeight: 600, color: '#E5322A', fontSize: 12 }}>Dashboard</div>
        <div style={{ padding: '6px 10px', fontSize: 12, color: '#27272A' }}>Meal Plan</div>
        <div style={{ padding: '6px 10px', fontSize: 12, color: '#27272A' }}>Feedback</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{
          width: 26, height: 26, borderRadius: 999,
          background: 'rgba(229,50,42,0.1)', color: '#E5322A',
          display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12,
        }}>L</div>
        <div style={{ fontSize: 11.5, fontWeight: 500 }}>Lyn Cruz</div>
      </div>
    </div>

    {/* Page body */}
    <div style={{ padding: 16, background: '#FAFAFA' }}>
      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>Hi, Lyn 👋</div>
      <div style={{ fontSize: 11.5, color: '#71717A', marginBottom: 12 }}>
        Here's Ivan's spending this week.
      </div>

      {/* Wallet balance card */}
      <div style={{
        background: '#FFFFFF', border: '1px solid #E4E4E7',
        borderRadius: 12, padding: 12, marginBottom: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#71717A' }}>Wallet balance</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#E5322A', lineHeight: 1, marginTop: 4 }}>
            ₱340.00
          </div>
          <div style={{ fontSize: 10, color: '#71717A', marginTop: 2 }}>
            Last top-up · ₱500 · Oct 14
          </div>
        </div>
        <div style={{
          padding: '6px 12px', borderRadius: 999, fontSize: 10.5, fontWeight: 700,
          background: '#E5322A', color: '#fff', border: '1.5px solid #1A1611',
        }}>Top up</div>
      </div>

      {/* Today's purchases */}
      <div style={{
        background: '#FFFFFF', border: '1px solid #E4E4E7',
        borderRadius: 12, padding: 12, marginBottom: 10,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700 }}>Today's purchases</div>
          <div style={{ fontSize: 10, color: '#71717A' }}>Mon · Oct 21</div>
        </div>
        {[
          { t: '10:42 AM', n: 'Subscription Meal Tray', a: '₱135.00' },
          { t: '11:08 AM', n: 'Additional Rice',         a: '₱10.00'  },
          { t: '11:09 AM', n: 'Snack C (Juice Box)',     a: '₱15.00'  },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '60px 1fr 70px',
            padding: '6px 0', borderTop: i === 0 ? 'none' : '1px solid #F4F4F5',
            fontSize: 11, alignItems: 'center', gap: 8,
          }}>
            <div style={{ color: '#71717A', fontVariantNumeric: 'tabular-nums' }}>{r.t}</div>
            <div style={{ fontWeight: 500 }}>{r.n}</div>
            <div style={{ fontWeight: 700, textAlign: 'right', color: '#E5322A' }}>{r.a}</div>
          </div>
        ))}
      </div>

      {/* This week stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { v: '₱160',  l: 'Today',      c: '#E5322A' },
          { v: '₱430',  l: 'This week',  c: '#1A1611' },
          { v: '⭐ 2',  l: 'Points',     c: '#F4B400' },
        ].map((s, i) => (
          <div key={i} style={{
            background: '#fff', border: '1px solid #E4E4E7', borderRadius: 10, padding: 10,
          }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: s.c, lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontSize: 10, color: '#71717A', marginTop: 4, fontWeight: 500 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ===== POS MOCKUP — Staff app =====
const PosMockup = () => {
  interface NavRowProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
  }
  const NavRow = ({ icon, label, active = false }: NavRowProps) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '5px 10px', fontSize: 11, fontWeight: active ? 700 : 500,
      color: active ? '#E5322A' : '#27272A',
      background: active ? 'rgba(229,50,42,0.1)' : 'transparent',
      borderLeft: active ? '3px solid #E5322A' : '3px solid transparent',
      borderRadius: '0 6px 6px 0',
    }}>
      {icon}{label}
    </div>
  );
  const GroupLabel = ({ children }: { children: React.ReactNode }) => (
    <div style={{
      fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: '#A1A1AA',
      padding: '8px 10px 4px',
    }}>{children}</div>
  );

  return (
    <div style={{
      background: '#FFFFFF',
      border: '2.5px solid var(--sb-ink-900)',
      borderRadius: 18,
      overflow: 'hidden',
      fontFamily: "'Poppins', var(--font-body)",
      color: 'var(--fg-1)',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#F4F4F5', padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
        borderBottom: '1px solid #E4E4E7',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FF5F57' }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FEBC2E' }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#28C840' }} />
        </div>
        <div style={{
          flex: 1, background: '#fff', borderRadius: 6,
          padding: '4px 10px', fontSize: 11, color: '#71717A',
          border: '1px solid #E4E4E7', maxWidth: 320, margin: '0 auto',
        }}>pos.sunbites.com.ph / dashboard</div>
      </div>

      {/* App body */}
      <div style={{ display: 'flex', height: 360 }}>
        {/* Sidebar */}
        <aside style={{
          width: 160, background: '#FAFAFA', borderRight: '1px solid #E4E4E7',
          display: 'flex', flexDirection: 'column', flexShrink: 0,
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '12px 10px', borderBottom: '1px solid #E4E4E7',
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: 999,
              background: '#E5322A', color: '#fff',
              display: 'grid', placeItems: 'center',
              fontWeight: 800, fontSize: 13,
            }}>S</div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 700, fontSize: 11 }}>Sunbites</div>
              <div style={{ fontSize: 8.5, color: '#71717A', fontWeight: 500 }}>Your Healthy Kitchen</div>
            </div>
          </div>
          {/* Branch badge */}
          <div style={{ padding: '8px 10px', borderBottom: '1px solid #E4E4E7' }}>
            <div style={{
              fontSize: 10, fontWeight: 600, color: '#27272A',
              padding: '4px 8px', border: '1px solid #E4E4E7',
              borderRadius: 999, textAlign: 'center', background: '#fff',
            }}>Antipolo</div>
          </div>
          {/* Nav */}
          <div style={{ flex: 1, padding: '4px 0', overflow: 'hidden' }}>
            <GroupLabel>Main</GroupLabel>
            <NavRow icon={Ic.dashboard} label="Dashboard" active />
            <NavRow icon={Ic.cart} label="POS" />
            <GroupLabel>Reports</GroupLabel>
            <NavRow icon={Ic.chart} label="Sales" />
            <NavRow icon={Ic.users} label="Students" />
            <NavRow icon={Ic.wallet} label="Wallet" />
            <NavRow icon={Ic.pkg} label="Inventory" />
            <NavRow icon={Ic.file} label="Daily Summary" />
            <GroupLabel>References</GroupLabel>
            <NavRow icon={Ic.archive} label="Inventory" />
            <NavRow icon={Ic.cal} label="Meal Planner" />
            <NavRow icon={Ic.userCog} label="Users" />
          </div>
        </aside>

        {/* Main column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Topbar */}
          <div style={{
            height: 44, borderBottom: '1px solid #E4E4E7', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 14px',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Dashboard</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                fontSize: 10, fontWeight: 600,
                padding: '3px 8px', border: '1px solid #E4E4E7',
                borderRadius: 999, background: '#F4F4F5',
              }}>Antipolo</div>
              <div style={{
                width: 24, height: 24, borderRadius: 999,
                background: 'rgba(229,50,42,0.1)', color: '#E5322A',
                display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 11,
              }}>N</div>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: 10.5, fontWeight: 600 }}>Ms. Nej</div>
                <div style={{ fontSize: 9, color: '#71717A' }}>admin</div>
              </div>
            </div>
          </div>

          {/* Dashboard cards */}
          <div style={{ padding: 14, background: '#FAFAFA', flex: 1, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10,
            }}>
              {[
                { v: '142',     l: 'Meals today',    c: '#E5322A' },
                { v: '₱9,230',  l: 'Revenue today',  c: '#3FAA4B' },
                { v: '18',      l: 'Wallet pays',    c: '#F4B400' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: '#fff', border: '1px solid #E4E4E7', borderRadius: 10, padding: 10,
                }}>
                  <div style={{ fontSize: 9, color: '#71717A', fontWeight: 600, marginBottom: 2,
                      textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: s.c, lineHeight: 1 }}>{s.v}</div>
                </div>
              ))}
            </div>
            <div style={{
              background: '#fff', border: '1px solid #E4E4E7', borderRadius: 10, padding: 10,
              fontSize: 10.5,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 11.5 }}>Today's transactions</div>
                <div style={{ fontSize: 10, color: '#71717A' }}>view all →</div>
              </div>
              {[
                { id: 'ANT-2025-001042', name: 'Ivan C.',    pay: 'Wallet', total: '₱160' },
                { id: 'ANT-2025-001041', name: 'Marian L.',  pay: 'Wallet', total: '₱150' },
                { id: 'ANT-2025-001040', name: 'Walk-In',    pay: 'Cash',   total: '₱65'  },
              ].map((r, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '105px 72px 1fr 56px',
                  padding: '6px 0', borderTop: i === 0 ? 'none' : '1px solid #F4F4F5',
                  fontSize: 10.5, alignItems: 'center',
                }}>
                  <div style={{ color: '#71717A', fontVariantNumeric: 'tabular-nums',
                      fontFamily: 'monospace', fontSize: 9.5 }}>{r.id}</div>
                  <div style={{ fontWeight: 600 }}>{r.name}</div>
                  <div style={{
                    padding: '2px 7px', borderRadius: 999, fontSize: 9, fontWeight: 700,
                    color: r.pay === 'Wallet' ? '#E5322A' : '#3FAA4B',
                    background: r.pay === 'Wallet' ? 'rgba(229,50,42,0.1)' : 'rgba(63,170,75,0.12)',
                    textAlign: 'center', justifySelf: 'start',
                  }}>{r.pay}</div>
                  <div style={{ fontWeight: 700, textAlign: 'right' }}>{r.total}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== SUNBITES QR STICKER MOCKUP (the printable card per Spec 05) =====
const SunbitesQrCard = () => (
  <div style={{
    width: '100%', maxWidth: 280,
    background: '#FFFFFF',
    border: '2.5px solid var(--sb-ink-900)',
    borderRadius: 18,
    boxShadow: '8px 8px 0 var(--sb-yellow-300), 8px 8px 0 2.5px var(--sb-ink-900)',
    color: 'var(--sb-ink-900)',
    position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  }}>
    {/* Branch + brand stripe */}
    <div style={{
      width: '100%',
      background: 'var(--sb-red-500)', color: '#fff',
      padding: '10px 18px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: '2.5px solid var(--sb-ink-900)',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1,
        WebkitTextStroke: '1px var(--sb-ink-900)',
      }}>Sunbites</div>
      <div style={{
        fontSize: 9, fontWeight: 800, letterSpacing: '0.14em',
        textTransform: 'uppercase',
      }}>Antipolo Branch</div>
    </div>

    <div style={{ padding: '14px 18px 18px', display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      {/* Student photo placeholder */}
      <div style={{
        width: 60, height: 60, borderRadius: 999,
        background: 'var(--sb-yellow-300)', border: '2px solid var(--sb-ink-900)',
        display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-display)', fontSize: 26,
        color: 'var(--sb-ink-900)',
        WebkitTextStroke: '1px var(--sb-ink-900)',
      }}>IC</div>

      {/* Name + grade */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1.1 }}>Ivan Cruz</div>
        <div style={{ fontSize: 11, color: 'var(--fg-3)', fontWeight: 600, marginTop: 2 }}>
          Grade 3 · Section Mabini
        </div>
      </div>

      {/* QR code */}
      <div style={{
        width: 130, height: 130, background: '#FFFFFF',
        border: '2px solid var(--sb-ink-900)', borderRadius: 10, padding: 6,
        position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%',
          backgroundImage: `
            linear-gradient(to right, var(--sb-ink-900) 50%, transparent 50%),
            linear-gradient(to bottom, var(--sb-ink-900) 50%, transparent 50%)`,
          backgroundSize: '7px 100%, 100% 7px',
          backgroundRepeat: 'repeat',
        }} />
        {/* corner finder patterns */}
        {[{ top: 6, left: 6 }, { top: 6, right: 6 }, { bottom: 6, left: 6 }].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', ...pos,
            width: 26, height: 26, background: '#fff',
            boxShadow: 'inset 0 0 0 4px var(--sb-ink-900), inset 0 0 0 8px #fff, inset 0 0 0 12px var(--sb-ink-900)',
          }} />
        ))}
      </div>

      {/* QR ID */}
      <div style={{
        fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.14em',
        fontWeight: 700, color: 'var(--fg-2)',
      }}>SB-AX7K3M9P2QR8</div>
    </div>
  </div>
);

export const Products = () => {
  return (
    <section id="products" style={{
      background: 'var(--sb-cream-100)',
      padding: '120px 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 820, marginBottom: 56 }}>
          <SbEyebrow>The Sunbites platform</SbEyebrow>
          <h2 style={{ margin: '0 0 20px' }}>
            Real food, backed by <SbHighlight>real tools</SbHighlight>.
          </h2>
          <p style={{ fontSize: 19, maxWidth: 720 }}>
            Two apps and a QR-based wallet system, all working together. One
            for parents to stay in the loop, one for the canteen counter — and
            a printable QR in every kid's pocket so lunch is one scan away.
          </p>
        </div>

        {/* Portal + POS — 2-up */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 32, marginBottom: 56, alignItems: 'stretch',
        }}>
          {/* PORTAL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <PortalMockup />
            <div style={{ padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <SbBadge color="green">Available now</SbBadge>
                <SbBadge color="cream">For parents</SbBadge>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 800, margin: '4px 0 8px',
                  letterSpacing: '-0.02em', color: 'var(--fg-1)' }}>
                Sunbites Portal
              </h3>
              <p style={{ fontSize: 16, color: 'var(--fg-2)', margin: '0 0 16px', lineHeight: 1.5 }}>
                Sign in from your phone or laptop and watch over your kid's
                canteen day — what they ate, what's left in their wallet, and
                what's cooking tomorrow.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 8 }}>
                <FeatureCheck>See today's purchases, this week, this month — itemized</FeatureCheck>
                <FeatureCheck>Top up the wallet anytime, get a low-balance email alert</FeatureCheck>
                <FeatureCheck>View the weekly meal plan: Ulam · Vegetables · Fruit · Soup</FeatureCheck>
                <FeatureCheck>Track monthly subscription payments (Jun – Mar)</FeatureCheck>
                <FeatureCheck>Send feedback straight to the kitchen — they reply</FeatureCheck>
              </ul>
              <SbButton variant="primary" size="md" href="#cta">
                Request a parent account
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </SbButton>
            </div>
          </div>

          {/* POS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <PosMockup />
            <div style={{ padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <SbBadge color="green">Available now</SbBadge>
                <SbBadge color="cream">For canteens</SbBadge>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 800, margin: '4px 0 8px',
                  letterSpacing: '-0.02em', color: 'var(--fg-1)' }}>
                Sunbites POS
              </h3>
              <p style={{ fontSize: 16, color: 'var(--fg-2)', margin: '0 0 16px', lineHeight: 1.5 }}>
                The kitchen-counter app. QR-scan a student, ring up their meal,
                deduct from the wallet — all in seconds. Multi-branch from day
                one. Built for fast recess lines.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 8 }}>
                <FeatureCheck>QR scan or name search to identify any student</FeatureCheck>
                <FeatureCheck>Pay by Cash, GCash, or Student Wallet — pick at checkout</FeatureCheck>
                <FeatureCheck>Sales · Students · Wallet · Inventory · Daily Summary reports</FeatureCheck>
                <FeatureCheck>Multi-branch: Antipolo &amp; Iloilo on one platform</FeatureCheck>
                <FeatureCheck>Role-based access (Admin / Manager / Supervisor / Cashier)</FeatureCheck>
                <FeatureCheck>Every transaction logged for audit</FeatureCheck>
              </ul>
              <SbButton variant="primary" size="md" href="#cta">
                Book a canteen demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </SbButton>
            </div>
          </div>
        </div>

        {/* Sunbites Card & Wallet — third pillar, LIVE */}
        <div style={{
          background: 'var(--sb-ink-900)', color: '#fff',
          borderRadius: 28, border: '2.5px solid var(--sb-ink-900)',
          padding: '48px 40px', position: 'relative', overflow: 'hidden',
        }}>
          <SbNoise opacity={0.1} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: 56, alignItems: 'center', position: 'relative',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                <SbBadge color="green">QR system · live now</SbBadge>
                <SbBadge color="yellow">Every Sunbites kid gets one</SbBadge>
              </div>
              <h3 style={{
                fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900,
                letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 18px',
                color: '#fff', textWrap: 'balance',
              }}>
                The Sunbites <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400,
                  color: 'var(--sb-yellow-300)',
                  WebkitTextStroke: '2px var(--sb-ink-900)',
                  display: 'inline-block',
                }}>QR</span> &amp; Wallet
              </h3>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500, lineHeight: 1.5, margin: '0 0 28px' }}>
                Every enrolled student gets a <strong style={{ color: '#fff' }}>printed QR</strong>
                {' '}linked to a digital wallet. Parents top it up, kids scan at
                the counter, and the system deducts the meal cost — no cash to
                lose, no "I forgot my lunch money" texts at 11 AM.
              </p>

              {/* 4-step flow */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
                {[
                  { n: '1', t: 'Enroll',  s: 'We print the QR' },
                  { n: '2', t: 'Top up',  s: 'Cash · GCash · Bank' },
                  { n: '3', t: 'Scan',    s: 'Kid scans at counter' },
                  { n: '4', t: 'Earn',    s: '1 pt per ₱1,000 spent' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    borderRadius: 12, padding: 12,
                  }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: 999,
                      background: 'var(--sb-yellow-300)', color: 'var(--sb-ink-900)',
                      border: '2px solid var(--sb-ink-900)',
                      display: 'grid', placeItems: 'center',
                      fontWeight: 900, fontSize: 12, marginBottom: 8,
                    }}>{s.n}</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{s.t}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)',
                        fontWeight: 500, marginTop: 2 }}>{s.s}</div>
                  </div>
                ))}
              </div>

              {/* Coming-soon callout for physical card */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 16px', marginBottom: 20,
                background: 'rgba(255, 210, 63, 0.08)',
                border: '1.5px dashed rgba(255, 210, 63, 0.5)',
                borderRadius: 14,
              }}>
                <div style={{
                  flexShrink: 0,
                  padding: '4px 10px', borderRadius: 999,
                  background: 'var(--sb-yellow-300)', color: 'var(--sb-ink-900)',
                  border: '2px solid var(--sb-ink-900)',
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>Coming soon</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                  <strong style={{ color: '#fff' }}>Plastic &amp; NFC student cards</strong>
                  {' — '}a tap-to-pay physical card upgrade is planned for next school year.
                  The printed QR keeps working in the meantime.
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 18 }}>
                <SbButton variant="yellow" size="md" href="#cta">
                  Visit our canteen to inquire →
                </SbButton>
                <SbButton variant="plain" size="md" href="#wallet"
                  style={{ color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.3)' }}>
                  How the wallet works →
                </SbButton>
              </div>

              <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                  display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                <span>Up to ₱300 emergency credit</span><span>·</span>
                <span>Inline reload at the counter</span><span>·</span>
                <span>Lost-QR replacement in minutes</span>
              </div>
            </div>

            {/* QR sticker visual */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ transform: 'rotate(-4deg)' }}>
                <SunbitesQrCard />
              </div>
              <SbHeart size={26} style={{
                position: 'absolute', top: -8, right: 20,
                animation: 'sb-float 3s ease-in-out infinite',
                filter: 'drop-shadow(2px 2px 0 var(--sb-ink-900))',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
