import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
    const { food, setFood, foodData, setFoodData} = props;
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault()
        const newFood = { name, image, calories: Number(calories), servings: Number(servings) }
        const updatedFoodCopy = [...food, newFood];
        const updatedFoodDataCopy = [...foodData, newFood]
        setFood(updatedFoodCopy);
        setFoodData(updatedFoodDataCopy);
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={(event) => setName(event.target.value)} />

        <label>Image</label>
        <Input value={image} type="text" onChange={(event) => setImage(event.target.value)} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={(event) => setCalories(event.target.value)} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={(event) => setServings(event.target.value)} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;