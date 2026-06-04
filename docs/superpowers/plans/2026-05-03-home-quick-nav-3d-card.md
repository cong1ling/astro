# Home Quick Nav 3D Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add lightweight 3D card styling to the homepage quick navigation cards while preserving the blog’s current visual language and responsive behavior.

**Architecture:** Keep the change isolated to `src/pages/index.astro`. Reuse the existing quick-nav markup with small structural additions for layered card surfaces, then update only the local styles so the effect remains homepage-specific and does not affect the global `Card.astro` blog cards.

**Tech Stack:** Astro, TypeScript-free `.astro` template markup, scoped CSS

---

### Task 1: Inspect homepage quick-nav markup and styling anchors

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual visual verification via `npm run dev`

- [ ] **Step 1: Read the quick navigation block and its related styles**

Confirm the existing selectors used by the homepage quick navigation area before editing:

- `.quick-nav`
- `.nav-grid`
- `.nav-card`
- `.card-icon-wrapper`
- `.card-icon`
- `.card-hover-effect`
- `.game-card`
- `.game-dropdown`

- [ ] **Step 2: Identify the smallest markup change needed**

Use the existing anchor/card structure where possible. Add only the wrappers needed for:
- perspective container
- layered surface/background
- content depth grouping
- optional accent badge treatment for stronger cards

- [ ] **Step 3: Commit planning checkpoint**

```bash
git status
```

Expected: working tree shows only plan/spec docs or no changes yet.

### Task 2: Add layered markup for quick-nav cards

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual inspection in browser

- [ ] **Step 1: Write the intended structural change**

Update each quick-nav card so it contains:
- an outer perspective wrapper class on the card itself or parent
- a card surface wrapper
- a content wrapper for icon/title/description
- the existing hover effect retained as decorative layer

The game card should keep its dropdown markup intact inside the same enhanced structure.

- [ ] **Step 2: Apply the minimal markup edit in `src/pages/index.astro`**

Keep link destinations and text unchanged. Only adjust nesting for 3D layering.

- [ ] **Step 3: Sanity-check markup for all four cards**

Verify:
- all links remain clickable
- game dropdown markup still exists
- no duplicate ids are introduced

### Task 3: Implement homepage-only light 3D styling

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual visual verification in browser

- [ ] **Step 1: Add base 3D styles for the navigation cards**

Implement styles for:
- perspective
- `transform-style: preserve-3d`
- soft blue-white gradient surface
- subtle geometric texture
- compatible border, shadow, and radius

- [ ] **Step 2: Add depth layering for inner content**

Apply `translateZ(...)` layering to:
- icon wrapper
- heading
- description
- decorative hover layer

Use stronger depth on the first two cards and slightly lighter depth on the remaining cards.

- [ ] **Step 3: Add hover interaction states**

Implement restrained hover behavior:
- slight `rotateX/rotateY`
- upward lift
- stronger shadow
- gentle texture shift/highlight

The game card should use a milder transform so the dropdown remains comfortable to use.

- [ ] **Step 4: Add dark-mode adjustments**

Adjust gradient, border, glow, and text contrast for `html[data-theme='dark']` so the cards still fit the site palette.

### Task 4: Add responsive and reduced-motion fallbacks

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual responsive verification in browser

- [ ] **Step 1: Add mobile fallbacks**

Within the existing responsive sections, disable strong 3D rotation on small screens and keep only:
- slight lift
- shadow enhancement
- stable spacing/layout

- [ ] **Step 2: Add reduced-motion fallback**

Add a `prefers-reduced-motion: reduce` rule that disables:
- 3D rotation
- texture drift
- pronounced layered motion

Keep cards visually polished without motion.

### Task 5: Verify behavior

**Files:**
- Modify: none
- Test: `npm run build` and manual inspection

- [ ] **Step 1: Run build verification**

```bash
npm run build
```

Expected: Astro build completes successfully with no template or CSS errors.

- [ ] **Step 2: Perform manual verification checklist**

Check on homepage:
- quick-nav cards show light 3D depth
- style matches existing homepage visual language
- hover feels restrained, not flashy
- game dropdown still opens correctly
- mobile layout remains stable
- dark mode remains readable

- [ ] **Step 3: Final commit checkpoint**

```bash
git status
```

Expected: only the intended homepage file (and any spec/plan docs) is modified.
