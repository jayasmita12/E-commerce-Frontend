<script>
    import * as Avatar from "$lib/components/ui/avatar";
    import { Bell , ShoppingCart , Menu} from 'lucide-svelte';
</script>
 

<nav class="flex justify-between border-b-[1px] place-items-center p-2">
    <div class="flex lg:hidden">
        <Menu/>
    </div>
    <div class="flex">
        <img class="w-14 rounded-full  h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8pMR52jWVoIqZuPvod1LCy9j7f6PxtRfOdn1azpT5198f9TSC37VMtqm0K0DQQzzius&usqp=CAU" alt="">
        <h1 class="flex self-center font-bold italic">SHOPFLY</h1>
    </div>
    <div class="flex space-x-3">
        <div class="flex self-center">
            <Bell/>
        </div>
        <div class="flex self-center">
           <ShoppingCart/>
        </div>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </div>
</nav>