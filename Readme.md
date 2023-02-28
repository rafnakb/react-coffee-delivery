# 1. Hooks

## 1.1 Context API
- Permite compartlhar props entre vários componentes ao mesmo tempo.


## 1.2 useEffect
- Ação de efeito colateral
```js
useEffect(() => {
  /* Qual função será executada? */
  avisarAPI();
}, [
  /* Quando? Variáveis a monitorar */
  list
  ])