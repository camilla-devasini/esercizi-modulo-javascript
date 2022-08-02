function createStore() {
  let store = [];
  return function(product) {
    store.push(product);
    console.log("Updated store");
    for (let i= 0; i < store.length; i++) {
    console.log(`${store[i].id} ${store[i].name}`);
    }
    }
  }

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };


console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
