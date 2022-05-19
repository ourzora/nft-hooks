import { SWRConfig } from 'swr';

export const NoSWRCache = ({ children }: { children: any }) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
);
