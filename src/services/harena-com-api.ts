import {
  PatrimoineApi,
  PossessionApi,
  ProjectionFutureApi,
} from "@harena-com/typescript-client";
import {AxiosResponse} from "axios";

export const patrimoineApi = new PatrimoineApi();
export const possessionApi = new PossessionApi();
export const projectionFutureApi = new ProjectionFutureApi();

export type UnwrapResult<
  TReturn extends () => Promise<AxiosResponse<unknown>>,
> = TReturn extends () => Promise<AxiosResponse<infer Res>> ? Res : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<unknown>>>(
  execute: Fn
): Promise<unknown> => {
  const _ = await execute();
  return _.data;
};
