import React from "react";
import PropTypes from 'prop-types'

function Food( {name, picture, rating} ) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'a',
    image: 'http://127.0.0.1:4000/images/abc.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'b',
    image: 'http://127.0.0.1:4000/images/abc.jpeg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'c',
    image: 'http://127.0.0.1:4000/images/abc.jpeg',
    rating: 3.5,
  }
];

function App() {
  return (
  <div>
    {foodLike.map(food=> (
      <Food key={food.id} name={food.name} picture={food.image} rating={food.rating} />
    ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;

// JSX = JS + HTML 조합