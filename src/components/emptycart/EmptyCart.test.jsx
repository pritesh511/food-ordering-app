import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import EmptyCart from "./EmptyCart";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render emptycart component", async () => {
  const emptycart = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <EmptyCart />
        </Provider>
      </StaticRouter>
    )
  );

  const Emptycart = emptycart.getByTestId("cart-para");
  expect(Emptycart.innerHTML).toBe(
    "Your cart has been empty please add items in cart for order"
  );
});
