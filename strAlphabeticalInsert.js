
let stringsInserter = (string, array) => {
    let index = 0;
    while (( index < array.length ) && ( array[index] < string )) {
        index++;
    }
    array.splice(index, 0, string)
    return array;
}
//Tiene una complejidad de O(n) ya que se recorre el array hasta encontrar el lugar donde insertar el string
let stringsInserterLog = (string, array) => {
    let index = 0;
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        index = Math.floor((min + max) / 2);
        if (array[index] < string) {
            min = index + 1;
        } else if (array[index] > string) {
            max = index - 1;
        } else {
            break;
        }
    }
    array.splice(index, 0, string)
    return array;
}
//Se utiliza binary search para encontrar el lugar donde insertar el string, por lo que tiene una complejidad de O(log n)
let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let string0 = "balanz";
let string = "balanza";
let string2 = "balanzas";
function testOn(array, string0, string, string2){
    console.log("O(n) _________________________________________________________________")
    console.log(stringsInserterLog(string0, array));
    console.log(stringsInserterLog(string, array));
    console.log(stringsInserterLog(string2, array));
}
function testLogn(array, string0, string, string2){
    console.log("\n\nO(Log n) _________________________________________________________________")
    console.log(stringsInserterLog(string0, array));
    console.log(stringsInserterLog(string, array));
    console.log(stringsInserterLog(string2, array));
}
testOn(array, string0, string, string2);
array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
testLogn(array, string0, string, string2);

