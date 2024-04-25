import {useLoaderData} from 'react-router-dom'
import './App.css'
import DisplayCoffee from './DisplayCoffee';
import { useState } from 'react';

function App() {
  const coffeeLoaded=useLoaderData();
  const [coffee,setCoffee]=useState(coffeeLoaded);
  console.log(coffee);

  return (
    <div className='container mx-auto'>
      <div>
        
          <h1 className="text-center my-5 text-4xl font-semibold">Take your coffee</h1>
      </div>
      <div className='grid grid-cols-2 gap-5 mb-10'>
        {
          coffee.map(aCoffee=><DisplayCoffee
             key={aCoffee._id}
             aCoffee={aCoffee}
             coffee={coffee}
             setCoffee={setCoffee}
             
             ></DisplayCoffee>)
        }
      </div>
    </div>
  )
}

export default App
