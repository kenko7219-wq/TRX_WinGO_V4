TRX WINGO 1 MIN - API + USER PATTERNS

GitHub upload extracted files:
server.js
package.json
public/index.html

Render:
Build: npm install
Start: npm start

The backend reads the supplied public TRX 1M history endpoint. The frontend maps number % 10 >= 5 to BIG, otherwise SMALL.
The 40 user-provided B/S patterns are scanned against chronological API history. When pattern matches have a following known result, those next outcomes are counted; the majority is shown as the pattern-based signal. If there are no usable pattern matches, it falls back to recent BIG/SMALL majority.
Only 30 API history rows are requested by this starter, so longer patterns/matches may be sparse. This is a heuristic based on historical occurrences, not a guarantee or validated accuracy claim.
Shwelottery is embedded in an iframe; the target site may block iframe embedding.

The minimized floating bubble uses the supplied TRX WINGO V3 logo image at public/assets/trx-wingo-v3-logo.png.

UI update: removed the word SIGNAL from the popup heading/title.

UI update:
- Removed the previous TRX WINGO V3 image from the package.
- The minimized floating icon is now the requested 🫟 emoji.
- The floating emoji can be dragged around the screen.
- The popup can also be repositioned by dragging its top title bar.

UI update: removed visible DEMO wording from the popup.
