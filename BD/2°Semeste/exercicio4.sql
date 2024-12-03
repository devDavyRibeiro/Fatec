use BDlocadora

--1. Selecione todos os clientes da locadora.
select * from clientes

--2. Selecione todos os filmes da locadora.
select * from filme

--3. Mostre todas as categorias que a locadora possui cadastrada.
select nome_categoria
from categoria

--4. Mostre todos os clientes do sexo masculino que moram na cidade de Sorocaba.
select *
from CLIENTES
where sexo = 'M' and CIDADE = 'Sorocaba'

--5. Mostre o nome e o telefone de todos os clientes da locadora ordenando a consulta por ordem alfabética.
select NOME, TELEFONE
from CLIENTES
order by NOME

--6. Mostre a quantidade de clientes mulheres cadastradas no sistema.
select count(*) as 'Número de Mulheres'
from CLIENTES
where sexo='F'

--7. Mostre as categorias de filmes que a locadora possui mostrando o nome da categoria em ordem alfabética.
select NOME_CATEGORIA
from CATEGORIA
order by NOME_CATEGORIA

--8. Mostre todos os filmes cadastrados do Diretor “Shawn Levy” que não possuem reserva.
select FILME
from FILME
where RESERVADA = 'n'

--9. Mostre todos os filmes cujo valor seja superior a 5 reais e que estão reservados.
select *
from FILME
where VALOR_LOCACAO > 5.0 and RESERVADA = 's'

--10. Mostre todos os diretores cadastrados no sistema sem repetição de nomes.
select distinct DIRETOR
from FILME

-- 11. Mostre a quantidade de filmes reservados.
select COUNT(*) as 'Quantidade de filmes reservados'
from FILME
where RESERVADA='s'

-- 12. Mostre o maior valor de Locação cadastrado.
select MAX(VALOR_LOCACAO) as 'Maior valor'
from FILME

--13. Mostre todos os filmes cuja categoria seja Ação.
select f.FILME
from FILME f inner join CATEGORIA c on c.COD_CATEGORIA = f.COD_FILME 
where c.NOME_CATEGORIA = 'Ação'

-- 14. Mostre todos os filmes cuja categoria seja Romance ou Aventura que já estão reservados e seu valor de locação seja menor que 5 reais.
select f.FILME
from FILME f inner join CATEGORIA c on f.COD_CATEGORIA = c.COD_CATEGORIA
where (c.NOME_CATEGORIA = 'Romance' or c.NOME_CATEGORIA = 'Aventura') and  f.VALOR_LOCACAO < 5.0

--15. Mostre todos os filmes alugados pelo cliente Renata Cristina.
select f.FILME
from FILME f inner join LOCACOES l on f.COD_FILME = l.COD_FILME
inner join CLIENTES c on c.COD_CLIENTE = l.COD_CLIENTE
where c.NOME = 'Renata Cristina'

--16. Mostre todos os clientes que já alugaram mais do que 3 filmes.
select c.NOME
from CLIENTES c inner join LOCACOES l on c.COD_CLIENTE = l.COD_CLIENTE
group by c.NOME
having COUNT(c.COD_CLIENTE) > 3

--17. Mostre quanto foi gasto pelo cliente Renata Cristina.
select SUM(f.VALOR_LOCACAO) as total_gasto
from CLIENTES c inner join LOCACOES l on c.COD_CLIENTE = l.COD_CLIENTE 
inner join FILME f on f.COD_FILME = l.COD_FILME
where c.NOME = 'Renata Cristina'

--18. Mostre a média de valor de locação da locadora.
select AVG(f.VALOR_LOCACAO) as 'Media da locadora'
from FILME f inner join LOCACOES l on f.COD_FILME = l.COD_FILME

--19. Mostre o menor valor de locação da locadora.
select MIN(f.VALOR_LOCACAO) as 'Menor valor'
from FILME f inner join LOCACOES l on f.COD_FILME = l.COD_FILME

--20. Mostre a quantidade de filme que a locadora possui por categoria.
select c.NOME_CATEGORIA, Quantidade = COUNT(*)
from FILME f inner join CATEGORIA c on f.COD_CATEGORIA = c.COD_CATEGORIA
group by c.NOME_CATEGORIA
