CREATE database Exercicio3;
USE Exercicio3;

/*
1) Crie a tabela Setor, de acordo com a estrutura abaixo:

(#)COD_SETOR INT
NOME_SETOR VARCHAR(30)
*/
Create table Setor(
    COD_SETOR INT Identity(1,1),
    NOME_SETOR VARCHAR(30)
);

/*
2) Crie a tabela Funcionario, de acordo com a estrutura abaixo:

NRMATRICULA INT
PRIMEIRO_NOME VARCHAR(20)
ULTIMO_NOME VARCHAR(50)
EMAIL VARCHAR(200)
TELEFONE VARCHAR(20)
DATA_ADMISSAO DATETIME
SALARIO FLOAT
COD_SETOR INT
*/

Create table Funcionario(
    NRMATRICULA INT Identity(1,1),
    PRIMEIRO_NOME VARCHAR(20),
    ULTIMO_NOME VARCHAR(50),
    EMAIL VARCHAR(200),
    TELEFONE VARCHAR(20),
    DATA_ADMISSAO DATETIME,
    SALARIO FLOAT,
    COD_SETOR INT
);

--3) Crie as chaves primárias e estrangeiras das tabelas. 
Alter table Setor
Add Constraint PK_Setor Primary Key(COD_SETOR);

Alter table Funcionario
Add Constraint PK_Funcionario Primary Key(NRMATRICULA), 
Constraint FK_Setor Foreign Key(COD_SETOR) references Setor(COD_SETOR);

--4) Faça 5 comandos inserts para inserir dados na tabela setor 
Insert into Setor Values
('RH'),
('TI'),
('Financeiro'),
('Contabilidade'),
('Logística');

--5) Faça 5 comandos inserts para inserir dados na tabela funcionario 
Insert into Funcionario values
('Fernando','Dias',"fernandoD@gmail.com",'5515991984343',1,'2024-10-01',1500.0),
('Bella','Zukerberg',"bella@gmail.com",'5515992575545',3,'2009-02-21',4000.0),
('Maria','Fernanda','mafe@gmail.com',4,'2020-05-22',4000.0),
('Davy','Ribeiro',"davyR@gmail.com",2,'2023-01-20',2500),
('Guilherme','Farias','guilhermeF@gmail.com',5,'2022-02-28', 3000);


/*
6) Desenvolva as seguintes consultas:

a. Exiba os códigos de setores exclusivos da tabela funcionário (não repetir o código do setor)

b. Exiba o sobrenome concatenado com o código do setor, separado por vírgula e espaço, e nomeie a coluna como Empregado e Setor

*/

/*

7-Exibir o nome, sobrenome e o salário dos funcionários que recebem mais de 2500,00. 
 
8-Exibir o nome, sobrenome e código do departamento para o número de matrícula=5 
 
9-Exibir o nome, sobrenome e o salário dos funcionários cujo salário não esteja na faixa de 1500,00 a 3000,00 
 
10-Exibir o nome, sobrenome, código do setor e data de admissão dos funcionários admitidos desde de 2009. Ordene pela data de admissão. 
 
11-Exibir os funcionários que pertençam ao departamento de TI e RH por ordem numérica. 
 
12-Exiba os nomes dos funcionários que tenham um "a" como a segunda letra do nome. 

13-Exiba os nomes dos funcionários que tenham uma letra "a" e uma letra "e" no nome 

14-Exibir os dados dos funcionários, que pertençam ao setor 2 por ordem de nome

15-Exibir os funcionários que pertençam aos departamentos 2 e 5

16-Exibir os funcionários que tenham salário maior que 2300 e pertençam ao setor 3
*/