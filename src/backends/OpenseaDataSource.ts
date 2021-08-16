import DataLoader from 'dataloader';
import { NetworkIDs } from '../constants/networks';
import { OPENSEA_API_URL_BY_NETWORK } from '../constants/urls';
import { FetchWithTimeout } from '../fetcher/FetchWithTimeout';
import { OpenseaAsset, OpenseaInterface } from './OpenseaInterface';

type OpenseaDataResponse = {
  assets: OpenseaAsset[];
};

export class OpenseaDataSource implements OpenseaInterface {
  nftsLoader: DataLoader<string, OpenseaAsset | Error>;
  endpoint: string;
  timeout: number;
  MAX_OPENSEA_SIZE = 50;
  constructor(networkId: NetworkIDs, timeout = 10) {
    this.nftsLoader = new DataLoader(this.fetchNFTsOpensea, {
      maxBatchSize: this.MAX_OPENSEA_SIZE,
      batchScheduleFn: (cb: any) => setTimeout(cb, 1300),
    });
    this.endpoint = OPENSEA_API_URL_BY_NETWORK[networkId];
    this.timeout = timeout;
  }
  async loadNFT(tokenContract: string, tokenId: string): Promise<OpenseaAsset | Error> {
    return await this.nftsLoader.load(`${tokenContract}:${tokenId}`);
  }
  async loadNFTs(tokenContractAndId: string): Promise<(OpenseaAsset | Error)[]> {
    return await this.nftsLoader.loadMany(tokenContractAndId);
  }

  async fetchNFTsOpensea(
    nftAddressesAndTokens: readonly string[]
  ): Promise<(Error | OpenseaAsset)[]> {
    const urlParams: string[] = [];
    const nftTuples = nftAddressesAndTokens.map((address) =>
      address.toLowerCase().split(':')
    );
    nftTuples.forEach(([address, tokenId]) => {
      urlParams.push(`token_ids=${tokenId}&asset_contract_addresses=${address}`);
    });
    const response = await new FetchWithTimeout(this.timeout).fetch(
      `${this.endpoint}assets?${urlParams.join(
        '&'
      )}&order_direction=desc&offset=0&limit=${this.MAX_OPENSEA_SIZE}`
    );
    const responseJson = (await response.json()) as OpenseaDataResponse;

    return nftTuples.map(
      ([address, tokenId]: any) =>
        responseJson.assets.find(
          (asset) =>
            asset.token_id === tokenId &&
            asset.asset_contract.address.toLowerCase() === address
        ) || new Error('No asset')
    );
  }
}
