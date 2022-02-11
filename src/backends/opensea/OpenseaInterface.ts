import { NFTInterface } from "../NFTInterface";

type NullableString = string | null;

export type OpenseaAsset = {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: NullableString;
  image_url: NullableString;
  image_preview_url: NullableString;
  image_thumbnail_url: NullableString;
  image_original_url: NullableString;
  animation_url: NullableString;
  animation_original_url: NullableString;
  name: NullableString;
  description: NullableString;
  external_link: NullableString;
  asset_contract: AssetContract;
  permalink: NullableString;
  collection: Collection;
  decimals: number;
  token_metadata: NullableString;
  owner: TokenUser;
  creator: TokenUser;
  traits: any[];
  is_presale: boolean;
};

type AssetContract = {
  address: string;
  asset_contract_type: string;
  created_date: Date;
  name: NullableString;
  nft_version: string;
  owner: number;
  schema_name: string;
  symbol: NullableString;
  total_supply: NullableString;
  description: NullableString;
  external_link: NullableString;
  image_url: NullableString;
};

type Collection = {
  banner_image_url: NullableString;
  created_date: Date;
  default_to_fiat: boolean;
  description: NullableString;
  external_url: NullableString;
  hidden: boolean;
  image_url: NullableString;
  large_image_url: NullableString;
  name: string;
  only_proxied_transfers: boolean;
  short_description: NullableString;
  slug: NullableString;
};

type TokenUser = {
  user: {
    username: NullableString;
  } | null;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface OpenseaInterface extends NFTInterface<OpenseaAsset> {
}
