import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {
    const { filterFoodList } = props;
    const [ mealName, setMealName ] = useState("")

    const handleSearch = e => {
        setMealName(e.target.value);
        filterFoodList(e.target.value)
      };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={mealName} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
