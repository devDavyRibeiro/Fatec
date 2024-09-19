use FBD;

create table cidade(
	Codcidade int identity(1,1) not null primary key,
	nomeciade varchar(40),
	cdestado varchar(2)
);

create table empregado(
	Nrmatricula int identity(1,1) primary key,
	nome varchar(50),
	data_admissao datetime,
	salario float
);

insert into cidade values
('Sorocaba','SP'),
('Itu','SP'),
('São Paulo', 'SP'),
('Rio de Janeiro', 'RJ'),
('Belo Horizonte','MG');

insert into empregado values
('Davy','2024-09-05',1800.0),
('João', '2024-06-05',1700.0),
('Maria', '2024-07-08',500.0),
('Julia', '2024-23-08',2500.0),
('Maria', '2024-07-07',800.0);

select distinct cdestado from cidade --distinct não deixa repetir dados

select distinct unidade from produto

select cdestado, nomeciade
from cidade

select 'Codigo do Cliente', cod_cliente, 'Nome do Cliente', nome_cliente
from cliente

select cod_cliente as 'Codigo do Cliente', nome_cliente 'Nome do Cliente' -- apelido do cod
from cliente

select nome, salario ,salario + 300 aumento_salario -- calculo
from empregado

Select 'Funcionario: ' + nome + ' Salário: ' + CONVERT(varchar, salario), salario, nome -- concatenação
from empregado

select num_pedido, cod_produto, quantidade
from item_pedido					-- condição dentro do select
where quantidade > 45

select nome, salario
from empregado
where nome like '%M%'

select nome, salario
from empregado
where nome like 'M%'

select nome, salario
from empregado
where nome like '%a'

select cod_produto,descricao, Unidade
from produto
where Unidade like 'K%'

select nome_vendedor
from vendedor
where faixa_comissao in ('A','B')

select nome_vendedor
from vendedor
where faixa_comissao not in ('A','B')

select * from cliente 
where ie is not null

select * from empregado
where salario > 1000 and Nrmatricula >= 3

select * from empregado
where salario > 2500 or Nrmatricula = 4

select descricao
from produto
where Unidade = 'M' and Valor_unitario = 1.05

select descricao
from produto
where unidade = 'UN' and Valor_unitario = 4

select nome_vendedor, salario_fixo
from vendedor
ORDER by salario_fixo desc


create table pessoa(
	id_pessoa int identity (1,1) primary key,
	nome varchar (20),
	cpf varchar(14)
);
create table pessoa_fisica(
	id_pessoa int identity (1,1) primary key,
	nome varchar (20),
	cpf varchar(14)
);
insert into pessoa values ('Lucas cabral','13345474551')

insert into pessoa_fisica
select nome, cpf
from pessoa
