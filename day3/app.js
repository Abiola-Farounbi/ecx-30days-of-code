var form=document.getElementById('formId');
var bmi=0;
var weight=parseFloat(document.getElementById('weight1').value);

var height=parseFloat(document.getElementById('height1').value);
form.addEventListener("click",calculateBmi);
       
        
        function calculateBmi(e){
                bmi=((weight)/((height/100)*(height/100)));
                bmi=bmi.toFixed(2);
                if(bmi < 18.5){  
                    document.getElementById('result').innerHTML=` Your Body Mass Index is:  ${bmi}- (Underweight)`
                }
                else if(bmi > 18.5 || bmi < 25){
                    document.getElementById('result').innerHTML=`Your Body Mass Index is:  ${bmi}- (Normal Weight)`
                }
                else if (bmi > 25){
                    document.getElementById('result').innerHTML=`Your Body Mass Index is: ${bmi}- (Over Weight)`
                }
            
           
                
     
        
    e.preventDefault();

}

    

