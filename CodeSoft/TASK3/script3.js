function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid Calculation");
        }
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}