import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

/** Published articles, newest first. Drafts and future-dated articles are hidden. */
export async function getArticles(): Promise<Article[]> {
  const now = new Date();
  const all = await getCollection('articles', ({ data }) => !data.draft && data.date <= now);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The homepage lead: the newest pinned article, otherwise the newest article. */
export function pickLead(articles: Article[]) {
  return articles.find((a) => a.data.pinned) ?? articles[0];
}

/** Offers that haven't ended yet, ending soonest first. */
export async function getLiveOffers() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const all = await getCollection('offers', ({ data }) => data.ends >= today);
  return all.sort((a, b) => a.data.ends.getTime() - b.data.ends.getTime());
}

export const articleUrl = (a: Article) => `/news/${a.id}/`;
