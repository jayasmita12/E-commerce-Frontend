<script>
    import { ChevronDown } from 'lucide-svelte';
    import {showFilterCategory , showFilterRating , showFilterPrice} from "$lib/stores/products/productStore.js"

</script>

<div class="flex space-x-3 justify-center p-2 border-b-[0.5px] lg:hidden">
    <button on:click={()=> {$showFilterCategory=true , $showFilterRating = false , $showFilterPrice = false}} class="rounded-full px-2 flex self-center space-x-2 border-[1px]"><p>Category</p> <span class="flex self-center pt-[2px]"><ChevronDown class=" w-4 "/></span></button>
    <button on:click={()=>{ $showFilterPrice=true , $showFilterCategory=false , $showFilterRating = false} } class="rounded-full px-2 flex self-center space-x-2 border-[1px]"><p>Price</p> <span class="flex self-center pt-[2px]"><ChevronDown class=" w-4 "/></span></button>
    <button on:click={()=>{ $showFilterRating=true , $showFilterCategory=false , $showFilterPrice =false }} class="rounded-full px-2 flex self-center space-x-2 border-[1px]"><p>Rating</p> <span class="flex self-center pt-[2px]"><ChevronDown class=" w-4 "/></span></button>
</div>