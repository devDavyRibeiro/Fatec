/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.ex1es;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


/**
 *
 * @author Alunos
 */
public class Ex1ES {

    public static void main(String[] args) {
        List cor = new ArrayList();
        
        cor.add("Vermelho");
        cor.add("Verde");
        cor.add("Azul");
        cor.add("Amarelo");
        
        System.out.println(cor);
        cor.remove(1);
        
        Collections.sort(cor);
        
        System.out.println(cor);
           
    }
}
