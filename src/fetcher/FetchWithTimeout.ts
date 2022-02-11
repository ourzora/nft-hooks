import fetch from 'cross-fetch';
import AbortController from 'node-abort-controller';

import { RequestError } from './RequestError';

/**
 * Simple Fetch wrapper that enables a timeout.
 * Allows for showing an error state for slow-to-load IPFS files
 */
export class FetchWithTimeout {
  controller: AbortController;
  expectedContentType?: string;
  timeoutDuration: number;

  constructor(timeoutDuration = 5000, contentType: string | undefined = undefined) {
    this.controller = new AbortController();
    this.expectedContentType = contentType;
    this.timeoutDuration = timeoutDuration;
    // Bind context to class
    this.fetch = this.fetch.bind(this);
  }
  async fetch(url: string, options: any = {}) {
    console.log({ url });
    const controller = this.controller;
    const response = await fetch(url, {
      ...options,
      signal: this.controller.signal,
    });
    setTimeout(() => controller.abort(), this.timeoutDuration);
    if (response.status !== 200) {
      throw new RequestError(`Request Status = ${response.status}`);
    }
    if (
      this.expectedContentType &&
      !response.headers.get('content-type')?.startsWith(this.expectedContentType)
    ) {
      throw new RequestError('Reponse Content Type incorrect');
    }
    return response;
  }
}
