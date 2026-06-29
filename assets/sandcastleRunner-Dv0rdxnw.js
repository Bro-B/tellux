import"./preload-helper-CdhvrlGE.js";import{t as i,T as l,d as s,G as p}from"./index-DSM1XBcg.js";import{G as d}from"./index-Db0HnQFD.js";import{a as c,d as g,s as x}from"./shared-nNq7dHl_.js";import{m as b,f as m}from"./location-readout-BE7Sl-l9.js";const h=`* {\r
  box-sizing: border-box;\r
}\r
\r
html,\r
body {\r
  width: 100%;\r
  height: 100%;\r
  margin: 0;\r
}\r
\r
html.portal-page {\r
  scroll-behavior: smooth;\r
  scroll-padding-top: 24px;\r
  scrollbar-width: none;\r
}\r
\r
html.portal-page::-webkit-scrollbar,\r
body.portal-page::-webkit-scrollbar {\r
  display: none;\r
}\r
\r
body.portal-page {\r
  -ms-overflow-style: none;\r
  overflow-x: hidden;\r
}\r
\r
body {\r
  color: #f8fafc;\r
  background: #090d14;\r
  font-family:\r
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\r
    sans-serif;\r
}\r
\r
a {\r
  color: inherit;\r
}\r
\r
[hidden] {\r
  display: none !important;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  html.portal-page {\r
    scroll-behavior: auto;\r
  }\r
}\r
\r
.portal {\r
  min-height: 100%;\r
  overflow: hidden;\r
  background:\r
    radial-gradient(circle at 72% 8%, rgba(92, 133, 120, 0.16), transparent 34rem),\r
    linear-gradient(180deg, #07090d 0%, #0b1017 42%, #080a0e 100%);\r
}\r
\r
.portal * {\r
  min-width: 0;\r
}\r
\r
.portal-hero,\r
.portal-section {\r
  position: relative;\r
  padding-inline: clamp(20px, 5vw, 76px);\r
}\r
\r
.portal-hero {\r
  display: grid;\r
  min-height: 100vh;\r
  align-content: start;\r
  padding-top: 18px;\r
  padding-bottom: 40px;\r
}\r
\r
.portal-hero::before {\r
  position: absolute;\r
  inset: 0;\r
  content: "";\r
  background:\r
    linear-gradient(rgba(234, 241, 247, 0.032) 1px, transparent 1px),\r
    linear-gradient(90deg, rgba(234, 241, 247, 0.026) 1px, transparent 1px);\r
  background-size: 72px 72px;\r
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 74%);\r
  pointer-events: none;\r
}\r
\r
.portal-nav {\r
  position: sticky;\r
  top: 18px;\r
  z-index: 10;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 24px;\r
  width: min(1200px, 100%);\r
  min-height: 56px;\r
  margin: 0 auto;\r
  padding: 8px;\r
  border: 1px solid rgba(215, 224, 233, 0.12);\r
  border-radius: 8px;\r
  background: rgba(7, 9, 13, 0.78);\r
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);\r
  backdrop-filter: blur(18px);\r
}\r
\r
.portal-brand {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 10px;\r
  min-height: 40px;\r
  color: #f8fafc;\r
  font-size: 18px;\r
  font-weight: 760;\r
  text-decoration: none;\r
}\r
\r
.portal-brand__mark {\r
  display: inline-grid;\r
  width: 30px;\r
  height: 30px;\r
  place-items: center;\r
  border: 1px solid rgba(198, 210, 219, 0.26);\r
  border-radius: 6px;\r
  color: #e5ecef;\r
  background: #141b22;\r
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);\r
  font-size: 15px;\r
  font-weight: 850;\r
}\r
\r
.portal-nav__links {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: flex-end;\r
  gap: 4px;\r
  color: #a8b3bf;\r
  font-size: 14px;\r
}\r
\r
.portal-nav__links a {\r
  display: inline-grid;\r
  min-height: 36px;\r
  place-items: center;\r
  padding: 8px 12px;\r
  border-radius: 6px;\r
  text-decoration: none;\r
}\r
\r
.portal-nav__links a:hover,\r
.portal-nav__links a:focus-visible {\r
  color: #f8fafc;\r
  background: rgba(215, 224, 233, 0.08);\r
  outline: none;\r
}\r
\r
.portal-nav[data-scrolled] {\r
  border-color: rgba(142, 162, 150, 0.24);\r
  background: rgba(7, 9, 13, 0.88);\r
}\r
\r
.portal-hero__layout {\r
  position: relative;\r
  z-index: 1;\r
  display: grid;\r
  grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1.14fr);\r
  gap: clamp(28px, 5vw, 76px);\r
  width: min(1180px, 100%);\r
  margin: 0 auto;\r
  padding-top: clamp(72px, 12vh, 132px);\r
}\r
\r
.portal-hero__content {\r
  display: grid;\r
  align-content: center;\r
}\r
\r
.portal-eyebrow {\r
  margin: 0 0 14px;\r
  color: #8aa296;\r
  font-size: 12px;\r
  font-weight: 760;\r
  letter-spacing: 0;\r
  text-transform: uppercase;\r
}\r
\r
.portal-hero h1,\r
.portal-section h2 {\r
  margin: 0;\r
  color: #f4f7f9;\r
  letter-spacing: 0;\r
}\r
\r
.portal-hero h1 {\r
  max-width: 720px;\r
  font-size: clamp(42px, 5vw, 72px);\r
  line-height: 0.98;\r
  text-wrap: balance;\r
  overflow-wrap: anywhere;\r
}\r
\r
.portal-hero__content > p:not(.portal-eyebrow) {\r
  max-width: 660px;\r
  margin: 26px 0 0;\r
  color: #b6c0ca;\r
  font-size: 18px;\r
  line-height: 1.78;\r
  overflow-wrap: anywhere;\r
}\r
\r
.portal-actions {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 12px;\r
  margin-top: 34px;\r
}\r
\r
.portal-button {\r
  display: inline-flex;\r
  min-height: 44px;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 0 18px;\r
  border: 1px solid rgba(215, 224, 233, 0.18);\r
  border-radius: 6px;\r
  color: #e8edf1;\r
  background: rgba(215, 224, 233, 0.055);\r
  text-decoration: none;\r
  transition:\r
    border-color 160ms ease,\r
    background 160ms ease,\r
    color 160ms ease,\r
    transform 160ms ease;\r
}\r
\r
.portal-button:hover,\r
.portal-button:focus-visible {\r
  border-color: rgba(142, 162, 150, 0.72);\r
  color: #ffffff;\r
  background: rgba(142, 162, 150, 0.14);\r
  outline: none;\r
  transform: translateY(-1px);\r
}\r
\r
.portal-button--primary {\r
  border-color: #c7d0c8;\r
  color: #080a0e;\r
  background: #c7d0c8;\r
}\r
\r
.portal-button--primary:hover,\r
.portal-button--primary:focus-visible {\r
  color: #080a0e;\r
  background: #d8dfd9;\r
}\r
\r
.portal-visual {\r
  min-width: 0;\r
}\r
\r
.portal-visual__frame {\r
  position: relative;\r
  min-height: clamp(420px, 58vh, 640px);\r
  overflow: hidden;\r
  border: 1px solid rgba(215, 224, 233, 0.13);\r
  border-radius: 8px;\r
  background:\r
    linear-gradient(135deg, rgba(255, 255, 255, 0.065), transparent 32%),\r
    linear-gradient(180deg, #121920, #07090d);\r
  box-shadow:\r
    0 40px 120px rgba(0, 0, 0, 0.35),\r
    inset 0 1px 0 rgba(255, 255, 255, 0.08);\r
}\r
\r
.portal-visual__frame::before {\r
  position: absolute;\r
  inset: 14px;\r
  z-index: 1;\r
  content: "";\r
  border: 1px solid rgba(215, 224, 233, 0.08);\r
  border-radius: 6px;\r
  background:\r
    linear-gradient(rgba(215, 224, 233, 0.045) 1px, transparent 1px),\r
    linear-gradient(90deg, rgba(215, 224, 233, 0.04) 1px, transparent 1px);\r
  background-size: 44px 44px;\r
  pointer-events: none;\r
}\r
\r
.portal-visual__viewer {\r
  position: absolute;\r
  inset: 0;\r
  display: grid;\r
  place-items: center;\r
  background: #05080d;\r
  touch-action: none;\r
}\r
\r
.portal-visual__viewer canvas {\r
  display: block;\r
  grid-area: 1 / 1;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.portal-visual__fallback {\r
  grid-area: 1 / 1;\r
  color: #7f8b96;\r
  font-size: 12px;\r
  font-weight: 720;\r
  text-transform: uppercase;\r
}\r
\r
.portal-visual__placeholder {\r
  position: absolute;\r
  inset: 15%;\r
  display: grid;\r
  place-items: center;\r
  align-content: center;\r
  gap: 12px;\r
  border: 1px dashed rgba(215, 224, 233, 0.26);\r
  border-radius: 8px;\r
  color: #8e9aa5;\r
  text-align: center;\r
}\r
\r
.portal-visual__placeholder span,\r
.portal-band__image span,\r
.portal-visual__hud span,\r
.portal-metrics span,\r
.portal-example span,\r
.portal-feature span {\r
  color: #7f8b96;\r
  font-size: 12px;\r
  font-weight: 720;\r
  text-transform: uppercase;\r
}\r
\r
.portal-visual__placeholder strong {\r
  max-width: 360px;\r
  color: #d9e0e6;\r
  font-size: 20px;\r
  line-height: 1.48;\r
}\r
\r
.portal-visual__hud {\r
  position: absolute;\r
  z-index: 2;\r
  display: grid;\r
  gap: 5px;\r
  max-width: min(280px, calc(100% - 48px));\r
  padding: 14px 16px;\r
  border: 1px solid rgba(215, 224, 233, 0.12);\r
  border-radius: 8px;\r
  background: rgba(7, 9, 13, 0.74);\r
  backdrop-filter: blur(18px);\r
  pointer-events: none;\r
}\r
\r
.portal-visual__hud strong {\r
  color: #edf2f5;\r
  font-size: 14px;\r
  line-height: 1.4;\r
}\r
\r
.portal-visual__hud--top {\r
  top: 28px;\r
  left: 28px;\r
}\r
\r
.portal-visual__hud--bottom {\r
  right: 28px;\r
  bottom: 28px;\r
}\r
\r
.portal-metrics {\r
  position: relative;\r
  z-index: 1;\r
  display: grid;\r
  grid-template-columns: repeat(4, minmax(0, 1fr));\r
  width: min(1180px, 100%);\r
  margin: clamp(42px, 8vh, 78px) auto 0;\r
  overflow: hidden;\r
  border: 1px solid rgba(215, 224, 233, 0.12);\r
  border-radius: 8px;\r
  background: rgba(215, 224, 233, 0.08);\r
}\r
\r
.portal-metrics div {\r
  display: grid;\r
  gap: 8px;\r
  min-height: 104px;\r
  align-content: center;\r
  padding: 20px;\r
  background: rgba(8, 10, 14, 0.74);\r
}\r
\r
.portal-metrics div + div {\r
  border-left: 1px solid rgba(215, 224, 233, 0.1);\r
}\r
\r
.portal-metrics strong {\r
  color: #f3f6f8;\r
  font-size: 17px;\r
  line-height: 1.3;\r
}\r
\r
.portal-section {\r
  padding-top: 88px;\r
  padding-bottom: 88px;\r
}\r
\r
#examples {\r
  width: min(1332px, 100%);\r
  margin: 0 auto;\r
}\r
\r
.portal-section::before {\r
  position: absolute;\r
  top: 0;\r
  left: clamp(20px, 5vw, 76px);\r
  right: clamp(20px, 5vw, 76px);\r
  height: 1px;\r
  content: "";\r
  background: rgba(215, 224, 233, 0.1);\r
}\r
\r
.portal-section--split {\r
  display: grid;\r
  grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);\r
  gap: clamp(32px, 5vw, 72px);\r
  width: min(1332px, 100%);\r
  margin: 0 auto;\r
}\r
\r
.portal-section__header {\r
  max-width: 640px;\r
}\r
\r
.portal-section h2 {\r
  font-size: clamp(32px, 4vw, 54px);\r
  line-height: 1.08;\r
}\r
\r
.portal-section__header > p:not(.portal-eyebrow),\r
.portal-band__content p,\r
.portal-code-copy p {\r
  margin: 18px 0 0;\r
  color: #aeb9c4;\r
  font-size: 16px;\r
  line-height: 1.78;\r
}\r
\r
.portal p code,\r
.portal li code {\r
  padding: 2px 5px;\r
  border: 1px solid rgba(215, 224, 233, 0.12);\r
  border-radius: 4px;\r
  color: #dfe6eb;\r
  background: rgba(215, 224, 233, 0.07);\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;\r
  font-size: 0.9em;\r
}\r
\r
.portal-feature-grid,\r
.portal-example-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3, minmax(0, 1fr));\r
  gap: 12px;\r
}\r
\r
.portal-feature,\r
.portal-example {\r
  display: grid;\r
  align-content: start;\r
  gap: 12px;\r
  min-height: 220px;\r
  padding: 22px;\r
  border: 1px solid rgba(215, 224, 233, 0.11);\r
  border-radius: 8px;\r
  background: rgba(16, 22, 29, 0.7);\r
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);\r
}\r
\r
.portal-feature h3,\r
.portal-feature p,\r
.portal-example p {\r
  margin: 0;\r
}\r
\r
.portal-feature h3,\r
.portal-example strong {\r
  color: #f3f6f8;\r
  font-size: 20px;\r
  line-height: 1.3;\r
}\r
\r
.portal-feature p,\r
.portal-example p {\r
  color: #aeb9c4;\r
  line-height: 1.68;\r
}\r
\r
.portal-workflow {\r
  width: min(1332px, 100%);\r
  margin: 0 auto;\r
}\r
\r
.portal-code-layout {\r
  display: grid;\r
  grid-template-columns: minmax(260px, 0.45fr) minmax(0, 1fr);\r
  gap: clamp(24px, 5vw, 64px);\r
  margin-top: 34px;\r
}\r
\r
.portal-code-copy {\r
  align-self: start;\r
}\r
\r
.portal-checklist {\r
  display: grid;\r
  gap: 12px;\r
  margin: 28px 0 0;\r
  padding: 0;\r
  color: #c3ccd4;\r
  line-height: 1.62;\r
  list-style: none;\r
}\r
\r
.portal-checklist li {\r
  padding-left: 18px;\r
  border-left: 2px solid rgba(142, 162, 150, 0.52);\r
}\r
\r
.portal-code-window {\r
  min-width: 0;\r
  max-width: 100%;\r
  overflow-x: hidden;\r
  border-radius: 8px;\r
  background: #10151d;\r
  box-shadow:\r
    0 14px 32px rgba(0, 0, 0, 0.2),\r
    0 4px 12px rgba(0, 0, 0, 0.18),\r
    inset 0 1px 0 rgba(255, 255, 255, 0.035);\r
}\r
\r
.portal-code-window__header {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  height: 42px;\r
  padding: 0 24px;\r
  background: transparent;\r
}\r
\r
.portal-code-window__header span {\r
  width: 12px;\r
  height: 12px;\r
  border-radius: 50%;\r
}\r
\r
.portal-code-window__header span:nth-child(1) {\r
  background: #ff5f57;\r
}\r
\r
.portal-code-window__header span:nth-child(2) {\r
  background: #ffbd2e;\r
}\r
\r
.portal-code-window__header span:nth-child(3) {\r
  background: #28c840;\r
}\r
\r
.portal-code {\r
  margin: 0;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  padding: 8px 24px 24px;\r
  color: #dfe6eb;\r
  background: transparent;\r
  font-size: 13px;\r
  line-height: 1.7;\r
}\r
\r
.portal-code code {\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;\r
  white-space: pre-wrap;\r
  overflow-wrap: anywhere;\r
  word-break: break-word;\r
}\r
\r
.code-token--keyword {\r
  color: #82aaff;\r
}\r
\r
.code-token--string {\r
  color: #c3e88d;\r
}\r
\r
.code-token--number {\r
  color: #f78c6c;\r
}\r
\r
.code-token--property {\r
  color: #89ddff;\r
}\r
\r
.code-token--class {\r
  color: #ffcb6b;\r
}\r
\r
.code-token--function {\r
  color: #c792ea;\r
}\r
\r
.portal-showcase {\r
  width: min(1332px, 100%);\r
  margin: 0 auto;\r
}\r
\r
.portal-showcase__inner {\r
  display: grid;\r
  gap: clamp(64px, 9vw, 108px);\r
}\r
\r
.portal-band {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.55fr);\r
  gap: clamp(28px, 5vw, 64px);\r
  align-items: center;\r
}\r
\r
.portal-band--reverse {\r
  grid-template-columns: minmax(280px, 0.55fr) minmax(0, 1.05fr);\r
}\r
\r
.portal-band--reverse .portal-band__image {\r
  grid-column: 2;\r
}\r
\r
.portal-band--reverse .portal-band__content {\r
  grid-column: 1;\r
  grid-row: 1;\r
}\r
\r
.portal-band__image {\r
  display: grid;\r
  min-height: 390px;\r
  place-items: center;\r
  align-content: center;\r
  overflow: hidden;\r
  border-radius: 8px;\r
  background:\r
    linear-gradient(135deg, rgba(92, 133, 120, 0.1), transparent 42%),\r
    #10151d;\r
  box-shadow:\r
    0 14px 32px rgba(0, 0, 0, 0.2),\r
    0 4px 12px rgba(0, 0, 0, 0.18),\r
    inset 0 1px 0 rgba(255, 255, 255, 0.035);\r
  text-align: center;\r
}\r
\r
.portal-band__image img,\r
.portal-band__image video {\r
  width: 100%;\r
  height: 100%;\r
  min-height: 390px;\r
  object-fit: cover;\r
  display: block;\r
}\r
\r
.portal-example-grid {\r
  width: min(1180px, 100%);\r
  margin-top: 32px;\r
}\r
\r
.portal-example {\r
  color: inherit;\r
  text-decoration: none;\r
  transition:\r
    border-color 160ms ease,\r
    background 160ms ease,\r
    transform 160ms ease;\r
}\r
\r
.portal-example:hover,\r
.portal-example:focus-visible {\r
  border-color: rgba(142, 162, 150, 0.58);\r
  background: rgba(23, 31, 38, 0.86);\r
  outline: none;\r
  transform: translateY(-2px);\r
}\r
\r
.viewer-shell {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
  overflow: hidden;\r
  background: #020617;\r
}\r
\r
#viewer {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.toolbar {\r
  position: absolute;\r
  top: 16px;\r
  left: 16px;\r
  z-index: 10;\r
  display: flex;\r
  max-width: min(420px, calc(100vw - 32px));\r
  flex-direction: column;\r
  gap: 10px;\r
  padding: 14px 16px;\r
  border: 1px solid rgba(226, 232, 240, 0.18);\r
  border-radius: 8px;\r
  background: rgba(15, 23, 42, 0.76);\r
  box-shadow: 0 18px 48px rgba(2, 6, 23, 0.28);\r
  backdrop-filter: blur(12px);\r
}\r
\r
.toolbar--wide {\r
  max-width: min(520px, calc(100vw - 32px));\r
}\r
\r
.toolbar__header,\r
.layer-manager__header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
}\r
\r
.toolbar h1 {\r
  margin: 0;\r
  font-size: 16px;\r
  line-height: 1.3;\r
}\r
\r
.toolbar p {\r
  margin: 0;\r
  color: #cbd5e1;\r
  font-size: 13px;\r
  line-height: 1.55;\r
}\r
\r
.toolbar__row {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
}\r
\r
.field {\r
  display: grid;\r
  gap: 6px;\r
  color: #bfdbfe;\r
  font-size: 13px;\r
}\r
\r
.field__input {\r
  width: 100%;\r
  min-height: 34px;\r
  padding: 0 10px;\r
  border: 1px solid rgba(148, 163, 184, 0.48);\r
  border-radius: 6px;\r
  color: #f8fafc;\r
  background: rgba(15, 23, 42, 0.72);\r
  font: inherit;\r
  font-size: 13px;\r
}\r
\r
select.field__input {\r
  appearance: none;\r
  padding-right: 34px;\r
  background:\r
    linear-gradient(45deg, transparent 50%, #cbd5e1 50%) right 18px center / 6px 6px no-repeat,\r
    linear-gradient(135deg, #cbd5e1 50%, transparent 50%) right 14px center / 6px 6px no-repeat,\r
    rgba(15, 23, 42, 0.72);\r
}\r
\r
.field__input:focus {\r
  border-color: rgba(125, 211, 252, 0.96);\r
  outline: none;\r
}\r
\r
.field__input[type="range"] {\r
  min-height: 24px;\r
  padding: 0;\r
  border: 0;\r
  accent-color: #7dd3fc;\r
  background: transparent;\r
}\r
\r
.switch {\r
  display: inline-flex;\r
  min-height: 28px;\r
  align-items: center;\r
  gap: 8px;\r
  color: #e2e8f0;\r
  font-size: 13px;\r
}\r
\r
.switch input {\r
  width: 16px;\r
  height: 16px;\r
  margin: 0;\r
  accent-color: #7dd3fc;\r
}\r
\r
.button {\r
  display: inline-flex;\r
  min-height: 34px;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 0 12px;\r
  border: 1px solid rgba(148, 163, 184, 0.48);\r
  border-radius: 6px;\r
  color: #f8fafc;\r
  background: rgba(30, 41, 59, 0.84);\r
  font: inherit;\r
  font-size: 13px;\r
  text-decoration: none;\r
  cursor: pointer;\r
}\r
\r
.button:hover {\r
  border-color: rgba(125, 211, 252, 0.86);\r
  background: rgba(51, 65, 85, 0.92);\r
}\r
\r
.button--active {\r
  border-color: rgba(125, 211, 252, 0.96);\r
  color: #082f49;\r
  background: #7dd3fc;\r
}\r
\r
.icon-button {\r
  position: relative;\r
  display: inline-grid;\r
  flex: 0 0 auto;\r
  width: 32px;\r
  height: 32px;\r
  place-items: center;\r
  border: 0;\r
  border-radius: 6px;\r
  color: #e2e8f0;\r
  background: transparent;\r
  text-decoration: none;\r
  cursor: pointer;\r
}\r
\r
.icon-button:hover,\r
.icon-button:focus-visible {\r
  color: #f8fafc;\r
  background: rgba(125, 211, 252, 0.14);\r
  outline: none;\r
}\r
\r
.icon-button--back::before {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  content: "";\r
  width: 20px;\r
  height: 20px;\r
  background: #cbd5e1;\r
  -webkit-mask: url("/back.svg") center / contain no-repeat;\r
  mask: url("/back.svg") center / contain no-repeat;\r
  transform: translate(-50%, -50%);\r
}\r
\r
.icon-button--back:hover::before,\r
.icon-button--back:focus-visible::before {\r
  background: #7dd3fc;\r
}\r
\r
.status {\r
  color: #fde68a;\r
}\r
\r
.feature-hover {\r
  position: absolute;\r
  z-index: 12;\r
  max-width: min(260px, calc(100vw - 32px));\r
  padding: 5px 8px;\r
  border: 1px solid rgba(148, 163, 184, 0.32);\r
  border-radius: 6px;\r
  color: #f8fafc;\r
  background: rgba(2, 6, 23, 0.86);\r
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.34);\r
  font-size: 12px;\r
  line-height: 1.35;\r
  pointer-events: none;\r
}\r
\r
.feature-popup {\r
  position: absolute;\r
  top: 16px;\r
  right: 16px;\r
  z-index: 12;\r
  width: min(360px, calc(100vw - 32px));\r
  max-height: min(460px, calc(100vh - 32px));\r
  overflow: auto;\r
  padding: 14px;\r
  border: 1px solid rgba(226, 232, 240, 0.2);\r
  border-radius: 8px;\r
  color: #e2e8f0;\r
  background: rgba(15, 23, 42, 0.88);\r
  box-shadow: 0 22px 54px rgba(2, 6, 23, 0.36);\r
  backdrop-filter: blur(12px);\r
}\r
\r
.feature-popup h2 {\r
  margin: 0;\r
  color: #f8fafc;\r
  font-size: 15px;\r
  line-height: 1.35;\r
  overflow-wrap: anywhere;\r
}\r
\r
.feature-popup p {\r
  margin: 6px 0 10px;\r
  color: #cbd5e1;\r
  font-size: 12px;\r
  line-height: 1.45;\r
}\r
\r
.feature-empty {\r
  color: #fde68a;\r
}\r
\r
.feature-properties {\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: 12px;\r
  line-height: 1.4;\r
}\r
\r
.feature-properties th,\r
.feature-properties td {\r
  padding: 6px 0;\r
  border-top: 1px solid rgba(148, 163, 184, 0.18);\r
  vertical-align: top;\r
}\r
\r
.feature-properties th {\r
  width: 38%;\r
  padding-right: 12px;\r
  color: #93c5fd;\r
  font-weight: 500;\r
  text-align: left;\r
  overflow-wrap: anywhere;\r
}\r
\r
.feature-properties td {\r
  color: #f8fafc;\r
  font-variant-numeric: tabular-nums;\r
  overflow-wrap: anywhere;\r
}\r
\r
.tile-attributions {\r
  position: absolute;\r
  right: 12px;\r
  bottom: 10px;\r
  z-index: 10;\r
  display: flex;\r
  max-width: min(720px, calc(100vw - 24px));\r
  flex-wrap: wrap;\r
  align-items: center;\r
  justify-content: flex-end;\r
  gap: 6px;\r
  color: rgba(248, 250, 252, 0.92);\r
  font-size: 11px;\r
  line-height: 1.35;\r
  text-align: right;\r
  text-shadow: 0 1px 2px rgba(2, 6, 23, 0.82);\r
}\r
\r
.tile-attributions a {\r
  color: inherit;\r
}\r
\r
.tile-attributions img {\r
  max-height: 20px;\r
}\r
\r
.layer-manager {\r
  position: absolute;\r
  top: 16px;\r
  left: 16px;\r
  z-index: 10;\r
  display: grid;\r
  width: min(360px, calc(100vw - 32px));\r
  gap: 12px;\r
  padding: 14px;\r
  border: 1px solid rgba(226, 232, 240, 0.18);\r
  border-radius: 8px;\r
  background: rgba(15, 23, 42, 0.78);\r
  box-shadow: 0 18px 48px rgba(2, 6, 23, 0.28);\r
  backdrop-filter: blur(12px);\r
}\r
\r
.layer-manager h1 {\r
  margin: 0;\r
  font-size: 16px;\r
  line-height: 1.3;\r
}\r
\r
.layer-manager__list {\r
  display: grid;\r
  gap: 8px;\r
}\r
\r
.layer-manager__item {\r
  position: relative;\r
  display: grid;\r
  grid-template-columns: 22px 18px minmax(0, 1fr) auto;\r
  gap: 10px;\r
  min-height: 86px;\r
  align-items: start;\r
  padding: 11px 10px;\r
  border: 1px solid rgba(148, 163, 184, 0.34);\r
  border-radius: 6px;\r
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.74), rgba(15, 23, 42, 0.72));\r
  transition:\r
    border-color 160ms ease,\r
    background 160ms ease;\r
}\r
\r
.layer-manager__item--dragging {\r
  border-color: rgba(125, 211, 252, 0.86);\r
  opacity: 0.68;\r
}\r
\r
.layer-manager__item:hover {\r
  border-color: rgba(125, 211, 252, 0.72);\r
  background: rgba(51, 65, 85, 0.72);\r
}\r
\r
.layer-manager__drag-handle {\r
  display: grid;\r
  width: 22px;\r
  height: 22px;\r
  place-items: center;\r
  padding: 0;\r
  border: 1px solid rgba(148, 163, 184, 0.32);\r
  border-radius: 5px;\r
  color: #cbd5e1;\r
  background: rgba(15, 23, 42, 0.38);\r
  cursor: grab;\r
  font-size: 16px;\r
  line-height: 1;\r
}\r
\r
.layer-manager__drag-handle:active {\r
  cursor: grabbing;\r
}\r
\r
.layer-manager__toggle {\r
  width: 16px;\r
  height: 16px;\r
  margin: 3px 0 0;\r
  accent-color: #7dd3fc;\r
}\r
\r
.layer-manager__item-text {\r
  display: grid;\r
  min-width: 0;\r
  gap: 4px;\r
  padding-right: 6px;\r
}\r
\r
.layer-manager__item-text strong {\r
  color: #f8fafc;\r
  font-size: 13px;\r
  line-height: 1.35;\r
}\r
\r
.layer-manager__item-text span {\r
  overflow: hidden;\r
  color: #cbd5e1;\r
  font-size: 12px;\r
  line-height: 1.35;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.layer-manager__opacity {\r
  display: grid;\r
  grid-template-columns: auto minmax(80px, 1fr) 40px;\r
  gap: 8px;\r
  align-items: center;\r
  padding-top: 2px;\r
}\r
\r
.layer-manager__opacity-label,\r
.layer-manager__opacity-value {\r
  color: #cbd5e1;\r
  font-size: 11px;\r
  line-height: 1.2;\r
}\r
\r
.layer-manager__opacity-value {\r
  text-align: right;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.layer-manager__opacity-slider {\r
  width: 100%;\r
  min-width: 0;\r
  height: 16px;\r
  margin: 0;\r
  accent-color: #7dd3fc;\r
  cursor: pointer;\r
}\r
\r
.layer-manager__tag {\r
  align-self: start;\r
  min-width: 40px;\r
  padding: 3px 7px;\r
  border: 1px solid rgba(226, 232, 240, 0.18);\r
  border-radius: 999px;\r
  font-size: 10px;\r
  font-weight: 700;\r
  line-height: 1.2;\r
  text-align: center;\r
  text-transform: uppercase;\r
  letter-spacing: 0;\r
}\r
\r
.layer-manager__tag--xyz {\r
  border-color: rgba(125, 211, 252, 0.42);\r
  color: #bae6fd;\r
  background: rgba(14, 116, 144, 0.34);\r
}\r
\r
.layer-manager__tag--wms {\r
  border-color: rgba(251, 191, 36, 0.42);\r
  color: #fde68a;\r
  background: rgba(146, 64, 14, 0.34);\r
}\r
\r
.layer-manager__tag--mvt {\r
  border-color: rgba(74, 222, 128, 0.42);\r
  color: #bbf7d0;\r
  background: rgba(22, 101, 52, 0.34);\r
}\r
\r
.layer-manager__tag--geojson {\r
  border-color: rgba(94, 234, 212, 0.42);\r
  color: #ccfbf1;\r
  background: rgba(15, 118, 110, 0.34);\r
}\r
\r
.layer-manager__status {\r
  margin: 0;\r
  color: #fde68a;\r
  font-size: 13px;\r
  line-height: 1.45;\r
}\r
\r
.click-readout {\r
  display: grid;\r
  grid-template-columns: auto 1fr;\r
  gap: 4px 10px;\r
  margin-top: 2px;\r
  color: #e2e8f0;\r
  font-size: 13px;\r
}\r
\r
.click-readout dt {\r
  color: #93c5fd;\r
}\r
\r
.click-readout dd {\r
  margin: 0;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.location-panel {\r
  position: absolute;\r
  right: 16px;\r
  bottom: 16px;\r
  z-index: 10;\r
  min-width: 220px;\r
  max-width: min(300px, calc(100vw - 32px));\r
  padding: 12px 14px;\r
  border: 1px solid rgba(226, 232, 240, 0.18);\r
  border-radius: 8px;\r
  background: rgba(15, 23, 42, 0.76);\r
  box-shadow: 0 18px 48px rgba(2, 6, 23, 0.28);\r
  backdrop-filter: blur(12px);\r
}\r
\r
.location-panel--left {\r
  right: auto;\r
  left: 16px;\r
}\r
\r
.location-panel h2 {\r
  margin: 0 0 8px;\r
  font-size: 14px;\r
  line-height: 1.3;\r
}\r
\r
.location-readout {\r
  display: grid;\r
  grid-template-columns: auto minmax(0, 1fr);\r
  gap: 4px 12px;\r
  margin: 0;\r
  color: #e2e8f0;\r
  font-size: 13px;\r
}\r
\r
.location-readout dt {\r
  color: #93c5fd;\r
}\r
\r
.location-readout dd {\r
  min-width: 0;\r
  margin: 0;\r
  text-align: right;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.example-fps {\r
  position: absolute;\r
  top: 16px;\r
  left: 50%;\r
  z-index: 20;\r
  min-width: 70px;\r
  transform: translateX(-50%);\r
  padding: 6px 10px;\r
  border: 1px solid rgba(226, 232, 240, 0.18);\r
  border-radius: 6px;\r
  color: #f8fafc;\r
  background: rgba(15, 23, 42, 0.76);\r
  box-shadow: 0 14px 36px rgba(2, 6, 23, 0.28);\r
  font-size: 13px;\r
  line-height: 1.35;\r
  text-align: center;\r
  font-variant-numeric: tabular-nums;\r
  backdrop-filter: blur(12px);\r
}\r
\r
body.sandcastle-page {\r
  overflow: hidden;\r
  background:\r
    radial-gradient(circle at 78% 0%, rgba(92, 133, 120, 0.14), transparent 34rem),\r
    linear-gradient(180deg, #07090d 0%, #0b1017 100%);\r
}\r
\r
.sandcastle {\r
  --sandcastle-left-width: minmax(360px, 0.48fr);\r
  --sandcastle-splitter-width: 10px;\r
  --sandcastle-console-height: 150px;\r
\r
  display: grid;\r
  grid-template-columns: 52px var(--sandcastle-left-width) var(--sandcastle-splitter-width) minmax(0, 1fr);\r
  grid-template-rows: 48px minmax(0, 1fr);\r
  width: 100vw;\r
  height: 100vh;\r
  color: #f8fafc;\r
  background:\r
    linear-gradient(rgba(234, 241, 247, 0.026) 1px, transparent 1px),\r
    linear-gradient(90deg, rgba(234, 241, 247, 0.02) 1px, transparent 1px);\r
  background-size: 72px 72px;\r
  transition: grid-template-columns 220ms ease;\r
}\r
\r
.sandcastle[data-side-collapsed] {\r
  grid-template-columns: 52px 0 0 minmax(0, 1fr);\r
}\r
\r
.sandcastle[data-resizing] {\r
  transition: none;\r
}\r
\r
.sandcastle-topbar {\r
  z-index: 30;\r
  display: flex;\r
  grid-column: 1 / -1;\r
  align-items: center;\r
  gap: 16px;\r
  min-width: 0;\r
  padding: 6px 10px;\r
  border-bottom: 1px solid rgba(215, 224, 233, 0.12);\r
  background: rgba(7, 9, 13, 0.9);\r
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);\r
  backdrop-filter: blur(18px);\r
}\r
\r
.sandcastle-topbar .portal-brand {\r
  flex: 0 0 auto;\r
}\r
\r
.sandcastle-title {\r
  display: flex;\r
  min-width: 0;\r
  align-items: baseline;\r
  gap: 10px;\r
  margin-right: auto;\r
}\r
\r
.sandcastle-title strong {\r
  color: #2df5c3;\r
  font-size: 15px;\r
  line-height: 1.2;\r
}\r
\r
.sandcastle-actions {\r
  display: flex;\r
  flex: 0 0 auto;\r
  gap: 8px;\r
}\r
\r
.sandcastle-button {\r
  display: inline-flex;\r
  min-height: 34px;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 0 12px;\r
  border: 1px solid rgba(215, 224, 233, 0.18);\r
  border-radius: 6px;\r
  color: #e8edf1;\r
  background: rgba(215, 224, 233, 0.07);\r
  font: inherit;\r
  font-size: 13px;\r
  text-decoration: none;\r
  cursor: pointer;\r
}\r
\r
.sandcastle-button:hover,\r
.sandcastle-button:focus-visible {\r
  border-color: rgba(142, 162, 150, 0.72);\r
  color: #ffffff;\r
  background: rgba(142, 162, 150, 0.16);\r
  outline: none;\r
}\r
\r
.sandcastle-button[aria-disabled="true"] {\r
  border-color: rgba(215, 224, 233, 0.1);\r
  color: #697480;\r
  background: rgba(215, 224, 233, 0.03);\r
  cursor: default;\r
  pointer-events: none;\r
}\r
\r
.sandcastle-button--primary {\r
  border-color: rgba(45, 245, 195, 0.82);\r
  color: #03110d;\r
  background: #20d6aa;\r
}\r
\r
.sandcastle-button--primary:hover,\r
.sandcastle-button--primary:focus-visible {\r
  color: #03110d;\r
  background: #42f0c5;\r
}\r
\r
.sandcastle-rail {\r
  z-index: 20;\r
  display: flex;\r
  min-width: 0;\r
  min-height: 0;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 6px;\r
  border-right: 1px solid rgba(215, 224, 233, 0.12);\r
  background: rgba(12, 15, 18, 0.94);\r
}\r
\r
.sandcastle-rail__button {\r
  display: grid;\r
  width: 36px;\r
  height: 36px;\r
  place-items: center;\r
  padding: 0;\r
  border: 1px solid transparent;\r
  border-radius: 6px;\r
  color: #9ba7b2;\r
  background: transparent;\r
  font: inherit;\r
  font-size: 12px;\r
  cursor: pointer;\r
}\r
\r
.sandcastle-rail__link {\r
  text-decoration: none;\r
}\r
\r
.sandcastle-rail__button svg {\r
  width: 17px;\r
  height: 17px;\r
  fill: none;\r
  stroke: currentColor;\r
  stroke-linecap: round;\r
  stroke-linejoin: round;\r
  stroke-width: 2;\r
}\r
\r
.sandcastle-rail__button:hover,\r
.sandcastle-rail__button:focus-visible,\r
.sandcastle-rail__button[data-active] {\r
  border-color: rgba(45, 245, 195, 0.45);\r
  color: #f8fafc;\r
  background: rgba(32, 214, 170, 0.82);\r
  outline: none;\r
}\r
\r
.sandcastle-sidebar,\r
.sandcastle-editor-panel {\r
  display: none;\r
  grid-column: 2;\r
  min-width: 0;\r
  min-height: 0;\r
  border-right: 1px solid rgba(215, 224, 233, 0.12);\r
  background: rgba(9, 13, 20, 0.88);\r
}\r
\r
.sandcastle[data-side-collapsed] .sandcastle-sidebar,\r
.sandcastle[data-side-collapsed] .sandcastle-editor-panel {\r
  overflow: hidden;\r
  pointer-events: none;\r
  visibility: hidden;\r
}\r
\r
.sandcastle-sidebar[data-active],\r
.sandcastle-editor-panel[data-active] {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.sandcastle-sidebar__search {\r
  display: flex;\r
  flex: 0 0 auto;\r
  min-height: 64px;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 0 12px;\r
  border-bottom: 1px solid rgba(215, 224, 233, 0.1);\r
}\r
\r
.sandcastle-search-field {\r
  position: relative;\r
  min-width: 0;\r
  flex: 1 1 auto;\r
}\r
\r
.sandcastle-search-field__icon {\r
  position: absolute;\r
  left: 14px;\r
  top: 50%;\r
  width: 16px;\r
  height: 16px;\r
  color: #8ea296;\r
  pointer-events: none;\r
  transform: translateY(-50%);\r
}\r
\r
.sandcastle-search-field__icon circle,\r
.sandcastle-search-field__icon path {\r
  fill: none;\r
  stroke: currentColor;\r
  stroke-width: 2;\r
  stroke-linecap: round;\r
  stroke-linejoin: round;\r
}\r
\r
.sandcastle-search {\r
  width: 100%;\r
  min-height: 38px;\r
  padding: 0 12px 0 40px;\r
  border: 1px solid rgba(215, 224, 233, 0.16);\r
  border-radius: 6px;\r
  color: #f8fafc;\r
  background: rgba(16, 22, 29, 0.86);\r
  font: inherit;\r
  font-size: 13px;\r
}\r
\r
.sandcastle-search:focus {\r
  border-color: rgba(142, 162, 150, 0.82);\r
  outline: none;\r
}\r
\r
.sandcastle-gallery__list {\r
  display: grid;\r
  min-height: 0;\r
  gap: 10px;\r
  overflow-y: auto;\r
  padding: 12px;\r
  scrollbar-color: rgba(142, 162, 150, 0.42) transparent;\r
  scrollbar-width: thin;\r
}\r
\r
.sandcastle-card {\r
  display: grid;\r
  grid-template-columns: 144px minmax(0, 1fr);\r
  gap: 12px;\r
  width: 100%;\r
  min-height: 124px;\r
  padding: 8px;\r
  border: 1px solid rgba(215, 224, 233, 0.11);\r
  border-radius: 8px;\r
  color: inherit;\r
  background: rgba(16, 22, 29, 0.7);\r
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);\r
  font: inherit;\r
  text-align: left;\r
  cursor: pointer;\r
}\r
\r
.sandcastle-card:hover,\r
.sandcastle-card:focus-visible,\r
.sandcastle-card[data-active] {\r
  border-color: rgba(142, 162, 150, 0.62);\r
  background: rgba(23, 31, 38, 0.88);\r
  outline: none;\r
}\r
\r
.sandcastle-card__thumb {\r
  display: block;\r
  aspect-ratio: 4 / 3;\r
  width: 100%;\r
  border: 1px dashed rgba(215, 224, 233, 0.18);\r
  border-radius: 6px;\r
  background:\r
    linear-gradient(135deg, rgba(92, 133, 120, 0.12), transparent 42%),\r
    rgba(215, 224, 233, 0.04);\r
  background-position: center;\r
  background-size: cover;\r
}\r
\r
.sandcastle-card__body {\r
  display: grid;\r
  min-width: 0;\r
  align-content: start;\r
  gap: 6px;\r
}\r
\r
.sandcastle-card__category {\r
  color: #8aa296;\r
  font-size: 11px;\r
  font-weight: 760;\r
  text-transform: uppercase;\r
}\r
\r
.sandcastle-card strong {\r
  color: #f3f6f8;\r
  font-size: 15px;\r
  line-height: 1.28;\r
}\r
\r
.sandcastle-card__description {\r
  display: -webkit-box;\r
  overflow: hidden;\r
  color: #aeb9c4;\r
  font-size: 12px;\r
  line-height: 1.42;\r
  -webkit-box-orient: vertical;\r
  -webkit-line-clamp: 2;\r
}\r
\r
.sandcastle-card__tags {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 5px;\r
}\r
\r
.sandcastle-card__tags em {\r
  padding: 2px 6px;\r
  border: 1px solid rgba(215, 224, 233, 0.14);\r
  border-radius: 999px;\r
  color: #dce5e7;\r
  background: rgba(215, 224, 233, 0.06);\r
  font-size: 10px;\r
  font-style: normal;\r
  line-height: 1.4;\r
}\r
\r
.sandcastle-preview-panel,\r
.sandcastle-console {\r
  min-width: 0;\r
  min-height: 0;\r
  background: rgba(8, 10, 14, 0.8);\r
}\r
\r
.sandcastle-splitter {\r
  position: relative;\r
  z-index: 15;\r
  grid-column: 3;\r
  min-width: 0;\r
  min-height: 0;\r
  background: rgba(10, 14, 20, 0.88);\r
  cursor: col-resize;\r
  touch-action: none;\r
}\r
\r
.sandcastle[data-side-collapsed] .sandcastle-splitter {\r
  background: transparent;\r
  cursor: default;\r
}\r
\r
.sandcastle-splitter::before {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 2px;\r
  height: 46px;\r
  border-radius: 999px;\r
  content: "";\r
  background: rgba(215, 224, 233, 0.22);\r
  transform: translate(-50%, -50%);\r
  transition:\r
    background 160ms ease,\r
    box-shadow 160ms ease;\r
}\r
\r
.sandcastle-splitter:hover::before,\r
.sandcastle-splitter:focus-visible::before,\r
.sandcastle[data-resizing] .sandcastle-splitter::before {\r
  background: #2df5c3;\r
  box-shadow: 0 0 0 4px rgba(45, 245, 195, 0.16);\r
}\r
\r
.sandcastle[data-side-collapsed] .sandcastle-splitter::before {\r
  opacity: 0;\r
}\r
\r
.sandcastle-splitter:focus-visible {\r
  outline: none;\r
}\r
\r
.sandcastle-side-toggle {\r
  display: grid;\r
  width: 28px;\r
  height: 28px;\r
  flex: 0 0 auto;\r
  margin-right: 6px;\r
  place-items: center;\r
  padding: 0;\r
  border: 1px solid rgba(215, 224, 233, 0.18);\r
  border-radius: 6px;\r
  color: #b6c2cb;\r
  background: rgba(16, 22, 29, 0.92);\r
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);\r
  cursor: pointer;\r
  transition:\r
    border-color 160ms ease,\r
    background 160ms ease,\r
    color 160ms ease,\r
    transform 220ms ease;\r
}\r
\r
.sandcastle-side-toggle::before {\r
  width: 7px;\r
  height: 7px;\r
  border-left: 2px solid currentColor;\r
  border-bottom: 2px solid currentColor;\r
  content: "";\r
  transform: translateX(2px) rotate(45deg);\r
  transition: transform 220ms ease;\r
}\r
\r
.sandcastle[data-side-collapsed] .sandcastle-side-toggle {\r
  display: none;\r
}\r
\r
.sandcastle-side-toggle:hover,\r
.sandcastle-side-toggle:focus-visible {\r
  border-color: rgba(45, 245, 195, 0.5);\r
  color: #ffffff;\r
  background: rgba(32, 214, 170, 0.24);\r
  outline: none;\r
}\r
\r
.sandcastle-editor-panel {\r
  grid-template-rows: 34px minmax(0, 1fr);\r
}\r
\r
.sandcastle-editor-panel[data-active] {\r
  display: grid;\r
}\r
\r
.sandcastle-editor-tabs {\r
  display: flex;\r
  min-height: 34px;\r
  align-items: center;\r
  gap: 0;\r
  border-bottom: 1px solid rgba(215, 224, 233, 0.1);\r
  background: rgba(20, 23, 27, 0.92);\r
}\r
\r
.sandcastle-editor-actions {\r
  display: flex;\r
  flex: 0 0 auto;\r
  align-items: center;\r
  gap: 8px;\r
  margin-left: auto;\r
  padding: 0 8px;\r
}\r
\r
.sandcastle-editor-actions .sandcastle-button {\r
  min-height: 28px;\r
  padding-inline: 12px;\r
}\r
\r
.sandcastle-editor-tab {\r
  min-height: 34px;\r
  padding: 0 14px;\r
  border: 0;\r
  border-right: 1px solid rgba(215, 224, 233, 0.1);\r
  color: #9ba7b2;\r
  background: transparent;\r
  font: inherit;\r
  font-size: 13px;\r
  cursor: pointer;\r
}\r
\r
.sandcastle-editor-tab:hover,\r
.sandcastle-editor-tab:focus-visible,\r
.sandcastle-editor-tab[data-active] {\r
  color: #2df5c3;\r
  background: rgba(45, 245, 195, 0.08);\r
  outline: none;\r
}\r
\r
.sandcastle-editor {\r
  min-width: 0;\r
  min-height: 0;\r
}\r
\r
.sandcastle-preview-panel {\r
  position: relative;\r
  overflow: hidden;\r
  background: #03060b;\r
}\r
\r
.sandcastle-stage {\r
  display: grid;\r
  grid-column: 4;\r
  min-width: 0;\r
  min-height: 0;\r
  grid-template-rows: minmax(0, 1fr) var(--sandcastle-console-height);\r
  transition: grid-template-rows 220ms ease;\r
}\r
\r
.sandcastle-stage[data-console-collapsed] {\r
  --sandcastle-console-height: 36px;\r
}\r
\r
.sandcastle-stage[data-console-resizing] {\r
  transition: none;\r
  user-select: none;\r
}\r
\r
.sandcastle-preview {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #03060b;
}

.sandcastle-preview-loading {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  color: #dff8f3;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0;
  background:
    radial-gradient(circle at center, rgba(45, 245, 195, 0.14), transparent 32%),
    rgba(3, 6, 11, 0.82);
  opacity: 0;
  pointer-events: none;
  transition: opacity 160ms ease;
}

.sandcastle-preview-panel[data-loading] .sandcastle-preview-loading {
  opacity: 1;
}

.sandcastle-preview-loading__ring {
  width: 34px;
  height: 34px;
  border: 2px solid rgba(215, 224, 233, 0.24);
  border-top-color: #2df5c3;
  border-radius: 50%;
  animation: sandcastle-preview-loading-spin 780ms linear infinite;
}

@keyframes sandcastle-preview-loading-spin {
  to {
    transform: rotate(1turn);
  }
}

.sandcastle-preview-panel:fullscreen {
  width: 100vw;
  height: 100vh;
  background: #03060b;
}
\r
.sandcastle-preview-fullscreen {\r
  position: absolute;\r
  right: 10px;\r
  bottom: 10px;\r
  z-index: 5;\r
  display: grid;\r
  width: 38px;\r
  height: 38px;\r
  place-items: center;\r
  padding: 0;\r
  border: 1px solid rgba(215, 224, 233, 0.24);\r
  border-radius: 6px;\r
  color: #eef5f8;\r
  background: rgba(7, 9, 13, 0.78);\r
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\r
  cursor: pointer;\r
  backdrop-filter: blur(12px);\r
  transition:\r
    border-color 160ms ease,\r
    background 160ms ease,\r
    color 160ms ease;\r
}\r
\r
.sandcastle-preview-fullscreen:hover,\r
.sandcastle-preview-fullscreen:focus-visible {\r
  border-color: rgba(45, 245, 195, 0.62);\r
  color: #ffffff;\r
  background: rgba(32, 214, 170, 0.24);\r
  outline: none;\r
}\r
\r
.sandcastle-preview-fullscreen svg {\r
  grid-area: 1 / 1;\r
  width: 20px;\r
  height: 20px;\r
  fill: none;\r
  stroke: currentColor;\r
  stroke-linecap: round;\r
  stroke-linejoin: round;\r
  stroke-width: 2;\r
}\r
\r
.sandcastle-preview-fullscreen__exit {\r
  display: none;\r
}\r
\r
.sandcastle-preview-panel[data-preview-fullscreen] .sandcastle-preview-fullscreen__enter {\r
  display: none;\r
}\r
\r
.sandcastle-preview-panel[data-preview-fullscreen] .sandcastle-preview-fullscreen__exit {\r
  display: block;\r
}\r
\r
.sandcastle-console {\r
  position: relative;\r
  display: grid;\r
  grid-template-rows: 34px minmax(0, 1fr);\r
  border-top: 1px solid rgba(215, 224, 233, 0.12);\r
}\r
\r
.sandcastle-console-resizer {\r
  position: absolute;\r
  top: -5px;\r
  right: 0;\r
  left: 0;\r
  z-index: 2;\r
  height: 10px;\r
  cursor: row-resize;\r
  touch-action: none;\r
}\r
\r
.sandcastle-console-resizer::before {\r
  position: absolute;\r
  top: 4px;\r
  left: 50%;\r
  width: 112px;\r
  height: 2px;\r
  border-radius: 999px;\r
  content: "";\r
  background: rgba(215, 224, 233, 0.22);\r
  transform: translateX(-50%);\r
  transition:\r
    background 160ms ease,\r
    box-shadow 160ms ease;\r
}\r
\r
.sandcastle-console-resizer:hover::before,\r
.sandcastle-console-resizer:focus-visible::before,\r
.sandcastle-stage[data-console-resizing] .sandcastle-console-resizer::before {\r
  background: #2df5c3;\r
  box-shadow: 0 0 0 4px rgba(45, 245, 195, 0.16);\r
}\r
\r
.sandcastle-console-resizer:focus-visible {\r
  outline: none;\r
}\r
\r
.sandcastle-console header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
  padding: 0 12px;\r
  border-bottom: 1px solid rgba(215, 224, 233, 0.08);\r
  color: #dfe6eb;\r
  background: rgba(16, 22, 29, 0.8);\r
  font-size: 13px;\r
  font-weight: 700;\r
}\r
\r
.sandcastle-console__title {\r
  display: flex;\r
  min-width: 0;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.sandcastle-console__actions {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.sandcastle-console header button {\r
  display: inline-flex;\r
  min-height: 28px;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  padding: 0 9px;\r
  border: 0;\r
  border-radius: 6px;\r
  color: #aeb9c4;\r
  background: transparent;\r
  font: inherit;\r
  font-size: 12px;\r
  cursor: pointer;\r
}\r
\r
.sandcastle-console__toggle {\r
  position: relative;\r
  width: 28px;\r
  height: 28px;\r
  min-height: 28px;\r
  padding: 0;\r
  transition:\r
    background 160ms ease,\r
    color 160ms ease;\r
}\r
\r
.sandcastle-console__toggle::before {\r
  width: 6px;\r
  height: 6px;\r
  border-right: 2px solid currentColor;\r
  border-bottom: 2px solid currentColor;\r
  content: "";\r
  transform: translateY(-2px) rotate(45deg);\r
  transition: transform 220ms ease;\r
}\r
\r
.sandcastle-stage[data-console-collapsed] .sandcastle-console__toggle::before {\r
  transform: translateY(2px) rotate(225deg);\r
}\r
\r
.sandcastle-console__clear svg {\r
  width: 14px;\r
  height: 14px;\r
  fill: none;\r
  stroke: currentColor;\r
  stroke-linecap: round;\r
  stroke-linejoin: round;\r
  stroke-width: 1.8;\r
}\r
\r
.sandcastle-console header button:hover,\r
.sandcastle-console header button:focus-visible {\r
  color: #ffffff;\r
  background: rgba(215, 224, 233, 0.08);\r
  outline: none;\r
}\r
\r
.sandcastle-console__body {\r
  min-height: 0;\r
  overflow: auto;\r
  padding: 10px 12px;\r
  color: #cbd5e1;\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;\r
  font-size: 12px;\r
  line-height: 1.55;\r
  opacity: 1;\r
  scrollbar-color: rgba(142, 162, 150, 0.42) transparent;\r
  scrollbar-width: thin;\r
  transform: translateY(0);\r
  transition:\r
    opacity 180ms ease,\r
    transform 220ms ease,\r
    visibility 0s linear 0s;\r
  visibility: visible;\r
}\r
\r
.sandcastle-stage[data-console-collapsed] .sandcastle-console__body {\r
  opacity: 0;\r
  pointer-events: none;\r
  transform: translateY(-6px);\r
  transition:\r
    opacity 120ms ease,\r
    transform 180ms ease,\r
    visibility 0s linear 180ms;\r
  visibility: hidden;\r
}\r
\r
.sandcastle-console__line {\r
  display: grid;\r
  grid-template-columns: 52px minmax(0, 1fr);\r
  gap: 10px;\r
  align-items: start;\r
}\r
\r
.sandcastle-console__line + .sandcastle-console__line {\r
  margin-top: 6px;\r
}\r
\r
.sandcastle-console__line span {\r
  color: #8aa296;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
}\r
\r
.sandcastle-console__line pre {\r
  min-width: 0;\r
  margin: 0;\r
  overflow-wrap: anywhere;\r
  white-space: pre-wrap;\r
}\r
\r
.sandcastle-console__line--warn span {\r
  color: #fde68a;\r
}\r
\r
.sandcastle-console__line--error span,\r
.sandcastle-console__line--error pre {\r
  color: #fecaca;\r
}\r
\r
@media (max-width: 1080px) {\r
  .sandcastle {\r
    grid-template-columns: 52px minmax(0, 1fr);\r
    grid-template-rows: auto minmax(320px, 0.44fr) minmax(360px, 0.56fr);\r
  }\r
\r
  .sandcastle-topbar {\r
    grid-column: 1 / -1;\r
    flex-wrap: wrap;\r
  }\r
\r
  .sandcastle-rail {\r
    grid-row: 2 / 4;\r
  }\r
\r
  .sandcastle-sidebar,\r
  .sandcastle-editor-panel {\r
    grid-column: 2;\r
    border-right: 0;\r
    border-bottom: 1px solid rgba(215, 224, 233, 0.12);\r
  }\r
\r
  .sandcastle-splitter {\r
    display: none;\r
  }\r
\r
  .sandcastle-side-toggle {\r
    display: none;\r
  }\r
\r
  .sandcastle-stage {\r
    grid-column: 2;\r
    grid-row: 3;\r
  }\r
\r
  .portal-hero__layout,\r
  .portal-section--split,\r
  .portal-code-layout,\r
  .portal-band {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .portal-band--reverse .portal-band__image,\r
  .portal-band--reverse .portal-band__content {\r
    grid-column: auto;\r
    grid-row: auto;\r
  }\r
\r
  .portal-visual__frame {\r
    min-height: 440px;\r
  }\r
\r
  .portal-feature-grid,\r
  .portal-example-grid,\r
  .portal-metrics {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
  }\r
\r
  .portal-metrics div:nth-child(3) {\r
    border-left: 0;\r
  }\r
\r
  .portal-metrics div:nth-child(n + 3) {\r
    border-top: 1px solid rgba(215, 224, 233, 0.1);\r
  }\r
}\r
\r
@media (max-width: 640px) {\r
  body.sandcastle-page {\r
    overflow: auto;\r
  }\r
\r
  .sandcastle {\r
    width: 100%;\r
    min-height: 100vh;\r
    height: auto;\r
    grid-template-columns: 44px minmax(0, 1fr);\r
    grid-template-rows: auto 420px 520px;\r
  }\r
\r
  .sandcastle-topbar {\r
    align-items: flex-start;\r
  }\r
\r
  .sandcastle-title {\r
    width: 100%;\r
    order: 3;\r
  }\r
\r
  .sandcastle-actions {\r
    width: 100%;\r
  }\r
\r
  .sandcastle-button {\r
    flex: 1 1 0;\r
  }\r
\r
  .sandcastle-rail {\r
    padding-inline: 4px;\r
  }\r
\r
  .sandcastle-rail__button {\r
    width: 34px;\r
    height: 34px;\r
  }\r
\r
  .sandcastle-card {\r
    grid-template-columns: 112px minmax(0, 1fr);\r
  }\r
\r
  .sandcastle-stage {\r
    grid-template-rows: minmax(0, 1fr) var(--sandcastle-console-height);\r
  }\r
\r
  .portal-hero,\r
  .portal-section {\r
    padding-inline: 20px;\r
  }\r
\r
  .portal-hero {\r
    min-height: auto;\r
    padding-top: 14px;\r
    padding-bottom: 34px;\r
  }\r
\r
  .portal-nav {\r
    position: relative;\r
    top: auto;\r
    align-items: flex-start;\r
    flex-direction: column;\r
    gap: 10px;\r
  }\r
\r
  .portal-nav__links {\r
    justify-content: flex-start;\r
  }\r
\r
  .portal-hero__layout {\r
    gap: 34px;\r
    padding-top: 54px;\r
  }\r
\r
  .portal-hero h1 {\r
    max-width: calc(100vw - 40px);\r
    font-size: 36px;\r
    line-height: 1.08;\r
    text-wrap: wrap;\r
    word-break: break-all;\r
  }\r
\r
  .portal-hero__content > p:not(.portal-eyebrow) {\r
    max-width: calc(100vw - 40px);\r
    font-size: 16px;\r
    word-break: break-all;\r
  }\r
\r
  .portal-actions {\r
    align-items: stretch;\r
    flex-direction: column;\r
  }\r
\r
  .portal-button {\r
    width: 100%;\r
  }\r
\r
  .portal-visual__frame,\r
  .portal-band__image {\r
    min-height: 330px;\r
  }\r
\r
  .portal-band--reverse .portal-band__image,\r
  .portal-band--reverse .portal-band__content {\r
    order: initial;\r
  }\r
\r
  .portal-visual__placeholder {\r
    inset: 70px 18px;\r
  }\r
\r
  .portal-visual__placeholder strong {\r
    max-width: 100%;\r
    font-size: 18px;\r
    overflow-wrap: anywhere;\r
    word-break: break-word;\r
  }\r
\r
  .portal-band__image img,\r
  .portal-band__image video {\r
    min-height: 330px;\r
  }\r
\r
  .portal-visual__hud {\r
    left: 18px;\r
    right: 18px;\r
    max-width: none;\r
  }\r
\r
  .portal-visual__hud--top {\r
    top: 18px;\r
  }\r
\r
  .portal-visual__hud--bottom {\r
    bottom: 18px;\r
  }\r
\r
  .portal-metrics,\r
  .portal-feature-grid,\r
  .portal-example-grid {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  .portal-metrics div,\r
  .portal-metrics div:nth-child(3) {\r
    border-left: 0;\r
  }\r
\r
  .portal-metrics div + div {\r
    border-top: 1px solid rgba(215, 224, 233, 0.1);\r
  }\r
\r
  .portal-section {\r
    padding-top: 58px;\r
    padding-bottom: 58px;\r
  }\r
\r
  .portal-section::before {\r
    left: 20px;\r
    right: 20px;\r
  }\r
\r
  .portal-feature,\r
  .portal-example {\r
    min-height: auto;\r
  }\r
\r
  .portal-code {\r
    padding: 18px;\r
    font-size: 12px;\r
  }\r
\r
  .toolbar {\r
    top: 12px;\r
    left: 12px;\r
    max-width: calc(100vw - 24px);\r
  }\r
\r
  .layer-manager {\r
    top: 12px;\r
    left: 12px;\r
    width: calc(100vw - 24px);\r
  }\r
\r
  .location-panel {\r
    right: 12px;\r
    bottom: 12px;\r
    max-width: calc(100vw - 24px);\r
  }\r
\r
  .example-fps {\r
    top: 12px;\r
  }\r
}\r
`,f={BASE_URL:"/tellux/",DEV:!1,MODE:"ghpages",PROD:!0,SSR:!1,VITE_BASE:"/tellux/",VITE_CESIUM_ION_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwY2M4OWEzZi01MGQyLTQ5ZWItYTFiZi0yOGE4NjIwYzkzYTEiLCJpZCI6MTEyOTIzLCJpYXQiOjE3MzI1MzQ3ODZ9.IlcynpKbzGwZif_iOihHp1-FEWRxWjqIqiKaVDLvC_Q",VITE_CESIUM_TERRAIN_URL:"https://api.maptiler.com/tiles/terrain-quantized-mesh-v2/?key=n6YRz1QrQdbExXeIG2QC"},u="tellux:sandcastle-run:";function w(r){if(r instanceof Error)return r.stack??r.message;if(typeof r=="string")return r;try{return JSON.stringify(r,null,2)??String(r)}catch{return String(r)}}function _(r,e,n){window.parent.postMessage({type:"sandbox-log",runId:r,level:e,values:n.map(w)},window.location.origin)}function v(r){const e={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};["log","info","warn","error"].forEach(n=>{console[n]=(...a)=>{e[n](...a),_(r,n,a)}})}function y(){const r=new URLSearchParams(window.location.search),e=r.get("run"),n=r.get("payload");if(n)return JSON.parse(decodeURIComponent(n));if(!e)return null;const a=localStorage.getItem(`${u}${e}`);return a?JSON.parse(a):null}function k(r){const e=new DOMParser().parseFromString(r,"text/html");if(e.querySelectorAll('link[rel~="stylesheet"][href]').forEach(n=>{var o;const a=(o=n.getAttribute("href"))==null?void 0:o.trim();if(a!=="./styles.css"&&a!=="styles.css"&&a!=="../styles.css")return;const t=e.createElement("style");t.textContent=h,n.replaceWith(t)}),!e.querySelector("base")){const n=e.createElement("base");n.href="../",e.head.prepend(n)}return`<!doctype html>
${e.documentElement.outerHTML}`}function z(r){document.open(),document.write(k(r)),document.close()}function I(){document.querySelectorAll('script[type="module"][src]').forEach(r=>r.remove())}function E(r){return r.replace(/^\s*import\s+["'][^"']+["'];?\s*$/gm,"").replace(/^\s*import[\s\S]*?\s+from\s+["'][^"']+["'];?\s*$/gm,"").replace(/^\s*export\s+\{\s*\};?\s*$/gm,"")}function S(r){return E(r).replace(/\bimport\s*\.\s*meta\b/g,"__sandcastleImportMeta")}function M(r){const e={env:{...f},url:window.location.href};new Function("tellux","THREE","TilesRenderer","GaussianSplatPlugin","GLTFLoader","arcgisWorldImageryUrl","defaultTerrainUrl","showTokenNotice","mountLocationReadout","formatHeight","__sandcastleImportMeta",`"use strict";
${S(r)}
//# sourceURL=tellux-sandcastle-example.js`)(i,l,s,d,p,c,g,x,b,m,e)}async function C(r){z(r.html),v(r.runId),I(),M(r.compiledJavascript)}R();async function R(){const e=new URLSearchParams(window.location.search).get("runId")??void 0;let n=null;try{if(n=y(),!n)throw new Error("Sandcastle run payload not found.");await C(n),window.parent.postMessage({type:"sandbox-ready",runId:n.runId},window.location.origin)}catch(a){const t=a instanceof Error?a.stack??a.message:String(a);console.error(a),window.parent.postMessage({type:"sandbox-error",runId:(n==null?void 0:n.runId)??e,message:t},window.location.origin)}}
