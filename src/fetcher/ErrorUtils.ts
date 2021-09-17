import type { Revalidator, RevalidatorOptions } from 'swr';

export class NotFoundError extends Error {}
export class ArgumentsError extends Error {}

export const onErrorRetry = (
  err: Error,
  _: any,
  __: any,
  revalidate: Revalidator,
  revalidateOpts: RevalidatorOptions
) => {
  console.log('onErrorRetry called')
  console.log(revalidateOpts);
  if (err instanceof NotFoundError) {
    // Don't retry for 404 records
    return;
  }
  if (err instanceof ArgumentsError) {
    // Don't retry for invalid arguments
    return;
  }
  if (revalidateOpts.retryCount || 5 < 4) {
    // Retry with error other than not found
    revalidate(revalidateOpts);
  }
};
