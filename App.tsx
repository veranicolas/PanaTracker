import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import { MainNavigator } from "./src/routes/Navigators"

export default function App() {

  return(
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}
