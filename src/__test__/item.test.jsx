import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";
//    bileşeni kullanırken props gönderiyorsak test ortamında da
//    normalde gönderdiğimize benzer proplar göndermeliyiz
test("Itema Gönderilen Proplar doğru şekilde kullanılır", () => {
  //test edilecek bileşeni render et.
  render(<Item color="text-blue-500" text="toplam test" value="399M" />);

  //icon elementini al
  const icon = screen.getByTestId("icon");
  //color propu ile gelen değer iconun classNameinde var mı ?
  expect(icon).toHaveClass("text-blue-500");

  // 1-önce elementi çağır sonra textine bak
  const h3 = screen.getByRole("heading");
  expect(h3).toHaveTextContent("399M");

  //2-element text
  screen.getByText("toplam test");
});
