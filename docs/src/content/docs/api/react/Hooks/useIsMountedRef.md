---
title: useIsMountedRef
description: Generated API documentation for useIsMountedRef.
---

`Hook` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/hooks/use-is-mounted-ref.hook.ts#L32)

---

useIsMountedRef(): _RefObject<boolean>_

---

Hooks into whether component is currently mounted. Useful for controlling when you call state
setters during async operations.

### Returns
A ref where the `current` value indicates whether the component is currently mounted.

### Example
```javascriptreact
 const Component = () => {
   const [myState, setMyState] = useState('');

   const isMountedRef = useIsMountedRef();

   useEffect(() => {
     // Initial load from DB.
     const loadFromDb = async () => {
       const data = await MyApiService.getInitialData();

       if (isMountedRef.current) {
         // Avoid setting state in the event the component was unmounted while the call to load was out.
         setMyState(data);
       }
     };

     loadFromDb();
   }, []);
 }
```

### Parameters

