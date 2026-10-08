# WolfPack Club

Static one-page site for the WolfPack TeamSpeak community.
React + TypeScript + Vite. No backend, no database, no API calls.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # test the production build locally
```

Needs Node 20.19+ (or 22.12+).

## Deploy to DirectAdmin (Apache)

1. Enable SSL for the domain in DirectAdmin (Let's Encrypt).
2. Run `npm run build`.
3. Upload **everything inside `dist/`** (including the hidden `.htaccess`) to `public_html/`.

`.htaccess` forces HTTPS, disables directory listing, blocks dotfiles/`.map` files, and sets the
security headers + Content Security Policy (`'self'` only — fonts and images are all bundled, so
nothing external is loaded).

## Edit

- Server address / join link / nav: `src/config.ts`
- Hero image: `src/components/Hero.tsx` (swap the two imports)
- Colours and spacing: top of `src/styles.css`

## Notes

- The **ONLINE** badge is a static label. There is no live TeamSpeak query — that would need a
  server-side ServerQuery bridge, which this site deliberately doesn't have.
- The only external link is "Get the free client" → teamspeak.com (opens with `noopener noreferrer`).
- Images in `src/assets/img/` are WebP versions of the two supplied artworks.
