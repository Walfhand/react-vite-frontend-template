import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TolgeeProvider } from '@tolgee/react';
import { queryClient } from '@/lib/react-query';
import { createTolgee } from '@/lib/tolgee';

// Read-only Tolgee instance, created once at module load.
const tolgee = createTolgee();

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <TolgeeProvider tolgee={tolgee} fallback={null}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </TolgeeProvider>
        </QueryClientProvider>
    );
};
