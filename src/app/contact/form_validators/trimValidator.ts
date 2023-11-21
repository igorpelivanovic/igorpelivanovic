import { AbstractControl, ControlValueAccessor, FormControl} from "@angular/forms";

export class TrimValidator{
    static trimValue(control: AbstractControl): object | null{
        if(control.value.trim().length == 0){
            return {empty: true}
        }
        return null
    }
}