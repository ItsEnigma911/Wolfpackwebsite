const PRINCIPLES = [
  { n: '01', title: 'Respect the pack', text: 'Respect other members.' },
  { n: '02', title: 'Keep it fun', text: 'No unnecessary drama, spam or harassment.' },
  { n: '03', title: 'Listen to staff', text: 'Follow moderation decisions and community rules.' },
] as const

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap">
        <p className="eyebrow reveal">The pack code</p>
        <h2 id="about-title" className="h2 about__title reveal d1">
          What happens in the wolf pack
          <br />
          stays in the wolf pack.
        </h2>
        <p className="about__text reveal d2">
          WolfPack is a community built around gaming, TeamSpeak hangouts, late-night
          conversations and having a good time. Pull up a chair, jump in a channel and be part of
          the pack — three simple rules keep it that way.
        </p>

        <ol className="rules">
          {PRINCIPLES.map((p, i) => (
            <li key={p.n} className={`rule reveal d${i + 1}`}>
              <span className="rule__n" aria-hidden="true">
                {p.n}
              </span>
              <h3>
                <span className="sr-only">{p.n} — </span>
                {p.title}
              </h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
