function Boo() {
  let index = 0;
  const values = [1, 2, 3];

  return {
    next: function() {
      if (index < values.length) {
        return { done: false, value: values[index++] };
      } else {
        return { done: true };
      }
    }
  };
}

const iterator = Boo();
console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true