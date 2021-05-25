## @zoralabs/nft-hooks

Simple React hooks to load Zora NFT data. Includes on-chain data, NFT metadata, and tools for fetching NFT content if needed.

Put together, these power implementations of the zNFT protocol on any website.

This library consists of a data fetch class and associated React hooks to load NFT data is an easy, efficient manner. The API both batches and caches requests, meaning you can use the hooks across a page without needing to worry about significant performance penalties.


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
| [useZNFT](docs/useZNFT.md) | Fetches on-chain zNFT data |
| *useNFT* | Fetches on-chain NFT data for any ERC721 (coming soon) |
| [useNFTMetadata](docs/useNFTMetadata.md) | Fetches NFT metadata from a URL |
| [useNFTContent](docs/useNFTContent.md) | Fetches text content from server for rendering from content URL |

### Configuration:

To set the network configuration, wrap the hooks used with the `NFTFetchConfiguration` component.

```ts
import {Networks, NFTFetchConfiguration} from '@zoralabs/nft-hooks';

function NFTGallery() {
  return (
    <NFTFetchConfiguration network={Networks.MAINNET}>
      <NFTList>
    </NFTFetchConfiguration>
  );
}
```

### Development:

1. `git clone https://github.com/ourzora/nft-hooks`
2. `cd nft-hooks`
3. `npm i -g yarn` if you don't have yarn installed
4. `yarn`
5. `yarn run test` test your code

Pull requests and tickets are accepted for issues and improvements
to this library.