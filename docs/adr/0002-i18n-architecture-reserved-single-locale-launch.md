# Reserve i18n architecture at launch, ship Chinese-only content

The site may need a bilingual (中/英) toggle later, but writing and maintaining English content isn't ready for launch. We chose to structure routing and content lookups around a locale so a second locale is additive later, rather than building single-language now and retrofitting i18n after content exists. The language switcher itself stays out of the UI until a second locale actually has content — an enabled toggle with nothing behind it would be worse than no toggle.

**Status**: accepted
