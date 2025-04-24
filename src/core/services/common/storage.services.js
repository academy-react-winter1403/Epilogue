const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
<<<<<<< HEAD
  if(localStorage.getItem(key)){
    return JSON.parse(localstorage.getItem(key))
  }return false
=======
  if (localStorage.getItem(key)) return JSON.parse (localStorage.getItem(key));
>>>>>>> a84d81b8f5eff428f8bb6dab8c8b69153ccfe8fc
};


const getItemGeneric = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  if (getItem(key) === true) {
    localStorage.removeItem(key);
  };
};

const clearStorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  setItemGeneric,
  getItemGeneric,
};
