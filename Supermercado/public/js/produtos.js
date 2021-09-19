function FinalizarCompra() {
    let ids_produtos = [];
    $('input:checked').each(function () {
        ids_produtos.push($(this).val());
    });
    redirectPost('/finalizarCompra', { ids_produtos: ids_produtos });

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


$(window).on('load', function () {
    if( $("#modal").length)
        $('#compra_finalizada').modal('show');
});