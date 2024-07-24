import {PatrimoineApi} from "@harena-com/typescript-client";
import {getConfiguration} from "@/lib/utils.ts";

/* TODO: Create new instances for both possession and futureProjection */
export const patrimonyApi = () => new PatrimoineApi(getConfiguration());
