declare module "vite-jest" {
  import { Config } from "jest";
  export function createJestConfig(config: Config): Config;
}
