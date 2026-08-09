# Rose added as a dedicated accent token, not folded into an existing one

The 2026-08 homepage redesign (see grilling session) wanted a small decorative color to pair with the existing navy/gold brand identity, referencing barge166.com's use of a sparing rose-pink accent against navy and gold. We're introducing it as its own token (`--brand-rose: #b84357`, same value in both light and dark mode per explicit choice), scoped for this pass to `SiteFooter`'s social icons and the Bio "scroll to discover" hint — not repurposing `--accent` (kept neutral specifically so hover states don't turn gold, per the original brand-color decision) or `--destructive` (already a similar red/orange hue, reserved for error states). Same reasoning that protected `--accent` from gold now protects it, and `--destructive`, from rose.

**Status**: accepted
