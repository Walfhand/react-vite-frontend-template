/**
 * Mock Data for Tests
 *
 * Centralized location for mock API responses
 * Add your mock data here as your application grows
 */

export interface MockItem {
    id: string;
    title: string;
    description: string;
}

export const mockItems: MockItem[] = [
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

// Add more mock data as needed for different features
// Example:
// export const mockUsers = [...]
// export const mockProducts = [...]
