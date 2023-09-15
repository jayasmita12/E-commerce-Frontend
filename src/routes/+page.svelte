<script>
	import MobileFilter from "../lib/components/mainComponents/MobileFilter.svelte";
	import Modal from "../lib/components/mainComponents/Modal.svelte";
	import HomeSlider from "./home/HomeSlider.svelte";
	import Products from "./products/+page.svelte";
	import FilterPrice from "./products/FilterPrice.svelte";
	import {showFilterPrice , showFilterCategory , showFilterRating} from "$lib/stores/products/productStore.js"
  import {  quintOut } from "svelte/easing";
	import { fly, slide } from "svelte/transition";
	import FilterCategory from "./products/FilterCategory.svelte";
	import FilterRating from "./products/FilterRating.svelte";
</script>




<MobileFilter/>
<HomeSlider/>
<Products/>

{#if $showFilterPrice}
<div class="w-full lg:hidden bg-gray-200 rounded-t-xl  shadow-2xl border-[1px] sticky bottom-0">
	<FilterPrice/>
</div>
{:else if $showFilterCategory}
<div class="w-full lg:hidden bg-gray-200 rounded-t-xl  shadow-2xl border-[1px] sticky bottom-0">
	<FilterCategory/>
</div>
{:else if $showFilterRating}
<div class="w-full lg:hidden bg-gray-200 rounded-t-xl  shadow-2xl border-[1px] sticky bottom-0">
	<FilterRating/>
</div>
{/if}