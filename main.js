const validAge = document.getElementById('age').value;
const validNumber = document.getElementById('number').value;
const validEmail = document.getElementById('email').value;
const validName = document.getElementById('name').value;

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

// function validSurname() {
//     const surnamePattern = /^[А-ЯЁ][а-яё]+$/;
    
//     const minlenght = 4;
//     const maxleght = 12;
   
    
//     if(surname.match(surnamePattern)) {

//         return true;
//     } 
//     else {
//         return false;
//     }
// }

// function validRegistrationSurname() {
// document.getElementById('surname').addEventListener('input', function () {

//     const surnameInput = document.getElementById('surname').value;
  
    
//     if (validSurname()) {
//         surnameInput.style.backgroundColor = 'green';
       
//     } 
    
//     else if (surnameInput.value === '') {
//         surnameInput.style.backgroundColor = 'white';
//     }

    
//     else {
     
//         surnameInput.style.backgroundColor = 'red';
//     }
// }

// );
// };
function validSurname(surname) {
    const surnamePattern = /^[А-ЯЁ][а-яё]+$/;
    const minLength = 4;
    const maxLength = 12;

    return surname.match(surnamePattern) && surname.length >= minLength && surname.length <= maxLength;
}

function validRegistrationSurname() {
    document.getElementById('surname').addEventListener('input', function () {
        const surnameInput = this; 
        const surname = surnameInput.value;

        if (validSurname(surname)) {
            surnameInput.style.backgroundColor = 'green';
        } else if (surname === '') {
            surnameInput.style.backgroundColor = 'white';
        } else {
            surnameInput.style.backgroundColor = 'red';
        }
    });
}

validRegistrationSurname();




// ====AGE====

// function validAge(age){
//     const minNumberLength = 2;
//     const agePattern = /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/;
//     const validaiterAge = document.getElementById('age').value;
    

//     return age.match(agePattern) && age.length >= minNumberLength;

// };

// function validateAge(){
//     document.getElementById('age').addEventListener('input', function (){

//         const ageInput = this; 
//         const age = ageInput.value;

//         if(validAge(age)){
//            ageInput.style.backgroundColor = 'green';

//         }    else if (age === '') {
//               ageInput.style.backgroundColor = 'white';
//         } else {
//                ageInput.style.backgroundColor = 'red';
//         }
//     }

// )};


function isvalidAge(age) {
    const minNumberLength = 2;
    const agePattern = /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/;

    return age.match(agePattern) && age.length >= minNumberLength;
}

function validateAge() {
    const ageInput = document.getElementById('age');
    
    ageInput.addEventListener('input', function () {
        const age = ageInput.value;

        if (isvalidAge(age)) {
            ageInput.style.backgroundColor = 'green';
        } else if (age === '') {
            ageInput.style.backgroundColor = 'white';
        } else {
            ageInput.style.backgroundColor = 'red';
        }
    });
}

validateAge();
