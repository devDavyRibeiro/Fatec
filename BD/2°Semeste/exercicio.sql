create database Exercicio1;
USE Exercicio1;

--1) Crie uma tabela chamada "Professores" com os campos: Id (int, chave prim�ria), Nome (varchar 50), e Disciplina (varchar 15).

create table Professores (
	id int Identity (1,1) NOT NULL,
	nome varchar(50) NOT NULL,
	disciplina varchar(15) NOT NULL,

	Constraint PK_Professor Primary key(id)
);

--alter table professores
--add Constraint PK_Professor Primary key(id)

-- 2) Adicione um novo professor com Nome "Ana Oliveira" e Disciplina "Portugu�s" � tabela "Professores".

Insert into Professores
Values ('Ana Oliveira','Português');

select * from Professores;

--3) Atualize o nome do professor com Id igual a 1 para "Ana Silva".
	
Update Professores
SET nome = 'Ana Silva'
Where id = 1

--4) Adicione mais 10 registros, com dados a sua escolha a tabela "Professores"
Insert into Professores(nome,disciplina)
Values
('João Maneiro','Matemética'),
('Ariele','Inglês'),
('Vanessa','Física'),
('Luiz Flávio','WEB'),
('Mayara','História'),
('Matheuszinho','Desenvolvimento'),
('Fernando', 'Química'),
('Guilherme','Filosofia'),
('Pivinha','Educação Física'),
('Davy','Algoritmos');

--5)Exclua o professor com Id igual a 2 da tabela "Professores".

Delete from Professores
Where id=2

--6) Crie uma tabela chamada "Turmas" com os campos: Id (int, chave prim�ria), Nome (varchar 50), e ProfessorResponsavel (int chave estrangeira referenciando a tabela "Professores").
create table Turmas(
	id int Identity(1,1) NOT NULL,
	nome varchar(50) NOT NULL,
	professor int,

	Constraint PK_professor Primary Key(id),
	Constraint FK_professor Foreign Key(professor) References Professores
);

--7) Adicione uma nova turma com Nome "9A" e ProfessorResponsavel Ana Silva" à tabela "Turmas".

insert into Turmas Values
('9A',1);

--8) Adicione mais 10 registros, com dados a sua escolha a tabela "Turmas"
insert into Turmas Values
('DS1',3),
('DS2',3),
('DS3',4),
('IN1',5),
('9B',6),
('9C',10),
('IN2',6),
('7A',7),
('7B',8),
('6B',10);

--9) Crie uma tabela chamada "Alunos" com os seguintes campos: Id (int, chave prim�ria), Nome (varchar 50), DataNascimento (date), e TurmaId (int, chave estrangeira referenciando a tabela "Turmas").
Create Table Alunos(
	id int Identity(1,1) NOT NULL,
	nome varchar(50),
	dataNasc date,
	turmaId int not Null

	Constraint PK_Aluno Primary Key(id)
	Constraint FK_Turmas Foreign Key (turmaId) References Turmas
);

--10) Adicione um novo aluno com Nome "Maria Souza", DataNascimento "2005-10-15" e TurmaId igual a 1 à tabela "Alunos".
insert into Alunos Values ('Maria Souza','2005-10-15',1);

--11)Atualize o nome do aluno com Id igual a 1 para "Maria da Silva".

UPDATE alunos
set nome = 'Maria Silva'
where id = 1;

-- 12)Adicione mais 10 registros, com dados a sua escolha a tabela "Alunos"

insert into Alunos Values
('Davy','2004-10-22',1),
('Bella','2003-10-01',2),
('Ariele','2000-03-22',3),
('Fernando','2008-10-22',4),
('Piva','2000-10-22',5),
('Lucas','2024-10-22',6),
('Mayara','2014-09-01',7),
('Vanessa','2007-10-05',8),
('Thiago','2009-12-08',9),
('Matheus','2004-09-13',10);

--13)Exclua o aluno com Id igual a 2 da tabela "Alunos".
delete from Alunos
where id = 2;

-- 14) Crie uma tabela chamada "Notas" com os campos: Id (int, chave prim�ria), AlunoId (int, chave estrangeira referenciando a tabela "Alunos"), Disciplina (varchar 15), e Nota (decimal 5,2).

Create table Notas(
	id int Identity(1,1) NOT NULL,
	AlunoId int,
	disciplina varchar(15),
	notas decimal(5,2),

	Constraint PK_Notas Primary Key(id),
	Constraint FK_Alunos Foreign Key (AlunoId) references alunos
);

-- 15) Adicione uma nota de 8.5 para o aluno com Id igual a 1 na disciplina "Matem�tica" � tabela "Notas".

insert into Notas values
(1,'Matemática',8.5);

--16) Atualize a nota do aluno com Id igual a 1 na disciplina "Matemática" para 9.0.

Update Notas
set notas = 9.0
where id = 1;

--17)Adicione mais 10 registros, com dados a sua escolha na tabela "Notas"
insert into Notas values
(6,'Linguagem',6.0),
(7,'Geografia',7.0),
(8,'Matemática',5.3),
(9,'Web',10.0),
(10,'História',7.0),
(10,'Física',9.0),
(4,'Artes',6.5),
(5,'Artes2',7.2),
(4,'Inglês',7.5),
(5,'Geografia',6.5);

--18)Exclua a nota do aluno com Id igual a 1 na disciplina "Matem�tica" da tabela "Notas".

Delete from notas where id=1

-- 19) Crie uma tabela chamada "Matriculas" com os campos: Id (int, chave prim�ria), AlunoId (int, chave estrangeira referenciando a tabela "Alunos"), TurmaId (int, chave estrangeira referenciando a tabela "Turmas"), e DataMatricula (date).

create table matricula(
	id int Identity(1,1),
	AlunoId int,
	turmaId int,
	dataMatricula date,

	Constraint PK_Matricula Primary Key(id),
	Constraint FK_AlunosMatricula Foreign Key(AlunoId) references alunos,
	Constraint FK_TurmasMatricula Foreign Key(TurmaId) references turmas
);
--20) Adicione uma matr�cula para o aluno com Id igual a 1 na turma com Id igual a 1 com a DataMatricula igual a "2022-02-15" � tabela "Matriculas".
insert into matricula values (1,1,'2022-02-15')

--21) Adicione mais 10 registros, com dados a sua escolha na tabela  "Matriculas"
insert into matricula values
(1,1,'2022-02-15'),
(3,3,'2022-02-16'),
(4,4,'2022-02-17'),
(5,5,'2022-02-18'),
(6,6,'2022-02-19'),
(7,7,'2022-02-12'),
(8,8,'2022-02-11'),
(9,9,'2022-02-1'),
(10,10,'2022-02-9'),
(1,2,'2022-02-04');