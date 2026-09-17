# public/

Drop two files here and point `PROFILE` in [`lib/data.ts`](../lib/data.ts) at them.
Until you do, both degrade gracefully — no broken images, no dead buttons.

| File | `PROFILE` field | What happens while it's missing |
|---|---|---|
| `headshot.jpg` | ✅ **in place** — `/headshot.jpg` | (n/a) |
| `resume.pdf` | `resumeUrl: '/resume.pdf'` | The "Download résumé ↓" button is not rendered at all |

### headshot.jpg

640×640, 58 KB, watermark removed. Rendered through `next/image`, so the browser
receives a WebP/AVIF sized to the frame (180px desktop, 120px mobile) — the file
here is the master, not what ships over the wire.

To replace it: overwrite `headshot.jpg` with a **square** photo. The hero frame is a
circle with `overflow: hidden`, so the four corners are clipped — a corner watermark
never shows there. If your file is a `.png`, either convert it or update
`PROFILE.headshot` in [`lib/data.ts`](../lib/data.ts) to match the extension;
a mismatched path falls back to the "VM" initials disc rather than breaking.

`PROFILE.linkedin` behaves the same way: set it to a full `https://` URL and the
LinkedIn buttons appear in the hero CTA and the footer; leave it empty and they stay hidden.

Optional: add a `cover` field to any entry in `WORKS` or `CASES` (e.g.
`cover: '/covers/gsa.png'`) to replace that card's striped placeholder band
with a real product shot.
