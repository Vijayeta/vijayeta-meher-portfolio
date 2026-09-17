import type { Metadata } from 'next'
import {
  CaseNav, CaseHeader, CaseMain, CaseSection, CaseCTA, GlanceCard,
  H2, H3, Lede, DataTable, KeyCard, Flow, Metric, ProductShot, mono,
} from '@/components/case'

export const metadata: Metadata = {
  title: 'Telecom RAG Assistant — Vijayeta Meher',
  description: 'A retrieval-augmented Tier-1 telecom support assistant that answers only from what it retrieves, and refuses everything else.',
}

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

const LOGGED = ['Question and streamed answer', 'Exact source identifiers retrieved', 'End-to-end latency', 'Thumbs rating, joined on interaction ID']
const ANSWERS = ['Which answers are landing', "Which retrieved sources sit behind the ones that aren't", 'Whether a failure was retrieval or generation']

const sub = { fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--ink-faint)', marginBottom: 14, display: 'block' }

// ── Page ──────────────────────────────────────────────────

export default function NovaCellPage() {
  return (
    <>
      <CaseNav label="AI Lab · Case study 02" />

      <CaseHeader
        eyebrow="AI Lab · Case study 02"
        title="Telecom RAG Assistant"
        subtitle="It answers Tier-1 telecom questions from three disconnected knowledge sources, and refuses anything they don't cover."
        lede="NovaCell Support Assistant is a grounded question-answering system for mobile customer care. It fans a customer's question out across three separately indexed knowledge sources in parallel, assembles nine source-labelled passages into the prompt, and answers only from what it retrieved. When the sources don't cover the question, it says so and hands off to a human instead of guessing."
        tags={TAGS}
        callout={{
          label: 'The one-line story',
          text: 'A grounded customer-support assistant that answers Tier-1 telecom questions from three enterprise knowledge sources, and deliberately refuses when it cannot verify an answer. The goal was never another chatbot. It was a harder product question: how do you make an AI support experience useful enough to deflect repetitive queries, and safe enough to trust when the cost of a wrong answer is high?',
        }}
        links={
          <a href="https://ai-telecom-support-assistant.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn">
            Live app →
          </a>
        }
      />

      <CaseMain>
        <GlanceCard rows={GLANCE} />

        <ProductShot
          src="/covers/novacell.webp"
          width={2400}
          height={1200}
          alt="The NovaCell Support Assistant chat interface, captured from the live app: a sidebar headed 'Grounded in NovaCell's FAQ, resolved tickets and user guides' with ten sample questions, and the assistant's opening message stating the topics it answers and the sources it answers from."
          caption="The live Streamlit interface. The assistant opens by stating its scope and its sources — the boundary is the first thing a customer sees, not a message they hit after a wrong answer."
        />

        {/* ── 01 THE PROBLEM ── */}
        <CaseSection n="01" label="The problem">
          <H2 maxW="22ch" mb={14}>The knowledge isn&apos;t missing. It&apos;s scattered.</H2>
          <Lede>
            NovaCell is a mobile operator with roughly four million subscribers. Support is one of its largest costs and
            one of its lowest satisfaction scores, and most of the volume is Tier-1: slow data, a confusing charge, a
            SIM that won&apos;t activate, roaming setup before a trip. These are questions whose answers already exist
            inside the company. They are split across three surfaces a customer cannot search together and an agent has
            to reconcile by hand.
          </Lede>

          <div className="cs-grid-3" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
            {SOURCES.map(s => (
              <div key={s.k} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 20px' }}>
                <span style={sub}>{s.k}</span>
                <div style={{ fontFamily: mono, fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600, color: 'var(--accent)', marginTop: 10 }}>{s.t}</div>
                <p style={{ margin: '12px 0 0', fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{s.d}</p>
              </div>
            ))}
          </div>

          <p style={{ margin: 0, maxWidth: '70ch', fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
            So customers wait on hold for things an FAQ could solve, agents burn out on repetitive tickets, and the same
            question gets three different answers depending on who picks it up.
          </p>
        </CaseSection>

        {/* ── 02 WHO ASKS ── */}
        <CaseSection n="02" label="Who asks, and what they ask">
          <H2 maxW="24ch" mb={14}>Eight categories that cover the Tier-1 queue.</H2>
          <Lede>
            Scope was set by what the knowledge base can actually support, not by what a chatbot could plausibly be
            asked. Anything outside these eight categories is refused rather than attempted.
          </Lede>

          <div className="cs-grid-4" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
            {CATEGORIES.map(c => <KeyCard key={c.k} k={c.k} t={c.t} d={c.d} />)}
          </div>

          <span style={sub}>The jobs behind the questions</span>
          <DataTable
            cols={['When…', 'I want to…', 'So I can…']}
            widths="1.3fr 1.4fr 1.3fr"
            colStyles={[undefined, { fontWeight: 700, color: 'var(--ink)' }, undefined]}
            rows={JTBD.map(j => [j.when, j.want, j.so])}
          />
        </CaseSection>

        {/* ── 03 SCOPE ── */}
        <CaseSection n="03" label="Scope · what it answers, what it hands off">
          <H2 maxW="30ch" mb={14}>
            A question about your bill goes to a human. A question about how billing works is answered from the guide.
          </H2>
          <Lede maxW="74ch">
            The v1 boundary is deliberate: no CRM, no billing integration, no authentication. That line is not a gap
            waiting to be closed. It is the decision that makes every answer on the other side of it safe to trust.
          </Lede>

          <div style={{ marginBottom: 28 }}>
            <DataTable
              cols={['A customer asks', 'Routing', 'Why']}
              widths="1.4fr .8fr 1.8fr"
              colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, undefined, undefined]}
              rows={ROUTING.map(r => [
                r.q,
                <span
                  key={r.q}
                  className={r.where === 'ANSWERED' ? 'chip' : 'chip chip-plain'}
                  style={{ fontSize: 10 }}
                >
                  {r.where}
                </span>,
                r.d,
              ])}
            />
          </div>

          <span style={sub}>Cut from v1</span>
          <DataTable
            cols={['Capability', 'Why it was left out']}
            widths="1fr 1.8fr"
            colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, undefined]}
            rows={CUT_FROM_V1.map(c => [c.feature, c.why])}
          />
        </CaseSection>

        {/* ── 04 ARCHITECTURE ── */}
        <CaseSection n="04" label="Architecture">
          <H2 maxW="28ch">Four stages, and a retrieval step that lives outside the generation chain.</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            <Flow
              label="Stage 1 · fan out"
              nodes={[
                { text: 'Customer question' },
                { text: 'Local embedding', accent: true },
                { text: 'Concurrent dispatch' },
                { text: '3 ChromaDB collections' },
              ]}
              caption="The question is embedded on the machine and dispatched to three collections concurrently, not as one blended index. FAQ, tickets and guides each return their own top-3."
            />
            <Flow
              label="Stage 2 · merge & label"
              nodes={[
                { text: '9 results' },
                { text: 'Fixed source order' },
                { text: 'Origin + identifier tags', accent: true },
              ]}
              caption="Results are merged in a fixed source order and tagged with where they came from (FAQ | FAQ-12, TICKETS | TK-004, GUIDES | telecom_guide.pdf p.3), so the model can attribute a claim and never silently blend an un-retrieved fact into a retrieved one."
            />
            <Flow
              label="Stage 3 · ground"
              nodes={[
                { text: 'Labelled context block' },
                { text: 'System prompt rules', accent: true },
                { text: 'Assembled prompt' },
              ]}
              caption="The rules override everything else: answer only from this context, never use training knowledge, never state a number that isn't here, and if the context doesn't cover the question say so in one sentence and hand off."
            />
            <Flow
              label="Stage 4 · answer"
              nodes={[
                { text: 'Assembled prompt' },
                { text: 'qwen3.6-27b on Groq', accent: true },
                { text: 'Streamed answer + Sources list' },
              ]}
              caption="Temperature 0 with reasoning disabled: deterministic and fast, because a support answer should be the same answer every time it is asked."
            />
          </div>
        </CaseSection>

        {/* ── 05 THE KNOWLEDGE BASE ── */}
        <CaseSection n="05" label="The knowledge base">
          <H2 maxW="28ch" mb={14}>Eighty-one documents, three ingest scripts, no migrations.</H2>
          <Lede maxW="74ch">
            Each source keeps its own collection, its own loader and its own document granularity. Adding a fourth
            source takes two changes: write an ingest script, register one collection entry. The retriever, prompt
            context, Sources list and admin panel all pick it up automatically.
          </Lede>

          <div style={{ marginBottom: 28 }}>
            <DataTable
              cols={['Collection', 'Source', 'Document unit', 'Docs']}
              widths="1fr 1.5fr 1.7fr .7fr"
              colStyles={[
                { fontFamily: mono, fontWeight: 700, color: 'var(--ink)' },
                undefined, undefined,
                { fontFamily: mono, fontWeight: 600, color: 'var(--accent)' },
              ]}
              rows={[
                ...COLLECTIONS.map(c => [c.name, c.source, c.unit, c.n]),
                [
                  <span key="t" style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.1em', color: 'var(--ink-faint)' }}>TOTAL</span>,
                  '3 independently indexed sources',
                  '9 retrieved per question',
                  '81',
                ],
              ]}
            />
          </div>

          <div className="cs-grid-2" style={{ display: 'grid', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 22px' }}>
              <H3>Ingestion is idempotent by construction</H3>
              <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Each script drops and rebuilds its own collection from source. Edits, additions and deletions all take
                effect with no duplicates and no stale documents left behind, and the other two collections are
                untouched.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Support ops update the FAQ file and re-run one script. No engineering release, no migration, no
                coordination.
              </p>
            </div>

            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '20px 22px' }}>
              <H3>Only resolved tickets are indexed</H3>
              <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Nineteen of twenty tickets made it into the index. The one that didn&apos;t was still open.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                An open ticket has no verified resolution to ground an answer in. Indexing one would let an unconfirmed
                guess become a cited source, which is the exact failure the citation model exists to prevent.
              </p>
            </div>
          </div>
        </CaseSection>

        {/* ── 06 KEY AI DECISIONS ── */}
        <CaseSection n="06" label="Key AI decisions">
          <H2 maxW="28ch">Five decisions, each defensible on user value rather than engineering taste.</H2>
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
        </CaseSection>

        {/* ── 07 STACK ── */}
        <CaseSection n="07" label="Stack">
          <H2 maxW="24ch">Every layer chosen to keep the loop cheap to re-run.</H2>
          <DataTable
            cols={['Layer', 'Choice']}
            widths="1fr 2.4fr"
            colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, { fontFamily: mono, fontSize: 13 }]}
            rows={STACK.map(s => [s.layer, s.choice])}
          />
        </CaseSection>

        {/* ── 08 HOW IT'S MEASURED ── */}
        <CaseSection n="08" label="How it's measured">
          <H2 maxW="28ch" mb={14}>Bad retrieval and bad generation look identical from the outside.</H2>
          <Lede maxW="74ch">
            Every interaction is appended to a JSONL log: the question, the answer, the exact source identifiers
            retrieved, end-to-end latency, and a thumbs-up/down rating joined back on interaction ID. That makes two
            questions answerable from data rather than impression.
          </Lede>

          <div className="cs-grid-3" style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 20px' }}>
              <span style={sub}>What is logged</span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {LOGGED.map((it, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{it}</li>)}
              </ul>
            </div>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 20px' }}>
              <span style={sub}>What it answers</span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {ANSWERS.map((it, i) => <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{it}</li>)}
              </ul>
            </div>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '18px 20px' }}>
              <span style={sub}>Why it matters</span>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                A thumbs-down on its own tells you nothing actionable. A thumbs-down joined to the nine documents that
                produced it tells you whether to fix the FAQ or fix the prompt.
              </p>
            </div>
          </div>

          <span style={sub}>Latency, measured</span>
          <div className="cs-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)', padding: '22px 24px' }}>
              <p style={{ margin: '0 0 14px', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Across 11 logged runs on a local machine, end-to-end responses landed between 0.4 and 1.6 seconds,
                comfortably inside the 10-second target set in the PRD.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                At that sample size it is a smoke test, not a benchmark. It confirms the concurrent fan-out isn&apos;t a
                latency problem; it does not establish a production SLA, and it isn&apos;t presented as one.
              </p>
            </div>

            <div style={{
              border: '1px solid var(--card-border)', borderRadius: 'var(--radius-tile)',
              padding: '22px 24px', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: 22,
            }}>
              <Metric value="0.8s" label="median, 11 logged runs" accent />
              <Metric value="0.4–1.6s" label="observed range · 10s target" />
            </div>
          </div>
        </CaseSection>

        {/* ── 09 WHAT V2 NEEDS + SYNTHESIS ── */}
        <CaseSection n="09" label="What v2 needs + synthesis">
          <H2 maxW="28ch">Where the v1 boundary moves next, and what the constraints produced.</H2>

          <div style={{ marginBottom: 32 }}>
            <span style={sub}>What v2 needs</span>
            <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Cross-encoder re-ranking before generation.</strong>{' '}
                Nine passages currently reach the prompt in fixed source order. Re-ranking them on relevance would put
                the strongest evidence where the model weights it most.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Hybrid dense + BM25 search.</strong>{' '}
                Exact codes and plan names are precisely where pure vector search is weakest. A customer quoting a
                tariff code should hit it exactly, not approximately.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>A RAGAS-style evaluation harness.</strong>{' '}
                Today a retrieval change is judged by eyeballing answers. Without a scored eval set, there is no way to
                tell an improvement from a regression.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Multi-turn memory feeding retrieval.</strong>{' '}
                Follow-up questions currently retrieve as if they were the first question asked.
              </li>
              <li style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)' }}>Authenticated CRM and billing lookups, plus multilingual support.</strong>{' '}
                This is what converts today&apos;s escalations into answers, and it is exactly the work that has to wait
                until the grounding and citation layer is proven.
              </li>
            </ol>
          </div>

          <span style={sub}>Synthesis</span>
          <DataTable
            cols={['Constraint', 'Product outcome']}
            widths="1fr 1.4fr"
            colStyles={[{ fontWeight: 700, color: 'var(--ink)' }, undefined]}
            rows={SYNTHESIS.map(s => [s.constraint, s.outcome])}
          />
        </CaseSection>

        {/* ── 10 WHAT I LEARNED ── */}
        <CaseSection n="10" label="What I learned as an AI PM">
          <H2 maxW="28ch" mb={14}>Five things this build changed about how I scope an AI product.</H2>
          <Lede maxW="72ch">
            The instinct on an AI product is to ask how many more questions the model could be made to answer. The more
            useful question turned out to be the inverse: which questions should it never be allowed to answer? That one
            flip set the scope, the architecture and the UX.
          </Lede>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {LESSONS.map(l => <KeyCard key={l.n} k={l.n} t={l.t} d={l.d} />)}
          </div>
        </CaseSection>
      </CaseMain>

      <CaseCTA />
    </>
  )
}
