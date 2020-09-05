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
const calculationSum = (a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair));
const calculationSum2 = (a, b) => numOr0(a) + numOr0(b.quantity);

let numOr0 = n => isNaN(n) ? 0 : n;
let replNum = n => ((typeof n) !== "undefined") ? Number(n.replace(/\D/g, '')) : 0;

const groupByType = groupBy('type');
const groupByColor = groupBy('color');

let sortedGoodsByType = groupByType(shopData);
let sortedGoodsByColor = groupByColor(shopData);
let hatsSortedGoodsByColor = groupByColor(sortedGoodsByType['hat']);

let takeAllSocks = sortedGoodsByType['socks'];
let takeAllRedHats = hatsSortedGoodsByColor['red'];
let colorsValueRed = sortedGoodsByColor['red'];
let colorsValueGreen = sortedGoodsByColor['green'];
let colorsValueBlue = sortedGoodsByColor['blue'];

let socksQuantity = takeAllSocks.reduce((a, b) => calculationSum2(a, b), {quantity: 0});
let takeAllRedHatsQuantity = takeAllRedHats.reduce((a, b) => calculationSum2(a, b), {quantity: 0});
let priceOfGoodsWithColorRed = colorsValueRed.reduce((a, b) =>  calculationSum(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let priceOfGoodsWithColorGreen = colorsValueGreen.reduce((a, b) =>  calculationSum(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let priceOfGoodsWithColorBlue = colorsValueBlue.reduce((a, b) =>  calculationSum(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
console.log(`Socks - ${socksQuantity}`);
console.log(`Red Hats - ${takeAllRedHatsQuantity}`);
console.log(`Red - \$${priceOfGoodsWithColorRed}, Green - \$${priceOfGoodsWithColorGreen}, Blue - \$${priceOfGoodsWithColorBlue}`);
