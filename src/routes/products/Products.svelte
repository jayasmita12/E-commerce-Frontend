<script>
    import * as Card from "$lib/components/ui/card";
	import { onMount } from "svelte";
    import {getProducts} from "$lib/stores/products/productServer.js"
    import {products} from "$lib/stores/products/productStore.js"
   
    onMount(async()=>{
       let data = await getProducts()
        $products = data
    })
    $:productData = $products
  
</script>


{#if productData?.length > 0}
<Card.Root class="p-2 sm:p-5">
    <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 ">
        {#each productData as product}
        <div class="cursor-pointer hover:border-blue-500 rounded-lg hover:border-[1px]  hover:shadow-lg">
            <div class="w-full h-[25vh] sm:h-[40vh]">
                <img class="w-full h-full rounded-lg" src={product.thumbnail} alt="">
            </div>
            <div class="pt-3 pb-5 px-2">
                <p class="leading-tight">{product.title}</p>
                <h1 class="font-bold text-sm sm:text-xl">₹{product.price} <span class="text-[10px] sm:text-sm font-normal">MRP  <del>₹1002</del>  </span> <span class="text-sm text-blue-500">{product.discountPercentage}% off</span></h1>
                <div class="flex w-full space-x-1 pointer-events-none">
                {#each Array(5) as _, i}
                {#if product.rating >= i+1}
                  <img src="/star/fullstar.svg" alt="fill" class="w-[1rem]  "/>
                  {:else if product.rating >= i+0.5}
                  <img src="/star/halfstar.svg" alt="half" class="w-[1rem]  "/>
                  {:else}
                  <img src="/star/outlinestar.svg" alt="fill" class="w-[1rem] "/>

                  {/if}
            {/each}
            </div>
            </div>
        </div>
{/each}
    </div>
    
</Card.Root>
{/if}