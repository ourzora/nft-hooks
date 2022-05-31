/**
 * This removes undefined values to sanitize
 * data objects to work with nextJS server-side
 * page props.
 *
 * @param json Object to sanitize for JSON fields
 * @returns JSON-safe object
 */
 export function prepareJson<T>(json: T): T {
  return JSON.parse(JSON.stringify(json));
}