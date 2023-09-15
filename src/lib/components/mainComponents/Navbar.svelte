<script>
    import * as Avatar from "$lib/components/ui/avatar";
    import { Bell , ShoppingCart , Menu} from 'lucide-svelte';
    import {cart} from "$lib/stores/cart/cartStore.js"
    import {getCart} from "$lib/stores/cart/cartService.js"
    import {browser} from "$app/environment"
    if(browser){
        if(JSON.parse(localStorage.getItem("cartItems")) !== null){
            console.log(JSON.parse(localStorage.getItem("cartItems")))
            $cart = JSON.parse(localStorage.getItem("cartItems"))
        }
    }
</script>
 

<nav class="flex justify-between border-b-[1px] place-items-center p-2">
    <div class="flex lg:hidden">
        <Menu/>
    </div>
    <a href="/" class="flex">
        <img class="w-14 rounded-full  h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8pMR52jWVoIqZuPvod1LCy9j7f6PxtRfOdn1azpT5198f9TSC37VMtqm0K0DQQzzius&usqp=CAU" alt="">
        <h1 class="flex self-center font-bold italic">SHOPFLY</h1>
    </a>
    <div class="flex space-x-3">
        <div class="flex self-center">
            <Bell/>
        </div>
        <a href="/cart" class="flex self-center relative">
           <ShoppingCart/>
           {#if $cart.length > 0}
                <div class="rounded-full w-4 h-4 text-[10px] grid place-items-center text-white bg-red-500 absolute -top-2 -right-1">{$cart.length}</div>
            {/if}
        </a >
        <Avatar.Root>
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </div>
</nav>