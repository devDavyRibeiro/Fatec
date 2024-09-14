/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fibonaccirecursivo;

/**
 *
 * @author Alunos
 */
public class FibonacciClasse {
    public static int FibonacciClasse(int posicao){
         int resultado;
        if (posicao == 2 || posicao < 2){
            resultado = 1;
        }
        else{
            resultado = FibonacciClasse(posicao - 1)+ FibonacciClasse(posicao - 2);
        }
        System.out.println(resultado);
        return resultado;   
    }
}
