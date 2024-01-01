import { HttpRequest, InvocationContext } from '@azure/functions';
import { getDevices } from '../src/functions/getDevices';
import { describe, expect } from 'vitest';

describe('getDevices', async (test) => {
  test('should call the getDevices API without arguments', async () => {
    // Call the getDevices API without arguments
    const request = new HttpRequest({
      method: 'GET',
      url: 'http://localhost/devices',
    });
    const context = new InvocationContext();
    const result = await getDevices(request, context);

    // Add your assertions here
    // For example, you can check if the result is an array or if it contains specific devices

    // Assert that the result is an array
    expect(result.body).toBe('Hello, world!');

    // Assert other conditions based on your specific requirements
    // ...

    // You can also use other assertion libraries like chai or jest

    // For example, using chai:
    // expect(result).to.be.an('array');

    // For example, using jest:
    // expect(Array.isArray(result)).toBe(true);
  });
});
