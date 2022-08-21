const order = {
  customer: "vao",
  name: "ciao",
    address: {
      region: "lombardia",
    }};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// } 
// can be written ina a clearer way using optional chaining:

if (!order?.customer?.address?.city) {
  console.log('City is required');

}

