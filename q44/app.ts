function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Sandwich is ready!");
}

// Call the function three times with different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
