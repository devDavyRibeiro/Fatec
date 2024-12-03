/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

/**
 *
 * @author Alunos
 */
public class CPF {
    private String cpf;

    public CPF(String cpf) {
        this.cpf = cpf;
    }
    
    public static boolean validaCPF(String cpf){
        if(!cpf.isBlank() & !cpf.isEmpty()){
            return true;
        }
        else{
            return false;
        }
    }
}
