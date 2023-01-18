import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const filterFoodList = (str) => {
    let filteredFoods;
    if (str === "") {
      filteredFoods = foodData;
    } else {
      filteredFoods = foodData.filter((meal) => {
        return meal.name.toLowerCase() === str.toLowerCase();
      });
    }
  setFood(filteredFoods);
  }
  
  const deleteFood = (name) => {
    const copyOfFood = [...food]
    const filteredFood = copyOfFood.filter(meal => meal.name !== name)
    setFood(filteredFood)
}

  return (
    <div className="App">
       <Search filterFoodList={filterFoodList} />
      {food.map( meal => {
        return (
          <FoodBox meal={meal} deleteFood={deleteFood}/>
        );
      })}
      <AddFoodForm food={food} setFood={setFood} foodData={foodData} setFoodData={setFoodData}/>
     
    </div>
  );
}
export default App;
