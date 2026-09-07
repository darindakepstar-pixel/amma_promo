// Fetches the public preview page of the Telegram channel and writes the
// last few media posts to telegram-feed.json, which the site reads at runtime.
// Run by .github/workflows/telegram-sync.yml on a schedule.

import { writeFile } from 'node:fs/promises';

const CHANNEL = 'Amma_Flowers';
const POST_COUNT = 6;
const FEED_URL = `https://t.me/s/${CHANNEL}`;
const OUT_FILE = 'telegram-feed.json';

function extract(re, str) {
  const m = re.exec(str);
  return m ? m[1] : null;
}

function decodeText(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

async function main() {
  const res = await fetch(FEED_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AmmaFlowersSiteBot/1.0; +https://github.com/darindakepstar-pixel/amma_promo)' }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${FEED_URL}: HTTP ${res.status}`);
  }
  const html = await res.text();

  // Each channel post renders as its own "tgme_widget_message_wrap" block, oldest first.
  const blocks = html.split('tgme_widget_message_wrap').slice(1);

  const posts = [];
  for (const block of blocks) {
    const link = extract(/class="tgme_widget_message_date"\s+href="([^"]+)"/, block);
    if (!link) continue;
    const datetime = extract(/<time[^>]*datetime="([^"]+)"/, block);

    const photo = extract(/tgme_widget_message_photo_wrap[^"]*"\s+style="[^"]*background-image:url\('([^']+)'\)/, block);
    const videoSrc = extract(/class="tgme_widget_message_video[^"]*"[^>]*\bsrc="([^"]+)"/, block);
    const videoThumb = extract(/tgme_widget_message_video_thumb[^"]*"\s+style="[^"]*background-image:url\('([^']+)'\)/, block);

    if (!photo && !videoSrc) continue; // skip text-only posts — the gallery is media-only

    const textRaw = extract(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/, block);

    posts.push({
      id: link.split('/').pop(),
      link,
      date: datetime || '',
      text: textRaw ? decodeText(textRaw).slice(0, 220) : '',
      type: videoSrc ? 'video' : 'photo',
      media: videoSrc || photo,
      poster: videoSrc ? (videoThumb || '') : ''
    });
  }

  const latest = posts.slice(-POST_COUNT).reverse(); // newest first

  await writeFile(OUT_FILE, JSON.stringify({ updatedAt: new Date().toISOString(), posts: latest }));
  console.log(`Wrote ${latest.length} post(s) to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
