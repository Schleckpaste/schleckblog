# Schleck Studio

A bilingual German/English website offering bespoke WordPress design, redesign,
and support services. This repository contains the site-specific files and
custom block theme; WordPress core, plugins, uploads, and the site's runtime
database are not committed here.

## Repository structure

```text
.
├── .github/workflows/       # GitHub Actions validation
├── wp-content/
│   └── themes/
│       └── schleckblog/     # Custom block theme
├── .editorconfig
├── .gitattributes
└── README.md
```

The theme's WordPress.org directory name remains `schleckblog`; its displayed
brand is **Schleck Studio**.

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

Playground is a local development environment; it does not require Docker or a
separate PHP installation. In the WordPress dashboard, activate **Schleckblog**
under **Appearance → Themes**. The front page includes a German/English
language toggle and sections for services, process, FAQs, and contact.

The first `npx` run downloads the Playground CLI. Its WordPress site data is
separate from Git and is not published when you push this repository.

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

## Publish the repository to GitHub

1. Create an empty repository on GitHub. Do not initialize it with a README,
   `.gitignore`, or license file; this project already has a Git history.
2. Add that repository as the `origin` remote and push the existing `main`
   branch:

   ```powershell
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. Check the repository's **Actions** tab to confirm that **Validate WordPress
   theme** passes.

This publishes the source code to GitHub, not a live WordPress website.
Deploy the `wp-content/themes/schleckblog` theme directory to a WordPress
hosting provider separately. WordPress content, media uploads, database
settings, and the Playground development site are not included.

The theme declares **GPL-2.0-or-later** in its stylesheet header. Review the
license and any third-party asset licensing before distributing the project.
