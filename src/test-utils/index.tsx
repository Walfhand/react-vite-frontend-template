import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as rtlRender } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import { TolgeeProvider } from '@tolgee/react';
import { testTolgee } from './tolgee';

/**
 * Generate a QueryClient for testing with retries disabled
 * Retries take a while and can cause test timeouts
 */
const generateQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: 1000 * 60 * 5,
                gcTime: 1000 * 60 * 30,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: false,
            },
        },
    });
};

/**
 * FOR TESTING CUSTOM HOOKS (use sparingly!)
 *
 * React Testing Library philosophy: Test user interactions, not implementation details
 * Only use this for complex reusable hooks with no UI component
 *
 * Prefer testing hooks through components instead
 *
 * Reference: https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
 */
export const createQueryClientWrapper = () => {
    const queryClient = generateQueryClient();
    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>
            <TolgeeProvider tolgee={testTolgee} fallback={null}>
                {children}
            </TolgeeProvider>
        </QueryClientProvider>
    );
};

/**
 * Custom render function that wraps components with all necessary providers
 *
 * Usage:
 * ```tsx
 * import { render, screen } from '@/test-utils';
 *
 * test('displays user name', async () => {
 *   render(<UserProfile />);
 *   expect(await screen.findByText(/john doe/i)).toBeInTheDocument();
 * });
 * ```
 *
 * Reference: https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
function customRender(ui: ReactElement, client?: QueryClient) {
    const queryClient = client ?? generateQueryClient();

    return rtlRender(
        <QueryClientProvider client={queryClient}>
            <TolgeeProvider tolgee={testTolgee} fallback={null}>
                <MemoryRouter>{ui}</MemoryRouter>
            </TolgeeProvider>
        </QueryClientProvider>
    );
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Override the default render with our custom render
export { customRender as render };
