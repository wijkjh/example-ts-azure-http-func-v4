/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    reporters: ['verbose', 'junit'],
    outputFile: {
      junit: 'test_results.xml',
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
});
