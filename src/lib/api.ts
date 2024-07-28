import { getConfiguration } from '@/lib/utils.ts';
import { PatrimoineApi, PossessionApi, ProjectionFutureApi } from '@harena-com/typescript-client';

export const patrimonyApi = () => new PatrimoineApi(getConfiguration());
export const possessionApi = () => new PossessionApi(getConfiguration());
export const futureProjectionApi = () => new ProjectionFutureApi(getConfiguration());
