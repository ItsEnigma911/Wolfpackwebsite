import { useEffect, useRef, useState } from 'react'
import { SITE } from '../config'

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for non-secure contexts / older browsers.
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.className = 'sr-copy'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

export default function Server() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onCopy = async () => {
    if (await copyText(SITE.copyText)) {
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="server" className="section server" aria-labelledby="server-title">
      <div className="wrap server__grid">
        <div className="reveal">
          <p className="eyebrow">TeamSpeak</p>
          <h2 id="server-title" className="h2">
            The Den
          </h2>
          <p className="server__copy">
            One address, one click. Drop into the channel, grab a seat and say hi — the door is
            always open to the pack.
          </p>
        </div>

        <div className="ticket reveal d2">
          <div className="ticket__top">
            <span className="ticket__tag">TeamSpeak server</span>
            <span className="status">
              <i aria-hidden="true" />
              ONLINE
            </span>
          </div>

          <dl className="ticket__rows">
            <div>
              <dt>Server</dt>
              <dd>{SITE.host}</dd>
            </div>
            <div>
              <dt>IP</dt>
              <dd>{SITE.ip}</dd>
            </div>
          </dl>

          <div className="ticket__actions">
            <a className="btn btn--gold" href={SITE.joinUrl}>
              Connect to TeamSpeak
            </a>
            <button type="button" className="btn btn--ghost" onClick={onCopy}>
              Copy address
            </button>
            <span className={`copied${copied ? ' on' : ''}`} role="status" aria-live="polite">
              {copied ? 'Copied!' : ''}
            </span>
          </div>
        </div>

        <p className="server__help reveal d3">
          No TeamSpeak yet?{' '}
          <a href="https://teamspeak.com/en/downloads/" target="_blank" rel="noopener noreferrer">
            Get the free client
          </a>
          , then hit Connect and paste the address.
        </p>
      </div>
    </section>
  )
}
