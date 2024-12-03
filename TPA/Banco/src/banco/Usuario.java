/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;
import javax.swing.*;
/**
 *
 * @author Alunos
 */
public class Usuario {
    private int IdUsuario;
    private String login;
    private String senha;
    private int idCliente;
    
    public Usuario(int IdUsuario,String login, String senha, int idCliente){
        this.IdUsuario = IdUsuario;
        this.login = login;
        this.senha = senha;
        this.idCliente = idCliente;
    }
    public Usuario(){
        //
    }

    public int getIdUsuario() {
        return IdUsuario;
    }

    public void setIdUsuario(int IdUsuario) {
        if(validaIdUsuario(IdUsuario)){
          this.IdUsuario = IdUsuario;  
        } 
    }
    
    public String getLogin(){
        return this.login;
    }
    public void setLogin(String login){
        if(validaLogin(login)){
          this.login = login;
        } 
    }
    public String getSenha(){
        return this.senha;
    }
    public void setSenha(String senha){
        if(validaSenha(senha)){
            this.senha = senha;
        }
    }
    public int getIdCliente(){
        return this.idCliente;
    }
    public void setIdCliente(int IdCliente){
        if(validaIdCliente(IdCliente)){
           this.idCliente = IdCliente; 
        }
    }
    public boolean validaLogin(String login){
        if(login.isEmpty() || login.isBlank() || login.length() < 3){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco, ou nulo, ou ");
            return false;
        }
        else{
            return true;
        }  
    }
    public boolean validaSenha(String senha){
        if(senha.isEmpty() || senha.isBlank() || senha.length() < 4){
            JOptionPane.showMessageDialog(null, "Senha não pode ser em branco ou nulo, ou menor que 4");
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
    public boolean validaIdUsuario(int IdUsuario){
        if(IdUsuario == 0 || IdUsuario == 0){
            JOptionPane.showMessageDialog(null, "IdUsuario não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }  
    }
}
