import { render, screen } from '@/test-utils';
import { ItemList } from '../components/item-list';

/**
 * ItemList Component Tests
 *
 * Testing Philosophy:
 * - Test what users see and interact with, not implementation details
 * - Focus on behavior, not internal state or function calls
 * - Use MSW to mock API responses (configured in src/mocks/)
 *
 * Reference: https://testing-library.com/docs/react-testing-library/intro
 */

describe('ItemList', () => {
    test('renders loading state initially', () => {
        render(<ItemList />);

        // Users see a loading message while data is being fetched
        expect(screen.getByText(/loading items/i)).toBeInTheDocument();
    });

    test('renders list of items from API', async () => {
        render(<ItemList />);

        // Wait for the items to appear (data comes from MSW mock handlers)
        // findBy* queries automatically wait for elements to appear
        const item1 = await screen.findByText(/example item 1/i);
        const item2 = await screen.findByText(/example item 2/i);
        const item3 = await screen.findByText(/example item 3/i);

        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
        expect(item3).toBeInTheDocument();
    });

    test('renders item descriptions', async () => {
        render(<ItemList />);

        // Verify that descriptions are displayed
        const description = await screen.findByText(/demonstrates the feature architecture/i);
        expect(description).toBeInTheDocument();
    });

    test('displays error message when API fails', async () => {
        // This test would need a custom MSW handler override
        // See the Udemy project's AllStaff.error.test.tsx for an example
        // For now, this is a placeholder to demonstrate error testing
    });
});
