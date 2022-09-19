import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./src/redux/store"
import { MainNavigator } from "./src/routes/Navigators"

export default function App() {

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
      
    </Provider>
  )
}
