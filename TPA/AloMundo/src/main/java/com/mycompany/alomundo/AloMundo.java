/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.alomundo;
import java.util.Scanner;

/**
 *
 * @author Alunos
 */
public class AloMundo {
    public static void main(String[] args) {
        
        Scanner ler = new Scanner(System.in); //instanciando um objeto tipo Scnner
        int valor;
        valor = 15;
        System.out.printf("Coloque um valor: ");
        int dado = ler.nextInt(); // leitura
        System.out.printf("Dado: %d%n", dado);
        /**
         * Outro jeito:
         * valor = System.console().readLine("Digite um valor: ");
         * valor = Integer.parseInt(valor);
         */
        
    }
}
