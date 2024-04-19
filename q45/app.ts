function car_info(manufacturer: string, model: string, ...options: string[]): object {
    let car: any = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    });
    return car;
}
console.log(car_info("Toyota", "Camry", "color: red", "sunroof: yes"));