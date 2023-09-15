import {get , writable} from "svelte/store"
export let cart = writable([])
export let quantity = writable(1)