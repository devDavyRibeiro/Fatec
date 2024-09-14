CREATE banco;
USE banco;

CREATE TABLE Cliente
(
	Cod_Cli int not null,
	Nome_Cli varchar(40) not null,
	End_Cli varchar(30) not null,
	Bai_Cli varchar(20) not null,
	Cid_Cli varchar(20) not null,
	Uf_Cli char(3) not null,
	Tel_Cli varchar(15) null,
	Constraint PK_Cliente Primary Key(Cod_Cli) -- declaração da chave primária
);

Create Table NotaFiscal(
	Num_Nota int not null,
	Cod_Cli int not null,
	Serie_Nota varchar(10) not null,
	Emissao_Nota smalldatetime null,
	Vot_Nota smallMoney not null,
	Constraint PK_NotaFiscal Primary Key (Num_Nota),
	Constraint FK_Cliente Foreign key(Cod_Cli) References Cliente (Cod_Cli)
);

--Modificando tabelas
Create table cidade
(
	Codcidade varchar (2) not null,
	Nomecidade varchar (40)
);
Create table Empregado(
	Nrmatricula int, 
	Nome varchar(50),
	Data_demissao datetime,
	salario float
);
Create table estado(
	cdestado varchar (2) not null,
	Nomeestado varchar(30)
);

-- ALTER TABLE --> adicionando campos novos
Alter table cidade 
Add primary key(codcidade)

Alter table cidade
Add cdestado char(2) not null,
	teste varchar(1) null;

-- ALTER TABLE --> remove um campo
ALter table cidade
Drop column teste;

--ALTER TABLE --> mudando o tipo de dado
Alter table cidade
Alter column cdestado varchar(2);

--Drop pk
Alter table cidade
Drop constraint PK__cidade__9ED2CA96D0207EAE;

Alter table cidade
Add constraint pk_codcidade primary key(codcidade); 

Alter table estado
Add primary key(cdestado);

Alter table cidade
Add foreign key (cdestado) references estado (cdestado);


-- Deletar uma tabela
--Drop table Cliente

Select * from cidade

--Insertando dados
Insert into estado
values('SP','São Paulo'),
values('RJ','Rio de Janeiro'),
values('MG', 'Minas Gerais');

Insert into cidade
values('1','Votorantim', 'SP'),
values('2','Sorocaba','SP'),
values('3','Rio de Janeiro','RJ');

Insert into cidade(Codcidade,Nomecidade,cdestado)Values ('4','Extrema','MG');

