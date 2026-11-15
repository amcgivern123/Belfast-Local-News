# Belfast Local Business

Local business news site for belfastlocalbusiness.co.uk, built with Astro and hosted on Netlify. Articles and offers are edited through Pages CMS.

## Going live (one-off)

1. **GitHub:** create a new repository called `belfast-local-business`. Choose "uploading an existing file" and drag in everything inside this folder (including the hidden `.pages.yml` and `.github` folder). Commit.
2. **Netlify:** Add new site → Import an existing project → GitHub → pick the repository. The build settings fill in automatically from `netlify.toml`. Deploy.
3. **Forms:** in Netlify, go to Forms and turn on form detection, then redeploy. Newsletter sign-ups and story submissions will appear there.
4. **Domain:** Netlify → Domain management → Add `belfastlocalbusiness.co.uk`, then follow its instructions to point the domain at Netlify. HTTPS is automatic.
5. **Editor:** go to https://app.pagescms.org, sign in with GitHub, allow access to the repository and open it. You'll see Articles and Offers.
6. **Daily rebuild (optional but recommended):** Netlify → Site configuration → Build hooks → add one, copy the URL. In GitHub → Settings → Secrets and variables → Actions → New secret named `NETLIFY_BUILD_HOOK`, paste the URL.
7. **Google:** add the site to Google Search Console and submit `https://belfastlocalbusiness.co.uk/sitemap-index.xml`.

## Day to day

- **New article:** Pages CMS → Articles → Add entry → fill in the form → Save. The site updates in about a minute.
- **Pin a story:** tick "Pin to top of homepage". The newest pinned story is the lead. Untick it when you want to replace it.
- **Offers:** Pages CMS → Offers. They vanish automatically after their end date.
- **Before launch:** delete the sample articles and offers (their files start with or contain "sample").

## Where things live

- `src/content/articles/` – one file per article
- `src/content/offers/` – one file per offer
- `public/images/` – photos you upload
- `src/styles/global.css` – colours and fonts (change `--accent` to switch the red)
- `src/lib/site.ts` – site name, sections, social links
- `src/pages/` – page templates
