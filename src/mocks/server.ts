import { setupServer } from 'msw/node';
import { handlers } from './handlers';

/**
 * Mock Service Worker (MSW) Server Configuration
 *
 * This configures a request mocking server with the given request handlers.
 * MSW intercepts network requests during tests and returns mock responses.
 *
 * Reference: https://mswjs.io/docs/getting-started
 */
export const server = setupServer(...handlers);
