import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const {deleteFood} = props;
    return (
      <Col>
        <Card
          title={props.meal.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.meal.image} height={60} alt="meal" />
          <p>Calories: {props.meal.calories}</p>
          <p>Servings:{props.meal.servings}</p>
          <p>
            <b>Total Calories: {props.meal.calories * props.meal.servings} </b> kcal
          </p>
          <Button type="primary" onClick={()=> deleteFood(props.meal.name)}> Delete </Button>
        </Card>
      </Col>
    );
  }

export default FoodBox;
