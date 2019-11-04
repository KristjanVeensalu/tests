import React from "react";
import test1Example from "./test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

const Test1 = () => {
  let sum = 0;
  ITEMS.forEach(item => {
    sum+= item.price;
  });
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
        <ul>
          {ITEMS.map(item => (
            <li key = {item.name}>
              <div>Name: {item.name} Price: {item.price}</div>
            </li>
            ))}
        </ul>
      </div>
      <div><span className={"bold"}>Summa kokku: {sum}  </span> </div>
    </div>
  );
};

export default Test1;
