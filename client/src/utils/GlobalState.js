import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// createContext will be used to instantiate a new Context object. The more meaningful term we can use here is that we're using it to create the container to hold our global state data and functionality so we can provide it throughout our app!
// useContext is another React Hook that will allow us to use the state created from the createContext function.

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
// With the StoreProvider function, we instantiate our initial global state with the useProductReducer() function we created earlier. Because that wraps it around the useReducer() Hook from React, every time we run this useProductReducer() function, we receive the following two items in return
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
      // state is the most up-to-date version of our global state object.
      // dispatch is the method we execute to update our state. It is specifically going to look for an action object passed in as its argument, as we'll soon see.
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  // By executing this function from within a component, we will receive the [state, dispatch] data our StoreProvider provider manages for us. This means that any component that has access to our StoreProvider component can use any data in our global state container or update it using the dispatch function.

  export { StoreProvider, useStoreContext };