/* The private ask hook will need to create an Ask (address seller, address buyer, uint96 price)
   Private ask may also need to have the contract address for the contract that an ask is being created for 
   Private ask will need to be able to handle 4 primary functions:
   - createAsk (address _tokenContract, uint256 _tokenId, uint256 _price, address _buyer) -> creates an ask for a given NFT
   - setAskPrice (address _tokenContract, uint256 _tokenId, uint256 _price) -> updates the ask price for a given NFT
   - cancelAsk (address _tokenContract, uint256 _tokenId) -> cancels the ask for a given NFT 
   - fillAsk (address _tokenContract, uint256 _tokenId) -> fills the ask for a given NFT
*/

import { useContext } from 'react';

import { NFTFetchContext } from '../context/NFTFetchContext';
import { InputMaybe, Scalars } from '@zoralabs/zdk-alpha/dist/queries/queries-sdk';

const asksPrivateEthAddr = "0x251A5B6D0563f602e469176240E4Db8CA765C4d1"

interface AskMetadata {
    seller: InputMaybe<Scalars['String']>
    buyer: InputMaybe<Scalars['String']>
    price: InputMaybe<Scalars['Float']>

}

export function usePrivateAsk(
    contractAddress?: string,
    tokenId?: string,
    askMetadata: AskMetadata, // create a type for this shortly (address, address, uint96)
) {
    const dataContext = useContext(NFTFetchContext)


}