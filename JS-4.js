let output1 = "";
for (let i = 20; i <= 30; i += 0.5) 
{
  output1 += i + " ";
}
alert(output1);


let output2 = "";
for (let i = 10; i <= 100; i += 10) 
{
  let cost = i * 27;
  output2 += i + " доларів коштують " + cost + " гривень\n";
}
alert(output2);


let N = 100;
let output3 = "";
for (let i = 1; i <= 100; i++) 
{
  if (i * i <= N) 
  {
    output3 += i + " ";
  }
}
alert(output3);


let number = 13;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) 
{
  if (number % i === 0) 
  {
    isPrime = false;
    break;
  }
}
alert(number + (isPrime ? " є простим числом" : " не є простим числом"));


let target = 81;
let canGetTarget = false;
for (let i = 0; i <= Math.log(target) / Math.log(3); i++) 
{
  if (Math.pow(3, i) === target) 
  {
    canGetTarget = true;
    break;
  }
}
alert("Число " + target + (canGetTarget ? " можна отримати " : " не можна отримати ") + "шляхом зведення числа 3 у деякий ступінь.");