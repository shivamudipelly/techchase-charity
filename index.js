// Fetch all products from the DummyJSON API
fetch('https://dummyjson.com/products')
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Log the entire response data
    console.log('All Products:', data.products);

    // Display each product's title and price
    data.products.forEach((product) => {
      console.log(`Title: ${product.title}, Price: $${product.price}`);
    });
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching products:', error);
  });
