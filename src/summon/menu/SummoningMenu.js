import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';

import SummoningMenu from './SummoningMenu.svelte';

export default class SummoningApplication extends SvelteApplication {
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			title: 'foundry-summons.menu.title',
			width: 800,
			height: 600,
			svelte: {
				class: SummoningMenu,
				target: document.body,
			},
		});
	}
}

/**
 * Opens the summoning menu with all the options.
 *
 * TODO: Type-ify the props.
 *
 * @param {object} args - The props to pass to the Svelte component.
 *
 * @returns {void}
 */
export function openMenu(args) {
	new SummoningApplication().render(true, { focus: true, svelte: { props: { ogData: args } } });
}
