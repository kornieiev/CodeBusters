const storageFieldName = 'shoppingList';

export const checkIdInStorage = id => {
  const data = localStorage.getItem(storageFieldName);
  if (!data) {
    return false;
  }
  const parsedData = JSON.parse(data);
  if (parsedData.some(item => item === id)) {
    return true;
  }
  return false;
};

export const addToStorage = id => {
  const data = localStorage.getItem(storageFieldName);
  if (!data) {
    const arr = [];
    arr.push(id);
    localStorage.setItem(storageFieldName, JSON.stringify(arr));
    return;
  }
  if (checkIdInStorage(id)) {
    return;
  }
  const parsedData = JSON.parse(data);
  parsedData.push(id);
  localStorage.setItem(storageFieldName, JSON.stringify(parsedData));
};

export const getStoredItems = () => {
  const data = localStorage.getItem(storageFieldName);
  if (!data) {
    return false;
  }
  const parsedData = JSON.parse(data);
  return parsedData;
};

export const deleteFromStorage = id => {
  const data = localStorage.getItem(storageFieldName);
  if (!data) {
    return false;
  }
  let parsedData = JSON.parse(data);
  parsedData = parsedData.filter(item => item != id);
  console.log(parsedData);
  localStorage.setItem(storageFieldName, JSON.stringify(parsedData));
  return true;
};
