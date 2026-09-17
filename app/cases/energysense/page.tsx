import type { Metadata } from 'next'
import {
  CaseNav, CaseHeader, CaseMain, CaseSection, CaseCTA, GlanceCard,
  H2, H3, Lede, DataTable, KeyCard, Callout, Flow, Metric, ProductShot, mono,
} from '@/components/case'

export const metadata: Metadata = {
  title: 'EnergySense AI — Vijayeta Meher',
  description: "Democratising energy management for India's commercial buildings.",
}

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

const LEADING = ['Upload activation (% reaching the dashboard)', 'Chat engagement rate', 'Recommendation-card click-through rate', 'Time-to-first-chat after upload']
const LAGGING = ['Repeat upload rate (MoM retention)', 'Self-reported energy cost reduction']
const OPERATIONAL = ['Response latency', 'Token cost per query (~$0.005 measured)', 'API error rate']

const ROADMAP = [
  { k: 'NOW',   v: 'CI hardening · Energy Intensity KPI (kWh/sq ft)' },
  { k: 'NEXT',  v: 'Multi-building portfolio RAG · Redis rate limiting' },
  { k: 'LATER', v: 'Live IoT integration · Predictive maintenance' },
]

const sub = { fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--ink-faint)', marginBottom: 14, display: 'block' }

// ── Page ──────────────────────────────────────────────────

export default function EnergySensePage() {
  return (
    <>
      <CaseNav label="AI Lab · Case study 01" />

      <CaseHeader
        eyebrow="AI Lab · Case study 01"
        title="EnergySense AI"
        subtitle="Democratising energy management for India's commercial buildings."
        lede="Empowering every facility manager to make energy optimisation decisions with the speed and intelligence of an expert energy consultant — no hardware, no six-figure retainer."
        links={
          <>
            <a href="https://energysense-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
              Live app →
            </a>
            {/* FILL: replace href="#" with Loom/YouTube demo URL when recorded */}
            <a href="#" className="btn-outline btn-ghost-light">90-sec demo →</a>
          </>
        }
      />

      <CaseMain>
        <GlanceCard rows={GLANCE} />

        <ProductShot
          src="/covers/energysense.webp"
          width={2400}
          height={1367}
          alt="EnergySense AI at the upload step: the headline 'Turn Utility Bills into Energy Intelligence', trust chips for no signup, secure upload, 60-second analysis and CSV compatibility, and a card showing the captured building context — Prestige Tech Park Block A, Office, 25,000 sq ft — above a dashed drop zone reading 'Drop your CSV here, or browse'."
          caption="The upload step, captured from the live app. Building context is captured first, because floor area and building type are what turn a raw kWh figure into a benchmark — and the drop zone accepts any CSV or Excel export, which is what removes the hardware dependency."
        />

        {/* ── 01 THE PROBLEM ── */}
        <CaseSection n="01" label="The problem">
          <H2 maxW="20ch" mb={14}>A translation problem, not a data problem.</H2>
          <Lede>
            Facility managers know their bills are high, but lack the tools to identify why. EnergySense AI uses large
            language models to translate raw utility data into plain-English actions — without expensive consultants or
            hardware lock-in.
          </Lede>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '24px 22px' }}>
              <span style={sub}>The 5%</span>
              <div style={{ fontFamily: mono, fontSize: 'clamp(34px,4.2vw,50px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>5%</div>
              <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                Large enterprises with six-figure hardware budgets and dedicated implementation teams — served today by
                tools like Schneider Electric&apos;s EcoStruxure.
              </p>
            </div>

            <div style={{ border: '1px solid var(--accent-tint-border)', background: 'var(--accent-tint)', borderRadius: 'var(--radius-tile)', padding: '24px 22px' }}>
              <span style={{ ...sub, color: 'var(--accent)' }}>The 95%</span>
              <div style={{ fontFamily: mono, fontSize: 'clamp(34px,4.2vw,50px)', fontWeight: 600, color: 'var(--accent)', lineHeight: 1 }}>95%</div>
              <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                Over 5 million Indian commercial buildings, forced to decode DISCOM PDFs and spreadsheets by hand, once
                a quarter.
              </p>
            </div>
          </div>
        </CaseSection>

        {/* ── 02 CUSTOMER DISCOVERY ── */}
        <CaseSection n="02" label="Customer discovery">
          <H2 maxW="22ch" mb={14}>Validated before it was built, not after.</H2>
          <Lede>
            Insights drawn from 18 conversations with energy and facility professionals, supplemented by desk research
            grounded in 13 years of hands-on energy management.
          </Lede>

          <div style={{ marginBottom: 24 }}>
            <DataTable
              cols={['Role interviewed', 'Count', 'Primary goal']}
              widths="1.3fr .6fr 1.7fr"
              colStyles={[
                { fontWeight: 700, color: 'var(--ink)' },
                { fontFamily: mono, color: 'var(--accent)', fontWeight: 600 },
                undefined,
              ]}
              rows={INTERVIEWS.map(iv => [iv.role, String(iv.count), iv.goal])}
            />
          </div>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 22px' }}>
              <span style={sub}>Top pain points</span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {PAIN_POINTS.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--warm)', flexShrink: 0, display: 'inline-block' }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Callout label="Opportunity statement">
              <span style={{ display: 'block', fontWeight: 600, marginBottom: 12 }}>
                Enterprise energy teams need an AI assistant that explains why energy consumption changed, recommends
                corrective actions, and automates repetitive analysis.
              </span>
              <span style={{ display: 'block', fontSize: 13.5, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                The archetypal user: a facility manager overseeing 15+ buildings with zero data-science support.
              </span>
            </Callout>
          </div>
        </CaseSection>

        {/* ── 03 JOBS TO BE DONE ── */}
        <CaseSection n="03" label="Jobs to be done">
          <H2 maxW="24ch">What customers hire EnergySense AI to do.</H2>
          <DataTable
            cols={['When…', 'I want to…', 'So I can…']}
            widths="1.3fr 1.4fr 1.3fr"
            colStyles={[undefined, { fontWeight: 700, color: 'var(--ink)' }, undefined]}
            rows={JTBD.map(j => [j.when, j.want, j.so])}
          />
        </CaseSection>

        {/* ── 04 STRATEGY & POSITIONING ── */}
        <CaseSection n="04" label="Strategy & positioning">
          <H2 maxW="26ch">Four strategic bets and why they beat the enterprise benchmark.</H2>

          <div className="cs-grid-4" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
            {BETS.map(b => <KeyCard key={b.k} k={b.k} t={b.t} d={b.d} />)}
          </div>

          <span style={sub}>Vs. the benchmark</span>
          <DataTable
            cols={['', 'EcoStruxure Energy Hub (benchmark)', 'EnergySense AI (SME)']}
            widths="1.4fr 1.6fr 1.6fr"
            colStyles={[
              { fontWeight: 700, color: 'var(--ink)' },
              undefined,
              { color: 'var(--accent)', fontWeight: 600 },
            ]}
            rows={POSITIONING.map(p => [p.row, p.bench, p.es])}
          />

          <div style={{ marginTop: 16 }}>
            <Callout label="The unfair advantage">
              EnergySense is seeded with India-specific energy standards — power factor regulations, BEE ratings, DISCOM
              tariff structures — that Western enterprise tools lack.
            </Callout>
          </div>
        </CaseSection>

        {/* ── 05 PRIORITIZATION ── */}
        <CaseSection n="05" label="Prioritization — what shipped, what didn't">
          <H2 maxW="26ch" mb={14}>RICE sequenced the roadmap. Strategy governed where it was headed.</H2>
          <Lede maxW="74ch">
            RICE correctly sequenced the roadmap — dashboard and reports shipped first because they were
            high-confidence, low-effort. AI Chat scored lower precisely because its confidence was unproven, so it
            shipped in Phase 1.5 after the data pipeline de-risked it. The framework governed sequencing; Bet 04
            governed direction.
          </Lede>

          <div style={{ marginBottom: 28 }}>
            <DataTable
              wide
              cols={['Feature', 'Reach', 'Impact (0.25–3)', 'Confidence', 'Effort', 'RICE score']}
              widths="1.6fr 1fr .9fr .9fr .9fr .8fr"
              colStyles={[
                { fontWeight: 700, color: 'var(--ink)' },
                undefined, undefined, undefined, undefined,
                { fontFamily: mono, fontWeight: 600, color: 'var(--accent)' },
              ]}
              rows={RICE.map(rc => [rc.feature, rc.reach, rc.impact, rc.confidence, rc.effort, String(rc.score)])}
            />
          </div>

          <span style={sub}>Cut from v1</span>
          <DataTable
            cols={['Feature', 'Why rejected']}
            widths="1fr 1.8fr"
            colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, undefined]}
            rows={FEATURES_REJECTED.map(r => [r.feature, r.why])}
          />
        </CaseSection>

        {/* ── 06 ARCHITECTURE ── */}
        <CaseSection n="06" label="Architecture">
          <H2 maxW="26ch">A dual-flow architecture built around user value and cost efficiency.</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <Flow
              label="Flow 1 — upload analysis"
              nodes={[
                { text: 'UI Upload' },
                { text: 'Vercel Backend' },
                { text: 'Claude Sonnet 4.6', accent: true },
                { text: 'Structured JSON DB' },
              ]}
              caption="A single API call handles both structured JSON parsing and natural-language generation."
            />

            <Flow
              label="Flow 2 — RAG chat"
              nodes={[
                { text: 'User Query' },
                { text: 'Voyage AI Embeddings' },
                { text: 'Supabase pgvector' },
                { text: 'Context Injection' },
                { text: 'Claude API', accent: true },
              ]}
              caption="Supabase handles similarity search — avoiding a secondary vector-database vendor and keeping the stack lean. Building context (floor area, type) is injected into every prompt for bespoke recommendations. Each analysis gets a permanent, shareable URL — driving alignment without a separate reporting layer."
            />

            <Callout>
              &quot;Every architectural decision was justified by user value or operational cost, never by engineering
              preference.&quot;
            </Callout>
          </div>
        </CaseSection>

        {/* ── 07 KEY AI DECISIONS ── */}
        <CaseSection n="07" label="Key AI decisions">
          <H2 maxW="26ch">Five rigorous tradeoffs balancing reasoning, speed, and cost.</H2>

          <div style={{ marginBottom: 24 }}>
            <DataTable
              wide
              cols={['Problem / choice', 'Options considered', 'PM rationale']}
              widths="1.1fr 1.3fr 1.6fr"
              rows={DECISIONS.map(d => [
                <>
                  <span style={{ display: 'block', fontSize: 12.5, color: 'var(--ink-faint)', marginBottom: 4 }}>{d.problem}</span>
                  <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'var(--accent)' }}>{d.choice}</span>
                </>,
                d.options,
                d.why,
              ])}
            />
          </div>

          <div className="cs-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 24px' }}>
              <span style={sub}>Token economics</span>
              <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                The knowledge base contains 20 chunks of Indian energy domain knowledge (~7,200 tokens). Injecting all
                of it on every turn would be expensive, slow, and redundant. Instead, the system retrieves only the 3
                most relevant chunks per query, holding a deliberate ceiling of ~1,460 tokens per chat turn.
              </p>
              <div style={{ display: 'flex', gap: 32 }}>
                <Metric value="7,200 tok" label="Naive context" strike size="16px" />
                <Metric value="~1,460 tok" label="Hybrid retrieval" size="16px" />
              </div>
            </div>

            <div style={{
              border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)',
              padding: '22px 24px', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: 22,
            }}>
              <Metric value="$0.005" label="cost per chat turn" accent />
            </div>
          </div>
        </CaseSection>

        {/* ── 08 QUALITY & SAFETY ── */}
        <CaseSection n="08" label="Quality & safety">
          <H2 maxW="26ch">Two quality gates enforce the product&apos;s own contract.</H2>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 22px' }}>
              <H3>Gate 1 — the evalAndFix loop</H3>
              <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Every parsed CSV runs through an eval gate. 5 structural checks (trimming extra anomalies, lowercasing
                flags) are silently auto-fixed with no API retry. 7 targeted checks (JSON parse failure, missing fields)
                trigger a surgical feedback retry.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Instead of failing or blindly retrying, the system feeds Claude its exact previous output alongside the
                precise parse error — so most errors resolve on the first retry. This eval layer replaces manual QA.
              </p>
            </div>

            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 22px' }}>
              <H3>Gate 2 — 15-point RAG regression suite</H3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {EVALS.map(e => (
                  <div key={e.cat} style={{
                    display: 'flex', justifyContent: 'space-between', fontSize: 13.5,
                    color: 'var(--ink-soft)', borderBottom: '1px solid var(--card-border)', paddingBottom: 8,
                  }}>
                    <span>{e.cat}</span>
                    <span style={{ fontFamily: mono, fontWeight: 600, color: 'var(--accent)' }}>{e.n}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '0 0 14px', fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Deep dive, eval 6 (demand-charge grounding): to pass, the response must contain both &quot;kVA&quot; and
                &quot;₹&quot; — if it explains the concept but lacks the exact rate, it&apos;s flagged as a grounding
                failure.
              </p>
              <div style={{
                padding: '10px 14px', background: 'var(--accent-tint)',
                border: '1px solid var(--accent-tint-border)', borderRadius: 'var(--radius-chip)',
                fontFamily: mono, fontSize: 11.5, color: 'var(--accent)', lineHeight: 1.5,
              }}>
                CI — GitHub Action on every Vercel deploy · results in repo artifacts
              </div>
            </div>
          </div>

          <span style={sub}>The 11-point guardrail shield</span>
          <div className="cs-grid-4" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
            {GUARDRAILS.map(gr => (
              <div key={gr.cat} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{gr.cat}</span>
                  <span style={{ fontFamily: mono, fontSize: 11, color: 'var(--accent)' }}>({gr.n})</span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {gr.items.map((it, i) => (
                    <li key={i} style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Callout warm>
            &quot;Guardrails fire before the model is called. Rejections cost zero tokens. Safety and rate-limiting are
            product features that directly improve perceived responsiveness and unit economics.&quot;
          </Callout>
        </CaseSection>

        {/* ── 09 METRICS ── */}
        <CaseSection n="09" label="Metrics — one north star">
          <H2 maxW="26ch">Optimising for behaviour changed, not insights delivered.</H2>

          <div style={{ marginBottom: 24 }}>
            <Callout label="North star">
              <span style={{ display: 'block', fontSize: 17, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>
                % of uploaded datasets where a recommended action is taken within 30 days.
              </span>
              <span style={{ display: 'block', fontSize: 14, color: 'var(--ink-soft)' }}>
                Because insight delivered isn&apos;t the goal — behaviour changed is.
              </span>
            </Callout>
          </div>

          <div className="cs-grid-3" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
            {[
              { label: 'Leading indicators', items: LEADING },
              { label: 'Lagging indicators', items: LAGGING },
              { label: 'Operational',        items: OPERATIONAL },
            ].map(col => (
              <div key={col.label} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 20px' }}>
                <span style={sub}>{col.label}</span>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {col.items.map((it, i) => (
                    <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <span style={sub}>Launch hypotheses</span>
          <div style={{ marginBottom: 28 }}>
            <DataTable
              cols={['Metric', 'Industry baseline', 'Launch hypothesis']}
              widths="1.4fr 1fr 1fr"
              colStyles={[
                { fontWeight: 700, color: 'var(--ink)' },
                { fontFamily: mono, color: 'var(--ink-faint)', textDecoration: 'line-through' },
                { fontFamily: mono, fontWeight: 600, color: 'var(--accent)' },
              ]}
              rows={HYPOTHESES.map(h => [h.metric, h.baseline, h.hypothesis])}
            />
          </div>

          <span style={sub}>Roadmap</span>
          <div className="cs-grid-3" style={{ display: 'grid', gap: 16 }}>
            {ROADMAP.map(r => (
              <div key={r.k} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '16px 18px' }}>
                <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 600, letterSpacing: '.12em', color: 'var(--accent)', marginBottom: 8 }}>{r.k}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ── 10 SYNTHESIS ── */}
        <CaseSection n="10" label="What I'd do differently + synthesis">
          <H2 maxW="26ch">How constraints bred elegant engineering — and three honest lessons.</H2>

          <div style={{ marginBottom: 32 }}>
            <span style={sub}>What I&apos;d do differently</span>
            <H3 mb={18}>Three honest lessons from building this end-to-end.</H3>
            <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Design the data model for the AI roadmap, not just the MVP.</strong>{' '}
                Monthly granularity works for the KPI dashboard but can&apos;t support multi-step agentic reasoning —
                rebuilding the data layer cost a sprint.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Freeze the eval set on Day 1.</strong>{' '}
                Evals written after the fact ratify what&apos;s already there rather than defining the bar. I now do
                this from the start on the next build.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>AI Chat&apos;s RICE score was lower than dashboard/reports — which was correct.</strong>{' '}
                I&apos;d surface that gap explicitly to stakeholders earlier so Phase 1.5 doesn&apos;t appear as scope
                creep.
              </li>
            </ol>
          </div>

          <span style={sub}>Synthesis</span>
          <div style={{ marginBottom: 24 }}>
            <DataTable
              cols={['Constraint', 'Engineering outcome']}
              widths="1fr 1.4fr"
              colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, undefined]}
              rows={SYNTHESIS.map(s => [s.constraint, s.outcome])}
            />
          </div>

          <Callout>
            &quot;The best AI products aren&apos;t built by indiscriminately using the most expensive models, but by
            applying the smartest systemic constraints.&quot;
          </Callout>
        </CaseSection>
      </CaseMain>

      <CaseCTA />
    </>
  )
}
