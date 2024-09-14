/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.calculadora;

public class Calculadora {

    public static void main(String[] args) {
        int num1,num2;
        
        num1 = Integer.parseInt(System.console().readLine("DIgite um número: "));
        num2 = Integer.parseInt(System.console().readLine("Digite outro número:"));
        String operador = System.console().readLine("Digite o operador: ");
        int resultado = 0;
        
        switch(operador){
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
            case "/":
                if (num2 == 0){
                    System.out.printf("Erro. Impossível fazer divisão por 0");
                }
                else{
                    resultado = num1 / num2;
                }
                break;
            case "^":
                resultado = (int) Math.pow(num1, num2);
                break;
            default:
                System.out.printf("Nenhum operador encontrado");
                break;
        }
        
        System.out.println ("Resultado da sua operação: " + resultado);
            
    }
}

