import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "./Body";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { RES_DATA } from "../../../__mocks__/dataMock";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RES_DATA),
  });
});

test("Render body component", async () => {
  const body = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );

  const rescard = screen.getAllByTestId("rescard");
  expect(rescard.length).toBe(15);
});
