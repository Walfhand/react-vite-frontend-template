import { useQuery } from '@tanstack/react-query';
import { exampleKeys } from '../api-keys';
import type { Item } from '../types/example.types';

/* --- MOCK DATA --- */

const mockItems: Item[] = [
    {
        id: '1',
        title: 'Example Item 1',
        description: 'This demonstrates the feature architecture',
    },
    {
        id: '2',
        title: 'Example Item 2',
        description: 'Each feature is self-contained and isolated',
    },
    {
        id: '3',
        title: 'Example Item 3',
        description: 'Components call their own React Query hooks',
    },
];

/* --- FETCHER --- */

const getItems = async (): Promise<Item[]> => {
    // TODO: Replace with real API call when backend is ready
    // const { data } = await api.get<Item[]>('/items');
    // return data;

    // Mock data for template demo
    return Promise.resolve(mockItems);
};

/* --- HOOK --- */

export const useItems = () => {
    return useQuery({
        queryKey: exampleKeys.list(),
        queryFn: getItems,
    });
};
