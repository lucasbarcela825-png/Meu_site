@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
@import "tailwindcss";

/* ─── Custom Properties ─────────────────────────────── */
:root {
  --cream:     #F2EDE4;
  --cream-dark:#E8E0D0;
  --cream-mid: #DDD5C4;
  --ink:       #1A1916;
  --ink-mid:   #3A3830;
  --ink-light: #6B6760;
  --ink-faint: #A8A49E;
  --accent:    #1A1916;
  --line:      rgba(26,25,22,0.12);
  --line-strong: rgba(26,25,22,0.2);
}

/* ─── Reset ─────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--cream);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.6;
}

/* ─── Scrollbar ─────────────────────────────────────── */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--ink-faint); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--ink-mid); }

/* ─── Typography ────────────────────────────────────── */
.font-serif {
  font-family: 'Georgia', 'Times New Roman', serif;
}

/* ─── Section divider ───────────────────────────────── */
.divider {
  width: 100%;
  height: 1px;
  background: var(--line);
}

/* ─── Label text ─────────────────────────────────────── */
.label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
}

/* ─── Hover link underline ───────────────────────────── */
.underline-hover {
  position: relative;
  display: inline-block;
}
.underline-hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--ink);
  transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
}
.underline-hover:hover::after { width: 100%; }

/* ─── Marquee ────────────────────────────────────────── */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }

/* ─── Progress bar ───────────────────────────────────── */
.skill-bar-fill {
  height: 1px;
  background: var(--ink);
  transform-origin: left;
}

/* ─── Card hover ─────────────────────────────────────── */
.card-lift {
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1),
              box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
}
.card-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(26,25,22,0.08);
}

/* ─── Button ─────────────────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--ink);
  color: var(--cream);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--ink);
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  text-decoration: none;
}
.btn-primary:hover {
  background: transparent;
  color: var(--ink);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: transparent;
  color: var(--ink);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--line-strong);
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  text-decoration: none;
}
.btn-outline:hover {
  background: var(--ink);
  color: var(--cream);
  border-color: var(--ink);
}

/* ─── Number counter ─────────────────────────────────── */
.stat-number {
  font-family: 'Georgia', serif;
  font-size: 3rem;
  line-height: 1;
  color: var(--ink);
}

/* ─── Hero large text ────────────────────────────────── */
.hero-name {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.hero-tagline {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--ink-mid);
  line-height: 1.3;
}

/* ─── Section title ──────────────────────────────────── */
.section-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

/* ─── Noise texture (subtle) ─────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.6;
}

/* ─── Responsive helpers ─────────────────────────────── */
@media (max-width: 768px) {
  .hero-name { letter-spacing: -0.01em; }
}
