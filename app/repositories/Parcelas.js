function gerarParcelas(valor, quantidade, data) {
  let parcelas = [];
  let valorParcela = valor / quantidade;
  let dataParcela = new Date(data);

  for (let i = 0; i < quantidade; i++) {
      parcelas.push({
          parcela: i + 1,
          valor: parseFloat(valorParcela.toFixed(2)),
          data: new Date(dataParcela.setMonth(dataParcela.getMonth() + 1)).toISOString().slice(0, 10)
      });
  }

  return parcelas;
}


module.exports = gerarParcelas;