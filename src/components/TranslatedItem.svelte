<script lang="ts">
	export let english;
	export let japanese;
	export let romaji;
	export let src;

	export let alt;
	let altName = hasAltName(english);
	function hasAltName(name: string) {
		let parenIndex = name.lastIndexOf('(');
		if (parenIndex > 0) {
			english = name.slice(0, parenIndex - 1);
			return name.slice(parenIndex);
		} else return '';
	}
	import '../app.css';
</script>

<div class="flex flex-col flex-shrink">
	<img class="shrink" {src} alt={english} />
	<div class="flex flex-none h-1/2 flex-col text-center">
		<span class="text-gray-100 mt-2 text-base whitespace-nowrap">{english}</span>
		{#if alt}
		<span class="text-gray-100 text-base alt">({alt})</span>
			{:else}
			<span class="text-gray-100 text-base alt"></span>

			{/if}
		<span class="text-gray-400 text-sm">{romaji}</span>
		<span class="text-gray-300 text-sm whitespace-nowrap">{japanese}</span>
	</div>
</div>

<style>
	/*div {*/
	/*	display: flex;*/
	/*	flex-direction: column;*/
	/*	text-align: center;*/
	/*}*/
	/*span {*/
	/*	overflow-wrap: normal;*/
	/*}*/
	img {
		aspect-ratio: 1 / 1;
		/*width:100px;*/
		/*width: 100%;*/
		/*object-fit: contain;*/
	}
	.alt:empty:after {
		content: '\200b';
		/*content: '&nbsp;';*/
		/*font-size:0;*/
		/*white-space:pre;*/
	}
</style>
