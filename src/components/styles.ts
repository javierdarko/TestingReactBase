import styled from "@emotion/styled";
import {
  IContainerFlex,
  IFixedItemContainer,
  IPropsImage,
  IPropsSearchInput,
  IPropsText,
} from "./interfaces";

export const ContainerFlex = styled.div<IContainerFlex>`
  display: ${(props) => props.Display};
  grid-template-columns: ${(props) => props.GridColumns}
  position: ${(props) => props.Position};
  top: ${(props) => props.PositionTop};
  bottom: ${(props) => props.PositionBottom};
  left: ${(props) => props.PositionLeft};
  right: ${(props) => props.PositionRight};
  overflow: ${(props) => props.Overflow};
  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
  margin: ${(props) => props.Margin};
  border: ${(props) => props.Border};
  background: ${(props) => props.Background};
  justify-content: ${(props) => props.Justify};
  align-items: ${(props) => props.Align};
  padding:${(props) => props.Padding};
  box-shadow: ${(props) => props.BoxShadow};
  flex-direction: ${(props) => props.FlexDir};
  flex-wrap: ${(props) => props.FlexWrap};
  border-radius: ${(props) => props.Radius};
  gap: ${(props) => props.Gap};
   overflow-x: ${(props) => props.OverflowX}; 
  overflow-y: ${(props) => props.OverflowY};  
  cursor: ${(props) => props.Cursor};
  text-align: ${(props) => props.TextAlign}
    &:hover {
    background: ${(props) => props.HoverBackground};
  }
  
`;

ContainerFlex.defaultProps = {
  Display: "flex",
  Width: "100%",
  Height: "100%",
  Justify: "center",
  Align: "center",
};
export const ContainerGrid = styled.div<IContainerFlex>`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${(props) => props.GridColumns};
  position: ${(props) => props.Position};
  top: ${(props) => props.PositionTop};
  bottom: ${(props) => props.PositionBottom};
  left: ${(props) => props.PositionLeft};
  right: ${(props) => props.PositionRight};
  overflow: ${(props) => props.Overflow};
  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
  margin: ${(props) => props.Margin};
  border: ${(props) => props.Border};
  background: ${(props) => props.Background};
  justify-content: ${(props) => props.Justify};
  align-items: ${(props) => props.Align};
  padding: ${(props) => props.Padding};
  box-shadow: ${(props) => props.BoxShadow};
  flex-direction: ${(props) => props.FlexDir};
  flex-wrap: ${(props) => props.FlexWrap};
  border-radius: ${(props) => props.Radius};
  gap: ${(props) => props.Gap};
  overflow-x: ${(props) => props.OverflowX};
  overflow-y: ${(props) => props.OverflowY};
  cursor: ${(props) => props.Cursor};
`;
ContainerGrid.defaultProps = {
  Width: "100%",
  Height: "100%",
  Justify: "center",
  Align: "center",
};

export const Text = styled.span<IPropsText>`
  color: ${(props) => props.Color};
  font-size: ${(props) => props.FontSize};
  font-weight: ${(props) => props.FontWeight};
  line-height: ${(props) => props.LineHeight};
  text-align: ${(props) => props.TextAlign};
  margin: ${(props) => props.Margin};
  padding: ${(props) => props.Padding};
  text-transform: ${(props) => props.TextTransform};
  letter-spacing: ${(props) => props.LetterSpacing};
  font-family: ${(props) => props.FontFamily};
  cursor: ${(props) => props.Cursor};
  border: ${(props) => props.Border};

  &:hover {
    text-decoration: ${(props) => props.TextDecoration};
    text-decoration-color: ${(props) => props.DecorationColor};
  }
`;

Text.defaultProps = {
  FontSize: "16px",
  FontWeight: "normal",
  LineHeight: "1.5",
  TextAlign: "left",
  Margin: "0",
  Padding: "0",
  TextTransform: "none",
  LetterSpacing: "normal",
  FontFamily: "Nunito, sans-serif",
  Cursor: "text",
};

export const Image = styled.img<IPropsImage>`
  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
  border-radius: ${(props) => props.Radius};
  border: ${(props) => props.Border};
  background: ${(props) => props.Background};
  cursor: ${(props) => props.Cursor};
  opacity: ${(props) => props.Opacity};
  margin: ${(props) => props.Margin};
  margin-left: ${(props) => props.MarginLeft};
  object-fit: ${(props) => props.ObjectFit};
  aspect-ratio: ${(props) => props.AspectRatio};
  aspect-ratio: ${(props) => props.AspRatio};
  transform: ${(props) => props.Transform};
  padding: ${(props) => props.Padding};
  transition: ${(props) => props.Transition};
  position: ${(props) => props.Position};
  top: ${(props) => props.PositionTop};
  left: ${(props) => props.PositionLeft};
  right: ${(props) => props.PositionRight};
  bottom: ${(props) => props.PositionBottom};
  filter: ${(props) => props.Filter};
  align-self: ${(props) => props.Self};
  margin-right: ${(props) => props.MarginRight};
`;

export const HamburgerMenuIcon = styled(Image)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled(ContainerFlex)`
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    width: 210px;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background: ${(props) => props.Background};
  }
`;

export const DesktopMenu = styled(ContainerFlex)`
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: 60px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FixedItemContainer = styled.div<IFixedItemContainer>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: start;
  align-items: flex-start;

  & > * {
    flex: 0 1 ${(props) => props.ItemSize || "100px"};
    height: ${(props) => props.ItemSize || "100px"};
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
  }
`;

export const SearchInput = styled.div<IPropsSearchInput>`
  background: ${(props) => props.Background};
  background-color: ${(props) => props.BackG};
  justify-content: ${(props) => props.Justify};
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  position: ${(props) => props.Position};
  margin: ${(props) => props.Margin};
  margin-top: ${(props) => props.MarginTop};
  right: ${(props) => props.Right};
  top: 0;
  border: ${(props) => props.Border};
  border-radius: ${(props) => props.Radius};
  display: ${(props) => (props.Display ? props.Display : "grid")};
  grid-template-columns: ${(props) => props.GridColumn};
  flex: ${(props) => props.Flex};
  align-items: center;
  padding: ${(props) => props.Padding};
  min-height: ${(props) => props.MinH};
  cursor: ${(props) => props.Cursor};
  border-color: ${(props) => (props.error ? "#ef4f55" : "#E8E9EA")};
  box-sizing: border-box;
  column-gap: ${(props) => props.ColumnGap};
  overflow: ${(props) => props.OverFlow};
  & > input {
    background: ${(props) => props.Background};
    background-color: ${(props) => props.BackG};
    border: none;
    outline: none;
    font-size: ${(props) => props.FontSize};
    color: #050505;
    line-height: 16px;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: ${(props) => (props.InputPadding ? props.InputPadding : "0")};
    width: ${(props) => props.widthInput};
    ::placeholder {
      color: ${(props) => props.PlaceholderColor};
      line-height: ${(props) => props.PlaceholderLHeight};
      font-size: ${(props) => props.PlaceholderFontSize};
      font-weight: ${(props) => props.PlaceholderWeight};
    }
    :disabled {
      background: #f4f5f5;
    }
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
      -webkit-box-shadow: ${(props) => props.WBoxShadow};
    }
  }
  &:hover {
    background: ${(props) => props.Background};
    background-color: ${(props) => props.BackG};
    border-color: ${(props) => (props.error ? "#ef4f55" : "#5A5AFF")};
    box-shadow: ${(props) => props.BoxShadowH};
  }
  &:focus-within {
    background: ${(props) => props.Background};
    background-color: ${(props) => props.BackG};
    border-color: ${(props) => (props.error ? "#ef4f55" : "#5A5AFF")};
    box-shadow: ${(props) => props.BoxShadowF};
  }

  figure > svg > path {
    fill: ${(props) => (props.error ? "#ef4f55" : "#5A5AFF")};
  }
`;
SearchInput.defaultProps = {
  Height: "40px",
  Position: "relative",
  GridColumn: "85% 15%",
  Width: "100%",
  Padding: "0 1rem",
  PlaceholderColor: "#A7A9AC",
  PlaceholderLHeight: "1rem",
  PlaceholderFontSize: "0.875rem",
  PlaceholderWeight: "400",
  BorderH: "1px solid #5A5AFF",
  BorderF: "1px solid #5A5AFF",
  Border: "1px solid #E8E9EA",
  Right: "1rem",
  MinH: "40px",
  Radius: "32px",
  WBoxShadow: "0 0 0px 1000px #fff inset",
  FontSize: "1rem",
  widthInput: "inherit",
};

export const ButtonGenerals = styled.button`
  padding: 8px;
  background-color: #ff2400;
  color: white;
  border: 1px solid #ff2400;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  text-align: center;

  &:hover {
    background-color: #cc1e00;
    border-color: #cc1e00;
  }

  transition: background-color 0.3s ease, border-color 0.3s ease;
`;
