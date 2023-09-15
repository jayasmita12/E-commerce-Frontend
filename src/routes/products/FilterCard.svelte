<script>
	import * as Card from '$lib/components/ui/card';
	import FilterPrice from './FilterPrice.svelte';
	import FilterCategory from './FilterCategory.svelte';
	import FilterRating from './FilterRating.svelte';
</script>

<Card.Root class="w-full">
	
	<FilterCategory/>
	<FilterPrice/>
	<FilterRating/>
</Card.Root>
