/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.classeteste;

/**
 *
 * @author Alunos
 */
public class ClasseTeste {

    public static void main(String[] args) {
        Classe_Teste objeto_Teste = new Classe_Teste(5);
        System.out.println("O dobro é " + objeto_Teste.getDobro());
        
        Classe_Teste objeto_Teste2 = new Classe_Teste(5,8);
        System.out.println("A multiplicação é " + objeto_Teste2.getMultiplica());
    }
}
