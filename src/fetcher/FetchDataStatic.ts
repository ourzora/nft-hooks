import { MediaFetchAgent } from "@zoralabs/nft-hooks";

type fetchNFTDataProps = {
  tokenId: string;
  contractAddress?: string;
  fetchAgent: MediaFetchAgent
};

export const fetchNFTData = ({
  tokenId,
  contractAddress,
  fetchAgent,
}: fetchNFTDataProps) => {
    if (contractAddress === CONTRACT)
    fetchAgent.loadNFTData
};
