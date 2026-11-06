import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// No key (e.g. local dev without .env) → analytics stays off.
if (key) {
  posthog.init(key, {
    // Proxied by nginx to us.i.posthog.com — avoids ad blockers and the
    // unreliable direct connection from mainland China.
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    // Includes capture_pageview: "history_change", so client-side
    // navigations are recorded as pageviews too.
    defaults: "2025-05-24",
    person_profiles: "identified_only",
    disable_session_recording: true,
  });
}
