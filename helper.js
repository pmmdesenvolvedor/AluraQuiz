const storeData = ({ type, key, value }) => {
  if (type && type === 'local') {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

const getStoredData = ({ type, key }) => {
  if (type && type === 'local') {
    return localStorage.getItem(key);
  } else {
    return sessionStorage.getItem(key);
  }
};

export {
  storeData,
  getStoredData
}