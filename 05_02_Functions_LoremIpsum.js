function printLoremIpsum() {
    process.stdout.write("\nLorem Ipsum dolor sit amet, consectetur adipiscing elit.");
}
for (let i = 0; i < 10; i++) {
    printLoremIpsum();
}
process.stdout.write("\n\n");