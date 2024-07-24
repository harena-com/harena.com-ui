import {PatrimoineApi} from "@harena-com/typescript-client";
import {getConfiguration} from "@/libs/utils.ts";

/* TODO: Create new instances for both possession and futureProjection */
export const patrimonyApi = () => new PatrimoineApi(getConfiguration());
