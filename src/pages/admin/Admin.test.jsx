import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Admin from "./Admin";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render admin component", async () => {
  const admin = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Admin />
        </Provider>
      </StaticRouter>
    )
  );

  const user_login_list = admin.getByTestId("user-login-list");
  expect(user_login_list.children.length).toBe(2);

  const delete_user_btn = admin.getAllByTestId("delete-user-btn");
  fireEvent.click(delete_user_btn[0]);
});
