function removeElement(array, item) {
  
    const index = array.indexOf(item);
    
    if (index !== -1) {
        array.splice(index, 1);
        alert("Елемент " + item + " був видалений.");
    } else {
        alert("Елемент " + item + " не знайдено.");
    }
}

const array = [11, 22, 33, 44, 55, 66, 77];
removeElement(array, 44);
console.log(array);