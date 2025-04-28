const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

 const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    // console.log('hello')
    alert("This id Already exist ");
  } else {
    storedBookData.push(id);
    // console.log(storedBookData)
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList",data);

  }
};

//export to BooksDetails
export { addToStoreDB, getStoredBook };
