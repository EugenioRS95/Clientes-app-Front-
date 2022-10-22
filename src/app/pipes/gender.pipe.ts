import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'genderPipe'})
export class GenderPipe implements PipeTransform {
    transform(value: string): string {
        switch (value){
            case 'M':
                return 'Masculino';
                break;
            case 'F':
                return 'Femenino';
                break;
            default:
                return 'No definido';
        }
    }
}