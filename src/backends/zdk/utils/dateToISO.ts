export function dateToISO(date: string) {
  if (!date.endsWith('Z')) {
    date += 'Z';
  }

  return new Date(date).toISOString();
}
