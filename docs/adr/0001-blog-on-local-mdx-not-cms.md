# Blog content lives in local MDX, not a CMS or database

The blog needs to ship quickly as part of the initial site, but may later need a real backend (author from anywhere, add PostgreSQL-backed email subscriptions, etc.). We chose to drive Posts entirely from local MDX files rather than adopting a headless CMS or building an API+database from day one, and to put a thin data-access seam between the MDX source and the rendering layer. This keeps initial cost low while avoiding a full rewrite of page/rendering code if a backend is added later — only the data layer would change.

**Status**: accepted
