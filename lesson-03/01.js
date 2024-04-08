const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {

    const germanFlagColors = colors.filter(color => color === "черный" || color === "красный" || color === "желтый");
    
    const flagFormula = germanFlagColors.join('-');
    
    return flagFormula;
}

console.log(createColorString());

