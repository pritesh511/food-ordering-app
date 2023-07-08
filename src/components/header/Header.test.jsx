import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render body component", async () => {
  const header = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    )
  );

  const header_list = header.getByTestId("nav-link");
  expect(header_list.children.length).toBe(4);
});
