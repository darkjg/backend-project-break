const basicInfo = require('./basicInfo');
const components = require('./components');
const products = require('./Products');

module.exports = {
    ...basicInfo,
    ...components,
    ...products
};