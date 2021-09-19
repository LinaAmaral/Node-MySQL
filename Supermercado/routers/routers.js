var express = require("express"); 
const router = express.Router();
const produtoController = require("../controllers/produtos-controller");
const funcionarioController = require("../controllers/funcionarios-controller");

router.get("/", produtoController.index);
router.get("/cadastrarProduto", produtoController.cadastrarProduto_get);
router.post("/cadastrarProduto", produtoController.cadastrarProduto_post);
router.get("/produtos", produtoController.produtos_get);
router.get("/deletarProduto/:id", produtoController.deletarProduto);
router.get("/editarProduto/:id", produtoController.editarProduto_get);
router.post("/editarProduto", produtoController.editarProduto_post);
router.post("/finalizarCompra", produtoController.finalizarCompra);


router.get("/logar", funcionarioController.logar_get);
router.post("/logar", funcionarioController.logar_post);
router.get("/cadastrarFuncionario", funcionarioController.cadastrarFuncionario_get);
router.post("/cadastrarFuncionario",funcionarioController.cadastrarFuncionario_post);
router.get("/funcionarios", funcionarioController.funcionarios);
router.get("/excluirFuncionario/:id", funcionarioController.excluirFuncionario);
router.get("/editarCadastro/:id", funcionarioController.editarCadastro_get);
router.post("/editarCadastro", funcionarioController.editarCadastro_post);

module.exports = router;