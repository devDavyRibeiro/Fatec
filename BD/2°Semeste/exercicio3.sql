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
('Fernando', 'Dias', 'fernandoD@gmail.com', '5515991984343', '2024-03-01 00:00:00', 1500, 1),
('Bella', 'Zukerberg', 'bella@gmail.com', '5515992575545', '2009-03-01 00:00:00', 4000, 2),
('Maria', 'Fernanda', 'mafe@gmail.com', '5515992575545', '2020-22-05 00:00:00', 4000, 3),
('Davy', 'Ribeiro', 'davyR@gmail.com', '5515992575545', '2023-22-02 00:00:00', 2500, 4),
('Guilherme', 'Farias', 'guilhermeF@gmail.com', '5515992575545', '2022-22-02 00:00:00', 3000, 5);

select * from Funcionario 
/*
6) Desenvolva as seguintes consultas:

a. Exiba os códigos de setores exclusivos da tabela funcionário (não repetir o código do setor)
*/
select distinct COD_SETOR from Funcionario 
-- b. Exiba o sobrenome concatenado com o código do setor, separado por vírgula e espaço, e nomeie a coluna como Empregado e Setor
select ULTIMO_NOME + ', ' + Convert(varchar,COD_SETOR) as 'Empregado e Setor'  from Funcionario

--7 -Exibir o nome, sobrenome e o salário dos funcionários que recebem mais de 2500,00. 
 select PRIMEIRO_NOME, ULTIMO_NOME, SALARIO
 from Funcionario
 where SALARIO > 2500.0
-- 8-Exibir o nome, sobrenome e código do departamento para o número de matrícula=5 
 select PRIMEIRO_NOME, ULTIMO_NOME, COD_SETOR
 from Funcionario
 where NRMATRICULA = 5

--9 -Exibir o nome, sobrenome e o salário dos funcionários cujo salário não esteja na faixa de 1500,00 a 3000,00 
 select PRIMEIRO_NOME, ULTIMO_NOME, SALARIO
 from Funcionario
 where SALARIO NOT BETWEEN 1500 and 3000

--10-Exibir o nome, sobrenome, código do setor e data de admissão dos funcionários admitidos desde de 2009. Ordene pela data de admissão.
select PRIMEIRO_NOME, ULTIMO_NOME, COD_SETOR, DATA_ADMISSAO 
from Funcionario
where YEAR(DATA_ADMISSAO) > 2009
Order by DATA_ADMISSAO

-- 11-Exibir os funcionários que pertençam ao departamento de TI e RH por ordem numérica. 
select PRIMEIRO_NOME
from Funcionario f
inner join Setor s on f.COD_SETOR = s.COD_SETOR
where s.NOME_SETOR = 'TI' or s.NOME_SETOR = 'RH'
Order by f.COD_SETOR
-- 12-Exiba os nomes dos funcionários que tenham um "a" como a segunda letra do nome. 
select PRIMEIRO_NOME
from Funcionario 
where PRIMEIRO_NOME like '_A%'

--13-Exiba os nomes dos funcionários que tenham uma letra "a" e uma letra "e" no nome
select PRIMEIRO_NOME
from Funcionario
where PRIMEIRO_NOME like '%a%' and PRIMEIRO_NOME like '%e%'

--14-Exibir os dados dos funcionários, que pertençam ao setor 2 por ordem de nome
select *
from Funcionario
where COD_SETOR = 2
order by PRIMEIRO_NOME

-- 15-Exibir os funcionários que pertençam aos departamentos 2 e 5
select * from Funcionario where COD_SETOR = 2 and COD_SETOR = 5
  
-- 16-Exibir os funcionários que tenham salário maior que 2300 e pertençam ao setor 3
select * from Funcionario where SALARIO > 2300 and COD_SETOR = 3
