
import {get , writable} from "svelte/store"
export let products  = writable([])
export let product = writable(null)
export let sortBy = writable("")
export let sortByRating = writable("")
export let showFilterPrice =  writable(false)
export let showFilterCategory =  writable(false)
export let showFilterRating =  writable(false)
