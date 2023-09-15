<script>
    let products = [
      { name: "Product 1", price: 50, rating: 4 },
      { name: "Product 2", price: 30, rating: 3 },
      { name: "Product 3", price: 70, rating: 4 },
      { name: "Product 4", price: 40, rating: 2 },
      // Add more products here
    ];
  
    let selectedPriceFilter = "";
    let selectedRatingFilter = "";
  
    // Function to filter products based on price and rating
    function filterProducts() {
      let filteredProducts = [...products];
  
      // Apply price filter
      if (selectedPriceFilter === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (selectedPriceFilter === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      }
  
      // Apply rating filter
      if (selectedRatingFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.rating >= parseInt(selectedRatingFilter)
        );
      }
  
      return filteredProducts;
    }
  
    // Function to handle price filter selection
    function handlePriceFilter(filter) {
      if (selectedPriceFilter === filter) {
        selectedPriceFilter = "";
      } else {
        selectedPriceFilter = filter;
      }
    }
  
    // Function to handle rating filter selection
    function handleRatingFilter(filter) {
      selectedRatingFilter = filter;
    }
  </script>
  
  <div>
    <!-- Price filter buttons -->
    <div>
      <button on:click={() => handlePriceFilter("highToLow")} class:active={selectedPriceFilter === "highToLow"}>
        High to Low
      </button>
      <button on:click={() => handlePriceFilter("lowToHigh")} class:active={selectedPriceFilter === "lowToHigh"}>
        Low to High
      </button>
    </div>
  
    <!-- Rating filter buttons -->
    <div>
      <button on:click={() => handleRatingFilter("4")} class:active={selectedRatingFilter === "4"}>
        4 & above
      </button>
      <button on:click={() => handleRatingFilter("3")} class:active={selectedRatingFilter === "3"}>
        3 & above
      </button>
      <button on:click={() => handleRatingFilter("2")} class:active={selectedRatingFilter === "2"}>
        2 & above
      </button>
      <button on:click={() => handleRatingFilter("1")} class:active={selectedRatingFilter === "1"}>
        1 & above
      </button>
    </div>
  </div>
  
  <div>
    <!-- Product list -->
    {#each filterProducts() as product (product.name)}
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating} stars</p>
      </div>
    {/each}
  </div>
  
  <style>
    .active {
      background-color: #007bff;
      color: #fff;
    }
  </style>
  