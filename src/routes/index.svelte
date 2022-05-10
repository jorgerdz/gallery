<script context="module">
    import { getAll } from "../lib/cms";

    export async function load({ params, fetch, session, stuff }) {
        const hits = await getAll();
        return {
            props: {
                hits,
            },
        };
    }
</script>

<script>
    export let hits;
</script>

<div class="flex flex-wrap justify-center">
    {#each hits as hit}
        <a href={`/p/${hit.data.slug}`}>
            <img class="max-w-lg w-full md:max-w-sm p-5" src={hit.data.image.url} />
        </a>
    {/each}
</div>
