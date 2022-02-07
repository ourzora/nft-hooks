import { NftMediaFullDataFragment } from "../graph-queries/zora-graph-types";
import { NFTInterface } from "./NFTInterface";


export type ZoraGraphDataResponse = {
  metadata: any,
  asset: NftMediaFullDataFragment,
}

export interface ZoraGraphDataInterface extends NFTInterface<ZoraGraphDataResponse> {
}
