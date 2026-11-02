# Forms & Downloads - supplied PDF review

Reviewed November 2, 2026 (America/New_York). Route: `/forms.html`.

## File preservation

All seven PDFs were copied from the user's supplied Documents paths without PDF modification, regeneration, translation, flattening, compression, or metadata changes. SHA-256 digests are recorded in `forms-files.json`; checks confirm the copied bytes match those digests. The two acknowledgment travel files were renamed only to match the requested destination names:

| Supplied filename | Destination under public/forms |
| --- | --- |
| minor-travel-consent-ackn.pdf | minor-travel-consent.pdf |
| minor-travel-consent-jurat.pdf | minor-travel-consent-jurat.pdf |
| minor-travel-consent-spanish-ackn.pdf | minor-travel-consent-spanish.pdf |
| minor-travel-consent-jurat-spanish.pdf | minor-travel-consent-jurat-spanish.pdf |
| nc-acknowledgment-certificate.pdf | nc-acknowledgment-certificate.pdf |
| nc-jurat-certificate.pdf | nc-jurat-certificate.pdf |
| vehicle-bill-of-sale.pdf | vehicle-bill-of-sale.pdf |

Each original PDF was opened, its full text extracted, and its rendered page visually reviewed. All seven are one-page US Letter documents. The two Spanish travel forms have Spanish body text and English certificate sections; the other five files are English. Page labels reflect the actual files in both website languages. The PDFs contain blank signature, date, venue and notary fields; no simulated signature or seal was added. No material certificate-wording discrepancy was identified in this limited comparison. This does not constitute an attorney's review or a guarantee of acceptance.

## Official guidance checked

- NC Secretary of State, Notary FAQ: https://www.sosnc.gov/frequently_asked_questions/by_title/_notary . Official indexed guidance confirms a foreign-language document can have an English notarial certificate. Full page retrieval was HTTP 403; this access limitation is recorded explicitly.
- NC Secretary of State, General Counsel Manual, page 33: https://www.sosnc.gov/manual/General_Counsel/Page33 . Official indexed guidance says the document may be in another language but the certificate must be English. Direct retrieval was HTTP 403. Cross-checked against the statute below.
- G.S. 10B-22(b): https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_10B/GS_10B-22.html . The executed certificate must be in English; an accompanying record may be another language. Supplied Spanish travel PDFs retain English certificate sections.
- G.S. 10B-41: https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_10B/GS_10B-41.html . Compared acknowledgment text and the venue, principal, date, notary signature/name, expiration and seal fields. Supplied certificates follow the statutory wording in substance.
- G.S. 10B-43(a), (d)(2): https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_10B/GS_10B-43.html . Compared jurat text; “sworn to or affirmed” is an expressly authorized substitution. Supplied jurats include the signature/oath-or-affirmation wording.
- G.S. 10B-3: https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_10B/GS_10B-3.html . Definitions distinguish acknowledgment, oath, affirmation and jurat. The page does not tell customers which act to choose.
- G.S. 10B-20: https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_10B/GS_10B-20.html . Personal appearance, identification, certificate requirements, limits on selecting notarial acts and giving legal advice; bilingual nonattorney notice included on the page under subsection (i).
- NCDMV, Vehicle Titles: https://www.ncdot.gov/dmv/title-registration/vehicle/Pages/default.aspx . Title transfer requires the assigned title and relevant information; a bill of sale does not replace the title process.
- NCDMV, Title Documents and Forms: https://www.ncdot.gov/dmv/title-registration/vehicle/Pages/documents-forms.aspx . Requirements depend on the transaction and may include a lien release, title application, odometer and damage disclosures. Page note preserves the user's warning without asserting blanket acceptance or inventing age-based exemptions.

No PDF was altered to resolve or conceal an issue. There were no material discrepancies identified for correction in this review. Destination/airline/custody-specific travel requirements and the recipient's required notarial act remain matters for the recipient or attorney, as the requested disclosures explain.

## Implementation

Buildless static HTML/CSS/JavaScript repository; no package.json or build command. Existing shared `script.js` language toggle, header/menu, footer, buttons, contact route and telephone link are reused. Page-specific text and notices have English and Spanish entries. All existing primary-navigation and footer instances link to the new page. The two Spanish files are explicitly labeled as having English certificate sections.

Each PDF has a same-origin new-tab view link (`target="_blank"`, `rel="noopener noreferrer"`) and a same-origin download link with an explicit descriptive `.pdf` filename. Accessible names include each form's title and announce new-tab views. Controls are native links with visible keyboard focus, at least 48px button height and a single-column layout below 760px. No account, email, payment or appointment gate is introduced.

The page has no form, upload/input/textarea, collection endpoint, iframe, scheduling widget or payment widget. Contact is an optional link to the existing contact section. Shared JavaScript attaches form handlers only when a corresponding form exists; none exists on this page. Download links request blank files only and never transmit completed PDF data.

## Validation

- `node scripts/check-forms.mjs`: passed original SHA-256 digests, seven files, fourteen correct PDF view/download links, safe new-tab attributes, descriptive download filenames, local links/anchors, unique IDs, no collection UI, all-page navigation/footer integration, all EN/ES keys and actual shared-script language/menu behavior using a minimal DOM fixture.
- `node --check script.js` and `git diff --check`: passed.
- Temporary local HTTP server: `/forms.html`, CSS, JS and all seven PDFs returned HTTP 200. PDF responses had application/pdf MIME type and valid PDF headers. Server stopped after checks.
- Rendered every supplied PDF with PyMuPDF from the temporary PDF-review environment and visually inspected every page. No content was rewritten.
- Real-browser mobile/keyboard and save-dialog testing is **not completed**: browser host unavailable; native Chrome connection returned “Computer Use permissions are not granted.” Responsive layout, native link semantics, focus CSS, hidden-menu styles, language behavior and link targets were checked directly. The DOM fixture does not establish visual layout or browser keyboard behavior. A phone/browser preview remains the specific verification item for user review.
- No commit, push or deployment performed. No PDF-generation script was added.
