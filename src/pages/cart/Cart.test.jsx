import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render drawerbar component", async () => {
  const cart = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );

  console.log(cart);
});
