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
public class Cliente extends Entidade{
    private int idCliente;
    private String email;
    private boolean status;
    private String fone;
    private String sexo;
    private String cpf;
    
    public Cliente (String nome,String endereco, String complemento, String numero,String bairro,String cidade,
            String uf,String cep,String cnpj,String email, boolean status, String fone, String sexo,int idCliente){
        super(nome, endereco, complemento, numero, bairro, cidade, uf, cep,cnpj);
        this.email = email;
        this.fone = fone;
        this.sexo = sexo;
        this.status = status;
        this.idCliente = idCliente;
    }
    public Cliente(){
        //construtor vazio
    }
 
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        if(validaFone(fone)){
          this.fone = fone;  
        } 
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int IdCliente){
        if(validaIdCliente(IdCliente)){
           this.idCliente = IdCliente; 
        }
    }
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
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
    public boolean validaFone(String fone){
        if(fone.isEmpty() || fone.isBlank() || fone.length() != 9){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou ter 9 caracteres");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaSexo(String sexo){
        if(sexo.isEmpty() || sexo.isBlank() || sexo.length() != 1){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou, ou nulo, ou ter mais de"
                    + " 1 caracter");
            return false;
        }
        else if (sexo.toUpperCase() !=  "M" || sexo.toUpperCase() == "F"){
            return true;
        }
        else{
            JOptionPane.showMessageDialog(null, "Valor diferente de M e F");
            return false;
        }
    }
}
