function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The size of a shirt is ".concat(size, " and it says ").concat(message));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Never Give Up");
