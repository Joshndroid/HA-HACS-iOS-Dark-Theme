// iOS Tahoe Dark — Root-level CSS variable overrides
//
// WHY THIS FILE EXISTS:
// HA applies theme CSS variables to the <home-assistant> element. However,
// mwc-dialog (used by all card editors, settings dialogs, etc.) teleports
// itself to <body> as a DOM portal, breaking CSS custom property inheritance.
// Setting variables on :root ensures they cascade into all dialogs and
// detached shadow roots regardless of where they appear in the DOM.

(function () {
  const root = document.documentElement;

  const vars = {
    // ── Core MDC surface tokens ──────────────────────────────────────────
    // This is the primary fix: MDC defaults --mdc-theme-surface to #ffffff
    // which bleeds through transparent outlined text fields and dialogs.
    "--mdc-theme-surface": "#1c1c1e",
    "--mdc-theme-background": "#0e0e10",
    "--mdc-theme-primary": "#0a84ff",
    "--mdc-theme-secondary": "#0a84ff",
    "--mdc-theme-on-primary": "#ffffff",
    "--mdc-theme-on-secondary": "#ffffff",
    "--mdc-theme-on-surface": "#f2f2f7",
    "--mdc-theme-text-primary-on-background": "#f2f2f7",
    "--mdc-theme-text-secondary-on-background": "rgba(235, 235, 245, 0.60)",
    "--mdc-theme-text-hint-on-background": "rgba(235, 235, 245, 0.30)",
    "--mdc-theme-text-disabled-on-background": "rgba(235, 235, 245, 0.18)",

    // ── MDC text fields ──────────────────────────────────────────────────
    "--mdc-text-field-fill-color": "#2c2c2e",
    "--mdc-text-field-ink-color": "#f2f2f7",
    "--mdc-text-field-label-ink-color": "rgba(235, 235, 245, 0.60)",
    "--mdc-text-field-outlined-idle-border-color": "rgba(255, 255, 255, 0.12)",
    "--mdc-text-field-outlined-hover-border-color": "rgba(255, 255, 255, 0.24)",
    "--mdc-text-field-disabled-fill-color": "rgba(28, 28, 30, 0.50)",
    "--mdc-text-field-disabled-ink-color": "rgba(235, 235, 245, 0.30)",

    // ── MDC select / dropdown ────────────────────────────────────────────
    "--mdc-select-fill-color": "#2c2c2e",
    "--mdc-select-ink-color": "#f2f2f7",
    "--mdc-select-label-ink-color": "rgba(235, 235, 245, 0.60)",
    "--mdc-select-idle-line-color": "rgba(255, 255, 255, 0.12)",
    "--mdc-select-hover-line-color": "rgba(255, 255, 255, 0.24)",
    "--mdc-select-outlined-idle-border-color": "rgba(255, 255, 255, 0.12)",
    "--mdc-select-outlined-hover-border-color": "rgba(255, 255, 255, 0.24)",
    "--mdc-select-dropdown-icon-color": "rgba(235, 235, 245, 0.60)",
    "--mdc-menu-surface-fill-color": "#2c2c2e",

    // ── Modern HA input-* properties ─────────────────────────────────────
    "--input-fill-color": "#2c2c2e",
    "--input-ink-color": "#f2f2f7",
    "--input-label-ink-color": "rgba(235, 235, 245, 0.60)",
    "--input-idle-line-color": "rgba(255, 255, 255, 0.12)",
    "--input-hover-line-color": "rgba(255, 255, 255, 0.24)",
    "--input-outlined-idle-border-color": "rgba(255, 255, 255, 0.12)",
    "--input-outlined-hover-border-color": "rgba(255, 255, 255, 0.24)",
    "--input-outlined-focus-border-color": "#0a84ff",
    "--input-disabled-fill-color": "rgba(28, 28, 30, 0.50)",
    "--input-disabled-ink-color": "rgba(235, 235, 245, 0.30)",

    // ── Material Web (MD3) filled text field ─────────────────────────────
    "--md-filled-text-field-container-color": "#2c2c2e",
    "--md-filled-text-field-input-text-color": "#f2f2f7",
    "--md-filled-text-field-label-text-color": "rgba(235, 235, 245, 0.60)",
    "--md-filled-text-field-focus-label-text-color": "#0a84ff",
    "--md-filled-text-field-active-indicator-color": "rgba(255, 255, 255, 0.12)",
    "--md-filled-text-field-hover-active-indicator-color": "rgba(255, 255, 255, 0.24)",
    "--md-filled-text-field-focus-active-indicator-color": "#0a84ff",
    "--md-filled-text-field-caret-color": "#0a84ff",
    "--md-filled-text-field-disabled-container-color": "rgba(28, 28, 30, 0.50)",
    "--md-filled-text-field-disabled-input-text-color": "rgba(235, 235, 245, 0.30)",

    // ── Material Web (MD3) outlined text field ───────────────────────────
    // Outlined fields are transparent — they show their parent's background.
    // Setting mdc-theme-surface above is what actually darkens them.
    "--md-outlined-text-field-input-text-color": "#f2f2f7",
    "--md-outlined-text-field-label-text-color": "rgba(235, 235, 245, 0.60)",
    "--md-outlined-text-field-focus-label-text-color": "#0a84ff",
    "--md-outlined-text-field-outline-color": "rgba(255, 255, 255, 0.12)",
    "--md-outlined-text-field-hover-outline-color": "rgba(255, 255, 255, 0.24)",
    "--md-outlined-text-field-focus-outline-color": "#0a84ff",
    "--md-outlined-text-field-caret-color": "#0a84ff",
    "--md-outlined-text-field-disabled-input-text-color": "rgba(235, 235, 245, 0.30)",
    "--md-outlined-text-field-disabled-outline-color": "rgba(255, 255, 255, 0.06)",

    // ── Material Web (MD3) select ────────────────────────────────────────
    "--md-filled-select-text-field-container-color": "#2c2c2e",
    "--md-filled-select-text-field-input-text-color": "#f2f2f7",
    "--md-filled-select-text-field-label-text-color": "rgba(235, 235, 245, 0.60)",
    "--md-filled-select-text-field-focus-label-text-color": "#0a84ff",
    "--md-outlined-select-text-field-input-text-color": "#f2f2f7",
    "--md-outlined-select-text-field-label-text-color": "rgba(235, 235, 245, 0.60)",
    "--md-outlined-select-text-field-outline-color": "rgba(255, 255, 255, 0.12)",
    "--md-outlined-select-text-field-hover-outline-color": "rgba(255, 255, 255, 0.24)",
    "--md-outlined-select-text-field-focus-outline-color": "#0a84ff",

    // ── Material Web (MD3) dialog, menu, list ────────────────────────────
    "--md-dialog-container-color": "#2c2c2e",
    "--md-menu-container-color": "#2c2c2e",
    "--md-list-container-color": "#1c1c1e",
    "--md-list-item-label-text-color": "#f2f2f7",
    "--md-list-item-supporting-text-color": "rgba(235, 235, 245, 0.60)",
  };

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
})();
