import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";
import Rescard from "./Rescard";
import { RES_DATA } from "../../../__mocks__/dataMock";

const res_data = RES_DATA.data.cards[2].data.data.cards[0];

test("Render drawerbar component", async () => {
  const rescard = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Rescard resdata={res_data} />
        </Provider>
      </StaticRouter>
    )
  );

  const res_card_name = rescard.getByTestId("rescard-name");
  expect(res_card_name.innerHTML).toBe("Radhe Dhokla");
});
