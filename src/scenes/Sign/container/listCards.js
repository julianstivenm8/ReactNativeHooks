const Items = [
    { text: 'Fruits' },
    { text: 'Bread' },
    { text: 'Drinks' },
    { text: 'Veggies' },
    { text: 'Meat' },
    { text: 'Paper Goods' }
];

// Inside the render function replace <Categories /> with

{
    items.map((category, index) => (
        <Categories name={category.text} key={index} />
    ));
}