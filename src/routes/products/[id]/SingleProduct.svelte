<script>
	import { product } from '$lib/stores/products/productStore.js';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
    import {addToCart} from "$lib/stores/cart/cartService.js"

	const handlechange = (i) => {
		$product.thumbnail = $product.images[i];
	};
</script>

<Card.Root class="w-full flex flex-col lg:flex-row border-none my-10 lg:my-20">
	<div class="w-full flex flex-col justify-center">
		<div class="flex justify-center">
			<img
				src={$product.thumbnail}
				class="flex justify-center w-[70%] md:w-[50%] lg:w-[70%] h-[50vh]"
				alt=""
			/>
		</div>
		<div class="flex space-x-3 justify-center mt-5 px-4">
			{#each $product.images as image, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="w-20 h-20" on:click={() => handlechange(i)}>
					<img src={image} class="w-full h-full" alt="" />
				</div>
			{/each}
		</div>
	</div>
	<div class="w-full px-4 lg:px-0">
		<div class="pt-3 pb-5 px-2">
			<p class="capitalize leading-tight text-xl font-semibold">
				{$product.title}- {$product.brand}
			</p>
			<p>{$product?.description}</p>
			<h1 class="font-bold text-sm sm:text-xl">
				₹{$product.price}
				<span class="text-[10px] sm:text-sm font-normal">MRP <del>₹1002</del> </span>
				<span class="text-sm text-blue-500">{$product.discountPercentage}% off</span>
			</h1>
			<div class="flex w-full space-x-1 pointer-events-none">
				{#each Array(5) as _, i}
					{#if $product.rating >= i + 1}
						<img src="/star/fullstar.svg" alt="fill" class="w-[1rem]" />
					{:else if $product.rating >= i + 0.5}
						<img src="/star/halfstar.svg" alt="half" class="w-[1rem]" />
					{:else}
						<img src="/star/outlinestar.svg" alt="fill" class="w-[1rem]" />
					{/if}
				{/each}

			</div>
            <div class="space-y-2 mt-4">
                <p class="capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad earum sint libero, in pariatur maxime ex? Repellendus necessitatibus itaque saepe cumque, temporibus veniam, laborum voluptate ducimus ipsam, sunt fugit!</p>
                <p class="capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad earum sint libero, in pariatur maxime ex? Repellendus necessitatibus itaque saepe cumque, temporibus veniam, laborum voluptate ducimus ipsam, sunt fugit!</p>
            </div>

			<div class="flex space-x-3 my-5">
				<Button on:click={()=> addToCart($product)} variant="outline" class="rounded-sm  border-blue-500 shadow-sm">ADD TO CART</Button>
				<Button class="rounded-sm  bg-gradient-to-r from-blue-200 to-blue-500 shadow-lg">BUY NOW</Button>
			</div>
		</div>
	</div></Card.Root
>
