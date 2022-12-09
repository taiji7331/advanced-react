function DessertsList(props) {
  const dessertList = props.data.filter((dessert) => {
    return dessert.calories < 500;
  }).sort((dessertA, dessertB) => {
    return dessertA.calories - dessertB.calories;
  }).map((dessert) => {
    return <li>{dessert.name} - {dessert.calories} cal</li>
  });
  return <ul>
    {dessertList}
  </ul>;
}

export default DessertsList;
