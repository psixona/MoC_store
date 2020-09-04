'use strict'
const shopData = [
    {
        "type": "socks",
        "color": "red",
        "quantity": 10,
        "priceForPair": "$3"
    },
    {
        "type": "socks",
        "color": "green",
        "quantity": 5,
        "priceForPair": "$10"
    },
    {
        "type": "socks",
        "color": "blue",
        "quantity": 8,
        "priceForPair": "$6"
    },
    {
        "type": "hat",
        "color": "red",
        "quantity": 7,
        "price": "$5"
    },
    {
        "type": "hat",
        "color": "green",
        "quantity": 0,
        "price": "$6"
    },
    {
        "type": "socks",
        "color": "blue",
        "priceForPair": "$6"
    },
    {
        "type": "socks",
        "color": "red",
        "quantity": 10,
        "priceForPair": "$3"
    },
    {
        "type": "socks",
        "color": "white",
        "quantity": 3,
        "priceForPair": "$4"
    },
    {
        "type": "socks",
        "color": "green",
        "priceForPair": "$10"
    },
    {
        "type": "socks",
        "color": "blue",
        "quantity": 2,
        "priceForPair": "$6"
    },
    {
        "type": "hat",
        "color": "green",
        "quantity": 3,
        "price": "$5"
    },
    {
        "type": "hat",
        "color": "red",
        "quantity": 1,
        "price": "$6"
    },
    {
        "type": "socks",
        "color": "blue",
        "priceForPair": "$6"
    }
];

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

let numOr0 = n => isNaN(n) ? 0 : n;
let replNum = n => {
    if ((typeof n) !== "undefined") {
        return Number(n.replace(/\D/g, ''));
    }
    return 0
}

window.onload = function () {

    document.body.innerHTML = `<table border=1 id="1">
        <tr> 
            <td> Socks </td>
            <td> Red Hats </td>
            <td> All cost Red </td>
            <td> All cost Blue </td>
            <td> All cost Green </td>
        </tr>
        <tr> 
            <th> ${SocksQuantity} </th>
            <th> ${RedHatsQuantity} </th>
            <th> \$${ColorRed} </th>
            <th> \$${ColorBlue} </th>
            <th> \$${ColorGreen} </th>
        </tr>`;
}

const groupByType = groupBy('type');
const groupByColor = groupBy('color');

let sortedByType = Object.entries(groupByType(shopData));
let socksValues = sortedByType[0][1];
let SortedByColor = Object.entries(groupByColor(shopData));
let ColorsValueRed = SortedByColor[0][1];
let ColorsValueGreen = SortedByColor[1][1];
let ColorsValueBlue = SortedByColor[2][1];
let hadSortedByColor = Object.entries(groupByColor(sortedByType[1][1]));
let redHats = hadSortedByColor[0][1];
let SocksQuantity = socksValues.reduce((a, b) => numOr0(a) + numOr0(b.quantity), {quantity: 0});
let RedHatsQuantity = redHats.reduce((a, b) => numOr0(a) + b.quantity, {quantity: 0});
let ColorRed = ColorsValueRed.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let ColorGreen = ColorsValueGreen.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let ColorBlue = ColorsValueBlue.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
console.log(`Socks - ${SocksQuantity}`);
console.log(`Red Hats - ${RedHatsQuantity}`);
console.log(`Red - \$${ColorRed}, Green - \$${ColorGreen}, Blue - \$${ColorBlue}`);
