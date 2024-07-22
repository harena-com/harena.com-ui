import {
  PatrimoineApi,
  PossessionApi,
  ProjectionFutureApi,
} from "@harena-com/typescript-client";
import {AxiosResponse} from "axios";

export const patrimoineApi = new PatrimoineApi();
export const possessionApi = new PossessionApi();
export const projectionFutureApi = new ProjectionFutureApi();

export type UnwrapResult<TReturn extends () => Promise<AxiosResponse<never>>> =
  TReturn extends () => Promise<AxiosResponse<infer Res>> ? Res : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<never>>>(
  execute: Fn
): Promise<UnwrapResult<Fn>> => {
  const _ = await execute();
  return _.data;
};
