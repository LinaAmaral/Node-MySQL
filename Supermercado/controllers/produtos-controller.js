const db = require("../db_connection");

exports.index = (req, res) => {
    res.render("./views/pages/index")
};
exports.cadastrarProduto_get = (req, res) => {
    res.render("./views/pages/formProduto");
};
exports.cadastrarProduto_post = (req, res) => {
    var sql = `INSERT INTO produtos (nome_produto, quantidade, valor_unitario) VALUES ('${req.body.nome_produto}',${req.body.quantidade}, ${req.body.valor_unitario})`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/produtos");
    });
};
exports.produtos_get = (req, res) => {
    let ids_produtos_comprados = null;

    if (req.query.ids_produtos) {
        ids_produtos_comprados = req.query.ids_produtos.split(",").map(id => parseInt(id));
    }
    var sql = `SELECT * from produtos`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render("./views/pages/produtos", { produtos: result, produtos_comprados: ids_produtos_comprados });
    });
};
exports.deletarProduto = (req, res) => {
    var sql = `DELETE from produtos where id_produto = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/produtos");
    });
};
exports.editarProduto_get = (req, res) => {
    var sql = `SELECT * from produtos where id_produto = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render("./views/pages/formEditarProduto", { produto: result[0] })
    });
};
exports.editarProduto_post = (req, res) => {
    var sql = `UPDATE produtos set nome_produto='${req.body.nome_produto}', quantidade='${req.body.quantidade}', valor_unitario='${req.body.valor_unitario}' where id_produto = ${req.body.id_produto}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/produtos");
    });
};
exports.finalizarCompra = (req, res) => {

    if (req.body.ids_produtos.length > 0) {
        req.body.ids_produtos.split(",").map(id => parseInt(id)).forEach(id => {
            var sql = `SELECT quantidade, valor_unitario from produtos where id_produto = ${id}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                quantidade = result[0].quantidade;
                quantidade = quantidade - 1;
                var sql = `UPDATE produtos set quantidade= ${quantidade} where id_produto = ${id}`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                });
            });
        });
    };
    res.redirect("/produtos?ids_produtos=" + req.body.ids_produtos)
};


