//float Finder
let floatFinder = (string) => {
    //Float sigue el formato de un signo que puede o no estar, seguido por un numero/conjunto de numeros opcional, un punto
    //seguido de un numero/conjunto de numeros opcional, seguido de una E o e opcional, seguido de un signo opcional, 
    //seguido de un numero/conjunto de numeros opcional 
    let regex = /^[+-]?(\d*(\.\d*)?|\.\d*)([Ee][+-]?\d+)?$/;
    return regex.test(string);
}
let strings =[ '-123.','+.45','.67','89.01e-23','-45.66e+78','99.01E23','44.56E+78','-.90E-01', "test", "1.2.3", "1.2e","Hello World!"];
strings.forEach((string) => {
    console.log(floatFinder(string));
});
//Tiene una complejidad constante ya que solamente se analiza el string una vez O(c)