import dataProviderSimpleRest from "@refinedev/simple-rest";
import { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const pseuDataProvider: DataProvider = dataProviderSimpleRest(API_URL);
