import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import sushi from '../../assets/sushi.jpeg';
import biryani from '../../assets/biryani.jpeg';
import bbBurger from '../../assets/burger.jpeg';
import curdRice from '../../assets/curdRice.jpeg';
import chicken65 from '../../assets/chicken 65.jpeg';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    img : sushi,
  },
  {
    id: 'm2',
    name: 'Hyderabadi Biryani',
    description: 'A Hyderabad specialty!',
    price: 16.5,
    img: biryani,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    img: bbBurger,
  },
  {
    id: 'm4',
    name: 'CurdRice Bowl',
    description: 'Healthy...and Hygine...',
    price: 18.99,
    img:curdRice,
  },
  {
    id:'m5',
    name: "Chicken 65",
    description:"One Of The Best Starter",
    price: 23.80,
    img : chicken65,
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img = {meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
