// ====NAME====

function validaiterName(name, namePattern) {

 

    if(name.match(namePattern)) {

        return true;
    } 
    else {
        return false;
    }

};
function validRegistration() {

    const validName = document.getElementById('name').value;
    const namePattern = /^[А-ЯЁ][а-яё]+$/;
  
    if(validaiterName(validName, namePattern)){
   
              alert('Правильно!')
    
   } 
   else {
             alert('Не правильно!')

   }     

    
}   ;

// ===SURNAME====

function validSurname(surname) {

    const surnamePattern = /^[А-ЯЁ][а-яё]+$/;
    
    const minlenght = 4;
    const maxlenght = 12;
   
   
    if(surname.match(surnamePattern) && surname.length >= minlenght && surname.length <= maxlenght ) {

        return true;
    } 
    else {
        return false;
    }
}

function validRegistrationSurname() {
document.getElementById('surname').addEventListener('input', function () {

    const surnameInput = document.getElementById('surname').value;
    const isSurnameInput = document.getElementById('surname');
    
    if (validSurname(surnameInput)) {
        isSurnameInput.style.backgroundColor = 'green';
       
    } else if (isSurnameInput.value === '') {
        
        isSurnameInput.style.backgroundColor = 'white';
    }

    
    else {
       
        isSurnameInput.style.backgroundColor = 'red';
    }
}

);
};
validRegistrationSurname();



// ====AGE====

function validAge(age){

    const minNumberLength = 2;

    const agePattern = /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/;
    
    return age.match(agePattern) && age.length >= minNumberLength;

};

function validateAge(){
    document.getElementById('age').addEventListener('input', function (){

        const validaiterAge = document.getElementById('age').value;
        const ageInput = document.getElementById('age');
        if(validAge(validaiterAge)){
           ageInput.style.backgroundColor = 'green';
      

        }    else if (age === '') {
              ageInput.style.backgroundColor = 'white';
        } else {
               ageInput.style.backgroundColor = 'red';
        }
    }

)};
validateAge();

// ===NUMBER====

function validNumber(number){

    const numberPatter = /^\+\d{11}$/;
    const min = 0;

    return number.match(numberPatter) && number >= min;


}

function isValidNumber(){

   document.getElementById('number').addEventListener('input', function() {

    const isValidNum = document.getElementById('number').value;
    const validNum = document.getElementById('number');

    if(validNumber(isValidNum)){
         validNum.style.backgroundColor = 'green';
   

     } else if (isValidNum === '') {
        validNum.style.backgroundColor = 'white';
     } else {
        validNum.style.backgroundColor = 'red';
     }
 }
   
  )};
   isValidNumber()



//    ====E-MAIL===


function validEmail(email){

    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return email.match(emailPattern);

}

function isValidEmail(){
        document.getElementById('email').addEventListener('input', () => {
        const valueEmail = document.getElementById('email').value;
        const inputEmail = document.getElementById('email');
        
        if(validEmail(valueEmail)) {
            inputEmail.style.backgroundColor = 'green';
        } else if (valueEmail === ''){
            inputEmail.style.backgroundColor = 'white';
        } else {
            inputEmail.style.backgroundColor = 'red';
        }


    })     
   
}
isValidEmail();