import { User } from "../../interfaces/User";

export default class Validator{
    
    nameValidation(name: string):string{
        const regex = /^[a-zA-Z]+$/
        if(regex.test(name)){
            return null;
        }
        if(name.trim() == ''){
            return 'Name is required'
        }
        return 'Name should only be letters';
    }

    lastNameValidation(lastName: string):string{
        const regex = /^[a-zA-Z]+$/
        if(regex.test(lastName)){
            return null;
        }
        if(lastName.trim() == ''){
            return 'Last Name is required'
        }
        return 'Last Name should only be letters';
    }

    emailValidation(email:string):string{
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (regex.test(email)) {
            return null;
        }
        if (email.trim() === '') {
            return 'Email is required';
        }
        return 'Please enter a valid email';
    }
    
    passwordValidation(password:string):string{
        if(password.length < 6){
            return 'Password must contain 6 characters';
        }
        return null;
    }
    passwordRepeatValidation(passwordConfirmation:string, password:string):string{
        if(passwordConfirmation != password){
            return 'Passwords do not match'
        }
        return null;
    }
    
    userValidation(user:User):boolean{
        if(this.nameValidation(user.name)&&this.lastNameValidation(user.lastName)&&this.emailValidation(user.email)&&this.passwordValidation(user.password)){
            return true;
        }
        return false;
    }
}