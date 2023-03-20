import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products = [
  //   {name: "laptop", price: 53000},
  //   {name: "iphone", price: 75000},
  //   {name: "watch", price: 33000},
  //   {name: "tablet", price: 9000},
  //   {name: "sunglass", price: 5900},
  // ];
  return (
    <section className="App grid">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      <Counter></Counter>
    </section>
  );
}

// function Product(props) {
//   return (
//     <article className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </article>
//   );
// }

function Counter() {
  let [count, setCount] = useState(0);
  const increaseCount = () => setCount(++count);
  const decreaseCount = () => setCount(--count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
