export type EnvironmentType =
  | "development"
  | "local"
  | "staging"
  | "production";

export interface EnvironmentI {
  environment: EnvironmentType;
  UrlBaseAPI: string;
}
