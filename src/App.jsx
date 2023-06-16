import {puppyList} from './data.js';
import { useState } from 'react'
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppy) {
    setFeatPupId(puppy.id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  
  return (
    <div className="root">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
