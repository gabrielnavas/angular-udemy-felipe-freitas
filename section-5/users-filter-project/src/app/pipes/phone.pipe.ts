import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    return this.isValidPhone(phone) 
      ? this.formatPhone(phone) 
      : this.generatePhoneInvalidMessage();
  }

  private generatePhoneInvalidMessage() {
    return 'Telefone inválido ou indisponível';
  }

  private formatPhone(phone: string) {
    const areaCode = this.makeAreaCode(phone);
    const mainPart = this.makeMainPartPhone(phone);
    const suffix = this.makesuffixPhone(phone);
    return `(${areaCode}) ${mainPart}-${suffix}`;
  }

  private makeMainPartPhone(phone: string) {
    return this.isCellPhone(phone) 
    ? phone.substring(2, 7) 
    : phone.substring(2, 6);
  }

  private makesuffixPhone(phone: string) {
    return this.isCellPhone(phone) 
      ? phone.substring(7) 
      : phone.substring(6);
  }

  private makeAreaCode(phone: string) {
    return phone.substring(0, 2);
  }

  private isCellPhone(phone: string) {
    return phone.length === 11;
  }

  private isNormalPhone(phone: string) {
    return phone.length === 11;
  }

  private isValidPhone(phone: string) {
    return (
      phone 
      && (
          this.isNormalPhone(phone) 
          || this.isCellPhone(phone)
        )
      );
  }
}
