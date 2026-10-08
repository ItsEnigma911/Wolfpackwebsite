import { SITE } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__brand">{SITE.name}</p>
          <p className="footer__small">
            TeamSpeak is a trademark of TeamSpeak Systems GmbH. WolfPack Club is an independent
            community.
          </p>
        </div>
        <div className="footer__addr">
          <p>{SITE.host}</p>
          <p>{SITE.ip}</p>
        </div>
        <p className="footer__copy">© 2026 WolfPack Club</p>
      </div>
    </footer>
  )
}
