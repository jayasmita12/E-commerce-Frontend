
<script>
    import * as Accordion from '$lib/components/ui/accordion';
	import { getRatingFilter } from '$lib/stores/products/productServer.js';
  import { sortByRating} from "$lib/stores/products/productStore.js"
</script>



<Accordion.Root class="w-full px-4">
    <Accordion.Item value="item-3" class="space-y-0 gap-0">
        <Accordion.Trigger>Rating Filter</Accordion.Trigger>
        <Accordion.Content class="space-y-3">
            <div class="flex space-y-3 flex-col">
                <div class="flex space-x-2">
                    <input
                        id="4& above"
                        type="checkbox"
                        value="4& above"
                        bind:group={$sortByRating}
                        on:change={(e)=>getRatingFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="4& above"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                    4 & above
                    </label>
                </div>

                <div class="flex space-x-2">
                    <input
                        id="3& above"
                        type="checkbox"
                        value="3& above"
                        bind:group={$sortByRating}
                        on:change={(e)=>getRatingFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="3& above"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                    3 & above
                    </label>
                </div>

                <div class="flex space-x-2">
                    <input
                        id="2& above"
                        type="checkbox"
                        value="2& above"
                        bind:group={$sortByRating}
                        on:change={(e)=>getRatingFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="2& above"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                    2 & above
                    </label>
                </div>

                <div class="flex space-x-2">
                    <input
                        id="1& above"
                        type="checkbox"
                        value="1& above"
                        bind:group={$sortByRating}
                        on:change={(e)=>getRatingFilter(e)}
                        class="w-4"
                    />
                    <label
                        for="1& above"
                        class="text-sm flex self-center font-medium leading-none "
                    >
                    1 & above
                    </label>
                </div>
            </div>
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>