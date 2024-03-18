const validAge = document.getElementById('age').value;
const validNumber = document.getElementById('number').value;
const validEmail = document.getElementById('email').value;


// ====NAME====

function validaiterName(name, namePattern) {

 const validName = document.getElementById('name').value;

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

function validSurname(surName, surnamePattern){

    const validSurname = document.getElementById('surname').value;

    if(surName.match(surnamePattern)) {

        return true;
    } 
    else {
        return false;
    }

};

function validRegistrationSurname(){

    const validSurname = document.getElementById('surname').value;
    const surnamePattern = /^[А-ЯЁ][а-яё]+$/;

if (validSurname (validSurname, surnamePattern)){

}




};