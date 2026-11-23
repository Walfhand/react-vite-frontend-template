import { Link, useLocation } from 'react-router';
import { useTranslate } from '@tolgee/react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/shared/language-switcher';

const navLinks = [
    { to: '/', labelKey: 'nav.home', label: 'Home' },
    { to: '/example', labelKey: 'nav.example', label: 'Example' },
];

export const Nav = () => {
    const location = useLocation();
    const { t } = useTranslate();

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="text-xl font-bold">
                            {t('common.brand', 'MyApp')}
                        </div>
                        <div className="flex gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={cn(
                                        'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                                        location.pathname === link.to
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    )}
                                >
                                    {t(link.labelKey, link.label)}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
};
