// pizza order to go!

let orderCount = 0;

const takeOrder = (topping,topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}`);
    orderCount++;
}
takeOrder("pepperoni", "ham");
