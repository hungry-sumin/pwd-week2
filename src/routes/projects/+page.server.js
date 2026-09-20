/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/api/projects');

	if (!response.ok) {
		return { projects: [] };
	}

	return { projects: await response.json() };
}
