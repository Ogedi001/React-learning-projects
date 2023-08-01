import styles from './AvailableMeals.module.css'
import Card from '../UI/Card/Card';
import MealsItem from './MealsItem/MealsItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const MealsList = DUMMY_MEALS.map(meal => meal)
console.log(MealsList)
const AvailableMeals = props => {

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    <MealsItem mealslist={MealsList[0]} />
                    <MealsItem mealslist={MealsList[1]} />
                    <MealsItem mealslist={MealsList[2]} />
                    <MealsItem mealslist={MealsList[3]} />
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals