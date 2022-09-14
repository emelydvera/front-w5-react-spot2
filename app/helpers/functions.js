function ToUpperCase(string) {
    const newString = string.replace(/\b\w/g, l => l.toUpperCase());
    return newString;
}
function Suma(num, num2) {
    if (typeof num !== 'number' || typeof num2 !== 'number') {
        return 'ingrese numeros';
    }
    return num + num2;
}
function AddToArray(arr, parametro) {
    const newArr = arr;
    arr.push(parametro);
    return newArr;
}
module.exports = { ToUpperCase, Suma, AddToArray };