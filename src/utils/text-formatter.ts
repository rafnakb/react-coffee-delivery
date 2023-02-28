/* 
  Formatar modea padrão Brail - Entrada: 30.00 => Saida: R$ 30,00
*/
export function formatCoinToBrazil(value: number) {
  return value
    .toLocaleString('pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      })
}