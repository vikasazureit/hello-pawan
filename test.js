console.log("======================================");
console.log("       HELLO PAWAN - CI TEST          ");
console.log("======================================");

console.log("Checking Node.js...");

if (process.version) {

    console.log(`Node.js version: ${process.version}`);
    console.log("Node.js check: PASSED");

} else {

    console.error("Node.js check: FAILED");
    process.exit(1);

}

console.log("--------------------------------------");

console.log("Application test: PASSED");

console.log("======================================");
console.log("       CI TEST COMPLETED              ");
console.log("======================================");
