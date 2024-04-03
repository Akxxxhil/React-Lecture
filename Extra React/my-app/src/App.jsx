import { useState } from 'react';
import Cards from './Components/Cards';
import Heading from './Components/Heading';
import './App.css';

const restaurants = [
  { name: "Nandan Hotel", bestFood: "edli", id: 1 },
  { name: "MayFair Restro", bestFood: "puri", id: 2 },
  { name: "Cafe sun Downer", bestFood: "sweets", id: 3 },
  { name: "PathSala Resturant", bestFood: "ice-cream", id: 4 }
];

function App() {
  const [restro, setRestro] = useState(restaurants);
  
  const filterRestaurants = (searchInput) => {
    const filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setRestro(filteredRestaurants);
  };

  return (
    <>
      <Heading filterRestaurants={filterRestaurants} />
      <div className="heading">
        {restro.map((restaurant) => (
          <Cards name={restaurant.name} bestFood={restaurant.bestFood} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}

export default App;
