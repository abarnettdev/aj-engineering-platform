# Portfolio quality evidence

## Recorded snapshots

The portfolio presents the supplied October 20, 2026 results for `https://ajbarnett.tech/` as dated evidence. They are not shown as live telemetry.

| Lighthouse category | Desktop | Mobile |
| ------------------- | ------: | -----: |
| Performance         |      98 |     92 |
| Accessibility       |     100 |    100 |
| Best Practices      |     100 |    100 |
| SEO                 |     100 |    100 |

The supplied axe automated scan reported zero detected issues with the WCAG 2.1 AA ruleset selected. It reported zero critical, serious, moderate, and minor issues. Best Practices was off. The source material did not demonstrate completed guided or manual testing.

## Claims boundary

The public experience describes the site as designed with WCAG 2.2 AA and Section 508 requirements in mind. It does not claim complete conformance or legal certification. Automated tools cannot establish either claim.

## Release review

The finished build received the following release checks:

- Keyboard review confirmed dialog entry, tab controls, Escape to close, and focus return to the opening button.
- Accessibility-tree review confirmed the quality panel, score text, tabs, dialog, navigation, and Ask A.J. remain available in reading order.
- A local axe WCAG 2.1 AA scan reported zero violations. It left manual review items for gradient or overlapping backgrounds and closed Radix dialog references; these are not represented as automatic passes.
- Responsive review at 390 by 844 CSS pixels and the desktop layout found no horizontal document overflow. The Ask A.J. launcher remained clear of the mobile navigation.
- Reduced-motion emulation reduced score-ring animation and seasonal-icon transitions to the final state immediately.
- Seasonal SVGs remain outside the accessibility tree and do not intercept pointer input.
- Type checks, focused lint, route smoke tests, seasonal boundary tests, design-system tests, the Vercel production build, and the Storybook production build passed.

The public summary and both result dialogs read from one `QUALITY_AUDIT` record. When the audits are run again, update that record with the new verified figures and run date; a button click alone must never change the date.
