function* Foo() {
    console.log('start');
    yield 1;
    yield 2;
    yield 3;
    console.log('finish');
  }
  
  let iterator = Foo();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().done);  // false
  
  function* Boo() {
    console.log('start');
    yield 1;
    yield 2;
    yield 3;
    console.log('finish');
  }
  
  iterator = Boo();
  console.log(iterator.next().value); // 1
  console.log(iterator.next().done);  // false  