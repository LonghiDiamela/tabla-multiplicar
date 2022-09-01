import "./styles.css";

let num:number=Number(prompt("que tabla desea visualizar"));
let limit:number=Number(prompt("hasta que numero"));
let result:number=0

for (let i:number=1; i< limit;i++){
  result=num*i 
  console.log(`${num} x ${i}= ${i*num}`); 
}
