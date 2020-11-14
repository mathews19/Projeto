/* Serviço responsável pela execução do programa
* calculadaro
* @author Matheus <matheus.steps@gmail.com>
* @since 1.0
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRAÇÃO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // Armazena o resultado da operação
    switch (operacao) {
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
      break;
    case CalculadoraService.SUBTRAÇÃO:
      resultado = num1 - num2;
      break;
    case CalculadoraService.DIVISAO:
    resultado = num1 / num2;
    break;
    case CalculadoraService.MULTIPLICACAO:
    resultado = num1 * num2;
    break;
    default:
      resultado = 0;
    }
    return resultado;
  }
}
