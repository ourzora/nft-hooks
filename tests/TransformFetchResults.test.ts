import {
  transformCurrencyForKey,
  transformCurrencyEth,
} from '../src/fetcher/TransformFetchResults';

describe('TransformFetchResults', () => {
  describe('transformCurrencyForKey', () => {
    it('handles eth edge case', () => {
      const testResult = {
        bundle: {
          ethPrice: '2000',
        },
        tokens: [],
      };
      expect(
        transformCurrencyForKey(testResult, '0x0000000000000000000000000000000000000000')
      ).toMatchInlineSnapshot(`
              Object {
                "ethToUsd": "2000",
                "token": Object {
                  "decimals": 18,
                  "derivedETH": 1,
                  "id": "0x0000000000000000000000000000000000000000",
                  "name": "Ethereum",
                  "symbol": "ETH",
                },
              }
          `);
    });
    it('converts DAI results', () => {
      const testResult = {
        bundle: {
          ethPrice: '2000',
        },
        tokens: [
          {
            symbol: 'DAI',
            id: '0x6b175474e89094c44da98b954eedeac495271d0f',
            name: 'DAI',
            decimals: 18,
            derivedEth: '0.001',
          },
          {
            symbol: 'IGNORE',
            id: '0x92345474e89094c44da98b954eedeac495273344',
            name: 'IGNORE',
            decimals: 18,
            derivedEth: '0.1',
          },
        ],
      };
      expect(
        transformCurrencyForKey(testResult, '0x6b175474e89094c44da98b954eedeac495271d0f')
      ).toMatchInlineSnapshot(`
        Object {
          "ethToUsd": "2000",
          "token": Object {
            "decimals": 18,
            "derivedEth": "0.001",
            "id": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "name": "DAI",
            "symbol": "DAI",
          },
        }
      `);
    });
  });
  describe('transformCurrencyEth', () => {
    it('adds in eth information when null currency', () => {
      expect(
        transformCurrencyEth({
          id: '0x0000000000000000000000000000000000000000',
          symbol: '',
          name: '',
          decimals: null,
        })
      ).toMatchInlineSnapshot(`
        Object {
          "decimals": 18,
          "id": "0x0000000000000000000000000000000000000000",
          "name": "Ethereum",
          "symbol": "ETH",
        }
      `);
    });
    it('does not modify other null currency information', () => {
      expect(
        transformCurrencyEth({
          symbol: 'IGNORE',
          id: '0x92345474e89094c44da98b954eedeac495273344',
          name: 'IGNORE',
          decimals: 18,
        })
      ).toMatchInlineSnapshot(`
        Object {
          "decimals": 18,
          "id": "0x92345474e89094c44da98b954eedeac495273344",
          "name": "IGNORE",
          "symbol": "IGNORE",
        }
      `);
    });
  });
});
