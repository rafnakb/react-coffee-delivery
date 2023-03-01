# 1. Hooks

## 1.1 Context API
- Permite compartlhar props entre vários componentes ao mesmo tempo.


## 1.2 useEffect
- Ação de efeito colateral
- Por padrão, essa função é executada após a renderização inicial e após cada atualização do componente.
```js
useEffect(() => {
  /* Qual função será executada? */
  avisarAPI();
}, [
  /* Quando? Variáveis a monitorar */
  list
  ])