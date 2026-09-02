import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Telecom RAG Assistant — Vijayeta Meher',
  description: 'A retrieval-augmented Tier-1 telecom support assistant that answers only from what it retrieves, and refuses everything else.',
}

const A = '#0c766a'
const SEC = '1px solid rgba(15,20,23,.09)'
const ROW = '1px solid rgba(15,20,23,.07)'
const mono = 'var(--font-mono)'

// ── Data ──────────────────────────────────────────────────

const GLANCE = [
  { k: 'Product name',  v: 'NovaCell Support Assistant' },
  { k: 'Product type',  v: 'Retrieval-augmented Tier-1 customer-care assistant' },
  { k: 'AI stack',      v: 'qwen/qwen3.6-27b via Groq (generation), LangChain LCEL (orchestration), ChromaDB (vector store), all-MiniLM-L6-v2 (local embeddings)' },
  { k: 'Knowledge base', v: '81 documents across 3 independently indexed sources: FAQ, resolved tickets, official PDF guide' },
  { k: 'Retrieval',     v: '9 passages per question: top-3 from each collection, queried concurrently' },
  { k: 'Interfaces',    v: 'Streamlit chat UI + CLI REPL over one shared retrieval path' },
  { k: 'Role',          v: 'Solo PM + builder: PRD, scope, architecture, ingestion, evaluation, deployment' },
]

const SOURCES = [
  { k: 'PUBLIC FAQ',        n: '25', t: 'Written for customers', d: 'The canonical published answer: correct, but generic, and silent on anything the marketing team never anticipated.' },
  { k: 'RESOLVED TICKETS',  n: '19', t: 'Written by agents',     d: 'How the issue was actually fixed in practice. Rich and specific, but locked in an internal database no customer can search.' },
  { k: 'OFFICIAL GUIDE',    n: '37', t: 'Written by the operator', d: 'The procedure of record, buried in a 9-page PDF that nobody reads before calling support.' },
]

const JTBD = [
  { when: 'My mobile internet is crawling',    want: 'know whether it is me, my plan or the network', so: 'stop guessing and fix the right thing' },
  { when: 'I land abroad tomorrow',            want: 'set up roaming before I travel',                so: 'avoid arriving disconnected' },
  { when: 'A charge on my bill looks wrong',   want: 'understand how that charge is calculated',      so: 'know whether to dispute it' },
  { when: 'I just bought a phone with eSIM',   want: 'activate it without calling anyone',            so: 'get connected tonight, not Monday' },
]

const CATEGORIES = [
  { k: '01', t: 'Connectivity',  d: 'Signal, dropped connections, network outages.' },
  { k: '02', t: 'Data',          d: 'Slow speeds, allowances, throttling after a cap.' },
  { k: '03', t: 'Roaming',       d: 'Pre-travel setup, coverage, roaming charges.' },
  { k: '04', t: 'SIM / eSIM',    d: 'Activation, transfer, replacement, device pairing.' },
  { k: '05', t: 'Billing',       d: 'How charges are calculated, plans, payment methods.' },
  { k: '06', t: 'Voice',         d: 'Call quality, call failures, voicemail setup.' },
  { k: '07', t: 'Device',        d: 'Handset configuration, APN settings, compatibility.' },
  { k: '08', t: 'Account / app', d: 'MyTelecom app, login, self-service functions.' },
]

const ROUTING = [
  { q: 'How does roaming billing work?',            where: 'ANSWERED', d: 'A policy question. The guide documents it, so the assistant answers it and cites the page.' },
  { q: 'Why was I charged ₹840 last month?',        where: 'HANDED OFF', d: 'An account question. With no CRM, no billing integration and no authentication, it routes to a human.' },
  { q: 'How do I activate an eSIM?',                where: 'ANSWERED', d: 'A procedure. The guide gives numbered steps; the FAQ and past tickets confirm the edge cases.' },
  { q: 'Do you have a better plan than Airtel?',    where: 'HANDED OFF', d: 'A competitor comparison. Nothing in the index supports a claim, so it declines rather than improvises.' },
]

const CUT_FROM_V1 = [
  { feature: 'CRM / account lookup',   why: 'Requires authentication the v1 scope deliberately excludes, so every account question routes to a human instead.' },
  { feature: 'Billing integration',    why: 'Reading a real invoice makes a wrong answer financially consequential. Policy is answerable; balances are not.' },
  { feature: 'Multi-turn memory',      why: 'Retrieval is per-question in v1. Feeding conversation history into retrieval is a v2 change, not a prompt tweak.' },
  { feature: 'Multilingual support',   why: 'The knowledge base is English-only; translating answers without translating sources would break the citation chain.' },
  { feature: 'Open (unresolved) tickets', why: 'An unresolved ticket has no verified fix, so indexing one lets an unconfirmed guess become a cited source.' },
]

const COLLECTIONS = [
  { name: 'faq',     source: 'Published customer FAQ (CSV)',     unit: 'One document per entry',                     n: '25' },
  { name: 'tickets', source: 'Support tickets (SQLite)',          unit: 'Resolved only, 19 of 20 ingested',          n: '19' },
  { name: 'guides',  source: 'Official user guide (9-page PDF)',  unit: 'Chunked at 600 chars, 100 overlap',          n: '37' },
]

const DECISIONS = [
  { problem: 'Index design',   options: 'One blended index, three collections, hierarchical index', choice: 'Three separate collections', why: 'A single index lets one verbose source crowd out the others on a close match. Querying separately guarantees every answer sees the canonical FAQ line, the fix that actually worked, and the official procedure: the three things an agent would check.' },
  { problem: 'Query execution', options: 'Sequential, concurrent, cascading fallback',              choice: 'Concurrent fan-out',        why: 'Three collections queried in parallel cost the slowest one, not the sum of all three, which is what keeps a three-source answer inside a one-source latency budget.' },
  { problem: 'Embeddings',     options: 'OpenAI, Voyage AI, local sentence-transformers',           choice: 'all-MiniLM-L6-v2, local',   why: 'Re-indexing the whole knowledge base costs nothing, so support ops can re-run it as often as they like, and no customer question is sent to a second vendor.' },
  { problem: 'Determinism',    options: 'Sampled, low temperature, temperature 0',                  choice: 'Temperature 0, reasoning off', why: 'A support answer should be the same answer every time it is asked. Variance across identical questions is a support liability, not a feature.' },
  { problem: 'Ingestion model', options: 'Incremental upsert, diff-and-patch, drop-and-rebuild',    choice: 'Drop-and-rebuild per source', why: 'Edits, additions and deletions all take effect with no duplicates and no stale documents, and the other two collections are untouched. Support ops edit the FAQ file and re-run one script, with no engineering release.' },
]

const STACK = [
  { layer: 'LLM',           choice: 'qwen/qwen3.6-27b via Groq · temperature 0 · reasoning off' },
  { layer: 'Orchestration', choice: 'LangChain (LCEL), parallel retrieval branches' },
  { layer: 'Vector store',  choice: 'ChromaDB, persisted to disk, so there is no re-ingest on start' },
  { layer: 'Embeddings',    choice: 'sentence-transformers/all-MiniLM-L6-v2, running locally' },
  { layer: 'Ingestion',     choice: 'CSV, SQLite and PDF loaders, one script per source' },
  { layer: 'Interfaces',    choice: 'Streamlit chat UI + CLI REPL' },
  { layer: 'Config',        choice: '.env-driven, with no credentials in code' },
]

const SYNTHESIS = [
  { constraint: 'No authentication, CRM or billing access in v1',  outcome: 'Turned the escalation path into a designed product surface, a specific and actionable handoff, rather than leaving it as an unhandled failure state.' },
  { constraint: 'Three heterogeneous sources in three formats',    outcome: 'Wrote three independent ingest scripts feeding three collections, instead of one lossy blended index that would have buried the shortest source.' },
  { constraint: 'Solo build with no QA team and no eval harness',  outcome: 'Logged every interaction to JSONL with the exact source identifiers retrieved, so a bad answer can be traced to bad retrieval or bad generation after the fact.' },
]

const TAGS = ['AI Product', 'RAG', 'Customer Support', 'Evaluation', 'Guardrails']

const LESSONS = [
  {
    n: '01',
    t: 'AI product scope is a safety mechanism.',
    d: 'The best v1 was not the one that answered the most questions. It was the one where I could state plainly what the assistant knows, what it does not know, and what happens next when it does not.',
  },
  {
    n: '02',
    t: 'Refusal is a product feature.',
    d: 'Traditional product thinking treats a failed request as something to eliminate. In an AI product some failures are designed behaviours, and a transparent refusal is worth more than an impressive answer nobody can verify.',
  },
  {
    n: '03',
    t: 'Data quality is part of the AI product.',
    d: 'Excluding a single unresolved ticket did more for the trustworthiness of answers than any prompt revision. Better instructions cannot compensate for bad evidence.',
  },
  {
    n: '04',
    t: 'Observability starts at the product, not the infrastructure.',
    d: 'Logging the retrieved document IDs alongside the answer turns "the user disliked this" into "the user disliked this because the retriever surfaced the wrong source". Only the second version tells a team what to do next.',
  },
  {
    n: '05',
    t: 'The spec and the implementation reinforce each other.',
    d: 'The PRD fixed the user, the problem, the scope, the out-of-scope areas, the functional and non-functional requirements, the success metrics and the safety boundaries. The architecture then encoded them. It was not designed first and justified afterwards.',
  },
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

function Flow({ label, nodes, accent, caption }: { label: string; nodes: string[]; accent: string; caption: string }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: A, marginBottom: 12 }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        {nodes.map((node, i) =>
          node === accent
            ? <span key={i} style={{ fontFamily: mono, fontSize: 12, border: '1px solid rgba(12,118,106,.3)', padding: '7px 12px', color: A }}>{node}</span>
            : <span key={i} style={{ fontFamily: mono, fontSize: 12, border: '1px solid rgba(15,20,23,.14)', padding: '7px 12px', color: '#2c343a' }}>{node}</span>
        ).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`a${i}`} style={{ color: '#99a1a7' }}>→</span>, el], [])}
      </div>
      <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.55, color: '#6b757d', maxWidth: '64ch' }}>{caption}</p>
    </div>
  )
}

const W = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' }
const S = { padding: '68px 0', borderBottom: '1px solid rgba(15,20,23,.08)' }

// ── Page ──────────────────────────────────────────────────

export default function NovaCellPage() {
  return (
    <>
      <nav className="nc-nav" style={{
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
        <span className="nc-hide-sm" style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7' }}>AI LAB · CASE STUDY 02</span>
      </nav>

      <main style={{ paddingTop: 52 }}>

        {/* ── HEADER ── */}
        <header className="nc-header" style={{ position: 'relative', padding: '96px 40px 56px', borderBottom: '1px solid rgba(15,20,23,.08)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(15,20,23,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(15,20,23,.045) 1px,transparent 1px)',
            backgroundSize: '62px 62px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
            maskImage: 'radial-gradient(ellipse 70% 65% at 20% 20%,#000 30%,transparent 76%)',
          }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.18em', color: A, marginBottom: 18 }}>AI LAB · CASE STUDY 02</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(34px,5.6vw,72px)', fontWeight: 600, lineHeight: .98, letterSpacing: '-.03em', maxWidth: '16ch' }}>Telecom RAG Assistant</h1>
            <p style={{ margin: '14px 0 0', fontSize: 'clamp(16px,1.8vw,22px)', fontWeight: 500, color: '#2c343a', maxWidth: '30ch' }}>
              It answers Tier-1 telecom questions from three disconnected knowledge sources, and refuses anything they don&apos;t cover.
            </p>
            <p style={{ margin: '16px 0 0', maxWidth: '64ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              NovaCell Support Assistant is a grounded question-answering system for mobile customer care. It fans a customer&apos;s question out across three separately indexed knowledge sources in parallel, assembles nine source-labelled passages into the prompt, and answers only from what it retrieved. When the sources don&apos;t cover the question, it says so and hands off to a human instead of guessing.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {TAGS.map(t => (
                <span key={t} style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#5b6670', border: SEC, padding: '5px 10px', background: '#fff' }}>{t}</span>
              ))}
            </div>
            <div className="nc-links" style={{ display: 'flex', gap: 12, marginTop: 20, marginBottom: 36 }}>
              <a href="https://ai-telecom-support-assistant.streamlit.app/" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', padding: '9px 18px', color: '#fff', background: A, textDecoration: 'none' }}>
                Live app →
              </a>
            </div>
            <div style={{ border: '1px solid rgba(12,118,106,.28)', background: 'rgba(12,118,106,.05)', padding: '20px 24px', maxWidth: 820, marginBottom: 28 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '.14em', color: A, marginBottom: 10 }}>THE ONE-LINE STORY</div>
              <p style={{ margin: '0 0 12px', fontSize: 'clamp(16px,1.6vw,19px)', fontWeight: 600, lineHeight: 1.4, color: '#0f1417' }}>
                A grounded customer-support assistant that answers Tier-1 telecom questions from three enterprise knowledge sources, and deliberately refuses when it cannot verify an answer.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>
                The goal was never another chatbot. It was a harder product question: how do you make an AI support experience useful enough to deflect repetitive queries, and safe enough to trust when the cost of a wrong answer is high?
              </p>
            </div>
            <div style={{ border: SEC, background: '#fff', maxWidth: 820 }}>
              <div style={{ padding: '8px 18px', borderBottom: SEC, fontFamily: mono, fontSize: 10, letterSpacing: '.14em', color: '#99a1a7' }}>AT A GLANCE</div>
              {GLANCE.map((g, i) => (
                <div key={g.k} className="nc-glance" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '10px 18px', borderBottom: i < GLANCE.length - 1 ? '1px solid rgba(15,20,23,.06)' : undefined }}>
                  <span style={{ fontFamily: mono, fontSize: 11, color: A }}>{g.k}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{g.v}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── 01 THE PROBLEM ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="01" label="THE PROBLEM" />
            <H2 maxW="22ch" mb={14}>The knowledge isn&apos;t missing. It&apos;s scattered.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '66ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              NovaCell is a mobile operator with roughly four million subscribers. Support is one of its largest costs and one of its lowest satisfaction scores, and most of the volume is Tier-1: slow data, a confusing charge, a SIM that won&apos;t activate, roaming setup before a trip. These are questions whose answers already exist inside the company. They are split across three surfaces a customer cannot search together and an agent has to reconcile by hand.
            </p>
            <div className="nc-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 24 }}>
              {SOURCES.map(s => (
                <div key={s.k} style={{ background: '#fff', padding: '24px 22px' }}>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#99a1a7', letterSpacing: '.1em', marginBottom: 12 }}>{s.k}</div>
                  <div style={{ fontSize: 'clamp(30px,3.6vw,46px)', fontWeight: 600, letterSpacing: '-.03em', color: '#0f1417', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: A, marginTop: 8 }}>{s.t}</div>
                  <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.6, color: '#5b6670' }}>{s.d}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, maxWidth: '66ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              So customers wait on hold for things an FAQ could solve, agents burn out on repetitive tickets, and the same question gets three different answers depending on who picks it up.
            </p>
          </div>
        </section>

        {/* ── 02 WHO ASKS, AND WHAT THEY ASK ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="02" label="WHO ASKS, AND WHAT THEY ASK" />
            <H2 maxW="24ch" mb={14}>Eight categories that cover the Tier-1 queue.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '66ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Scope was set by what the knowledge base can actually support, not by what a chatbot could plausibly be asked. Anything outside these eight categories is refused rather than attempted.
            </p>
            <div className="nc-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 28 }}>
              {CATEGORIES.map(c => (
                <div key={c.k} style={{ background: '#fff', padding: '20px 18px' }}>
                  <div style={{ fontFamily: mono, fontSize: 12, color: A, marginBottom: 14 }}>{c.k}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 10, lineHeight: 1.25, color: '#0f1417' }}>{c.t}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.55, color: '#5b6670' }}>{c.d}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>THE JOBS BEHIND THE QUESTIONS</div>
            <div className="nc-table-scroll">
              <div className="nc-table" style={{ border: SEC }}>
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

        {/* ── 03 SCOPE ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="03" label="SCOPE · WHAT IT ANSWERS, WHAT IT HANDS OFF" />
            <H2 maxW="26ch" mb={14}>A question about your bill goes to a human. A question about how billing works is answered from the guide.</H2>
            <p style={{ margin: '0 0 24px', maxWidth: '70ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              The v1 boundary is deliberate: no CRM, no billing integration, no authentication. That line is not a gap waiting to be closed. It is the decision that makes every answer on the other side of it safe to trust.
            </p>
            <div className="nc-table-scroll" style={{ marginBottom: 24 }}>
              <div className="nc-table" style={{ border: SEC }}>
                <THead cols={['A CUSTOMER ASKS', 'ROUTING', 'WHY']} widths="1.4fr .8fr 1.8fr" />
                {ROUTING.map((r, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr .8fr 1.8fr', borderBottom: i < ROUTING.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{r.q}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 11, letterSpacing: '.06em', color: r.where === 'ANSWERED' ? A : '#99a1a7' }}>{r.where}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, lineHeight: 1.55, color: '#4b5660' }}>{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>CUT FROM V1</div>
            <div style={{ border: SEC }}>
              <THead cols={['CAPABILITY', 'WHY IT WAS LEFT OUT']} widths="1fr 1.8fr" />
              {CUT_FROM_V1.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', borderBottom: i < CUT_FROM_V1.length - 1 ? ROW : undefined }}>
                  <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{c.feature}</span>
                  <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, lineHeight: 1.55, color: '#6b757d' }}>{c.why}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 ARCHITECTURE ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="04" label="ARCHITECTURE" />
            <H2 maxW="26ch">Four stages, and a retrieval step that lives outside the generation chain.</H2>
            <Flow
              label="STAGE 1 · FAN OUT"
              nodes={['Customer question', 'Local embedding', 'Concurrent dispatch', '3 ChromaDB collections']}
              accent="Local embedding"
              caption="The question is embedded on the machine and dispatched to three collections concurrently, not as one blended index. FAQ, tickets and guides each return their own top-3."
            />
            <Flow
              label="STAGE 2 · MERGE & LABEL"
              nodes={['9 results', 'Fixed source order', 'Origin + identifier tags']}
              accent="Origin + identifier tags"
              caption="Results are merged in a fixed source order and tagged with where they came from (FAQ | FAQ-12, TICKETS | TK-004, GUIDES | telecom_guide.pdf p.3), so the model can attribute a claim and never silently blend an un-retrieved fact into a retrieved one."
            />
            <Flow
              label="STAGE 3 · GROUND"
              nodes={['Labelled context block', 'System prompt rules', 'Assembled prompt']}
              accent="System prompt rules"
              caption="The rules override everything else: answer only from this context, never use training knowledge, never state a number that isn't here, and if the context doesn't cover the question say so in one sentence and hand off."
            />
            <Flow
              label="STAGE 4 · ANSWER"
              nodes={['Assembled prompt', 'qwen3.6-27b on Groq', 'Streamed answer + Sources list']}
              accent="qwen3.6-27b on Groq"
              caption="Temperature 0 with reasoning disabled: deterministic and fast, because a support answer should be the same answer every time it is asked."
            />
          </div>
        </section>

        {/* ── 05 THE KNOWLEDGE BASE ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="05" label="THE KNOWLEDGE BASE" />
            <H2 maxW="26ch" mb={14}>Eighty-one documents, three ingest scripts, no migrations.</H2>
            <p style={{ margin: '0 0 24px', maxWidth: '70ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Each source keeps its own collection, its own loader and its own document granularity. Adding a fourth source takes two changes: write an ingest script, register one collection entry. The retriever, prompt context, Sources list and admin panel all pick it up automatically.
            </p>
            <div className="nc-table-scroll" style={{ marginBottom: 24 }}>
              <div className="nc-table" style={{ border: SEC }}>
                <THead cols={['COLLECTION', 'SOURCE', 'DOCUMENT UNIT', 'DOCS']} widths="1fr 1.5fr 1.7fr .7fr" />
                {COLLECTIONS.map((c, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.7fr .7fr', borderBottom: ROW }}>
                    <span style={{ padding: '11px 14px', fontFamily: mono, fontSize: 13, fontWeight: 600, color: '#0f1417' }}>{c.name}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#4b5660' }}>{c.source}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#6b757d' }}>{c.unit}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 13.5, fontWeight: 600, color: A }}>{c.n}</span>
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.7fr .7fr', background: '#f5f7f7' }}>
                  <span style={{ padding: '11px 14px', fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7' }}>TOTAL</span>
                  <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#4b5660' }}>3 independently indexed sources</span>
                  <span style={{ padding: '11px 14px', borderLeft: ROW, fontSize: 13, color: '#6b757d' }}>9 retrieved per question</span>
                  <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 13.5, fontWeight: 600, color: A }}>81</span>
                </div>
              </div>
            </div>
            <div className="nc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div style={{ border: SEC, padding: '20px 22px' }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12, color: '#0f1417' }}>Ingestion is idempotent by construction</div>
                <p style={{ margin: '0 0 12px', fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>Each script drops and rebuilds its own collection from source. Edits, additions and deletions all take effect with no duplicates and no stale documents left behind, and the other two collections are untouched.</p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6b757d' }}>Support ops update the FAQ file and re-run one script. No engineering release, no migration, no coordination.</p>
              </div>
              <div style={{ border: SEC, padding: '20px 22px' }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 12, color: '#0f1417' }}>Only resolved tickets are indexed</div>
                <p style={{ margin: '0 0 12px', fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>Nineteen of twenty tickets made it into the index. The one that didn&apos;t was still open.</p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6b757d' }}>An open ticket has no verified resolution to ground an answer in. Indexing one would let an unconfirmed guess become a cited source, which is the exact failure the citation model exists to prevent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 KEY AI DECISIONS ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="06" label="KEY AI DECISIONS" />
            <H2 maxW="26ch">Five decisions, each defensible on user value rather than engineering taste.</H2>
            <div className="nc-table-scroll">
              <div className="nc-table-wide" style={{ border: SEC }}>
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
          </div>
        </section>

        {/* ── 07 STACK ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="07" label="STACK" />
            <H2 maxW="24ch">Every layer chosen to keep the loop cheap to re-run.</H2>
            <div className="nc-table-scroll">
              <div className="nc-table" style={{ border: SEC }}>
                <THead cols={['LAYER', 'CHOICE']} widths="1fr 2.4fr" />
                {STACK.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', borderBottom: i < STACK.length - 1 ? ROW : undefined }}>
                    <span style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{s.layer}</span>
                    <span style={{ padding: '11px 14px', borderLeft: ROW, fontFamily: mono, fontSize: 12.5, lineHeight: 1.55, color: '#4b5660' }}>{s.choice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 HOW IT'S MEASURED ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="08" label="HOW IT'S MEASURED" />
            <H2 maxW="26ch" mb={14}>Bad retrieval and bad generation look identical from the outside.</H2>
            <p style={{ margin: '0 0 24px', maxWidth: '70ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              Every interaction is appended to a JSONL log: the question, the answer, the exact source identifiers retrieved, end-to-end latency, and a thumbs-up/down rating joined back on interaction ID. That makes two questions answerable from data rather than impression.
            </p>
            <div className="nc-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC, marginBottom: 22 }}>
              <div style={{ background: '#fff', padding: '18px 20px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>WHAT IS LOGGED</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Question and streamed answer', 'Exact source identifiers retrieved', 'End-to-end latency', 'Thumbs rating, joined on interaction ID'].map((it, i) => (
                    <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{it}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '18px 20px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>WHAT IT ANSWERS</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {['Which answers are landing', "Which retrieved sources sit behind the ones that aren't", 'Whether a failure was retrieval or generation'].map((it, i) => (
                    <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: '#2c343a' }}>{it}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#fff', padding: '18px 20px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 12 }}>WHY IT MATTERS</div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#2c343a' }}>A thumbs-down on its own tells you nothing actionable. A thumbs-down joined to the nine documents that produced it tells you whether to fix the FAQ or fix the prompt.</p>
              </div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>LATENCY, MEASURED</div>
            <div className="nc-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              <div style={{ background: '#fff', padding: '22px 24px' }}>
                <p style={{ margin: '0 0 14px', fontSize: 13.5, lineHeight: 1.6, color: '#4b5660' }}>Across 11 logged runs on a local machine, end-to-end responses landed between 0.4 and 1.6 seconds, comfortably inside the 10-second target set in the PRD.</p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#6b757d' }}>At that sample size it is a smoke test, not a benchmark. It confirms the concurrent fan-out isn&apos;t a latency problem; it does not establish a production SLA, and it isn&apos;t presented as one.</p>
              </div>
              <div style={{ background: '#fff', padding: '22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, borderLeft: SEC }}>
                <div>
                  <div style={{ fontSize: 'clamp(28px,3vw,42px)', fontWeight: 600, letterSpacing: '-.03em', color: A, lineHeight: 1 }}>0.8s</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#6b757d', marginTop: 6 }}>median, 11 logged runs</div>
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(28px,3vw,42px)', fontWeight: 600, letterSpacing: '-.03em', color: '#0f1417', lineHeight: 1 }}>0.4–1.6s</div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: '#6b757d', marginTop: 6 }}>observed range · 10s target</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 WHAT V2 NEEDS + SYNTHESIS ── */}
        <section className="nc-s" style={S}>
          <div className="nc-w" style={W}>
            <SL n="09" label="WHAT V2 NEEDS + SYNTHESIS" />
            <H2 maxW="26ch">Where the v1 boundary moves next, and what the constraints produced.</H2>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>WHAT V2 NEEDS</div>
              <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Cross-encoder re-ranking before generation.</strong> Nine passages currently reach the prompt in fixed source order. Re-ranking them on relevance would put the strongest evidence where the model weights it most.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Hybrid dense + BM25 search.</strong> Exact codes and plan names are precisely where pure vector search is weakest. A customer quoting a tariff code should hit it exactly, not approximately.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>A RAGAS-style evaluation harness.</strong> Today a retrieval change is judged by eyeballing answers. Without a scored eval set, there is no way to tell an improvement from a regression.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Multi-turn memory feeding retrieval.</strong> Follow-up questions currently retrieve as if they were the first question asked.
                </li>
                <li style={{ fontSize: 14, lineHeight: 1.6, color: '#2c343a' }}>
                  <strong>Authenticated CRM and billing lookups, plus multilingual support.</strong> This is what converts today&apos;s escalations into answers, and it is exactly the work that has to wait until the grounding and citation layer is proven.
                </li>
              </ol>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: '#99a1a7', marginBottom: 14 }}>SYNTHESIS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              {SYNTHESIS.map((s, i) => (
                <div key={i} className="nc-grid-2" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, padding: '18px 22px', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#0f1417' }}>{s.constraint}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.55, color: '#4b5660' }}>{s.outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10 WHAT I LEARNED AS AN AI PM ── */}
        <section className="nc-s" style={{ padding: '68px 0 80px', borderBottom: 'none' }}>
          <div className="nc-w" style={W}>
            <SL n="10" label="WHAT I LEARNED AS AN AI PM" />
            <H2 maxW="26ch" mb={14}>Five things this build changed about how I scope an AI product.</H2>
            <p style={{ margin: '0 0 28px', maxWidth: '68ch', fontSize: 15, lineHeight: 1.6, color: '#4b5660' }}>
              The instinct on an AI product is to ask how many more questions the model could be made to answer. The more useful question turned out to be the inverse: which questions should it never be allowed to answer? That one flip set the scope, the architecture and the UX.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(15,20,23,.09)', border: SEC }}>
              {LESSONS.map(l => (
                <div key={l.n} className="nc-lesson" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '56px 1fr', gap: 4, padding: '20px 22px' }}>
                  <span style={{ fontFamily: mono, fontSize: 12, color: A, paddingTop: 3 }}>{l.n}</span>
                  <span>
                    <span style={{ display: 'block', fontSize: 15.5, fontWeight: 600, letterSpacing: '-.01em', color: '#0f1417', marginBottom: 8, lineHeight: 1.3 }}>{l.t}</span>
                    <span style={{ display: 'block', fontSize: 13.5, lineHeight: 1.65, color: '#4b5660', maxWidth: '72ch' }}>{l.d}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ padding: '40px 0 28px' }}>
          <div className="nc-w" style={{ ...W, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, borderTop: '1px solid rgba(15,20,23,.1)', paddingTop: 18 }}>
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
