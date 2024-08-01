import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const street = address.rua;
    const number = address.numero;
    const city = address.cidade;
    const state = address.estado;
    return `${street}, ${number}, ${city}, ${state}`;
  }
}
