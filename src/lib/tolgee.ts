import {
    Tolgee,
    DevTools,
    LanguageDetector,
    LanguageStorage,
    type TolgeeInstance,
} from '@tolgee/react';
import { FormatIcu } from '@tolgee/format-icu';
import { DEFAULT_LANGUAGE, getAllLanguageCodes } from '@/config/languages';
import { env } from '@/config/env';

/**
 * Build the read-only Tolgee instance.
 *
 * Translations are managed in the Tolgee web UI — app users never edit them
 * in-context. In development the SDK reads translations live from the Tolgee
 * REST API (apiUrl + a read-only API key); production builds drop DevTools and
 * serve the bundled `staticData` (export with `npm run tolgee:pull` before
 * building). Leave the env vars empty to run on the static bundles only.
 */
export function createTolgee(): TolgeeInstance {
    return Tolgee()
        .use(DevTools())
        .use(FormatIcu())
        .use(LanguageDetector())
        .use(LanguageStorage())
        .init({
            availableLanguages: getAllLanguageCodes(),
            defaultLanguage: DEFAULT_LANGUAGE,
            fallbackLanguage: DEFAULT_LANGUAGE,
            apiUrl: env.TOLGEE_API_URL || undefined,
            apiKey: env.TOLGEE_API_KEY || undefined,
            staticData: {
                en: () => import('@/i18n/locales/en.json'),
                fr: () => import('@/i18n/locales/fr.json'),
                nl: () => import('@/i18n/locales/nl.json'),
            },
        });
}
