// Conecta ao banco especificado
db = db.getSiblingDB('Meu_Docker_Mongo');

// Insere o documento inicial
db.teste.insertOne({
  nome: 'Primeiro Documento',
  status: 'ativo'
});