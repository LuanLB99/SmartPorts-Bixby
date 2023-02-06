import http from 'http'

export default function NovoInvestimento({Ativo ,Valor, Quantidade, Custo}) {
  let url = 'http://35.168.2.104/finances/newInvest';

  let newInvest = {
    Ativo:Ativo,
    Quantidade:Quantidade,
    Valor_Investido:Valor,
    Preço:Custo
  }

  let options = {
  format: 'json',
  headers: {
    accept: 'application/json',
  },
  passAsJson: true,
}
const response = http.postUrl(url, newInvest, options)

  return {
    Ativo: response.Ativo,
    Quantidade: response.Quantidade,
    Custo: response.Custo,
    Valor: response.Valor,
    Data: response.Data,
  }
}

