<script>
	let joke = '';

	async function getJoke() {
		joke = null;
		const jokeResponse = await fetch('/api/joke');
		joke = (await jokeResponse.json()).value;
	}
</script>

<h1>Random joke from SvelteKit from SvelteKit</h1>

<button on:click={getJoke}>Get A Joke</button>

{#if joke}
	<h2>{joke}</h2>
{:else}
	<h2>Loading...</h2>
{/if}
