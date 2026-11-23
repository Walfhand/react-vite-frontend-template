type RuntimeConfig = Record<string, string | undefined>;

declare global {
    interface Window {
        __APP_CONFIG__?: RuntimeConfig;
    }
}

const runtimeConfig: RuntimeConfig =
    typeof window !== 'undefined' ? window.__APP_CONFIG__ ?? {} : {};

const getConfigVar = (
    key: string,
    fallbackKeys: string[] = [],
    defaultValue?: string
): string => {
    const candidates = [
        runtimeConfig[key],
        import.meta.env[key],
        ...fallbackKeys.map((fallbackKey) => import.meta.env[fallbackKey]),
    ];
    const value =
        candidates.find((candidate) => candidate !== undefined && candidate !== '') ??
        defaultValue;

    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

export const env = {
    API_URL: getConfigVar(
        'APP_API_URL',
        ['VITE_API_URL'],
        'http://localhost:8080/api/v1'
    ),
    // Tolgee platform URL + read-only API key. Used to read translations live
    // from the Tolgee REST API in development; production builds use the bundled
    // static data, so these can be left empty.
    TOLGEE_API_URL: getConfigVar('VITE_TOLGEE_API_URL', [], ''),
    TOLGEE_API_KEY: getConfigVar('VITE_TOLGEE_API_KEY', [], ''),
    MODE: import.meta.env.MODE,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
} as const;
