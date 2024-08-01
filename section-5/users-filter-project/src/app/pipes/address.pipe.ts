import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    if(!this.isValid(address)) {
      return this.generateAddressInvalidMessage();
    }
    const street = address.rua;
    const number = address.numero;
    const city = address.cidade;
    const state = address.estado;
    return `${street}, ${number}, ${city}, ${state}`;
  }

  private generateAddressInvalidMessage() {
    return 'Endereço indisponível ou inválido';
  }

  private isValid(address: IAddress): boolean {
    if(!address) {
      return false;
    }
    if(!address.rua) {
      return false;
    }
    if(!address.numero) {
      return false;
    }
    if(!address.cidade) {
      return false;
    }
    if(!address.estado) {
      return false;
    }
    if(!address.pais) {
      return false;
    }
    return true;
  }
}
