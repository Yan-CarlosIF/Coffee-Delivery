import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartProvider from "./context/cartProvider";
import Checkout from "./pages/Checkout";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/submit" element={<SuccessPage />} />
          </Routes>
          <GlobalStyle />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
