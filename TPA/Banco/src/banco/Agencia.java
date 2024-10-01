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
public class Agencia extends Entidade{
    private String numAgencia;
    private String gerente;
    
    public Agencia(String nome,String endereco, String complemento, String numero,
        String bairro,String cidade, String uf,String cep,String cnpj, String numAgencia, String gerente){
        super(nome, endereco, complemento, numero, bairro, cidade, uf, cep,cnpj);
        
        this.numAgencia = numAgencia;
        this.gerente = gerente;
    }
    public String getNumAgencia(){
        return this.numAgencia;
    }
    public void setNumAgencia(String numAgencia){
        this.numAgencia = numAgencia;
    }

    public String getGerente() {
        return gerente;
    }

    public void setGerente(String gerente) {
        this.gerente = gerente;
    }
    public boolean validaNumAgencia(String numAgencia){
        if(numAgencia == null || numAgencia.length() != 6){
            JOptionPane.showMessageDialog(null, "Valor não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaGerente(String gerente){
        if(gerente == null){
            JOptionPane.showMessageDialog(null, "Valor não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
}
