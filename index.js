var default_1 = (function () {
    function default_1() {
    }
    default_1.prototype.number = function (min, max) {
        if (min >= max) {
            console.error(min + " is grater then " + max + " but must be less");
            process.exit();
        }
        return Math.floor(Math.random() * (max - min)) + min;
    };
    default_1.prototype.genOne = function (min, max) {
        return this.number(min, max);
    };
    default_1.prototype.genMany = function (min, max, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var count = [];
        for (var i = 0; i < quantity; i++) {
            count.push(this.number(min, max));
        }
        return count;
    };
    default_1.prototype.genDate = function (min, max) {
        var minI = Date.parse(String(min));
        var maxI = Date.parse(String(max));
        if (minI >= maxI) {
            console.error(min + " is later then " + max + " but must be earlier");
            process.exit();
        }
        return new Date(this.number(minI, maxI));
    };
    default_1.prototype.genManyDate = function (min, max, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var minI = Date.parse(String(min));
        var maxI = Date.parse(String(max));
        if (minI >= maxI) {
            console.error(min + " is later then " + max + " but must be earlier");
            process.exit();
        }
        var count = [];
        for (var i = 0; i < quantity; i++) {
            var d = new Date(this.number(minI, maxI));
            count.push(d);
        }
        return count;
    };
    default_1.prototype.genFloat = function (min, max, decimalPlaces) {
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        if (min >= max) {
            console.error(min + " is grater then " + max + " but must be less");
            process.exit();
        }
        return Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    };
    default_1.prototype.genManyFloat = function (min, max, decimalPlaces, quantity) {
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        if (quantity === void 0) { quantity = 10; }
        var count = [];
        for (var i = 0; i < quantity; i++) {
            count.push(this.genFloat(min, max, decimalPlaces));
        }
        return count;
    };
    default_1.prototype.genBool = function () {
        return !!this.number(0, 2);
    };
    default_1.prototype.genManyBool = function (quantity) {
        if (quantity === void 0) { quantity = 1; }
        var count = [];
        for (var i = 0; i < quantity; i++) {
            count.push(!!this.number(0, 2));
        }
        return count;
    };
    return default_1;
})();
exports["default"] = default_1;
