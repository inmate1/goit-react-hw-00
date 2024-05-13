import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Product } from './components/App-product/App-product';
import { Mailbox } from './components/App-message/App-message';
import AppButton from './components/App-button/App-button';
import ClickCounter from './components/ClickCounter/ClickCounter';
import NewObject from './components/NewObject/NewObject';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="app">
      <div>
        <h1>Best selling</h1>

        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div>
      <Mailbox />
      <AppButton />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <NewObject/>
    </div>
  );
}
