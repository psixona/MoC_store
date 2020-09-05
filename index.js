'use strict'
const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

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

let numOr0 = n => isNaN(n) ? 0 : n;
let replNum = n => ((typeof n) !== "undefined") ? Number(n.replace(/\D/g, '')) : 0;

const groupByType = groupBy('type');
const groupByColor = groupBy('color');
const sortedGoodsByType = Object.entries(groupByType(shopData)); // Sort Goods by Type
const allSocks = sortedGoodsByType[0][1];  // Take all goods by type socks
const sortedGoodsByColor = Object.entries(groupByColor(shopData)); // Sort all Goods by colors
const colorsValueRed = sortedGoodsByColor[0][1]; // Sort all Goods by color red
const colorsValueGreen = sortedGoodsByColor[1][1]; // Sort all Goods by color green
const colorsValueBlue = sortedGoodsByColor[2][1]; // Sort all Goods by color blue
const hatsSortedGoodsByColor = Object.entries(groupByColor(sortedGoodsByType[1][1])); // Take all hats by colors
const redHats = hatsSortedGoodsByColor[0][1]; // Take all hats by color red
let socksQuantity = allSocks.reduce((a, b) => numOr0(a) + numOr0(b.quantity), {quantity: 0}); // Calculating the number of socks in the product list
let redHatsQuantity = redHats.reduce((a, b) => numOr0(a) + b.quantity, {quantity: 0}); // Calculating the number of red Hats in the product list
let priceOfGoodsWithColorRed = colorsValueRed.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
}); // Calculating the total cost of red items
let priceOfGoodsWithColorGreen = colorsValueGreen.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
}); // Calculating the total cost of green items
let priceOfGoodsWithColorBlue = colorsValueBlue.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
}); // Calculating the total cost of blue items
console.log(`Socks - ${socksQuantity}`);
console.log(`Red Hats - ${redHatsQuantity}`);
console.log(`Red - \$${priceOfGoodsWithColorRed}, Green - \$${priceOfGoodsWithColorGreen}, Blue - \$${priceOfGoodsWithColorBlue}`);
