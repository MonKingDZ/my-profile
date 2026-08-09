# Motion for component animation, GSAP+ScrollTrigger for scroll-scrubbing

The 2026-08 homepage redesign needed both simple entrance/hover animation (Bio, Featured Project cards) and scroll-pinned, scroll-scrubbed choreography (a full pinned reveal sequence for Bio, scrubbed card reveals for Featured Projects), inspired by barge166.com. Rather than force one library to do both jobs, we added Motion for React-idiomatic component-level animation and GSAP + ScrollTrigger specifically for scroll-pinning/scrubbing, since ScrollTrigger is the specialist, battle-tested tool for that exact effect — hand-rolling scroll-scrub timeline math in Motion to avoid a second dependency would trade a small install for fragile, harder-to-maintain code.

**Status**: accepted

**Consequences**: scroll-pinned/scrubbed effects go through GSAP; general enter/hover motion stays on Motion. Don't reach for GSAP outside scroll-pinned use cases — keep the two libraries' responsibilities from overlapping.
