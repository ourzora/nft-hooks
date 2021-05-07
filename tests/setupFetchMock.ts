import {FetchMockSandbox} from 'fetch-mock';
import crossFetch from "cross-fetch";

jest.mock("cross-fetch", () => require("fetch-mock-jest").sandbox());

const fetchMock = crossFetch as FetchMockSandbox;

export default fetchMock;