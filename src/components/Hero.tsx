import { SITE } from '../config'
import heroLg from '../assets/img/pack-lounge-1536.webp'
import heroSm from '../assets/img/pack-lounge-900.webp'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img
        className="hero__bg"
        src={heroLg}
        srcSet={`${heroSm} 900w, ${heroLg} 1536w`}
        sizes="100vw"
        width={1536}
        height={1024}
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="wrap">
        <p className="eyebrow rise d1">TeamSpeak community</p>

        <h1 id="hero-title" className="hero__title">
          <span className="rise d2">No work.</span>
          <span className="rise d3">No rules.</span>
          <span className="rise d4 gold-text">Just wolves.</span>
        </h1>

        <p className="hero__lead rise d5">
          <span>A private hangout for the pack.</span>
          <span>Late nights, games, chaos and good company.</span>
        </p>

        <div className="hero__actions rise d6">
          <a className="btn btn--gold" href={SITE.joinUrl}>
            Join the pack
          </a>
          <a className="btn btn--ghost" href="#server">
            View server
          </a>
        </div>
      </div>
    </section>
  )
}
