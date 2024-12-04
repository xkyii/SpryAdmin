import { DataProvider, } from "@refinedev/core";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { stringify } from "query-string";
import Cookies from "js-cookie";

type MethodTypes = "get" | "delete" | "head" | "options";
type MethodTypesWithBody = "post" | "put" | "patch";

const API_URL = "http://localhost:5050/api";
const httpClient: AxiosInstance = axios.create({ baseURL: API_URL, timeout: 2000 });

httpClient.interceptors.response.use(
    resp => {
      return { ...resp, ...resp.data };
    },
  );

export const restDataProvider: DataProvider = {
    getApiUrl: () => API_URL,
    getList: async ({ resource, pagination, sorters, filters, meta }) => {
        const url = `${API_URL}/${resource}`;

        const { current = 1, pageSize = 10 } = pagination ?? {};
        const { headers: headersFromMeta, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";
        const headersExtra = {
          Authorization: `Bearer ${Cookies.get('token')}`
        }

        const query: {
            page?: number;
            size?: number;
        } = {};

        query.page = current - 1;
        query.size = pageSize;

        const combinedQuery = { ...query, /* ...queryFilters */ };
        const urlWithQuery = Object.keys(combinedQuery).length
          ? `${url}?${stringify(combinedQuery)}`
          : url;

        const { data, headers } = await httpClient[requestMethod](urlWithQuery, {
            headers: {
              ...headersFromMeta,
              Authorization: `Bearer ${Cookies.get('token')}`
             }
          });

          const total = +headers["x-total-count"];

          return {
            data,
            total: total || data.length,
          };
    },
    getOne: async ({ resource, id, meta }) => {
        const url = `${API_URL}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const { data } = await httpClient[requestMethod](url, {
          headers: {
            ...headers,
            Authorization: `Bearer ${Cookies.get('token')}`
           }
        });

        return {
          data,
        };
    },
    create: async ({ resource, variables, meta }) => {
        const url = `${API_URL}/${resource}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "post";

        const { data } = await httpClient[requestMethod](url, variables, {
          headers,
        });

        return {
          data,
        };
    },
    update: async ({ resource, id, variables, meta }) => {
        const url = `${API_URL}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "patch";

        const { data } = await httpClient[requestMethod](url, variables, {
          headers,
        });

        return {
          data,
        };
    },
    deleteOne: async ({ resource, id, variables, meta }) => {
        const url = `${API_URL}/${resource}/${id}`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "delete";

        const { data } = await httpClient[requestMethod](url, {
          data: variables,
          headers,
        });

        return {
          data,
        };
    },
};

