import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EnergySense AI — Vijayeta Meher',
  description: "Democratising energy management for India's commercial buildings.",
}

const A = '#0c766a'
const SEC = '1px solid rgba(15,20,23,.09)'
const ROW = '1px solid rgba(15,20,23,.07)'
const mono = 'var(--font-mono)'

// ── Data ──────────────────────────────────────────────────

const GLANCE = [
  { k: 'Product type',  v: 'AI-powered energy management SaaS' },
  { k: 'Target market', v: 'Commercial buildings, India (SME segment)' },
  { k: 'AI stack',      v: 'Claude Sonnet 4.6 (analysis/chat), Voyage AI voyage-3-lite (embeddings), Supabase pgvector' },
  { k: 'Eval coverage', v: '12 upload-pipeline checks + 15 RAG regression evals in CI' },
  { k: 'Guardrails',    v: '11 pre-model controls (input, security, cost, reliability)' },
  { k: 'Role',          v: 'Solo PM + builder — research, strategy, architecture, evals, deployment' },
]

const INTERVIEWS = [
  { role: 'Energy Managers',      count: 6, goal: 'Monitor consumption' },
  { role: 'Facility Managers',    count: 5, goal: 'Reduce operating cost' },
  { role: 'Sustainability Leads', count: 4, goal: 'ESG reporting' },
  { role: 'Operations Engineers', count: 3, goal: 'Investigate anomalies' },
]

const PAIN_POINTS = [
  'Too much data but very little insight',
  'Energy reports are reactive, not proactive',
  'Manual root-cause analysis takes hours',
  'Building managers lack in-house AI expertise',
  'No conversational interface to just ask a question',
]

const JTBD = [
  { when: 'Energy usage suddenly spikes',  want: 'understand the cause within minutes',   so: 'avoid costly downtime' },
  { when: 'Weekly report is due',          want: 'generate reports automatically',         so: 'save analyst effort' },
  { when: 'Building performance drops',    want: 'receive proactive recommendations',      so: 'reduce energy costs' },
  { when: 'Executive asks for insights',   want: 'ask questions in plain English',         so: 'avoid manual dashboard analysis' },
]

const BETS = [
  { k: '01', t: 'India-first design',             d: "Built natively for INR pricing, DISCOM tariff structures (ToD, demand charges), and BEE star ratings — not a Western adaptation." },
  { k: '02', t: 'Zero hardware dependency',       d: "Works directly from existing CSV/Excel files. Zero capex, no lock-in. First insight in under 5 minutes." },
  { k: '03', t: 'LLM-powered explanations',       d: "Moves beyond rule-based anomaly flags. The AI explains why something happened and what to do about it, in plain language." },
  { k: '04', t: 'Conversational, first-class UI', d: `"Chat with your data" is the primary interaction layer from Phase 1 — turning a passive dashboard into an active decision engine.` },
]

const POSITIONING = [
  { row: 'Pricing',              bench: 'Sales-assisted / custom enterprise', es: 'Affordable self-serve SaaS' },
  { row: 'Hardware requirement', bench: 'Proprietary IoT sensors',            es: 'Any CSV/Excel — zero capex' },
  { row: 'AI layer',             bench: 'Rule-based anomaly flags',           es: 'LLM plain-English explanations' },
  { row: 'Onboarding time',      bench: 'Weeks of implementation',            es: '< 5 minutes, upload-and-go' },
  { row: 'Interface',            bench: 'Passive dashboard',                  es: 'Conversational AI chat' },
  { row: 'Market focus',         bench: 'Western enterprise',                 es: 'India-first (Tier-2, DISCOM, BEE)' },
]

const RICE = [
  { feature: 'Upload + KPI dashboard', reach: '100 users/qtr', impact: '3',    confidence: '100%', effort: '2 wks',   score: 150 },
  { feature: 'Energy reports',          reach: '100 users/qtr', impact: '2',    confidence: '80%',  effort: '1.5 wks', score: 107 },
  { feature: 'AI chat (RAG)',           reach: '80 users/qtr',  impact: '3',    confidence: '70%',  effort: '3 wks',   score: 56 },
  { feature: 'Carbon dashboard',        reach: '40 users/qtr',  impact: '2',    confidence: '50%',  effort: '2 wks',   score: 20 },
  { feature: 'Voice assistant',         reach: '10 users/qtr',  impact: '1',    confidence: '30%',  effort: '4 wks',   score: 0.75 },
]

const FEATURES_REJECTED = [
  { feature: 'Voice Assistant',        why: 'No user demand signal' },
  { feature: 'Mobile App',             why: 'Desktop is the primary workflow' },
  { feature: 'Predictive Maintenance', why: 'Requires more historical data than SMEs have' },
  { feature: 'Auto Device Control',    why: 'Safety risk without hardware integration' },
]

const DECISIONS = [
  { problem: 'Model selection',  options: 'Sonnet 4.6, Opus, GPT-4o, Gemini',   choice: 'Claude Sonnet 4.6',              why: "Best reasoning-to-cost ratio for outputting valid JSON and conversational prose from a single model." },
  { problem: 'RAG architecture', options: 'Pure context, pure RAG, hybrid',      choice: 'Hybrid context',                 why: "Always inject the specific user's data; dynamically retrieve heavy domain knowledge only when needed." },
  { problem: 'Embeddings',       options: 'OpenAI, Voyage AI, local',            choice: 'Voyage AI (voyage-3-lite)',       why: "Anthropic's recommended partner; asymmetric embeddings yield better cosine-similarity ranking." },
  { problem: 'Chunking design',  options: 'Structured data, prose, short facts', choice: 'Dense prose paragraphs (~300 tok)', why: 'LLMs reason better from prose than tables; enables "why" follow-up questions.' },
  { problem: 'Cost control',     options: 'Full history, cache, hard cap',       choice: 'Hard token budget',              why: 'A 10-message cap keeps pricing predictable regardless of conversation length.' },
]

const EVALS = [
  { cat: 'Retrieval accuracy', n: 5 },
  { cat: 'Grounding quality',  n: 4 },
  { cat: 'Hybrid context',     n: 3 },
  { cat: 'Edge cases',         n: 3 },
]

const GUARDRAILS = [
  { cat: 'Input validation', n: 4, items: ['XSS sanitisation', 'min/max length caps', 'empty-input blocks', 'input size limits'] },
  { cat: 'Security',         n: 3, items: ['Prompt-injection regex', 'Regex for Indian mobile/Aadhaar data', 'Hard blocks for off-topic requests'] },
  { cat: 'Reliability',      n: 2, items: ['30-second API timeout triggers', 'Mapping Anthropic API errors to friendly messages'] },
  { cat: 'Cost control',     n: 2, items: ['Duplicate-message guard (cached replies)', 'Prompt-length opportunity checks'] },
]

const HYPOTHESES = [
  { metric: 'Report generation',         baseline: '45 min', hypothesis: '5 min' },
  { metric: 'Root-cause investigation',  baseline: '3 hrs',  hypothesis: '10 min' },
  { metric: 'Achievable energy savings', baseline: '~2%',    hypothesis: '10–20%' },
]

const SYNTHESIS = [
  { constraint: 'Zero capex budget for target market',  outcome: 'Engineered a robust CSV-parsing pipeline instead of relying on expensive physical IoT sensors.' },
  { constraint: 'Strict prototype demo budget',         outcome: 'Developed a hybrid RAG architecture with a hard 10-message token cap, bounding cost at $0.005 per turn.' },
  { constraint: 'Solo PM operating without a QA team', outcome: 'Built the automated evalAndFix retry loop and the 15-point CI regression suite to self-enforce the quality contract.' },
]

// ── Shared primitives ─────────────────────────────────────

function SL({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
      <span style={{ fontFamily: mono, fontSize: 13, color: A }}>{n}</span>
      <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.16em', color: '#99a1a7' }}>{label}</span>
    </div>
  )
}

function H2({ children, maxW = '24ch', mb = 28 }: { children: React.ReactNode; maxW?: string; mb?: number }) {
  return (
    <h2 style={{ margin: `0 0 ${mb}px`, fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.1, maxWidth: maxW }}>
      {children}
    </h2>
  )
}

function THead({ cols, widths }: { cols: string[]; widths: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: widths, borderBottom: SEC, fontFamily: mono, fontSize: 10, letterSpacing: '.1em', color: '#99a1a7' }}>
      {cols.map((c, i) => (
        <span key={i} style={{ padding: '9px 14px', borderLeft: i > 0 ? SEC : undefined }}>{c}</span>
      ))}
    </div>
  )
}

const W = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' }
const S = { padding: '68px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }

// ── Page ──────────────────────────────────────────────────

export default function EnergySensePage() {
  return (
    <>
      <nav className="es-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
        background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(15,20,23,.08)',
      }}>
        <Link href="/#cases" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#0f1417' }}>
          <span style={{ fontFamily: mono, fontSize: 13, color: A }}>←</span>
          <span style={{ fontWeight: 600, letterSpacing: '.04em', fontSize: 14 }}>VIJAYETA MEHER</span>
        </Link>
        <span className="es-hide-sm" style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7' }}>AI LAB · CASE STUDY 01</span>
      </nav>

      <main style={{ paddingTop: 52 }}>

        {/* ── HEADER ── */}
        <header className="es-header" style={{ position: 'relative', padding: '96px 40px 56px', borderBottom: '1px solid rgba(15,20,23,.08)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(15,20,23,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(15,20,23,.045) 1px,transparent 1px)',
            backgroundSize: '62px 62px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
            maskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
          }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.18em', color: A, marginBottom: 18 }}>AI LAB · CASE STUDY 01</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(34px,5.6vw,72px)', fontWeight: 600, lineHeight: .98, letterSpacing: '-.03em', maxWidth: '16ch' }}>EnergySense AI</h1>
            <p style={{ margin: '14px 0 0', fontSize: 'clamp(16px,1.8vw,22px)', fontWeight: 500, color: '#2c343a', maxWidth: '26ch' }}>
              Democratising energy management for India&apos;s commercial buildings.
            </p>
            <p style={{ margin: '16px 0 0', maxWidth: '64ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Empowering every facility manager to make energy optimisation decisions with the speed and intelligence of an expert energy consultant — no hardware, no six-figure retainer.
            </p>
            <div className="es-links" style={{ display: 'flex', gap: 12, marginTop: 20, marginBottom: 36 }}>
              <a href="https://energysense-ai.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', padding: '9px 18px', color: '#fff', background: A, textDecoration: 'none' }}>
                Live app →
              </a>
              {/* FILL: replace href="#" with Loom/YouTube demo URL when recorded */}
              <a href="#"
                style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', padding: '9px 18px', color: '#2c343a', border: '1px solid rgba(15,20,23,.18)', textDecoration: 'none' }}>
                90-sec demo →
              </a>
            </div>
            <div style={{ border: SEC, background: '#fff', maxWidth: 820 }}>
              <div style={{ padding: '8px 18px', borderBottom: SEC, fontFamily: mono, fontSize: 10, letterSpacing: '.14em', color: '#99a1a7' }}>AT A GLANCE</div>
              {GLANCE.map((g, i) => (
                <div key={g.k} className="es-glance" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '10px 18px', borderBottom: i < GLANCE.length - 1 ? '1px solid rgba(15,20,23,.06)' : undefined }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: A }}>{g.k}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{g.v}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── 01 THE PROBLEM ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="01" label="THE PROBLEM" />
            <H2 maxW="20ch" mb={14}>A translation problem, not a data problem.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '66ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Facility managers know their bills are high, but lack the tools to identify why. EnergySense AI uses large language models to translate raw utility data into plain-English actions — without expensive consultants or hardware lock-in.
            </p>
            <div className="es-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '28px 24px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: '#99a1a7', letterSpacing: '.1em', marginBottom: 12 }}>THE 5%</div>
                <div style={{ fontSize: 'clamp(38px,4.5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', color: '#0f1417', lineHeight: 1 }}>5%</div>
                <p style={{ margin: '14px 0 0', fontSize: 13.5, lineHeight: 1.6, color: '#5b6670' }}>Large enterprises with six-figure hardware budgets and dedicated implementation teams — served today by tools like Schneider Electric&apos;s EcoStruxure.</p>
              </div>
              <div style={{ background: '#fff', padding: '28px 24px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: A, letterSpacing: '.1em', marginBottom: 12 }}>THE 95%</div>
                <div style={{ fontSize: 'clamp(38px,4.5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', color: A, lineHeight: 1 }}>95%</div>
                <p style={{ margin: '14px 0 0', fontSize: 13.5, lineHeight: 1.6, color: '#5b6670' }}>Over 5 million Indian commercial buildings, forced to decode DISCOM PDFs and spreadsheets by hand, once a quarter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 CUSTOMER DISCOVERY ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="02" label="CUSTOMER DISCOVERY" />
            <H2 maxW="22ch" mb={14}>Validated before it was built, not after.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '66ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Insights drawn from 18 conversations with energy and facility professionals, supplemented by desk research grounded in 13 years of hands-on energy management.
            </p>
            <div className="es-table-scroll" style={{ marginBottom: 24 }}>
              <div className="es-table" style={{ border: SEC }}>
                <THead cols={['ROLE INTERVIEWED', 'COUNT', 'PRIMARY GOAL']} widths="1.3fr .6fr 1.7fr" />
                {INTERVIEWS.map((iv, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.3fr .6fr 1.7fr', borderBottom: i < INTERVIEWS.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{iv.role}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 13, color: A }}>{iv.count}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#4b5660' }}>{iv.goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="es-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '22px 24px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>TOP PAIN POINTS</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {PAIN_POINTS.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 13.5, lineHeight: 1.5, color: '#2c343a' }}>
                      <span style={{ width: 6, height: 6, background: '#c05c2a', flexShrink: 0, display: 'inline-block', transform: 'translateY(-1px)' }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '22px 24px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 14 }}>OPPORTUNITY STATEMENT</div>
                <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.6, color: '#0f1417', fontWeight: 500 }}>Enterprise energy teams need an AI assistant that explains why energy consumption changed, recommends corrective actions, and automates repetitive analysis.</p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#6b757d', fontStyle: 'italic' }}>The archetypal user: a facility manager overseeing 15+ buildings with zero data-science support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 JOBS TO BE DONE ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="03" label="JOBS TO BE DONE" />
            <H2 maxW="24ch">What customers hire EnergySense AI to do.</H2>
            <div className="es-table-scroll">
              <div className="es-table" style={{ border: SEC }}>
                <THead cols={['WHEN...', 'I WANT TO...', 'SO I CAN...']} widths="1.3fr 1.4fr 1.3fr" />
                {JTBD.map((j, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.4fr 1.3fr', borderBottom: i < JTBD.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13, color: '#2c343a' }}>{j.when}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, fontWeight: 600, color: '#0f1417' }}>{j.want}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#6b757d' }}>{j.so}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 STRATEGY & POSITIONING ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="04" label="STRATEGY & POSITIONING" />
            <H2 maxW="26ch">Four strategic bets and why they beat the enterprise benchmark.</H2>
            <div className="es-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 28 }}>
              {BETS.map(b => (
                <div key={b.k} style={{ background: '#fff', padding: '20px 18px' }}>
                  <div style={{ fontFamily: mono, fontSize: 12, color: A, marginBottom: 14 }}>{b.k}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 10, lineHeight: 1.25, color: '#0f1417' }}>{b.t}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: '#5b6670' }}>{b.d}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>VS. THE BENCHMARK</div>
            <div className="es-table-scroll">
              <div className="es-table" style={{ border: SEC }}>
                <THead cols={['', 'ECOSTRUXURE ENERGY HUB (BENCHMARK)', 'ENERGYSENSE AI (SME)']} widths="1.4fr 1.6fr 1.6fr" />
                {POSITIONING.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 1.6fr', borderBottom: i < POSITIONING.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13, fontWeight: 600, color: '#0f1417' }}>{p.row}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#6b757d' }}>{p.bench}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#2c343a', fontWeight: 500 }}>{p.es}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 1, border: SEC, borderTop: 'none', padding: '14px 18px', background: '#f5f7f7' }}>
              <span style={{ fontWeight: 600, color: '#0f1417', fontSize: 13.5 }}>The unfair advantage: </span>
              <span style={{ color: '#4b5660', fontSize: 13.5, lineHeight: 1.6 }}>EnergySense is seeded with India-specific energy standards — power factor regulations, BEE ratings, DISCOM tariff structures — that Western enterprise tools lack.</span>
            </div>
          </div>
        </section>

        {/* ── 05 PRIORITIZATION ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="05" label="PRIORITIZATION — WHAT SHIPPED, WHAT DIDN'T" />
            <H2 maxW="26ch" mb={14}>RICE sequenced the roadmap. Strategy governed where it was headed.</H2>
            <p style={{ margin: '0 0 24px', maxWidth: '70ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              RICE correctly sequenced the roadmap — dashboard and reports shipped first because they were high-confidence, low-effort. AI Chat scored lower precisely because its confidence was unproven, so it shipped in Phase 1.5 after the data pipeline de-risked it. The framework governed sequencing; Bet 04 governed direction.
            </p>
            <div className="es-table-scroll" style={{ marginBottom: 24 }}>
              <div className="es-table-wide" style={{ border: SEC }}>
                <THead cols={['FEATURE', 'REACH', 'IMPACT (0.25–3)', 'CONFIDENCE', 'EFFORT', 'RICE SCORE']} widths="1.6fr 1fr .9fr .9fr .9fr .8fr" />
                {RICE.map((rc, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr .9fr .9fr .9fr .8fr', borderBottom: i < RICE.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{rc.feature}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 12.5, color: '#6b757d' }}>{rc.reach}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 12.5, color: '#6b757d' }}>{rc.impact}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 12.5, color: '#6b757d' }}>{rc.confidence}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 12.5, color: '#6b757d' }}>{rc.effort}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 13.5, fontWeight: 600, color: A }}>{rc.score}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>CUT FROM V1</div>
            <div style={{ border: SEC }}>
              <THead cols={['FEATURE', 'WHY REJECTED']} widths="1fr 1.8fr" />
              {FEATURES_REJECTED.map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', borderBottom: i < FEATURES_REJECTED.length - 1 ? ROW : undefined }}>
                  <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{r.feature}</span>
                  <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#6b757d' }}>{r.why}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 ARCHITECTURE ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="06" label="ARCHITECTURE" />
            <H2 maxW="26ch">A dual-flow architecture built around user value and cost efficiency.</H2>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 12 }}>FLOW 1 — UPLOAD ANALYSIS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                {['UI Upload', 'Vercel Backend', null, 'Structured JSON DB'].map((node, i) =>
                  node === null
                    ? <span key={i} style={{ fontFamily: mono, fontSize: 12, border: `1px solid rgba(12,118,106,.3)`, padding: '7px 12px', color: A }}>Claude Sonnet 4.6</span>
                    : <span key={i} style={{ fontFamily: mono, fontSize: 12, border: '1px solid rgba(15,20,23,.14)', padding: '7px 12px', color: '#2c343a' }}>{node}</span>
                ).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`a${i}`} style={{ color: '#99a1a7' }}>→</span>, el], [])}
              </div>
              <p style={{ margin: '10px 0 0', fontSize: 13, color: '#6b757d', maxWidth: '60ch' }}>A single API call handles both structured JSON parsing and natural-language generation.</p>
            </div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 12 }}>FLOW 2 — RAG CHAT</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                {['User Query', 'Voyage AI Embeddings', 'Supabase pgvector', 'Context Injection', null].map((node, i) =>
                  node === null
                    ? <span key={i} style={{ fontFamily: mono, fontSize: 12, border: `1px solid rgba(12,118,106,.3)`, padding: '7px 12px', color: A }}>Claude API</span>
                    : <span key={i} style={{ fontFamily: mono, fontSize: 12, border: '1px solid rgba(15,20,23,.14)', padding: '7px 12px', color: '#2c343a' }}>{node}</span>
                ).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`a${i}`} style={{ color: '#99a1a7' }}>→</span>, el], [])}
              </div>
              <p style={{ margin: '10px 0 0', fontSize: 13, color: '#6b757d', maxWidth: '60ch' }}>Supabase handles similarity search — avoiding a secondary vector-database vendor and keeping the stack lean. Building context (floor area, type) is injected into every prompt for bespoke recommendations. Each analysis gets a permanent, shareable URL — driving alignment without a separate reporting layer.</p>
            </div>
            <div style={{ border: SEC, padding: '18px 22px' }}>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: '#0f1417', fontWeight: 500 }}>&quot;Every architectural decision was justified by user value or operational cost, never by engineering preference.&quot;</p>
            </div>
          </div>
        </section>

        {/* ── 07 KEY AI DECISIONS ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="07" label="KEY AI DECISIONS" />
            <H2 maxW="26ch">Five rigorous tradeoffs balancing reasoning, speed, and cost.</H2>
            <div className="es-table-scroll" style={{ marginBottom: 22 }}>
              <div className="es-table-wide" style={{ border: SEC }}>
                <THead cols={['PROBLEM / CHOICE', 'OPTIONS CONSIDERED', 'PM RATIONALE']} widths="1.1fr 1.3fr 1.6fr" />
                {DECISIONS.map((d, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr 1.6fr', borderBottom: i < DECISIONS.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '13px 14px' }}>
                      <span style={{ display: 'block', fontSize: 12.5, color: '#99a1a7', marginBottom: 4 }}>{d.problem}</span>
                      <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: A }}>{d.choice}</span>
                    </span>
                    <span style={{ padding: '13px 14px', borderLeft: ROW, fontSize: 12.5, lineHeight: 1.5, color: '#6b757d' }}>{d.options}</span>
                    <span style={{ padding: '13px 14px', borderLeft: ROW, fontSize: 13, lineHeight: 1.55, color: '#2c343a' }}>{d.why}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="es-token" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '22px 24px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>TOKEN ECONOMICS</div>
                <p style={{ margin: '0 0 14px', fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>The knowledge base contains 20 chunks of Indian energy domain knowledge (~7,200 tokens). Injecting all of it on every turn would be expensive, slow, and redundant. Instead, the system retrieves only the 3 most relevant chunks per query, holding a deliberate ceiling of ~1,460 tokens per chat turn.</p>
                <div style={{ display: 'flex', gap: 28, marginTop: 16 }}>
                  <div>
                    <div style={{ fontSize: 14, color: '#99a1a7', textDecoration: 'line-through' }}>7,200 tok</div>
                    <div style={{ fontFamily: mono, fontSize: 10, color: '#99a1a7', marginTop: 4 }}>NAIVE CONTEXT</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#0f1417' }}>~1,460 tok</div>
                    <div style={{ fontFamily: mono, fontSize: 10, color: '#99a1a7', marginTop: 4 }}>HYBRID RETRIEVAL</div>
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', padding: '22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, borderLeft: SEC }}>
                <div>
                  <div style={{ fontSize: 'clamp(28px,3vw,42px)', fontWeight: 600, letterSpacing: '-.03em', color: A, lineHeight: 1 }}>−80%</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#6b757d', marginTop: 6 }}>token cost, vs. naive context</div>
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(28px,3vw,42px)', fontWeight: 600, letterSpacing: '-.03em', color: '#0f1417', lineHeight: 1 }}>$0.005</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#6b757d', marginTop: 6 }}>cost per chat turn</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 QUALITY & SAFETY ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="08" label="QUALITY & SAFETY" />
            <H2 maxW="26ch">Two quality gates enforce the product&apos;s own contract.</H2>
            <div className="es-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
              <div style={{ border: SEC, padding: '20px 22px' }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12, color: '#0f1417' }}>Gate 1 — the evalAndFix loop</div>
                <p style={{ margin: '0 0 12px', fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>Every parsed CSV runs through an eval gate. 5 structural checks (trimming extra anomalies, lowercasing flags) are silently auto-fixed with no API retry. 7 targeted checks (JSON parse failure, missing fields) trigger a surgical feedback retry.</p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6b757d' }}>Instead of failing or blindly retrying, the system feeds Claude its exact previous output alongside the precise parse error — so most errors resolve on the first retry. This eval layer replaces manual QA.</p>
              </div>
              <div style={{ border: SEC, padding: '20px 22px' }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12, color: '#0f1417' }}>Gate 2 — 15-point RAG regression suite</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                  {EVALS.map(e => (
                    <div key={e.cat} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#2c343a', borderBottom: '1px solid rgba(15,20,23,.06)', paddingBottom: 7 }}>
                      <span>{e.cat}</span>
                      <span style={{ fontFamily: mono, color: A }}>{e.n}</span>
                    </div>
                  ))}
                </div>
                <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.6, color: '#6b757d' }}>Deep dive, eval 6 (demand-charge grounding): to pass, the response must contain both &quot;kVA&quot; and &quot;₹&quot; — if it explains the concept but lacks the exact rate, it&apos;s flagged as a grounding failure.</p>
                <div style={{ padding: '10px 14px', background: '#f5f7f7', border: SEC, fontFamily: mono, fontSize: 11, color: A }}>
                  CI — GitHub Action on every Vercel deploy · results in repo artifacts
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>THE 11-POINT GUARDRAIL SHIELD</div>
              <div className="es-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
                {GUARDRAILS.map(gr => (
                  <div key={gr.cat} style={{ background: '#fff', padding: '16px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginBottom: 10 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: '#0f1417' }}>{gr.cat}</span>
                      <span style={{ fontFamily: mono, fontSize: 11, color: A }}>({gr.n})</span>
                    </div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {gr.items.map((it, i) => <li key={i} style={{ fontSize: 12, lineHeight: 1.5, color: '#5b6670' }}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: SEC, padding: '16px 20px' }}>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: '#0f1417', fontWeight: 500 }}>&quot;Guardrails fire before the model is called. Rejections cost zero tokens. Safety and rate-limiting are product features that directly improve perceived responsiveness and unit economics.&quot;</p>
            </div>
          </div>
        </section>

        {/* ── 09 METRICS — ONE NORTH STAR ── */}
        <section className="es-s" style={S}>
          <div className="es-w" style={W}>
            <SL n="09" label="METRICS — ONE NORTH STAR" />
            <H2 maxW="26ch">Optimising for behaviour changed, not insights delivered.</H2>
            <div style={{ border: '1px solid rgba(12,118,106,.28)', background: 'rgba(12,118,106,.05)', padding: '18px 22px', marginBottom: 22 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 8 }}>NORTH STAR</div>
              <p style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 600, color: '#0f1417', lineHeight: 1.35 }}>% of uploaded datasets where a recommended action is taken within 30 days.</p>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#5b6670' }}>Because insight delivered isn&apos;t the goal — behaviour changed is.</p>
            </div>
            <div className="es-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 22 }}>
              <div style={{ background: '#fff', padding: '18px 20px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>LEADING INDICATORS</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Upload activation (% reaching the dashboard)', 'Chat engagement rate', 'Recommendation-card click-through rate', 'Time-to-first-chat after upload'].map((it, i) => (
                    <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{it}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '18px 20px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>LAGGING INDICATORS</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Repeat upload rate (MoM retention)', 'Self-reported energy cost reduction'].map((it, i) => (
                    <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{it}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '18px 20px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>OPERATIONAL</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Response latency', 'Token cost per query (~$0.005 measured)', 'API error rate'].map((it, i) => (
                    <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>LAUNCH HYPOTHESES</div>
            <div className="es-table-scroll" style={{ marginBottom: 22 }}>
              <div className="es-table" style={{ border: SEC }}>
                <THead cols={['METRIC', 'INDUSTRY BASELINE', 'LAUNCH HYPOTHESIS']} widths="1.4fr 1fr 1fr" />
                {HYPOTHESES.map((h, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', borderBottom: i < HYPOTHESES.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{h.metric}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 12.5, color: '#99a1a7', textDecoration: 'line-through' }}>{h.baseline}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 13, fontWeight: 600, color: A }}>{h.hypothesis}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>ROADMAP</div>
            <div className="es-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '14px 18px' }}>
                <div style={{ fontFamily: mono, fontSize: 10, color: A, marginBottom: 6 }}>NOW</div>
                <div style={{ fontSize: 13, color: '#2c343a', lineHeight: 1.5 }}>CI hardening · Energy Intensity KPI (kWh/sq ft)</div>
              </div>
              <div style={{ background: '#fff', padding: '14px 18px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 10, color: A, marginBottom: 6 }}>NEXT</div>
                <div style={{ fontSize: 13, color: '#2c343a', lineHeight: 1.5 }}>Multi-building portfolio RAG · Redis rate limiting</div>
              </div>
              <div style={{ background: '#fff', padding: '14px 18px', borderLeft: SEC }}>
                <div style={{ fontFamily: mono, fontSize: 10, color: A, marginBottom: 6 }}>LATER</div>
                <div style={{ fontSize: 13, color: '#2c343a', lineHeight: 1.5 }}>Live IoT integration · Predictive maintenance</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 WHAT I'D DO DIFFERENTLY + SYNTHESIS ── */}
        <section className="es-s" style={{ padding: '68px 0 80px', borderBottom: 'none' }}>
          <div className="es-w" style={W}>
            <SL n="10" label="WHAT I'D DO DIFFERENTLY + SYNTHESIS" />
            <H2 maxW="26ch">How constraints bred elegant engineering — and three honest lessons.</H2>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>WHAT I&apos;D DO DIFFERENTLY</div>
              <h3 style={{ margin: '0 0 18px', fontSize: 'clamp(18px,2vw,22px)', fontWeight: 600, letterSpacing: '-.02em', color: '#0f1417' }}>Three honest lessons from building this end-to-end.</h3>
              <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Design the data model for the AI roadmap, not just the MVP.</strong> Monthly granularity works for the KPI dashboard but can&apos;t support multi-step agentic reasoning — rebuilding the data layer cost a sprint.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Freeze the eval set on Day 1.</strong> Evals written after the fact ratify what&apos;s already there rather than defining the bar. I now do this from the start on the next build.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>AI Chat&apos;s RICE score was lower than dashboard/reports — which was correct.</strong> I&apos;d surface that gap explicitly to stakeholders earlier so Phase 1.5 doesn&apos;t appear as scope creep.
                </li>
              </ol>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>SYNTHESIS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 24 }}>
              {SYNTHESIS.map((s, i) => (
                <div key={i} className="es-grid-2" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, padding: '18px 22px', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{s.constraint}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.55, color: '#4b5660' }}>{s.outcome}</span>
                </div>
              ))}
            </div>
            <div style={{ border: SEC, padding: '20px 24px' }}>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: '#0f1417', fontWeight: 500 }}>&quot;The best AI products aren&apos;t built by indiscriminately using the most expensive models, but by applying the smartest systemic constraints.&quot;</p>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ padding: '40px 0 28px' }}>
          <div className="es-w" style={{ ...W, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, borderTop: '1px solid rgba(15,20,23,.1)', paddingTop: 18 }}>
            <Link href="/#cases" style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', textDecoration: 'none', color: '#2c343a', border: '1px solid rgba(15,20,23,.16)', padding: '10px 18px' }}>
              ← Back to portfolio
            </Link>
            <a href="mailto:vijayeta.meher@gmail.com" style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', textDecoration: 'none', color: '#fff', background: A, padding: '10px 18px', fontWeight: 500 }}>
              vijayeta.meher@gmail.com →
            </a>
          </div>
        </footer>

      </main>
    </>
  )
}
