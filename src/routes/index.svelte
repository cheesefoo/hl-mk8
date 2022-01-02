<script>
	import { characters, maps, items, carts } from '../components/_tl';
	import TranslatedItem from '../components/TranslatedItem.svelte';
	import { CollapsibleCard } from 'svelte-collapsible';
	export let charas = characters;
	export let cups = maps;
	export let item = items;
	export let cart = carts;
	import rules from '/static/images/rules.jpg';
	import groups from '/static/images/groups.jpg';
	import enid from '/static/images/2021enid.png';
	import enidthumb from '/static/images/2021enid_thumb.png';
	import jp from '/static/images/2021jp.png';

	import '../app.css';
	import { Lightbox } from 'svelte-lightbox';
	// charas.forEach((x) => console.log(x.japanese));
</script>

<main class="bg-gray-900 shadow-xl overflow-hidden">
	<div>
		<div class="grid grid-cols-2 w-11/12 h-auto m-auto">
			<div>
				<Lightbox><img src={groups} alt="groups" /></Lightbox>
				<a
					class="text-indigo-500"
					href="https://twitter.com/tokoyamitowa/status/1473630447771217936/photo/1"
					target="_blank">Source</a
				>
			</div>
			<div>
				<Lightbox><img src={rules} alt="rules" /></Lightbox>
			</div>
		</div>
		<div class="grid grid-cols-2 w-11/12 h-auto m-auto">
			<div>
				<Lightbox imagePreset="fit">
					<img class="aspect-video" src={jp} alt="statsjp" />
				</Lightbox>
				<a
					class="text-indigo-500"
					href="https://www.reddit.com/r/Hololive/comments/kv6iox/mario_kart_cup_results_in_the_style_of_f1/"
					target="_blank">Source</a
				>
			</div>
			<div>
				<Lightbox thumbnail clickToClose imagePreset="fullscreen">
					<img slot="thumbnail" src={enidthumb} alt="statsen" />
					<img slot="image" src={enid} alt="statsen" />
				</Lightbox>
				<a
					class="text-indigo-500"
					href="https://www.reddit.com/r/Hololive/comments/pczh59/final_results_of_the_enid_mario_kart_cup_the/"
					target="_blank">Source</a
				>
			</div>
		</div>
	</div>

	<a
		class="flex items-center justify-center text-sky-400 text-xl lg:text-2xl "
		href="https://docs.google.com/spreadsheets/d/1XH1hPKc-RczTbDCilbQ3C4HJCySwHDN8W7o0T0KZsZA/edit#gid=224210193"
		>Nerd spreadsheet by silverbass#2407</a
	>

	<div class="grid grid-cols-1 gap-8 w-11/12 max-w-full h-auto m-auto lg:grid-cols-2">
		<div class="grid-rows-3 gap-8">
			<div class="max-h-full overflow-hidden">
				<h2 class="text-white mb-8 text-center text-xl font-bold">Notable Carts</h2>
				<div class="grid grid-cols-4 gap-8 overflow-hidden">
					{#each cart as c}
						<div class="col-span-1"><TranslatedItem {...c} /></div>
					{/each}
				</div>
			</div>
			<div class="max-h-full overflow-hidden">
				<h2 class="text-white mb-8 text-center text-xl font-bold">Notable Items</h2>
				<div class="grid grid-cols-4 gap-4 overflow-hidden">
					{#each item as i}
						<div class="col-span-1"><TranslatedItem {...i} /></div>
					{/each}
				</div>
			</div>
			<div>
				<h2 class="text-white mb-8 text-center text-xl font-bold">Characters</h2>
				<div class="grid grid-cols-4 lg:grid-cols-8 gap-4">
					{#each charas as c}
						<div class="col-span-1"><TranslatedItem {...c} /></div>
					{/each}
				</div>
			</div>
		</div>
		<div class=" ">
			<h2 class="text-white mb-8 text-center text-xl font-bold">Courses</h2>
			<div class="grid grid-cols-2 gap-12 ml-4 mr-4 mt-8 lg:hidden">
				{#each cups as cup}
					<div class=" ">
						<div class="mb-4">
							<TranslatedItem {...cup.name} />
						</div>
						{#each cup.courses as course}
							<div class="mb-4">
								<TranslatedItem {...course} />
							</div>
						{/each}
					</div>
				{/each}
			</div>
			<table class="table-auto hidden lg:block">
				{#each cups as cup}
					<tr>
						<td class="lg:w-1/6 lg:h-1/6"><TranslatedItem {...cup.name} /></td>
						{#each cup.courses as course}
							<td class="lg:w-1/5 lg:h-1/6 pl-4 pr-4"><TranslatedItem {...course} /></td>
						{/each}
					</tr>
				{/each}
			</table>
		</div>
	</div>
	<div class="flex flex-col items-center ml-8 mr-8 mb-56">
		<h1 class="text-gray-100 mt-8 text-3xl lg:text-6xl text-center">FAQ</h1>
		<ul class=" ">
			<li class="text-gray-100 mt-2 text-l lg:text-2xl list-disc">
				Why do so many people use Waluigi/Wiggler Cart?
				<ul class="list-outside mt-2 ml-4">
					<li>It's a meta setup for having good stats.</li>
				</ul>
			</li>
			<li class="text-gray-100 mt-2 text-l lg:text-2xl list-disc">
				How do you unlock parts?
				<ul class="list-outside mt-2 ml-4">
					<li>
						Parts are randomly obtained for every 50 coins for the first 1000 coins, and every 100
						coins afterwards.
					</li>
				</ul>
			</li>
			<li class="text-gray-100 mt-2 text-l lg:text-2xl list-disc">
				Why do you want to pick up coins?
				<ul class="list-outside mt-2 ml-4">
					<li>
						Other than the above, your maximum speed increases for every coin, and you get a small
						speed boost upon pickup. Coins cap at 10.
					</li>
				</ul>
			</li>
			<li class="text-gray-100 mt-2 text-l lg:text-2xl list-disc">
				What is a dango?
				<ul class="list-outside mt-2 ml-4">
					<li>A clump of players; when a lot of cars are in a group near each other.</li>
				</ul>
			</li>
			<li class="text-gray-100 mt-2 text-l lg:text-2xl list-disc">
				wtf is Aqua doing?
				<ul class="list-outside mt-2 ml-4">
					<li>
						Holding onto a Bullet Bill:
						<a class="text-sky-400" href="https://www.youtube.com/watch?v=3onCuflsloI">Video</a>
						TL;DW: You can extend how long your Bullet Bill lasts.
					</li>
					<li>
						Backing up at the start:
						<a class="text-sky-400" href="https://www.youtube.com/watch?v=omao6mgvtb4">Video</a>
						TL;DW: Called sandbagging, you do this to get better items (for example, doing the above.)
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<span class="text-white text-xs"
		>Images from <a class="text-sky-400" href="https://www.mariowiki.com/Mario_Kart_8_Deluxe"
			>mariowiki</a
		>
		& <a class="text-sky-400" href="https://game8.jp/mariokart8dx">game8</a></span
	>
</main>

<style>
	/*	html,
	body {
		font-family: Roboto, serif;
		background: rgb(14, 14, 14);
		height: 100%;
		width: auto;
		overflow: hidden;
	}*/
</style>
