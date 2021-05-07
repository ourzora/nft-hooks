This hook makes a request to fetch metadata from IPFS retrieved from the zNFT `metadataURI`.

Most IPFS servers allow remote JSON fetches, including all Zora NFTs.
There is a chance this request could fail when the server does not allow cross-origin requests.
Requests are set with a 10 second timeout to allow showing the user an error message instead of an 
indefinite loader.
Metadata information can be found in the [zora metadata schema repo](https://github.com/ourzora/media-metadata-schemas).

Hook result type:
```ts
type useNFTMetadataType = {
  error?: string; // Error: can be thrown from invalid json, unparsable json, network request failure, network request timeout
  loading?: boolean; // Easy indicator to determine if the NFT metadata is loading. Same as (!metadata && !error).
  metadata?: any; // Raw, validated zora metadata. A error will be thrown if the metadata does not validate.
};
```

To use the hook, simply pass in the URL to fetch:

```ts
import { useNFTMetadata } from "@zoralabs/nft-hooks";

const MediaDataDisplay = ({ uri: string }) => {
  const { error, metadata } = useNFTMetadata(uri);

  if (metadata) {
    if (metadata.version === "catalog-20210202") {
      return (
        <div>
          <h2>
            Song: {metadata.body.title} Artist: {metadata.body.artist}
          </h2>
          {metadata.body.notes && <p>{metadata.body.notes}</p>}
        </div>
      );
    }
    // If not a catalog NFT, can render the metadata title and description fields
    //  from the first zNFT metadata standard.
    return (
      <div>
        <h2>{metadata.title}</h2>
        <p>{metadata.description}</p>
      </div>
    );
  }
  if (error) {
    return <div>Error loading metadata</div>;
  }
  return <div>metadata loading...</div>;
};
```


Alternatively, the same information can be fetched using the base MediaFetchAgentfor server-side or non-react use:
```ts
import {MediaFetchAgent, Networks} from "@zoralabs/nft-hooks";

// Be careful making multiple instances of the fetch agent
// Each instance contains a different request cache.
const fetchAgent = new MediaFetchAgent(Networks.MAINNET);

// Get result from the server
const result = await fetchAgent.loadMetadata("https://ipfs.io/ipfs/METADATA_HASH");
// result type is {metadata, valid}
```