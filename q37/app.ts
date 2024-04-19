function make_shirt (size : string = "large", message : string = "I Love Typescript") : void{
    console.log(`The size of a shirt is ${size} and it says ${message}`)
}

make_shirt()
make_shirt("Medium")
make_shirt("Small","Never Give Up")