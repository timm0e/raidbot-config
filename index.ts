import fs = require("fs");
import toml = require("tomljs");

export class RaidBotConfig {
  public clientID: string;
  public clientSecret: string;
  public botToken: string;
  public guildID: string;
  public hostname: string;
  public soundpath: string;
}

function getPath(path?: string): string {
  if (path) {
    return path;
  } else if (process.env.RAIDBOT_CFG) {
    return process.env.RAIDBOT_CFG as string;
  }
  return "/mnt/RaidBot/config.toml";
}

export function getConfig(path?: string): RaidBotConfig {
  return toml(fs.readFileSync(getPath(path)).toString()) as RaidBotConfig;
}

module.exports = getConfig;
