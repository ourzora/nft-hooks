## @zoralabs/nft-hooks

Simple React hooks to load Zora NFT data. Includes on-chain data, NFT metadata, and tools for fetching NFT content if needed.

Put together, these power implementations of the zNFT protocol on any website.

This library consists of a data fetch class and associated React hooks to load NFT data is an easy, efficient manner. The API both batches and caches requests, meaning you can use the hooks across a page without needing to worry about significant performance penalties.

👯 See also: [@zoralabs/nft-components](https://github.com/ourzora/nft-components) a complimentary library to this one to render NFT data on a webpage.


Install:
```bash
yarn add @zoralabs/nft-hooks
```

Then you can import and use the hooks in your react application:

```ts
import {useZNFT, useNFTMetadata} from "@zoralabs/nft-hooks";

function MyNFT() {
  const {data} = useZNFT("20");
  const {metadata} = useNFTMetadata(data && data.metadataURI);
  
  return (
    <div>
      <h3>{metadata.title}</h3>
      <p>{metadata.description}</p>
      <p>Owned by: {data.owner.id}</p>
    </div>
  );
}
```

### All hooks:

| Hook | Usage |
| -- | -- |
| [useNFT](docs/useNFT.md) | Fetches on-chain NFT data using a configured backend strategy
| [useNFTQuery](docs/useNFTQuery.md) | Queries for NFTs using a configured backend strategy
| [useNFTMetadata](docs/useNFTMetadata.md) | Fetches off-chain metadata (not required for most indexers)
| [useNFTContent](docs/useNFTContent.md) | Fetches off-chain content (useful for some text content, but less often used)

### Configuration:

To set the network configuration, wrap the hooks used with the `NFTFetchConfiguration` component.

```ts
import {Networks, NFTFetchConfiguration, Strategies} from '@zoralabs/nft-hooks';

const zdkStrategy = Strategies.ZDKFetchStrategy();

function NFTGallery() {
  return (
    <NFTFetchConfiguration strategy={zdkStrategy} network={Networks.MAINNET}>
      <NFTList>
    </NFTFetchConfiguration>
  );
}
```

### Data sources:

Provided strategies are:
1. ZDKFetchStrategy from the zora indexer (recommended)
2. ZoraV2Indexer strategy from the legacy zora indexer (deprecated)
3. ZoraGraphStrategy strategy from the zora subgraph (not recommended)
4. EtherActorStrategy using ether.actor as a nft backend (not recommended)
5. OpenseaStrategy using opensea's api as a nft backend (not recommended)

Links direct to zora.co interfaces, but can be overridden to directly use the [zdk](https://github.com/ourzora/zdk) instead.

### Development:

1. `git clone https://github.com/ourzora/nft-hooks`
2. `cd nft-hooks`
3. `npm i -g yarn` if you don't have yarn installed
4. `yarn`
5. `yarn run test` test your code

Pull requests and tickets are accepted for issues and improvements
to this library.
