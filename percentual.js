const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(faturamento).reduce((acc, cur) => acc + cur);

const percentuais = {};
for (const estado in faturamento) {
  const percentual = (faturamento[estado] / total) * 100;
  percentuais[estado] = percentual;
}

console.log('Percentual de representação por estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
