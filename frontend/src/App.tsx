import { BrowserRouter } from "react-router-dom";
import { ChannelContextProvider } from "./context/ChannelContext";
import AppRoutes from "./Routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <ChannelContextProvider>
        <GlobalStyles />
        <AppRoutes />
      </ChannelContextProvider>
    </BrowserRouter>
  );
}

export default App;
