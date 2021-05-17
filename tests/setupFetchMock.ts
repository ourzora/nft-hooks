import { FetchMockSandbox } from 'fetch-mock';
import crossFetch from 'cross-fetch';

jest.mock('cross-fetch', () => require('fetch-mock-jest').sandbox());

const fetchMock = crossFetch as FetchMockSandbox;

export function getLastGraphQuery(url: string) {
  // @ts-ignore
  const requestBody = fetchMock.lastCall(url)[1].body as string;
  return JSON.parse(requestBody);
}

export default fetchMock;
