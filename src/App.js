import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: "laptop", price: 53000},
    {name: "iphone", price: 75000},
    {name: "watch", price: 33000},
    {name: "tablet", price: 9000},
    {name: "sunglass", price: 5900},
  ];
  return (
    <section className="App">
      <section className="grid">
        {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      </section>
      
      <Counter></Counter>

      <section>
        <ExternalUsers></ExternalUsers>
      </section>
    </section>
  );
}

function Product(props) {
  return (
    <article className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </article>
  );
}

function ExternalUsers() {
  const [usersArr, setUsers] = useState([]);
  // setting up usersArr using setUsers function call inside useEffect React Method. [] is for preventing useEffect(()=>{},[]) from infinite looping.
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{usersArr.length}</p>
      <section className="grid">
        {
          usersArr.map(user => <User name={user?.name} email={user?.email} phone={user?.phone} company={user?.company?.name}></User>)
        }
      </section>
    </div>
  )
}

// loading user by creating User custom react component <User></User>
function User(props) {
  return (
    <article style={{border: "2px solid red"}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Company: {props.company}</p>
    </article>
  )
}

// here is how conter funtion works with <Counter></Counter> component
function Counter() {
  let [count, setCount] = useState(0);
  const increaseCount = () => setCount(++count);
  const decreaseCount = () => {
    if (count > 0) setCount(--count);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
