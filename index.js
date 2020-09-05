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

const calculationSumOfTotalCost = (a, b) => numOr0(a) + Number(numOr0(b.quantity) * replNum(b.price)) + Number(numOr0(b.quantity) * replNum(b.priceForPair));
const calculationSumQuantity = (a, b) => numOr0(a) + numOr0(b.quantity);

let numOr0 = n => isNaN(n) ? 0 : n;
let replNum = n => ((typeof n) !== "undefined") ? Number(n.replace(/\D/g, '')) : 0;

const groupByType = groupBy('type');
const groupByColor = groupBy('color');

let sortedGoodsByType = groupByType(shopData);
let sortedGoodsByColor = groupByColor(shopData);
let sortedHatsByColor = groupByColor(sortedGoodsByType['hat']);

let allSocks = sortedGoodsByType['socks'];
let allRedHats = sortedHatsByColor['red'];
let allGoodsByRedColor = sortedGoodsByColor['red'];
let colorsValueGreen = sortedGoodsByColor['green'];
let colorsValueBlue = sortedGoodsByColor['blue'];

let socksQuantity = allSocks.reduce((a, b) => calculationSumQuantity(a, b), {quantity: 0});
let allRedHatsQuantity = allRedHats.reduce((a, b) => calculationSumQuantity(a, b), {quantity: 0});
let costGoodsByColorRed = allGoodsByRedColor.reduce((a, b) =>  calculationSumOfTotalCost(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let costGoodsByColorGreen = colorsValueGreen.reduce((a, b) =>  calculationSumOfTotalCost(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});
let costGoodsByColorBlue = colorsValueBlue.reduce((a, b) =>  calculationSumOfTotalCost(a, b), {
    quantity: 0,
    price: 0,
    priceForPair: 0
});

console.log(`Socks - ${socksQuantity}`);
console.log(`Red Hats - ${allRedHatsQuantity}`);
console.log(`Red - \$${costGoodsByColorRed}, Green - \$${costGoodsByColorGreen}, Blue - \$${costGoodsByColorBlue}`);
