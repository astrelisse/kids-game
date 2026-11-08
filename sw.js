// Beep Beep English (v14) offline helper. Keeps the game page and the English voice files after they are used once,
// so the English games still work without internet. Russian and Cantonese files are not stored (normal network).
const APP = 'bbe-app-v14', MEDIA = 'bbe-media-1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(['./', 'index.html'])).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('bbe-app-') && k !== APP).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin === self.location.origin) {
    const p = u.pathname;
    if (r.mode === 'navigate' || /\/(index\.html)?$/.test(p)) { e.respondWith(page(r)); return; }
    if (/\/sounds\/voice\/en\/[0-9a-f]{8}\.mp3$/.test(p) || /\/sounds\/[a-z_]+\.mp3$/.test(p)) { e.respondWith(media(r)); return; }
    return; // everything else: normal network
  }
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') e.respondWith(cacheFirst(r));
});
async function page(r) { // network first (so updates arrive), the saved copy when offline
  const c = await caches.open(APP);
  try { const res = await fetch(r); if (res && res.ok) c.put(r.url.split('#')[0].split('?')[0], res.clone()); return res; }
  catch (err) { return (await c.match(r, { ignoreSearch: true })) || (await c.match('index.html')) || (await c.match('./')) || Response.error(); }
}
async function cacheFirst(r) {
  const c = await caches.open(APP), hit = await c.match(r); if (hit) return hit;
  try { const res = await fetch(r); if (res && (res.ok || res.type === 'opaque')) c.put(r, res.clone()); return res; } catch (err) { return Response.error(); }
}
async function media(r) { // cache first; answers Range requests (iPad Safari audio) from the saved file
  const c = await caches.open(MEDIA), key = r.url.split('?')[0];
  let res = await c.match(key);
  if (!res) {
    let full;
    try { full = await fetch(key, { credentials: 'same-origin' }); } catch (err) { return Response.error(); }
    if (!full.ok || full.status !== 200) return full;
    await c.put(key, full.clone()); res = full;
  }
  const range = r.headers.get('range');
  if (!range) return res;
  const buf = await res.arrayBuffer(), n = buf.byteLength, m = /bytes=(\d*)-(\d*)/.exec(range);
  let s = 0, end = n - 1;
  if (m) { if (m[1]) { s = +m[1]; if (m[2]) end = Math.min(+m[2], n - 1); } else if (m[2]) { s = Math.max(0, n - +m[2]); } }
  if (s >= n) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + n } });
  return new Response(buf.slice(s, end + 1), { status: 206, headers: { 'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': `bytes ${s}-${end}/${n}`, 'Content-Length': String(end - s + 1), 'Accept-Ranges': 'bytes' } });
}
