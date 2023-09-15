<script>
    import * as Accordion from '$lib/components/ui/accordion';
	import { getCategoryFilter, getProducts  } from '$lib/stores/products/productServer.js';

</script>



<!-- //category Filter -->
<Accordion.Root class="w-full px-4">
    <Accordion.Item value="item-2">
        <Accordion.Trigger>Category Filter</Accordion.Trigger>
        <Accordion.Content class="">
            <button
                on:click={() => getCategoryFilter('smartphones')}
                name=""
                class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500"
                >Smart phones</button
            >
        </Accordion.Content>
        <Accordion.Content>
            <button
                on:click={() => getCategoryFilter('laptops')}
                class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500"
                >Laptops</button
            >
        </Accordion.Content>
        <Accordion.Content>
            <button
                on:click={() => getCategoryFilter('fragrances')}
                name="fragrances"
                class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500"
                >Fragrances</button
            >
        </Accordion.Content>
        <Accordion.Content>
            <button
                on:click={() => getCategoryFilter('home-decoration')}
                name="fragrances"
                class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500"
                >Home Decor</button
            >
        </Accordion.Content>
        <Accordion.Content>
            <button
                on:click={() => getProducts('')}
                name="fragrances"
                class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500"
                >All</button
            >
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>