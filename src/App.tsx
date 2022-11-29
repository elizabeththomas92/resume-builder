import "./App.css";
import Builder from "./pages/builder";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Builder />
    </Provider>
  );
}

export default App;
