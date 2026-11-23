import { useTranslate } from '@tolgee/react';

export const Component = () => {
    const { t } = useTranslate();

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    {t('home.title', 'Welcome to Your App')}
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    {t('home.subtitle', 'A modern React template with best practices built in.')}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    {t('home.hint', 'Check out the Example page to see the feature architecture in action.')}
                </p>
            </div>
        </div>
    );
};
