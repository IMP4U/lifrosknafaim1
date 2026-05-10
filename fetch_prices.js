/**
 * Fetch prices (and specifically one-time / 単発 prices) from
 * https://shops.fiteasy.jp/shop21 using Playwright.
 *
 * Usage:
 *   npm i playwright
 *   npx playwright install chromium
 *   node fetch_prices.js
 *
 * Outputs:
 *   - Prints all yen prices found on the page, plus a filtered list of
 *     "one-time" prices (matched by Japanese keywords like 単発, 都度,
 *     ドロップイン, チケット, 体験, お試し, 1回, etc.).
 *   - Writes /tmp/shop21_prices.json with the structured results.
 *   - Writes /tmp/shop21_text.txt with the full visible page text.
 */

const { chromium } = require('playwright');
const fs = require('fs');

const URL = 'https://shops.fiteasy.jp/shop21';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'ja-JP',
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  // Give the SPA a moment to finish rendering price content.
  await page.waitForTimeout(3000);

  const title = await page.title();
  const finalUrl = page.url();

  const priceEntries = await page.evaluate(() => {
    const yenRe = /[¥￥]\s*[\d,]+|\d{1,3}(?:,\d{3})+\s*円|\d+\s*円/;

    const isVisible = (el) => {
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      return (
        r.width > 0 &&
        r.height > 0 &&
        s.visibility !== 'hidden' &&
        s.display !== 'none'
      );
    };

    const all = Array.from(document.querySelectorAll('body *')).filter(isVisible);
    const results = [];
    const seen = new Set();

    for (const el of all) {
      const text = (el.innerText || '').trim();
      if (!text || text.length > 400) continue;
      if (!yenRe.test(text)) continue;

      // Keep only the most specific element with this price text.
      const hasMatchingChild = Array.from(el.children).some((c) => {
        const t = (c.innerText || '').trim();
        return t && yenRe.test(t) && t.length >= text.length * 0.9;
      });
      if (hasMatchingChild) continue;

      // Walk up a few levels to grab nearby label / context text.
      let ctx = el;
      for (let i = 0; i < 3 && ctx.parentElement; i++) ctx = ctx.parentElement;
      const contextText = (ctx.innerText || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 300);

      const key = contextText + '||' + text;
      if (seen.has(key)) continue;
      seen.add(key);

      results.push({ price: text.replace(/\s+/g, ' '), context: contextText });
    }
    return results;
  });

  const oneTimeKeywords = [
    '単発', '都度', '1回', '一回', '1レッスン', '1回券', '回数券',
    'ドロップイン', 'ドロップ・イン', 'チケット', 'ビジター', 'お試し',
    '体験', 'one-time', 'one time', 'single', 'drop-in', 'drop in',
  ];
  const oneTimeMatches = priceEntries.filter((e) =>
    oneTimeKeywords.some((k) =>
      (e.context || '').toLowerCase().includes(k.toLowerCase())
    )
  );

  console.log('=== PAGE INFO ===');
  console.log('URL:   ', finalUrl);
  console.log('Title: ', title);
  console.log();
  console.log(`=== ALL PRICE-LIKE ENTRIES (${priceEntries.length}) ===`);
  priceEntries.forEach((e, i) => {
    console.log(`\n[${i + 1}] price: ${e.price}`);
    console.log(`    context: ${e.context}`);
  });
  console.log();
  console.log(`=== ONE-TIME / 単発 MATCHES (${oneTimeMatches.length}) ===`);
  oneTimeMatches.forEach((e, i) => {
    console.log(`\n[${i + 1}] price: ${e.price}`);
    console.log(`    context: ${e.context}`);
  });

  const fullText = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('/tmp/shop21_text.txt', fullText);
  fs.writeFileSync(
    '/tmp/shop21_prices.json',
    JSON.stringify({ url: finalUrl, title, priceEntries, oneTimeMatches }, null, 2)
  );
  console.log('\nFull page text saved to /tmp/shop21_text.txt');
  console.log('Structured data saved to /tmp/shop21_prices.json');

  await browser.close();
})().catch((err) => {
  console.error('ERROR:', err);
  process.exit(1);
});
