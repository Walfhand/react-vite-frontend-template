/**
 * Test Setup Configuration
 *
 * This file is automatically loaded before each test file
 * Configured in vite.config.ts under test.setupFiles
 */

import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// MSW server for API mocking
import { server } from './mocks/server';

// Shared Tolgee test instance — load its static data once so translated text is
// available synchronously in every test render (no per-test async waiting).
import { testTolgee } from './test-utils/tolgee';

// Extend Vitest's expect with jest-dom matchers
// This enables assertions like expect(element).toBeInTheDocument()
expect.extend(matchers);

// MSW lifecycle hooks
// Reference: https://mswjs.io/docs/getting-started

// Establish API mocking before all tests
beforeAll(async () => {
    server.listen();
    await testTolgee.run();
});

// Reset any request handlers that we may add during tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after all tests are finished
afterAll(() => server.close());
