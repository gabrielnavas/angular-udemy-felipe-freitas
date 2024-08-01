import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    if(!this.isValid(status)) {
      return this.generateInvalidMessage();
    }
    return this.currentStatus(status);
  }

  private generateInvalidMessage() {
    return 'Status inválido ou indisponível';
  }

  private isValid(status: boolean) {
    if(status === undefined || status === null) {
      return false
    }

    return true;
  }

  private currentStatus(status: boolean) {
    return status 
      ? "Ativo" 
      : "Inativo";
  }
}
