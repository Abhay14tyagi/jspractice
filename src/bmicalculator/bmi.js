function handleInput(event){
    const key=event.key;
    if(key=='enter')
    {
        calculate();
 }else if
 (key=='backspace'){
    document.querySelector(".p-3 mx-3").value='';
 }
}
// function calculate()
// {
//     const weight=document.querySelector('#weight').value;
//     const height=document.querySelector('#height').value;
//     const bmi=weight/(height*height);
//     const p=document.querySelector('#bmiCalculator');
//     p.appendChild(createTextNode(bmi))
// }
function calculate() {
    const weight = parseFloat(document.querySelector('#weight').value);
    const heightInCm = parseFloat(document.querySelector('#height').value);

    if (weight && heightInCm) { 
        const heightInMeters = heightInCm / 100; 
        const bmi = weight / (heightInMeters * heightInMeters);
        const p = document.querySelector('#bmiValue');

      
        p.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter both weight and height.');
    }
}