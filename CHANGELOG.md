# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [0.7.2] - 2021-11-04
- Add ability to search owned NFTs for all collections
- Add ability to show curated NFTs for all collectionsk

## [0.7.1] - 2021-10-29
- Fix Zora API uris with ipfs:// base

## [0.7.0] - 2021-10-27
* [breaking] address arguments for indexer query is now a list (collectionAddresses) instead of a single address
* Updated query for indexer homepage StaticQuery to use more performant query
* StaticQuery now better handles multiple conditions for onlyAuction etc (see typescript definitions)
* Hooks now exist for fetching ENS data
* Types for indexer/graph are now seperated and better defined from the graphql query type generation tool
* Custom retry and error reporting logic was added in to the `useNFTIndexer` hook.
* Added approval logic flag to indexer queries

## [0.1.0] - 2021-05-07

### RC0 Public Release

* Initial public RC release
* Added base 3 hooks to interact with individual NFTs
* Supports Zora auction contracts and zNFTs for the time being
* Normalizes and fetches currency information from Uniswap
* Uses batching and caching for repeatable data requests
* Loads NFT Metadata and Content for each record
