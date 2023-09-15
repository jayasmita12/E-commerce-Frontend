<script>
	import FilterCard from "./FilterCard.svelte";
	import Products from "./Products.svelte";
</script>


<div class="flex lg:space-x-3 px-4 xl:px-0">
    <div class="w-[20rem] h-fit  hidden lg:flex">
        <FilterCard/>
    </div>
    <div class="w-full">
        <Products />
    </div>
</div>