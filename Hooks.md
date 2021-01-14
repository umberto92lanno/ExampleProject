###TIpi di Hooks:

###*useEffect*
```
useEffect(() => {
    console.log('componentDidMount');
    return () => {
        console.log('componentWillUnmount');
    }
}, []);

// useEffect richiamato ad ogni update di una variabile "list":

useEffect(() => {
    console.log('valore di list --->', list);
}, [list]);
```

###*useCallback*
```
// esempio relativo alla props "renderItem" di una FlatList
// una volta istanziata sarà possibile richiamare: renderItem();

const renderItem = useCallback(() => {
    return <View />
}, []);
```

###*useMemo*
```
// esempio relativo ad un possibile utilizzo con variabile "array" contenente un array di oggetti
// una volta istanziata sarà possibile richiamare: valore;

const valore = useMemo() => {
   return array.map(a => a.id = a.id +1);
}, []);
```