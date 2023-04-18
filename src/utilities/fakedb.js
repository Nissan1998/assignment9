// use local storage to manage cart data
const addToDb = (id) => {
  let appliedJob = getAppliedJob();
  // add quantity
  const quantity = appliedJob[id];
  if (!quantity) {
    appliedJob[id] = 1;
  } else {
    const newQuantity = quantity;
    appliedJob[id] = newQuantity;
  }
  localStorage.setItem("appliedJob", JSON.stringify(appliedJob));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getAppliedJob = () => {
  let appliedJob = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("appliedJob");
  if (storedCart) {
    appliedJob = JSON.parse(storedCart);
  }
  return appliedJob;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("appliedJob");
};

export { addToDb, removeFromDb, getAppliedJob, deleteShoppingCart };
