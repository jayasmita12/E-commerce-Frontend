

<script>
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Accordion from "$lib/components/ui/accordion";
    import { ChevronRight } from 'lucide-svelte';
    import { Checkbox } from "$lib/components/ui/checkbox";
    import {getCategoryFilter , getProducts} from "$lib/stores/products/productServer.js"

  let checked = false;
  let category = ""
  </script>
  
  <Card.Root  class="w-full">
 
    <!-- //category Filter -->
    <Accordion.Root class="w-full px-4">
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Category Filter</Accordion.Trigger>
          <Accordion.Content class="">
             <button on:click={()=> getCategoryFilter("smartphones")} name="" class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">Smart phones</button>
          </Accordion.Content>
          <Accordion.Content>
            <button on:click={()=> getCategoryFilter("laptops")} class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">Laptops</button>
          </Accordion.Content>
          <Accordion.Content>
            <button on:click={()=> getCategoryFilter("fragrances")} name="fragrances" class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">Fragrances</button>
          </Accordion.Content>
          <Accordion.Content>
            <button on:click={()=> getCategoryFilter("home-decoration")} name="fragrances" class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">Home Decor</button>
          </Accordion.Content>
          <Accordion.Content>
            <button on:click={()=> getProducts("")} name="fragrances" class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">All</button>
          </Accordion.Content>
          
        </Accordion.Item>
    </Accordion.Root>

    <Accordion.Root class="w-full px-4">
        <Accordion.Item value="item-3" class="space-y-0 gap-0">
          <Accordion.Trigger>Price Range</Accordion.Trigger>
          <Accordion.Content class="space-y-3">
            <div class="flex items-center mb-4 space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  High to low
                </Label>
              </div>

              <div class="flex items-center space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 Low to High
                </Label>
              </div>

          </Accordion.Content>
          <Accordion.Content>
            <a href="" class="hover:underline hover:underline-offset-1 hover:text-blue-500 decoration-blue-500">Low to high</a>
            
          </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>

    <Accordion.Root class="w-full px-4">
        <Accordion.Item value="item-1" class="space-y-0 gap-0">
          <Accordion.Trigger>Product Rating</Accordion.Trigger>
          <Accordion.Content class="">
            <div class="flex items-center mb-4 space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  4 & above
                </Label>
              </div>

              <div class="flex items-center mb-4 space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 3 & above
                </Label>
              </div>
              <div class="flex items-center mb-4 space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  2 & above
                </Label>
              </div>

              <div class="flex items-center mb-4 space-x-2">
                <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
                <Label
                  id="terms-label"
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                 1 & above
                </Label>
              </div>
          </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
  </Card.Root>



  
  