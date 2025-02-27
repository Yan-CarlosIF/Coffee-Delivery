import "styled-components";
import { DefaultTheme } from "../styles/themes/default";

type themeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
