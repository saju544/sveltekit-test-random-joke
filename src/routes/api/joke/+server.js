import { json } from '@sveltejs/kit';

export async function GET() {
	const joke = await fetch('https://api.chucknorris.io/jokes/random');
	return json(await joke.json());
}
