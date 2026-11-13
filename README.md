# Muhammad Kazim — Research Portfolio

Personal research portfolio for Muhammad Kazim, Ph.D., an AI researcher working on graph learning, resilient energy infrastructure, cybersecurity, and biomedical AI.

The single-page layout and styling are adapted from [Guangfa Li's portfolio](https://github.com/liguangfa/LiGuangfa.github.io), with Muhammad Kazim's own content and assets. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for source and license details.

[View the live portfolio](https://kazim-portfolio.vercel.app)

## Focus

- AI for resilient and sustainable energy systems
- Multilayer networks and graph neural networks
- Predictive maintenance and critical infrastructure
- Cybersecurity, digital forensics, and biomedical AI

## Local development

```bash
npm install
npm start
```

Create a production build with `npm run build`.

## Vercel deployment

This repository continues to use React and its existing Create React App build.
`vercel.json` sets the build command to `npm run build` and the output directory
to `build`. No GitHub Pages configuration is needed.

Keep Vercel connected to `kazim01011/portfolio`. A push to the configured
production branch triggers deployment when Git integration is enabled.
Existing `/about`, `/projects`, `/publications`, and `/skills` URLs open the
corresponding sections; new navigation uses anchors on one page.
