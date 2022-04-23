const routes = require('express').Router();

// Rota do Usúario
const UserController = require('../controller/User')
routes.post('/user',UserController.store)
routes.get('/user',UserController.index)
routes.put('/user',UserController.update)
routes.delete('/user',UserController.delete)

// Rota da Clínica 
const ClinicaController = require('../controller/Clinica');
routes.post('/clinica',ClinicaController.store)
routes.get('/clinica',ClinicaController.index)
routes.put('/clinica',ClinicaController.update)
routes.delete('/clinica',ClinicaController.delete)

// Rota da Api BuscarCep
const BuscaCepController = require('../controller/BuscaCep');
routes.get('/busca-cep',BuscaCepController.index)

// Rota do Endereço
const EnderecoController = require('../controller/Endereco');
routes.post('/endereco',EnderecoController.store)
routes.get('/endereco',EnderecoController.index)
routes.put('/endereco',EnderecoController.update)
routes.delete('/endereco',EnderecoController.delete)

// Rota das Especialidades
const EspecialidadeController = require('../controller/Especialidade');
routes.post('/especialidade',EspecialidadeController.store)
routes.get('/especialidade',EspecialidadeController.index)
routes.put('/especialidade',EspecialidadeController.update)
routes.delete('/especialidade',EspecialidadeController.delete)

// Rota do Médico
const MedicoController = require('../controller/Medico');
routes.post('/medico',MedicoController.store)
routes.get('/medico',MedicoController.index)
routes.put('/medico',MedicoController.update)
routes.delete('/medico',MedicoController.delete)

// Rota das Permissoes
const PermissoesController =  require('../controller/Permissoes');
routes.post('/permissoes',PermissoesController.store)
routes.get('/permissoes',PermissoesController.index)
routes.put('/permissoes',PermissoesController.update)
routes.delete('permissoes',PermissoesController.delete)

module.exports = routes
