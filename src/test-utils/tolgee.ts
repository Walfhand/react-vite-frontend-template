import { Tolgee } from '@tolgee/react';
import { FormatIcu } from '@tolgee/format-icu';
import { getAllLanguageCodes } from '@/config/languages';
import en from '@/i18n/locales/en.json';
import fr from '@/i18n/locales/fr.json';
import nl from '@/i18n/locales/nl.json';

/**
 * Lightweight Tolgee instance for tests: inline static data loads synchronously
 * (no API / language detector), so components render immediately. Components also
 * rely on inline default values, so English text is present without awaiting.
 */
export const testTolgee = Tolgee()
    .use(FormatIcu())
    .init({
        availableLanguages: getAllLanguageCodes(),
        defaultLanguage: 'en',
        fallbackLanguage: 'en',
        staticData: { en, fr, nl },
    });
