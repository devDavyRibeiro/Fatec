/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

import javax.swing.JOptionPane;

/**
 *
 * @author Alunos
 */
public class ContaGerente {
    private String num_conta;
    private String num_agencia;
    private int idCliente;
    private float saldo;

    public ContaGerente(String num_conta, String num_agencia,int idCliente, float saldo) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.idCliente = idCliente;
        this.saldo = saldo;
    }
    public ContaGerente(){
        
    }
    
    public String getNum_conta() {
        return num_conta;
    }

    public void setNum_conta(String num_conta) {
        if (validaNumConta(num_conta)) {
            this.num_conta = num_conta;
        }
        
    }

    public String getNum_agencia() {
        return num_agencia;
    }

    public void setNum_agencia(String numAgencia) {
        if(validaNumAgencia(numAgencia)){
            this.num_agencia = numAgencia;
        }
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        if (validaIdCliente(idCliente)) {
           this.idCliente = idCliente; 
        }
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
    
    public boolean validaNumConta(String num_conta){
        if(num_conta.isEmpty() || num_conta.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        } 
    }
    public boolean validaNumAgencia(String num_agencia){
        if(num_agencia.isEmpty() || num_agencia.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaIdCliente(int IdCliente){
        if(IdCliente == 0){
            JOptionPane.showMessageDialog(null, "IdCliente não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }  
    }
}
