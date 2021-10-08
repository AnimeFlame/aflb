[![npm](https://img.shields.io/npm/v/aflb.svg)](https://www.npmjs.com/package/aflb)
[![npm](https://img.shields.io/npm/dt/aflb.svg?maxAge=3600)](https://www.npmjs.com/package/aflb)
[![install size](https://packagephobia.now.sh/badge?p=aflb)](https://packagephobia.now.sh/result?p=aflb)


[![NPM](https://nodei.co/npm/aflb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aflb/)

# AFLB ¯\_(ツ)_/¯

![aflb](https://cdn.discordapp.com/attachments/814183405901053992/894023623990468618/aflb_banner.png)

## Installation
```
npm i aflb
```
Huge anime action gifs with no external dependencies.

### SFW Action Gifs

| Function | Description |
| -------- | ----------- |
| `angry` | Gets a URL of a angry image/gif |
| `baka` | Gets a URL of a baka image/gif |
| `bite` | Gets a URL of a bite image/gif |
| `bloodsuck` | Gets a URL of a bloodsuck image/gif |
| `blush` | Gets a URL of a blush image/gif |
| `bored` | Gets a URL of a bored image/gif |
| `kissCheek` | Gets a URL of a kissing cheek image/gif |
| `cheek` | Gets a URL of a squeeze cheeks image/gif |
| `clap` | Gets a URL of a clap image/gif |
| `cringe` | Gets a URL of a cringe image/gif |
| `cry` | Gets a URL of a cry image/gif |
| `dance` | Gets a URL of a dance image/gif |
| `drink` | Gets a URL of a drink image/gif |
| `facedesk` | Gets a URL of a facedesk image/gif |
| `fight` | Gets a URL of a fight image/gif |
| `happy` | Gets a URL of a happy image/gif |
| `hate` | Gets a URL of a hate image/gif |
| `highfive` | Gets a URL of a highfive image/gif |
| `horny` | Gets a URL of a horny image/gif |
| `kill` | Gets a URL of a kill image/gif |
| `hand` | Gets a URL of a hand image/gif |
| `laugh` | Gets a URL of a laugh image/gif |
| `lick` | Gets a URL of a lick image/gif |
| `lurk` | Gets a URL of a lurk image/gif |
| `meow` | Gets a URL of a meow image/gif |
| `nom` | Gets a URL of a nom image/gif |
| `feed` | Gets a URL of a feed image/gif |
| `hug` | Gets a URL of a hug image/gif |
| `nuzzle` | Gets a URL of a nuzzle image/gif |
| `kiss` | Gets a URL of a kiss image/gif |
| `pat` | Gets a URL of a pat image/gif |
| `tickle` | Gets a URL of a tickle image/gif |
| `scare` | Gets a URL of a scare image/gif |
| `scared` | Gets a URL of a scared image/gif |
| `poke` | Gets a URL of a poke image/gif |
| `smug` | Gets a URL of a smug image/gif |
| `stare` | Gets a URL of a stare image/gif |
| `panic` | Gets a URL of a panic image/gif |
| `nya` | Gets a URL of a nya image/gif |
| `salute` | Gets a URL of a salute image/gif |
| `sing` | Gets a URL of a singing image/gif |
| `shrug` | Gets a URL of a shrug image/gif |
| `choke` | Gets a URL of a choke image/gif |
| `grin` | Gets a URL of a grin image/gif |
| `music` | Gets a URL of a listen to music image/gif |
| `love` | Gets a URL of a shows love image/gif |
| `drawing` | Gets a URL of a drawing image/gif |
| `pout` | Gets a URL of a pout image/gif |
| `run` | Gets a URL of a run image/gif |
| `sad` | Gets a URL of a sad image/gif |
| `sake` | Gets a URL of a drink sake image/gif |
| `shoot` | Gets a URL of a shoot image/gif |
| `sip` | Gets a URL of a all sip image/gif |
| `sipTea` | Gets a URL of a sip tea image/gif |
| `sipCoffee` | Gets a URL of a sip coffee image/gif |
| `sipCacao` | Gets a URL of a sip cacao image/gif |
| `sipJuice` | Gets a URL of a sip juice image/gif |
| `slap` | Gets a URL of a all slap/punch/hit image/gif |
| `slapAss` | Gets a URL of a slap ass image/gif |
| `slapCheek` | Gets a URL of a smack image/gif |
| `sleep` | Gets a URL of a all sleep image/gif |
| `sleepSolo` | Gets a URL of a solo sleep image/gif |
| `sleepTogether` | Gets a URL of a together sleep image/gif |
| `smile` | Gets a URL of a smile image/gif |
| `smoke` | Gets a URL of a smoke image/gif |
| `steal` | Gets a URL of a steal image/gif |
| `stockings` | Gets a URL of a stockings image/gif |
| `sweeties` | Gets a URL of a sweeties image/gif |
| `wasted` | Gets a URL of a wasted image/gif |
| `wave` | Gets a URL of a wave image/gif |
| `tease` | Gets a URL of a wave image/gif |
| `wink` | Gets a URL of a wink image/gif |
| `sex` | Gets a URL of a (NO NSFW) sex image/gif |
| `cuddle` | Gets a URL of a cuddle image/gif |

### SFW Other Gif/Image
| Function | Description |
| -------- | ----------- |
| `mix` | Gets a URL of a cute neko, kitsune image/gif |
| `neko` | Gets a URL of a cute neko image/gif |
| `nekoImg` | Gets a URL of a cute neko image |
| `nekoGif` | Gets a URL of a cute neko gif |
| `kitsune` | Gets a URL of a cute kitsune image |

### NSFW Gifs

### NSFW content is not yet available, coming soon..

| Function | Description |
| -------- | ----------- |
| `ass` | Gets a URL of a ass image/gif |

## Typings

I added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.


## Examples

Await/Async example
```js
const client = require('aflb');
const aflb = new client();

async function getKissImage() {
  console.log(await aflb.sfw.kiss());
}

getKissImage();
```
returns:
```json
"https://cdn.discordapp.com/attachments/820213553540759571/894020186611548230/kiss_01.gif"
```

Standart Usage
```js
const client = require('aflb');
const aflb = new client();

console.log(aflb.sfw.kiss())

```
returns:
```json
"https://cdn.discordapp.com/attachments/820213553540759571/894021582819835904/kiss_02.gif"
```

Usage in Embed
```js
const { MessageEmbed } = require('discord.js')
const client = require('aflb');
const aflb = new client();

const embed = new MessageEmbed().setImage(aflb.sfw.kiss())
```
returns:
```json
"https://cdn.discordapp.com/attachments/820213553540759571/894021582819835904/kiss_02.gif"
```
![Embed Usage](https://cdn.discordapp.com/attachments/820213553540759571/894023119101120572/embed_usage.png)


## Extended Examples

The examples show only the import of the sfw / nsfw module, in case you don't need the second part.

Import only sfw content
```js
const client = require('aflb');
const { sfw } = new client();

console.log(sfw.kiss())

```
returns:
```json
"https://cdn.discordapp.com/attachments/820213553540759571/894021582819835904/kiss_02.gif"
```

Import only nsfw content
```js
const client = require('aflb');
const { nsfw } = new client();

console.log(nsfw.ass())

```
returns:
```json
"https://cdn.discordapp.com/attachments/820213553540759571/894021582819835904/mega-nsfw.gif"
```
