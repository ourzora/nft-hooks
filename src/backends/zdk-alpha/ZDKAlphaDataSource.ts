import { NetworkIDs, NFTObject } from '../../';
import { FullTokenMarketResponse, ZDKAlphaDataInterface } from './ZDKAlphaDataInterface';
import { ZDK } from '@zoralabs/zdk-alpha/dist/src/index';
import { Chain, Network } from '@zoralabs/zdk-alpha/dist/src/queries/queries-sdk';

function getChainFromNetwork(network: NetworkIDs) {
  switch (network) {
    case '1':
      return Chain.Mainnet;
    case '3':
      return Chain.Ropsten;
    case '4':
      return Chain.Rinkeby;
    default:
      return Chain.Mainnet;
  }
}
export class ZDKAlphaDataSource implements ZDKAlphaDataInterface {
  zdk: ZDK;

  constructor(chainId: NetworkIDs, endpoint: string) {
    this.zdk = new ZDK(endpoint, Network.Ethereum, getChainFromNetwork(chainId));
  }

  canLoadNFT(_: string, __: string) {
    return true;
  }

  transformNFT(tokenMarket: FullTokenMarketResponse, object: NFTObject) {
    // TODO(iain): Integrate markets
    const { token } = tokenMarket;
    object.nft = {
      tokenId: token.tokenId,
      contract: {
        address: token.collectionAddress,
        name: token.tokenContract.name,
        description: null,
        symbol: token.tokenContract.symbol,
      },
      minted: {
        minter: token.minter || undefined,
        at: {
          timestamp: new Date(token.mintInfo!.blockTimestamp).getTime() / 1000,
          blockNumber: token.mintInfo!.blockNumber,
          transactionHash: token.mintInfo!.transactionHash,
        },
      },
      owner: token.owner,
      metadataURI: token.tokenUrl,
      contentURI: token.content?.url || null,
    };
    object.metadata = token.metadata as any;
    object.media = {
      image: token.image?.url
        ? {
            mime: token.image.mimeType || undefined,
            uri: token.image.url,
          }
        : null,
      content: token.content?.url
        ? {
            mime: token.content.mimeType || undefined,
            uri: token.content.url,
          }
        : null,
      thumbnail: null,
      source: 'zora',
    };

    if (!object.rawData) {
      object.rawData = {};
    }
    object.rawData['indexer'] = token;
    return object;
  }

  loadNFT = async (
    tokenContract: string,
    tokenId: string
  ): Promise<FullTokenMarketResponse | Error> => {
    const response = await this.zdk.tokenMarkets({
      isFull: true,
      query: {
        tokenInputs: [{ tokenId, address: tokenContract }],
      },
    });
    return response.tokenMarkets.nodes.length > 0
      ? (response.tokenMarkets.nodes[0] as any)
      : new Error('No token');
  };

  loadNFTs(
    tokenContractAndIds: readonly string[]
  ): Promise<(FullTokenMarketResponse | Error)[]> {
    return Promise.all(
      tokenContractAndIds.map((tokenContractAndId) => {
        const [tokenContract, tokenId] = tokenContractAndId.split(':');
        return this.loadNFT(tokenContract, tokenId);
      })
    );
  }
}
