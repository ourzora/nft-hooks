import DataLoader from 'dataloader';
import { ZORA_USERNAME_API_URL } from '../../constants/urls';
import { FetchWithTimeout } from '../../fetcher/FetchWithTimeout';
import { UsernameResponseType, ZoraUserInterface } from './ZoraUserInterface';

export class ZoraUserDataSource implements ZoraUserInterface {
  userLoader: DataLoader<string, UsernameResponseType>;
  timeout: number;
  constructor(timeout = 4) {
    this.userLoader = new DataLoader(this.fetchZoraUsers);
    this.timeout = timeout;
  }
  loadProfile = async (address: string): Promise<UsernameResponseType | Error> => {
    return await this.userLoader.load(address.toLowerCase());
  };
  loadProfiles = async (
    addresses: readonly string[]
  ): Promise<(UsernameResponseType | Error)[]> => {
    return await this.userLoader.loadMany(
      addresses.map((address: string) => address.toLowerCase())
    );
  };

  fetchZoraUsers = async (addresses: readonly string[]) => {
    const fetchWithTimeout = new FetchWithTimeout(this.timeout);
    const response = await fetchWithTimeout.fetch(ZORA_USERNAME_API_URL, {
      method: 'POST',
      type: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
    const usernames = (await response.json()) as UsernameResponseType[];
    return addresses.map((address: string) => {
      return usernames.find((user) => user.address === address) || { address };
    });
  };
}
