

<script lang="ts">
    // @ts-nocheck
        import * as Card from "$lib/components/ui/card";
        import {Button} from "$lib/components/ui/button";
        import {cart} from "$lib/stores/cart/cartStore.js"
        import { Label } from "$lib/components/ui/label";
        import { Input } from "$lib/components/ui/input";
        import * as RadioGroup from "$lib/components/ui/radio-group";
        import { paymentDetails } from "$lib/stores/payment/paymentStore.js";
        import { checkout } from "$lib/stores/payment/paymentService.js";
        import {goto} from "$app/navigation"
        import * as Dialog from "$lib/components/ui/dialog";
    
    
        $:totalPrice = $cart?.reduce((sum, e) => {
        return (sum + e.price)
    }, 0);
    </script>
    
    <Card.Root class=" mt-6  max-w-lg mx-auto border-0 sm:border-[1px]  p-0 ">
        <div>
    
            <Card.Header>
                <h3 class=" text-xl font-medium text-[#535353]">Payment Methods</h3>
            </Card.Header>
            <Card.Content class="grid gap-6">
                <RadioGroup.Root value="card" class="grid grid-cols-3 gap-4">
                    <Label
                        for="card"
                        class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                        <RadioGroup.Item
                            value="card"
                            id="card"
                            class="sr-only"
                            aria-label="Card"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="mb-3 h-6 w-6"
                        >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <path d="M2 10h20" />
                        </svg>
                        Card
                    </Label>
                    <Label
                        for="paypal"
                        class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                        <RadioGroup.Item
                            value="paypal"
                            id="paypal"
                            class="sr-only"
                            aria-label="Paypal"
                        />
                        <img src="/star/paypal.png" class="w-5 h-5" alt="">
                        Paypal
                    </Label>
                    <Label
                        for="apple"
                        class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                        <RadioGroup.Item
                            value="apple"
                            id="apple"
                            class="sr-only"
                            aria-label="Apple"
                        />
                        <img src="/star/apple.png" class="w-5 h-5" alt="">
                        Apple
                    </Label>
                </RadioGroup.Root>
                <div class="grid gap-2">
                    <Label for="name">Name</Label>
                    <Input id="name" type="text" placeholder="First Last" bind:value={$paymentDetails.firstName} />
                </div>
                <div class="grid gap-2">
                    <Label for="address">Address</Label>
                    <Input id="address" type="text" placeholder="Address" bind:value={$paymentDetails.address} />
                </div>
                <div class="grid gap-2">
                    <Label for="city">City</Label>
                    <Input id="city" type="text" placeholder="City" bind:value={$paymentDetails.city} />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="grid gap-2">
                        <Label for="pin">Pincode</Label>
                    <Input id="pin" type="number" placeholder="PIN" bind:value={$paymentDetails.pin} /> 
                    </div>
                    <div class="grid gap-2">
                        <Label for="mobile">Mobile</Label>
                        <Input id="mobile" type="number" placeholder="phone" bind:value={$paymentDetails.phone} /> 
                    </div>
                </div>
                <div class="grid gap-2">
                    <Label for="number">Card number</Label>
                    <Input id="number" type="number" placeholder="**** **** **** ****" bind:value={$paymentDetails.cardNumber} /> 
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="grid gap-2">
                        <Label for="month">Expires</Label>
                    <Input id="month" type="number" placeholder="MM" bind:value={$paymentDetails.month} /> 
                    </div>
                    <div class="grid gap-2">
                        <Label for="year">Year</Label>
                        <Input id="year" type="number" placeholder="YYYY" bind:value={$paymentDetails.year} /> 
                    </div>
                    <div class="grid gap-2">
                        <Label for="cvv">CVV</Label>
                        <Input id="cvv" type="number" placeholder="CVV" bind:value={$paymentDetails.cvv} />
                    </div>
                </div>
            </Card.Content>
            <Card.Footer class="w-full flex flex-col   space-y-3 sm:space-y-0 sm:flex-row">
                <Button on:click={()=> goto("/cart")} variant="outline" class="order-2 sm:order-1 mt-3 sm:mt-0  h-14 w-full sm:w-32 text-lg font-semibold bg-background">Back</Button>
        
<Dialog.Root>
    <Dialog.Trigger class="w-full" >
                <Button  disabled={!$paymentDetails.cardNumber ||
                    !$paymentDetails.month ||
                    !$paymentDetails.year ||
                    !$paymentDetails.cvv} on:click={()=>checkout(totalPrice)}   class="rounded-lg flex  w-full h-14 text-sm sm:text-lg text-[#FFF6E4]" style="box-shadow: 1px 1px 2px 0px #3A3A3A54 ; background: linear-gradient(180deg, #EFA71C 0%, #E89A6E 100%);">
                    Confirm payment of ₹{totalPrice.toLocaleString()}.00
                 </Button>
                </Dialog.Trigger >
                <Dialog.Content class="mx-auto rounded-xl w-[90%]"> 
                    <div class="flex flex-col h-[50vh] justify-center items-center  space-y-3">
                        <img class="w-20 h-20" src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"  alt="gif">
                        <h1 class="flex self-center font-bold text-xl">Payment Success</h1>
				        <Button on:click={()=>goto("/")} class="rounded-sm h-9 p-2 sm:p-4 sm:h-8 mb-5 mx-2 bg-gradient-to-l from-blue-200 to-blue-500 shadow-lg">CONTINUE SHOPPING</Button>

                    </div>
                </Dialog.Content>
                 </Dialog.Root>
            </Card.Footer>
        </div>
    </Card.Root>