# Schleck Studio

A bilingual German/English website offering bespoke WordPress design, redesign,
and support services. WordPress core is supplied by the local runtime rather
than committed to this repository.

## Requirements

- WordPress 6.6 or later
- Node.js 20.18 or later
- npm and an internet connection for the first Playground CLI run

The custom dark block theme uses `theme.json` version 3 and lives in
`wp-content/themes/schleckblog`.

## Run locally

From the theme directory, start a local WordPress Playground with the theme
mounted:

```powershell
Set-Location .\wp-content\themes\schleckblog
npx @wp-playground/cli@latest start --auto-mount
```

Playground is a disposable local development environment; it does not require
Docker or a separate PHP installation. In the WordPress dashboard, activate **Schleckblog** under **Appearance →
Themes**. The front page includes a German/English language toggle and sections
for services, process, FAQs, and contact.

## Make it yours

- Change the displayed brand, contact email, site title, and legal-page links
  to match your business before publishing. The contact link currently uses
  `hallo@deine-domain.de` as a placeholder.
- Create and review your Impressum and privacy-policy pages, then link them
  from the footer. The footer links are provided, but legal copy and pages are
  not generated.
- Edit the homepage copy and design in **Appearance → Editor → Design →
  Templates → Front Page**. The language toggle and translations are in the
  theme files.

The theme includes responsive templates for the bilingual service homepage,
blog, posts, pages, archives, and 404 responses. Its color presets are defined
in `theme.json`; the landing page design and language toggle are in `style.css`
and `assets/js/language-toggle.js`.
