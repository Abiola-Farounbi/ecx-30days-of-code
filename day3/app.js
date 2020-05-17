var submitted=document.querySelector('.submit');

submitted.addEventListener("click",calculateBmi);    

function calculateBmi(e){
    var weight=document.getElementById('weight1').value;
    var height=document.getElementById('height1').value;
    var output=document.getElementById('result');
    var bmi=(parseInt(weight))/((parseInt(height)/100)*(parseInt(height)/100));
      bmi=bmi.toFixed(2);
    
      console.log(bmi)
        if(bmi < 18.5){ 
           output .innerHTML=` Your Body Mass Index is:  ${bmi}- (Underweight)`
        }
        else if(bmi > 18.5 && bmi < 25){
            output.innerHTML=`Your Body Mass Index is:  ${bmi}- (Normal Weight)`
        }
        else if (bmi > 25){
            output.innerHTML=`Your Body Mass Index is: ${bmi}- (Over Weight)`
        }
    
   
        


 e.preventDefault();

}


    



    

