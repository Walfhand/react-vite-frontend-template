/**
 * Central language configuration.
 * Single source of truth for every language the app supports.
 *
 * To add a language:
 * 1. Add an entry to SUPPORTED_LANGUAGES below.
 * 2. Add a matching locale bundle in src/i18n/locales/<code>.json.
 * 3. Add the language to the Tolgee project and translate the keys there.
 */

export const SUPPORTED_LANGUAGES = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'nl', label: 'NL', name: 'Nederlands' },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: SupportedLanguageCode = 'en';

/** All language codes, e.g. ['en', 'fr', 'nl'] — used to configure Tolgee. */
export const getAllLanguageCodes = (): SupportedLanguageCode[] =>
    SUPPORTED_LANGUAGES.map((language) => language.code);
