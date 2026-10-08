import bannerLg from '../assets/img/pack-banner-1983.webp'
import bannerSm from '../assets/img/pack-banner-1100.webp'
import loungeLg from '../assets/img/pack-lounge-1536.webp'
import loungeSm from '../assets/img/pack-lounge-900.webp'

const SIZES = '(min-width: 1180px) 1180px, 100vw'

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <p className="eyebrow reveal">Gallery</p>
        <h2 id="gallery-title" className="h2 reveal d1">
          Meet the pack
        </h2>

        <div className="gallery__grid">
          <figure className="shot reveal">
            <img
              src={bannerLg}
              srcSet={`${bannerSm} 1100w, ${bannerLg} 1983w`}
              sizes={SIZES}
              width={1983}
              height={793}
              loading="lazy"
              decoding="async"
              alt="WolfPack Club banner: three wolves wrecked in a hotel suite around the WolfPack Club logo, with the WolfPack.tsdns.ir address and 45.81.17.138:12010 across the middle."
            />
          </figure>

          <figure className="shot reveal">
            <img
              src={loungeLg}
              srcSet={`${loungeSm} 900w, ${loungeLg} 1536w`}
              sizes={SIZES}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              alt="Three scenes of the wolf pack: recovering on a couch above the Las Vegas skyline, brushing their teeth at a bathroom mirror, and playing poker under a neon WOLF PACK CLUB sign."
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
