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
const sortedGoodsByType = Object.entries(groupByType(shopData));
const takeAllSocks = sortedGoodsByType[0][1];
const sortedGoodsByColor = Object.entries(groupByColor(shopData));
const colorsValueRed = sortedGoodsByColor[0][1];
const colorsValueGreen = sortedGoodsByColor[1][1];
const colorsValueBlue = sortedGoodsByColor[2][1];
const hatsSortedGoodsByColor = Object.entries(groupByColor(sortedGoodsByType[1][1]));
const takeAllRedHats = hatsSortedGoodsByColor[0][1];
let socksQuantity = takeAllSocks.reduce((a, b) => numOr0(a) + numOr0(b.quantity), {quantity: 0});
let takeAllRedHatsQuantity = takeAllRedHats.reduce((a, b) => numOr0(a) + b.quantity, {quantity: 0});
let priceOfGoodsWithColorRed = colorsValueRed.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let priceOfGoodsWithColorGreen = colorsValueGreen.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let priceOfGoodsWithColorBlue = colorsValueBlue.reduce((a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair)), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
console.log(`Socks - ${socksQuantity}`);
console.log(`Red Hats - ${takeAllRedHatsQuantity}`);
console.log(`Red - \$${priceOfGoodsWithColorRed}, Green - \$${priceOfGoodsWithColorGreen}, Blue - \$${priceOfGoodsWithColorBlue}`);
