import { NftMediaFullDataFragment } from './zora-graph-types';
import { NFTInterface } from '../../types/NFTInterface';

export type ZoraGraphDataResponse = {
  metadata: any;
  asset: NftMediaFullDataFragment;
};

export type FetchGroupTypes = 'id' | 'creator' | 'owner';

export type ZoraFetchQueryType = 'creator' | 'owner' | 'creator' | 'collection';

export interface ZoraGraphDataInterface extends NFTInterface<ZoraGraphDataResponse> {}
