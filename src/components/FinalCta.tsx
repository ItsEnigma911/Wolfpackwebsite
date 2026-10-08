import { SITE } from '../config'
import bannerLg from '../assets/img/pack-banner-1983.webp'
import bannerSm from '../assets/img/pack-banner-1100.webp'

export default function FinalCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <img
        className="cta__bg"
        src={bannerLg}
        srcSet={`${bannerSm} 1100w, ${bannerLg} 1983w`}
        sizes="100vw"
        width={1983}
        height={793}
        loading="lazy"
        decoding="async"
        alt=""
      />
      <div className="wrap">
        <h2 id="cta-title" className="cta__title reveal">
          Ready to join
          <br />
          <span className="gold-text">the pack?</span>
        </h2>
        <div className="reveal d2">
          <a className="btn btn--gold btn--lg" href={SITE.joinUrl}>
            Join TeamSpeak
          </a>
          <p className="cta__addr">{SITE.copyText}</p>
        </div>
      </div>
    </section>
  )
}
