import useSWR from 'swr';

export function useFetchQuery(fetchMethod: any, queryArgs: any, options: any) {
  return useSWR(JSON.stringify(queryArgs), (queryArgs) =>
    fetchMethod(...JSON.parse(queryArgs), options)
  );
}
