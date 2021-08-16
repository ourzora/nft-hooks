export type UsernameResponseType = {
  address: string;
  bio?: string;
  name?: string;
  username?: string;
  verified?: boolean;
  website?: string;
};

export interface ZoraUserInterface {
  loadProfile(address: string): Promise<UsernameResponseType | Error>;
  loadProfiles(addresses: string[]): Promise<(Error | UsernameResponseType)[]>;
}
