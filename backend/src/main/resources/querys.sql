//CONSULTA VERBETES POR CAMPOS TEMATICOS
SELECT v.descricao, v.separacao_silabica, v.genero, v.definicao, c.nome
FROM verbetes v
INNER JOIN campos_tematicos c
ON v.campo_tematico_id = c.id
WHERE c.id = 9