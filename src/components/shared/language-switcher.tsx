import { useTolgee } from '@tolgee/react';
import { SUPPORTED_LANGUAGES } from '@/config/languages';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
    className?: string;
};

/**
 * Minimal language switcher. Language choice is persisted by Tolgee's
 * LanguageStorage plugin, so no page reload is needed. Swap the native
 * <select> for your design system's dropdown when you wire this up.
 */
export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const tolgee = useTolgee(['language']);

    return (
        <select
            aria-label="Change language"
            value={tolgee.getLanguage()}
            onChange={(event) => tolgee.changeLanguage(event.target.value)}
            className={cn(
                'rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700',
                className
            )}
        >
            {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>
                    {language.label}
                </option>
            ))}
        </select>
    );
};
