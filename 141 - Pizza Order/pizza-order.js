export function pizzaPrice(pizza, ...extras) {
    let priceItems = {
        'Caprese': 9,
        'Margherita': 7,
        'Formaggio': 10,
        'ExtraSauce': 1,
        'ExtraToppings': 2,
    }
    if (extras.length == 0) {
        return priceItems[pizza]
    } else {
        let extra = extras.shift();
        return priceItems[extra] + pizzaPrice(pizza, ...extras);
    }
}

export function orderPrice(pizzaOrders) {
    if (pizzaOrders.length == 0) {
        return 0
    } else {
        return pizzaOrders.reduce((result, order) => result + pizzaPrice(order.pizza, ...order.extras), 0);
    }
}