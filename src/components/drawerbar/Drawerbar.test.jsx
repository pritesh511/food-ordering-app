import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Drawerbar from "./Drawerbar";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { StaticRouter } from "react-router-dom/server";

test("Render drawerbar component", async () => {
  const drawerbar = await act(() =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Drawerbar openDrawer={true} onClose={jest.fn()} />
        </Provider>
      </StaticRouter>
    )
  );

  const NavlinkList = drawerbar.getByTestId("nav-link-list");
  expect(NavlinkList.children.length).toBe(7);
  fireEvent.click(NavlinkList.children[0]);
  fireEvent.click(NavlinkList.children[1]);
  fireEvent.click(NavlinkList.children[2]);
  fireEvent.click(NavlinkList.children[3]);
  fireEvent.click(NavlinkList.children[4]);
  fireEvent.click(NavlinkList.children[5]);
  fireEvent.click(NavlinkList.children[6]);
});
