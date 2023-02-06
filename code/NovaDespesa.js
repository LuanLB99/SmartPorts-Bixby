import http from 'http'

export default function NovaDespesa({Despesa, Forma, Valor}) {
  let url = 'http://35.168.2.104/finances/newSpent';

  let Spent = {
    Despesa:Despesa,
    Valor:Valor,
    Forma_de_Pagamento:Forma
  }

  let options = {
  format: 'json',
  headers: {
    accept: 'application/json',
  },
  passAsJson: true,
}
const response = http.postUrl(url, Spent, options)

  return {
    Planilha:response.Planilha,
    Despesa:Despesa,
    Data:response.Data,
    Forma:response.Forma,
    Valor:Valor,
    Nome:response.Nome
  }
}

