# Foundry Summons

![](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fversion%3Fstyle%3Dflat%26url%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FMrVauxs%2Ffoundry-summons%2Fmain%2Fmodule.json)
![All Downloads](https://img.shields.io/github/downloads/MrVauxs/foundry-summons/total?color=purple&label=All%20Downloads)
![Latest Version Downloads](https://img.shields.io/github/downloads/MrVauxs/foundry-summons/latest/total?color=purple&label=Latest%20Version%20Downloads&sort=semver)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ffoundry-summons&colorB=4aa94a)](https://forge-vtt.com/bazaar#package=pf2e-jb2a-macros)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ffoundry-summons%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/foundry-summons/)

An all-in-one solution to all your summoning needs with NO need to import Actors to place them on the map!

Easily expandable with Hooks, and system-inclusive. Should work on any system.
Just grab the **macro** from the compendium and start summoning!

Built in [Svelte](https://svelte.dev/) using [TyphonJS Framework](https://github.com/typhonjs-fvtt-lib) for Foundry.

### Hooks
| Hook | Purpose | Code |
| :--: | :-----: | :--: |
| fs-preSummon | Gets called before the token is summoned, allowing you to modify it before being put on the board | [Link](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/summon.js#L144) |
| fs-postSummon | Gets called after the token is summoned, allowing you to create your own entrance animations as the token starts off invisible | [Link](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/summon.js#L165-L182) |
| fs-loadingPacks | Gets called when creating the creature index, allowing you to add your own custom data to it | [Link](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/menu/loadPacks.js#L85) |
| fs-addWrapperClasses | Gets called once ready. Provides an easy way to add new DocWrappers to the module. | [Relevant Code 1](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/menu/loadPacks.js#L76) and [2](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/summon.js#L58-L63) |
| fs-addCustomPacks | Gets called once ready. Provides an easy way to add new Source Packs to the module, acting like Compendiums. | [Relevant Code](https://github.com/MrVauxs/foundry-summons/blob/main/src/summon/menu/loadPacks.js#L16) |

### Preview

https://github.com/MrVauxs/foundry-summons/assets/32039708/baa11499-8999-49d8-99a5-1ca2f2f79b3d

![image](https://github.com/MrVauxs/foundry-summons/assets/32039708/889a419d-b5fd-4757-8360-2d73ce07dd5c)
