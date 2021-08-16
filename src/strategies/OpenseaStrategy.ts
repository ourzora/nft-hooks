import { CurrencyDataSourceUniswap } from "src/backends/CurrencyDataSourceUniswap";
import { GraphAuctionDataSource } from "src/backends/GraphAuctionDataSource";
import { GraphAuctionInterface } from "src/backends/GraphAuctionInterface";
import { OpenseaDataSource } from "src/backends/OpenseaDataSource";
import { OpenseaInterface } from "src/backends/OpenseaInterface";
import { NetworkIDs } from "src/constants/networks";

export class StrategyBuilder {
	openseaBackend: OpenseaInterface;
	currencyFetchBackend:CurrencyDataSourceUniswap;
	auctionBackend: GraphAuctionInterface;
	constructor(networkId: NetworkIDs) {
		this.openseaBackend = new OpenseaDataSource(networkId);
		this.currencyFetchBackend = new CurrencyDataSourceUniswap(networkId);
		this.auctionBackend = new GraphAuctionDataSource(networkId);
	}

}