import { http, HttpResponse } from 'msw';
import { mockItems } from './mock-data';

/**
 * MSW Request Handlers
 *
 * Define mock API endpoints here. Each handler intercepts a specific request
 * and returns a mock response for testing.
 *
 * Add handlers for your API endpoints as your application grows.
 *
 * Reference: https://mswjs.io/docs/basics/request-handler
 */

const API_URL = 'http://localhost:8000/api';

export const handlers = [
    // Example: GET /api/items
    http.get(`${API_URL}/items`, () => {
        return HttpResponse.json(mockItems);
    }),

    // Example: GET /api/items/:id
    http.get(`${API_URL}/items/:id`, ({ params }) => {
        const { id } = params;
        const item = mockItems.find((item) => item.id === id);

        if (!item) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(item);
    }),

    // Example: POST /api/items
    http.post(`${API_URL}/items`, async ({ request }) => {
        const newItem = await request.json();
        return HttpResponse.json(newItem, { status: 201 });
    }),

    // Add more handlers as needed for your application's API endpoints
];
