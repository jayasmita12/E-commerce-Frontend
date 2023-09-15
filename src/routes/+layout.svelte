<script>
	import '../app.postcss';
	import Navbar from '$lib/components/mainComponents/Navbar.svelte';
	import SubNav from '$lib/components/mainComponents/SubNav.svelte';
</script>


<div  class=" min-h-screen">
<div class="max-w-screen-xl  mx-auto w-full h-full" >
	<Navbar/>
	<SubNav/>
	<slot />
</div>
</div>


