export const SITE = {
  name: 'Belfast Local Business',
  url: 'https://belfastlocalbusiness.co.uk',
  tagline: 'News, offers and stories from the businesses on your doorstep',
  description:
    'Local business news, new openings and special offers from independent businesses across Belfast.',
  defaultImage: '/images/og-default.png',
  social: {
    facebook: '', // add your page links when you have them
    instagram: '',
    linkedin: '',
  },
};

export const CATEGORIES = {
  'new-openings': 'New Openings',
  'food-drink': 'Food & Drink',
  'trades-services': 'Trades & Services',
  retail: 'Retail',
  events: 'Events',
  community: 'Community',
} as const;

export type CategorySlug = keyof typeof CATEGORIES;
export const CATEGORY_SLUGS = Object.keys(CATEGORIES) as [CategorySlug, ...CategorySlug[]];

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/London',
  });
}
