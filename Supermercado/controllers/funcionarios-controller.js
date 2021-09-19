const db = require("../db_connection");

exports.logar_get = (req, res) => {
    res.render("./views/pages/formLogin")
};
exports.logar_post = (req, res) => {

    var sql = `SELECT nome_funcionario, senha, cargo_funcionario from funcionarios where nome_funcionario = '${req.body.nome_funcionario}' and senha='${req.body.senha}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/produtos");
    });
};

exports.cadastrarFuncionario_get = (req, res) => {
    res.render("./views/pages/formFuncionario");
};
exports.cadastrarFuncionario_post = (req, res) => {
    var sql = `INSERT INTO funcionarios (nome_funcionario, cargo_funcionario, senha) VALUES ('${req.body.nome_funcionario}','${req.body.cargo_funcionario}', '${req.body.senha}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/funcionarios");
    });
};
exports.funcionarios = (req, res) => {
    var sql = `SELECT id_funcionario, nome_funcionario, cargo_funcionario from funcionarios`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render("./views/pages/funcionarios", { funcionarios: result });
    });
};
exports.excluirFuncionario = (req, res) => {
    var sql = `DELETE from funcionarios where id_funcionario = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/funcionarios");
    });
};
exports.editarCadastro_get = (req, res) => {
    var sql = `SELECT * from funcionarios where id_funcionario = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render("./views/pages/formEditarFuncionario", { funcionario: result[0] })
    });
};
exports.editarCadastro_post = (req, res) => {
    var sql = `UPDATE funcionarios set nome_funcionario='${req.body.nome_funcionario}', cargo_funcionario='${req.body.cargo_funcionario}' where id_funcionario = ${req.body.id_funcionario}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/funcionarios");
    });
};