This hook makes a request to fetch metadata from IPFS retrieved from the zNFT `metadataURI`.

Most IPFS servers allow remote JSON fetches, including all Zora NFTs.
There is a chance this request could fail when the server does not allow cross-origin requests.
Requests are set with a 15 second timeout to allow showing the user an error message instead of an 
indefinite loader.

Hook result type:
```ts
// This is a union type meaning one or another in typescript.
// Use the (media.type) to determine which type was returned from the hook.
type MediaContentType =
  | {
      uri: string; // URI of content to render, used for media
      type: 'uri', // Shows that no content was downloaded, should only render
      mimeType: string // mime type string from metadata for rendering
    }
  | {
      text: string; // Text of result
      type: 'text', // Shows that text content to render was downloaded
      mimeType: string // mime type string from metadata for rendering
    };

type useNFTContentType = {
  loading: boolean; // If loading from the server
  error?: string; // Error returned from network request error or timeout
  content?: MediaContentType; // MediaConetentType shown above;
}
```

To use the hook, simply pass in the `contentURI` from the zNFT on-chain data and `mimeType` from the NFT Metadata.

If you do not have access to `mimeType` from the metadata or do not wish to retrieve the metadata, the `mimeType` can be omitted with a small performance impact.

Content returned from this hook is _not_ cached, each time the hook is used the content is fetched.

```ts
import {useNFTContent} from "@zoralabs/nft-hooks";

const MyMediaData = ({uri: string, mimeType: string}) => {
    const {error, loading, metadata} = useNFTContent(uri, mimeType);

    if (error) {
        return <div>Error fetching content</div>;
    }

    if (loading) {
        return <div>loading...</div>;
    }

    if (content.type === 'text') {
        return <div>{content.text}</div>;
    }
    if (content.mimeType.startsWith("audio")) {
        return <audio src={content.uri} />;
    }
    if (content.mimeType.startsWith("video")) {
        return <video src={content.uri} />;
    }
    if (content.mimeType.startsWith("image")) {
        return <img src={content.uri} />;
    }
    return <div>unknown: {content.mimeType}</div>;
}
```


Alternatively, the same information can be fetched using the base `MediaFetchAgent` for server-side or non-react use:
```ts
import {MediaFetchAgent} from "@zoralabs/nft-hooks";

// Get result from the server
const result = await MediaFetchAgent.fetchContent("https://ipfs.io/ipfs/METADATA_HASH", "application/json");
// result type is MediaContentType
```