function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
console.log(car_info("Toyota", "Camry", "color: red", "sunroof: yes"));
