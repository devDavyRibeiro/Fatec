create database exercicio2; 
use exercicio2;

-- 1)Crie uma tabela chamada "Tbl_Clientes" com os seguintes campos: Id (int, chave primï¿½ria), Nome (varchar 50), Email (varchar 100), e Telefone (varchar 15).

create table Tbl_Clientes(
	id int Identity(1,1) NOT NULL,
	nome varchar(50) NOT NULL,
	email varchar (100) NOT NULL,
	telefone varchar(15) NOT NULL,
	
	Constraint PK_Cliente Primary Key (id)
);

 --2) Adicione um novo cliente com Nome "Joï¿½o Silva", Email "joao@email.com" e Telefone "(11) 1234-5678" ï¿½ tabela "Tbl_Clientes".
 Insert into Tbl_Clientes Values('Joï¿½o Silva','joao@email.com', '(@11) 1234-5678');

 --3)Adicione mais 10 registros, com dados a sua escolha a tabela "Tbl_Clientes"
 Insert into Tbl_Clientes Values
 ('Matheus Silva','matheus@gmail.com','(11) 2345-6789'),
 ('Davy Silva', 'davy@gmail.com','(15) 9918-3624'),
 ('Maria Fernanda','mafe@gmail.com', '(12) 1290-5647'),
 ('Isabela Zucker','bella@gmail.com','(12) 1580-9876'),
 ('Gigi Domingues', 'gigi@gmail.com','(19) 9988-3232'),
 ('Isabela Salmeron','isa@gmail.com','(20) 1323-5432'),
 ('Giulia Salmeron','giulia.com','(11) 8877-9832'),
 ('Vanessa Silva', 'vava@@gmail.com', '(19) 6542-7654'),
 ('Ariele Silva', 'ariele@gmail.com','(12) 4325-9876'),
 ('Jonathas Moniz', 'jonathas@gmail.com','(15) 9742-2345');


--4) Atualize o telefone do cliente com Id igual a 1 para "(11) 8765-4321".

UPDATE Tbl_Clientes
SET telefone = '(11) 8765-4321'
WHERE id = 1;

-- 5)Crie uma tabela chamada@ "Tbl_Produtos" com os campos: Id (int, chave primï¿½ria), Nome (varchar 50), Preco (decimal), e Estoque (int).
create table tbl_Produtos(
id int Identity(1,1) NOT NULL,
nome varchar(50) NOT NULL,
preco decimal(5,2) NOT NULL,
estoque int NOT NULL,

Constraint PK_Produto Primary Key (id)
);

--6) Adicione um novo produto com Nome "Camiseta", Preco 29.99 e Estoque 100 ï¿½ tabela "Tbl_Produtos".
Insert Into tbl_Produtos Values('Camiseta',29.99,100);

--7 )Adicione mais 10 registros, com dados a sua escolha a tabela "Tbl_Produtos"
Insert into tbl_Produtos Values
('Lapis',10.0,10),
('Caneta',15.50,20),
('Borracha',10.22,20),
('Garrafa',10.20,10),
('Bala',5.0,10),
('Bala com brinde',10.0,5),
('Mouse', 30.0,0),
('Teclado',40.0,10),
('Monitor',100.00,50),
('PC',500.00,10.0);

--8)Atualize o preï¿½o do produto com Id igual a 1 para 39.99.
UPDATE tbl_Produtos
SET preco = 39.99
WHERE id = 1

--9) Crie uma tabela chamada "Tbl_Pedidos" com os campos: Id (int, chave primï¿½ria), ClienteId (int, chave estrangeira referenciando a tabela "Clientes"), ProdutoId (int, chave estrangeira referenciando a tabela "Produtos"), Quantidade (int), e DataPedido (date).

create table tbl_Pedidos(
	id int Identity(1,1) NOT NULL,
	clienteId int NOT NULL,
	produtoId int NOT NULL,
	quantidade int NOT NULL,
	dataPedido date NOT NULL,

	Constraint PK_Pedido Primary Key(id),
	Constraint FK_Cliente Foreign Key (clienteId) References tbl_Clientes(id),
	Constraint FK_Produto Foreign Key (produtoId) References tbl_Produtos(id)
);

-- 10) Adicione um novo pedido para o cliente com Id igual a 1, referente ao produto com Id igual a 1, com Quantidade 2 e DataPedido igual a hoje ï¿½ tabela "Tbl_Pedidos".
insert into tbl_Pedidos values (1,1,2,'2024-09-10');

--11) Atualize a quantidade do pedido com Id igual a 1 para 3.
UPDATE tbl_Pedidos 
set quantidade = 3
where id = 1;

--12) Adicione mais 10 registros, com dados a sua escolha a tabela "Tbl_Pedidos"

insert into tbl_Pedidos values
(1,2,20,'2024-08-10'),
(2,4,5,'2024-08-22'),
(3,1,3,'2024-07-21'),
(4,7,9,'2024-01-01'),
(1,9,3,'2024-02-19'),
(5,6,7,'2024-05-09'),
(3,8,5,'2024-06-03'),
(7,5,2,'2024-05-30'),
(8,2,4,'2024-09-08'),
(2,2,2,'2024-02-20');

--13)Crie uma tabela chamada "Tbl_Funcionarios" com os campos: Id (int, chave primï¿½ria), Nome (varchar 50), Cargo (varchar 50), e Salario (decimal)
create table Tbl_Funcionarios(
 id int Identity(1,1) NOT NULL,
 nome varchar(50) NOT NULL,
 cargo varchar(50) NOT NULL,
 salario decimal(7,2) NOT NULL,

 Constraint PK_Funcionario Primary Key(id)
);

--14) Adicione um novo funcionï¿½rio com Nome "Maria Santos", Cargo "Gerente" e Salario 5000 ï¿½ tabela "Funcionarios".
insert into Tbl_Funcionarios values ('Maria Santos','Gerente',5000.0);

--15) Atualize o salï¿½rio do funcionï¿½rio com Id igual a 1 para 6000.
update Tbl_Funcionarios 
set salario = 6000.00
where id = 1

select * from tbl_Funcionarios

-- 16) Adicione mais 10 registros, com dados a sua escolha a tabela "Tbl_Funcionarios"
<<<<<<< HEAD
Insert into Tbl_Funcionarios Values
('Santiago Luiz', 'Sub-gerente',8750.00),
('Luiz Santiago ', 'Gerente',12000.00),
('Davy Luiz', 'Fachineiro',1200.00),
('Luiz Davy ', 'Programador',5000.00),
('Pedro Luiz', 'QA',2500.00),
('João Pedro', 'Logistica',3000.00),
('Guilherme Ferreira', 'Supervisão',7000.00),
('Vanessa', 'Secretária',2000.00),
('Ariele', 'Gerente Geral',10000.00),
('Piva', 'Estagiário',500.00);

-- 17) Crie uma tabela chamada "Tbl_Vendas" com os campos: Id (int, chave primï¿½ria), ProdutoId (int, chave estrangeira referenciando a tabela "Produtos"), Quantidade (int), ValorTotal (decimal), e DataVenda (date).

create table  Tbl_Vendas(
	id int Identity (1,1) NOT NULL,
	ProdutoId int NOT NULL,
	quantidade int NOT NULL,
	valorTotal decimal(6,2) NOT NULL,
	dataVenda date NOT NULL,

	Constraint PK_Vendas Primary Key (id),
	Constraint FK_Produto2 Foreign Key (ProdutoId) References tbl_Produtos(id)
);

-- 18)Adicione uma nova venda referente ao produto com Id igual a 1, com Quantidade 2, ValorTotal 79.98 e DataVenda igual a hoje ï¿½ tabela "Tbl_Vendas".
 insert into Tbl_Vendas Values (1,2,79.98,'2024-09-13')

-- 19) Adicione mais 10 registros, com dados a sua escolha a tabela "Tbl_Vendas"
insert into Tbl_Vendas Values 
(1,2,21.34,'2024-02-12'),
(2,5,31.20,'2024-01-04'),
(3,6,20.0,'2024-07-02'),
(4,10,41.0,'2024-05-10'),
(5,7,132.99,'2024-04-25'),
(6,5,78.0,'2024-10-20'),
(7,3,71.0,'2024-03-30'),
(8,2,20.0,'2024-02-25'),
(9,1,5,'2024-03-12'),
(10,10,100,'2024-09-23');

-- 20)Exclua a venda com Id igual a 1 da tabela "Tbl_Vendas".
Delete  Tbl_Vendas
where id = 1
