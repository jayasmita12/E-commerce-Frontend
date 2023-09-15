<script>
    import * as Accordion from '$lib/components/ui/accordion';
	import {  getPriceFilter  } from '$lib/stores/products/productServer.js';
  import {sortBy } from "$lib/stores/products/productStore.js"
 
</script>

<!-- price filter -->

<Accordion.Root class="w-full px-4" >
    <Accordion.Item value="item-3" class="space-y-0 gap-0" >
        <Accordion.Trigger>Price Range</Accordion.Trigger>
        <Accordion.Content class="space-y-3">
            <div class="flex space-y-3 flex-col">
                <div class="flex space-x-2">
                    <input
                        id="high-to-low"
                        type="checkbox"
                        value="high-to-low"
                        bind:group={$sortBy}
                        on:change={(e)=>getPriceFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="high-to-low"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                        High to low
                    </label>
                </div>

                <div class="flex space-x-2">
                    <input
                        id="low-to-high"
                        type="checkbox"
                        value="low-to-high"
                        bind:group={$sortBy}
                        on:change={(e)=>getPriceFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="low-to-high"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                        Low to High
                    </label>
                </div>
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
<!-- {/if} -->