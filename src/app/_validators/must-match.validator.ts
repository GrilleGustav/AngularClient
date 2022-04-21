import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

/**
 * Compares two form elements value.
 * The element where the validator was written and the element who was searched by input value.
 */
 @Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatch, multi: true }]
})
export class MustMatch implements Validator {
    /**
     * Compares two form elements value.
     * The element where the validator was written and the element who was searched by input value.
     */
    @Input('mustMatch') mustMatch!: string;
    constructor(){}

    /**
     * Compare two values.
     * @param c Instance to form element.
     * @returns Flag indicating to show validation message.
     */
    validate(c: AbstractControl): ValidationErrors | null {
        let a = c.root.get(this.mustMatch);
        if (c.value != '' && c.root.value[this.mustMatch] != '' && c.root.value[this.mustMatch] != undefined) {
            if (c.value != c.root.value[this.mustMatch]) {
                c.root.get(this.mustMatch)?.markAsTouched();
                return { mustMatch: true };
            }
        }
        return null;
    }
}
