export function dateToISO(date: string) {
  // Force TZ from server to be GMT
  if (!date.endsWith('Z') && !date.includes('+')) {
    date += 'Z';
  }

  return new Date(date).toISOString();
}
