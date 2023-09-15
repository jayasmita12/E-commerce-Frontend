<script>
	import { Button } from '$lib/components/ui/button';
    import {cart} from "$lib/stores/cart/cartStore.js"
    import {goto} from "$app/navigation"
    import SingleCartItem from "./SingleCartItem.svelte"
    $:totalPrice = $cart?.reduce((sum, e) => {
        return (sum + e.price)
    }, 0);
   
</script>


{#if $cart.length > 0}
<div class="my-10 px-4 space-y-2">
    {#each $cart as data}
        <SingleCartItem data={data}/>
    {/each}
    <div class="sticky  bottom-0 border-2 left-0 bg-white rounded-sm h-[25vh]">
        
        <div class="flex px-5 py-10 flex-col justify-end place-items-end text-start space-y-3 w-full ">
            <h1 class="font-bold text-xl">Total ₹{totalPrice}</h1>
            <Button on:click={()=> goto("/checkout")} class="rounded-sm  bg-gradient-to-r from-blue-200 to-blue-500 shadow-lg">PLACE ORDER</Button>
        </div>
    </div>
</div>
{:else}
    <div class="w-full space-y-3 my-10 flex flex-col justify-center items-center">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="">
        <h1 class="font-bold text-lg">Your Cart is empty !</h1>
		<a href="/"><Button class="rounded-sm  bg-gradient-to-r from-blue-200 to-blue-500 shadow-lg">CONTINUE SHOPING</Button></a>

    </div>
{/if}