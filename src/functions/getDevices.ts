import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';

import * as iothub from 'azure-iothub';
import { DeviceInfo } from '../types/devices';

export async function getDevices(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(
    `Http function processed request for url "${request.url} ${request.method} ${request.query}"`
  );

  const connectionString = process.env.IOTHUB_CONNECTION_STRING;

  if (connectionString) {
    const registry = iothub.Registry.fromConnectionString(connectionString);
    context.log('**listing devices...');
    const listOfDevices: DeviceInfo[] = [];
    const deviceList = await registry.list();
    deviceList.responseBody.forEach(function (device) {
      const key =
        (device.authentication
          ? device.authentication?.symmetricKey?.primaryKey
          : '<no primary key>') || '<no key found>';
      listOfDevices.push({
        deviceId: device.deviceId,
        connectionState: device.connectionState || 'unknown',
        status: device.status || 'unknown',
        lastActivityTime: device.lastActivityTime || 'unknown',
        iotEdge: device.capabilities?.iotEdge || false,
        key: request.query.has('include', 'key') ? key : undefined,
      });
    });
    context.log(JSON.stringify(listOfDevices));
    return { jsonBody: { devices: listOfDevices } };
  } else {
    return {
      status: 500,
      jsonBody: { error: 'No connection string found' },
    };
  }
}

app.http('getDevices', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'devices',
  handler: getDevices,
});
