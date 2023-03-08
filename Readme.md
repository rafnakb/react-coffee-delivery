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
```

## 1.3 useReducer
Diferenças dos retornos
- return {...state}
Retorna uma cópia rasa do objeto de estado atual

- return {...state, storageOrder}
Mantém todas as propriedades existentes do objeto de estado e adiciona uma nova propriedade storageOrder. 

- return storageOrder
A função reducer substitui completamente o objeto de estado existente pelo valor de storageOrder.

