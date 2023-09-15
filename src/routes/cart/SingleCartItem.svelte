<script>
    import {cart } from "$lib/stores/cart/cartStore.js"
    import { Minus, MinusCircle, PlusCircle , Plus } from "lucide-svelte";
	import { Button } from '$lib/components/ui/button';
    import {removeItemFromCart , getCart } from "$lib/stores/cart/cartService.js"
    export let data
    $: quantity = 1;
	let StartPrice = data.price;
	let UpdatePrice = data.price;

    function increaseQuantity() {
        quantity = quantity + 1
        UpdatePrice = Number(StartPrice) * quantity;
        $cart.map((e)=>{
            if(e.id === data.id){
                e.price = UpdatePrice
                e.quantity = quantity
            }
        })
        localStorage.setItem("cartItems" , JSON.stringify($cart))
        getCart()
    }

    function decreaseQuantity() {
        if(quantity > 1){
            quantity = quantity - 1
        }
        UpdatePrice = Number(StartPrice) * quantity;
        getCart()
    }
</script>



<div class=" border-[1px] shadow-sm rounded-sm border-gray-200 flex space-x-2 p-3">
    <div class="flex w-32 sm:w-24 h-auto">
        <img src={data.thumbnail} class=" w-full h-full rounded-sm" alt="img">
    </div>
    
    <div class="w-full flex flex-col sm:flex-row sm:space-x-4 justify-between">
        <div class="w-full space-y-1 sm:w-[50%] ">
            <p class="font-bold">{data.title}</p>
            <p class="line-clamp-2 max-w-sm">{data.description}</p>
            <h1 class="font-bold text-sm sm:text-lg">₹ {UpdatePrice}<span class="text-[10px] sm:text-sm font-normal">MRP  <del>₹1002</del>  </span> </h1>

        </div>

        <div class="flex justify-between  sm:self-center sm:w-[50%]">
            <div class="flex self-center space-x-2">
                <button on:click={decreaseQuantity} class="rounded-full bg-gradient-to-l w-6 h-6 flex justify-center from-blue-100 to-blue-300 shadow-lg"><Minus class="w-4 h-4 flex self-center"/></button> 
                {#if data.hasOwnProperty("quantity")}
                    <p class="flex self-center">{data.quantity}</p>
                {:else}
                <p class="flex self-center">{quantity}</p>
                {/if}
             <button on:click={increaseQuantity} class="rounded-full bg-gradient-to-l w-6 h-6 flex justify-center from-blue-100 to-blue-300 shadow-lg"> <Plus class="w-4 h-4 flex self-center"/></button> 
            </div>

            <div class="flex sm:self-end">
                <Button on:click={()=> removeItemFromCart(data.id)} class="rounded-sm h-7  bg-gradient-to-l from-red-300 to-red-500 shadow-lg">Remove</Button>
            </div>
        </div>
    </div>
</div>