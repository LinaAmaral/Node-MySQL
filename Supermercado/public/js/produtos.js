function FinalizarCompra() {
    let ids_produtos = [];
    $('input:checked').each(function () {
        ids_produtos.push($(this).val());
    });
    console.log(ids_produtos)
    redirectPost('/finalizarCompra', { ids_produtos: ids_produtos });
    // $.ajax({
    //     type: "POST",
    //     data: { lista_produtos: lista_produtos },
    //     url: "/finalizarCompra",
    //     success: function (msg) {
    //         console.log(msg)
    //     }
    // });
};

function redirectPost(url, data) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = url;
    for (var name in data) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }
    form.submit();
}