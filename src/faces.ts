export interface IConfig {
  hostTarget: "linux-x64" | "linux-arm64" | "macos-x64";
  autoDownload: boolean;
  verifyChecksums: boolean;
  protocolNode: {
    pool: number;
    network: "beta"; // TODO: only allow beta for now
    verbose: boolean;
    metrics: boolean;
  };
}
