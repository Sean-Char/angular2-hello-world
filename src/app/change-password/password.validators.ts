import { AbstractControl } from "@angular/forms/src/model";

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234') 
                resolve({ invalidOldPassword: true }); 

            resolve(null);   
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value )
            return { passwordsShouldMatch: true };

        return null;
    }
}