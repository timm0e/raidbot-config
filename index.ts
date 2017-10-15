import toml = require("tomljs");
import fs = require("fs");

export class RaidBotConfig
{
    public clientID: string;
    public clientSecret: string;
    public guildID: string;
    public hostname: string;
    public filepath: string;
}

function getPath(path?: string): string
{
    if (path)
        return path;
    else if (process.env.RAIDBOT_CFG)
        return process.env.RAIDBOT_CFG as string;
    return "/mnt/RaidBot/config.toml";
}

module.exports = function(path?: string): RaidBotConfig {
    return toml(fs.readFileSync(getPath(path)).toString()) as RaidBotConfig;
}