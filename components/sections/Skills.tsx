import RevealSection from '@/components/ui/RevealSection'
import { ICONS } from '@/components/ui/Icons'
import { SKILLS } from '@/lib/data'

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills &amp; tools</p>
        <h2>What I bring to the table</h2>
      </div>

      <RevealSection
        className="panel"
        style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 24 }}
      >
        {SKILLS.map(cat => (
          <div key={cat.category} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{
              margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--ink-faint)',
              textTransform: 'uppercase', letterSpacing: '.06em',
            }}>
              {cat.category}
            </p>

            <div className="skills-grid" style={{ display: 'grid', gap: 12 }}>
              {cat.skills.map(skill => (
                <div
                  key={skill.label}
                  style={{
                    border: '1px solid var(--card-border)',
                    borderRadius: 'var(--radius-tile)',
                    padding: 14,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 8, textAlign: 'center',
                  }}
                >
                  <span style={{
                    width: 32, height: 32, borderRadius: 8, flex: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: cat.accent === 'warm' ? 'var(--warm-tint)' : 'var(--accent-tint)',
                    color: cat.accent === 'warm' ? 'var(--warm)' : 'var(--accent)',
                  }}>
                    {ICONS[skill.icon]}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RevealSection>
    </div>
  )
}
