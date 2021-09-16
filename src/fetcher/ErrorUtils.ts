import type { Revalidator, RevalidatorOptions } from 'swr';

export class NotFoundError extends Error {}

export const onErrorRetry = (
  err: Error,
  _: any,
  __: any,
  revalidate: Revalidator,
  revalidateOpts: RevalidatorOptions
) => {
  if (err instanceof NotFoundError) {
    return;
  }
  // Retry with error other than not found
  revalidate(revalidateOpts);
};
