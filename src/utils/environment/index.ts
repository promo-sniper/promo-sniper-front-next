import { development } from "./development";
import { local } from "./local";
import { production } from "./production";
import { staging } from "./staging";
import { EnvironmentI } from "./types";

const environment = {
  development,
  production,
  staging,
  local,
};

const getEnvironment = (env: string): EnvironmentI => {
  const isLocalhost = process.env.LOCALHOST;

  let environmentActive;

  if (isLocalhost) {
    environmentActive = environment.local;
  } else if (env === "staging") {
    environmentActive = environment.staging;
  } else if (env === "production") {
    environmentActive = environment.production;
  } else {
    environmentActive = environment.development;
  }

  return environmentActive;
};

export default getEnvironment(process.env.API || "development");
