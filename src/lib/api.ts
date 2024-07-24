import {PatrimoineApi} from "@harena-com/typescript-client";
import {getConfiguration} from "@/lib/utils.ts";

export const patrimonyApi = () => new PatrimoineApi(getConfiguration());
