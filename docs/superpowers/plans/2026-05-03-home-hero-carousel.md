# Home Hero Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the homepage hero background into a lightweight carousel with synced single-line quotes while keeping the avatar, main title, and overall hero layout stable.

**Architecture:** Keep the change isolated to `src/pages/index.astro`. Define a local hero slide data array, render stacked background slides and matching quote items in Astro markup, then use a small inline script to drive autoplay, manual navigation, and synchronized active states.

**Tech Stack:** Astro, local `.astro` template markup, scoped CSS, inline browser JavaScript

---

### Task 1: Prepare homepage hero data and identify replacement points

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual browser verification via `npm run dev`

- [ ] **Step 1: Identify current single-image hero pieces**

Locate the existing homepage hero parts to replace or extend:
- top-level single `.hero-image-layer`
- static quote inside `#hitokoto-text`
- existing hero overlay and content wrapper

- [ ] **Step 2: Define a local slide data shape in the Astro frontmatter**

Use an array in `src/pages/index.astro` with one object per slide:
- `image`
- `quote`
- `alt`

Start with 3–4 images already used in the project so implementation remains self-contained.

### Task 2: Replace single background markup with stacked slides and synced quote items

**Files:**
- Modify: `src/pages/index.astro`
- Test: browser inspection of rendered HTML

- [ ] **Step 1: Render hero background slides from data**

Replace the single `.hero-image-layer` div with mapped slide elements. Each slide should:
- sit in the same background layer
- carry an active class on the first slide initially
- expose its image as an inline CSS custom property or background style

- [ ] **Step 2: Render synchronized quote items**

Replace the current fixed quote character-by-character block with a quote container that renders one quote item per slide. The first quote is active by default.

- [ ] **Step 3: Add manual controls markup**

Render:
- previous button
- next button
- indicator dots

Each control should be scoped to the hero carousel only.

### Task 3: Add carousel-specific styling while preserving hero composition

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual visual verification in browser

- [ ] **Step 1: Style stacked hero slides**

Add CSS so slides:
- fill the hero background
- fade between active/inactive states
- keep the current immersive feel
- preserve the gradient overlay readability

- [ ] **Step 2: Style synced quote transitions**

Add CSS so quote items:
- overlap in the same area
- only the active quote is visible
- switch with subtle fade + slight upward motion

- [ ] **Step 3: Style controls**

Add unobtrusive controls:
- circular ghost buttons for prev/next
- small indicator dots
- hover/focus states matching the homepage glass/blue design

### Task 4: Add inline carousel behavior

**Files:**
- Modify: `src/pages/index.astro`
- Test: manual behavior verification in browser

- [ ] **Step 1: Add minimal inline carousel script**

Implement script logic that:
- collects hero slides, quote items, and dots
- tracks current index
- activates one slide/quote/dot at a time

- [ ] **Step 2: Add autoplay**

Use an interval around 5–6 seconds to advance the carousel.

- [ ] **Step 3: Add manual navigation**

Wire:
- previous button
- next button
- indicator dot clicks

After manual navigation, restart the autoplay timer cleanly.

- [ ] **Step 4: Add reduced-motion awareness**

If `prefers-reduced-motion: reduce` is matched:
- disable Ken Burns-like motion
- either skip autoplay or significantly reduce animation intensity

### Task 5: Add responsive safeguards and verify build

**Files:**
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Add mobile adjustments**

Ensure controls and quote area remain readable on small screens:
- smaller control size
- tighter quote spacing
- stable hero layout

- [ ] **Step 2: Run build verification**

```bash
npm run build
```

Expected: Astro build completes successfully with no template, CSS, or inline script errors.

- [ ] **Step 3: Manual verification checklist**

Check on homepage:
- hero backgrounds rotate automatically
- prev/next buttons work
- dots switch slides correctly
- quote changes stay in sync with background
- avatar and main title do not jump
- mobile view remains stable
- reduced-motion behavior remains graceful
