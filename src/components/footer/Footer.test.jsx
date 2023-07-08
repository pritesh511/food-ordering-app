import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render footer component", async () => {
  const footer = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </StaticRouter>
    )
  );

  const SocialIconList = footer.getByTestId("social-icon-list");
  expect(SocialIconList.children.length).toBe(4);
});
