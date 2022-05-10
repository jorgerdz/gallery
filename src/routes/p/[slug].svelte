<script context="module">
    import { getOne } from "$lib/cms";

    export async function load({ params, fetch, session, stuff }) {
        const response = await getOne(params.slug);
        return {
            props: {
                hit: await response,
            },
        };
    }
</script>

<script>
    export let hit;
</script>

<div>
    {#if hit}
        <h2 class="text-white text-lg text-center">{hit.data.name}</h2>
        <a href="/">
            <span class="absolute text-4xl md:text-6xl top-8">⬅️</span>
        </a>
        <div class="flex flex-wrap justify-center">
            <img class="w-full max-w-3xl p-5" src={hit.data.image.url} />
        </div>
    {/if}
</div>
