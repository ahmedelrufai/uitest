import React, { useEffect } from "react";
import {Platform, StatusBar, useColorScheme, Button, Animated} from "react-native";
import { ThemeProvider } from 'styled-components/native';
import Toast from "react-native-toast-message";
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import BootSplash from "react-native-bootsplash";
import { API_URL } from "./utils/config";
import { darkTheme, lightTheme } from "./utils/theme.ts"
import useStore from "./store/store.ts";
import {createDrawerNavigator} from "@react-navigation/drawer";

import DrawerComp from "./navigations/DrawerComp.tsx";

function getOperationNameFromOperation(operation: any): string | null {
  const operationName = operation.query.definitions[0].operation;
  return operationName as string;
}
const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
});
const errorLink = onError(({ graphQLErrors, operation }) => {
  const operationName = getOperationNameFromOperation(operation);

  // const { token } = useTokenStore.getState();
  if (graphQLErrors) {
    // if (graphQLErrors[0]?.extensions.code === "UNAUTHENTICATED") {
    //
    //   // if(token){
    //   //   eventEmitter.emit(CLEAR_LOGIN)
    //   // }
    //
    // }
    graphQLErrors.forEach(({ message }) => {

      if (operationName === "mutation") {
        Toast.show({
          type: "error",
          text1: message,
        });
      }
    });
  }
});

const authLink = setContext((_, { headers }) => {
  // const { token } = useTokenStore.getState();
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const cache = new InMemoryCache()

const client = new ApolloClient({
  cache: cache,
  link: from([authLink, errorLink, httpLink]),
});


const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  const isIOS = Platform.OS === "ios";
  const { activeTheme, loadTheme, toggleTheme } = useStore();

  useEffect(() => {
    loadTheme().finally(()=>null);
    const closeSplash = async () => {
       await BootSplash.hide({ fade: true });
    }
    closeSplash().finally(() => console.log("Splash screen closed"))
  }, []);

  const theme = activeTheme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar barStyle="light-content" hidden={false} translucent={true} />
        <ThemeProvider theme={theme}>
          <DrawerComp />
        </ThemeProvider>
      </ApolloProvider>
      <Toast />
    </>
  );
}

export default App;
