import styled from "@emotion/styled";
import {
  IContainerFlex,
  IFixedItemContainer,
  IPropsButtonGenerals,
  IPropsImage,
  IPropsInput,
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
  padding${(props) => props.Padding};
  box-shadow: ${(props) => props.BoxShadow};
  flex-direction: ${(props) => props.FlexDir};
  flex-wrap: ${(props) => props.FlexWrap};
  border-radius: ${(props) => props.Radius};
  gap: ${(props) => props.Gap};
   overflow-x: ${(props) => props.ScrollX}; 
  overflow-y: ${(props) => props.ScrollY};  
  
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
padding${(props) => props.Padding};
box-shadow: ${(props) => props.BoxShadow};
flex-direction: ${(props) => props.FlexDir};
flex-wrap: ${(props) => props.FlexWrap};
border-radius: ${(props) => props.Radius};
gap: ${(props) => props.Gap};
 overflow-x: ${(props) => props.ScrollX}; 
overflow-y: ${(props) => props.ScrollY};  

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
    top: 40px;
    right: 0;
    width: 183px;
    height: auto;
    padding: 8px;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background: ${(props) => props.Background};
  }
`;

export const DesktopMenu = styled(ContainerFlex)`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
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
export const Input = styled.input<IPropsInput>`
  background: ${(props) => props.BackGroundColor} 0% 0% no-repeat padding-box;
  border: ${(props) =>
    props.error ? "1px solid #A82424" : "1px solid #E8E9EA"};
  border-radius: ${(props) => props.Radius};
  text-align: ${(props) => props.TextAlign};
  opacity: 1;
  height: ${(props) => props.Height};
  margin: ${(props) => props.Margin};
  margin-left: ${(props) => props.MarginLeft};
  width: ${(props) => props.Width};
  padding: ${(props) => props.Padding};
  color: ${(props) => props.Color};
  cursor: ${(props) => props.Cursor};
  font-size: ${(props) => props.FontSize};
  font-family: ${(props) => props.FontFamily};
  outline: ${(props) => props.Outline};
  font-weight: ${(props) => props.FontWeight};
  border-top-right-radius: ${(props) => props.RadiusTR};
  border-bottom-right-radius: ${(props) => props.RadiusBR};
  box-sizing: border-box;
  margin-top: ${(props) => props.MarginTop};
  ::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
  ${(props) =>
    props.disabled
      ? `&:disabled{
            border-color: #E8E9EA;
            background-color: ${props.disabledBackG || "#F4F5F5"};
        }`
      : `&:focus {
                border-color: ${props.error ? "#ef4f55" : "#5A5AFF"};
        }
        &:hover {
            border-color: ${props.error ? "#ef4f55" : "#5A5AFF"};
        }`}
  &::placeholder {
    color: ${(props) => props.HolderColor};
    font-size: ${(props) => props.HolderFontSize};
    line-height: ${(props) => props.HolderHeight};
    font-weight: ${(props) => props.HolderWeight};
  }
`;
Input.defaultProps = {
  Margin: "0",
  Height: "40px",
  Width: "100%",
  Cursor: "pointer",
  HolderHeight: "",
  HolderWeight: "400",
  FontWeight: "400",
  HolderFontSize: "1rem",
  FontSize: "1rem",
  HolderColor: "#cbced1",
  Radius: "32px",
  Padding: "8px 16px",
  Color: "#050505",
  Outline: "none",
  BackGroundColor: "#fff",
};

export const ButtonGenerals = styled.button<IPropsButtonGenerals>`
  display: flex;
  justify-content: ${(props) => props.Justify};
  border: ${(props) =>
    props.SecondaryButton ? "1px solid #5A5AFF" : props.Border};
  text-transform: ${(props) => props.Transform};
  border-radius: ${(props) => props.Radius};
  width: ${(props) => props.Width};
  padding: ${(props) => props.Padding};
  height: ${(props) => props.Height};
  min-height: ${(props) => props.MHeight};
  font-family: ${(props) => props.FontFamily};
  font-size: ${(props) => props.FontSize};
  font-weight: ${(props) => props.FontWeight};
  align-items: center;
  align-self: ${(props) => props.Self};
  margin: ${(props) => props.Margin};
  background-color: ${(props) =>
    props.SecondaryButton ? "#FFFFFF" : props.BackGC};
  margin-top: ${(props) => props.MT};
  box-shadow: ${(props) => props.BS};
  color: ${(props) => (props.SecondaryButton ? "#5A5AFF" : props.Color)};
  position: ${(props) => props.Position};
  cursor: ${(props) => props.Cursor};
  gap: ${(props) => props.Gap};
  top: ${(props) => props.Top};
  left: ${(props) => props.Left};
  border-top-left-radius: ${(props) => props.RadiusTL};
  border-bottom-left-radius: ${(props) => props.RadiusBL};
  border-right: ${(props) => props.BorderR};
  border-left: ${(props) => props.BorderL};
  border-top: ${(props) => props.BorderT};
  border-bottom: ${(props) => props.BorderB};

  &:hover {
    border-color: ${(props) => props.HBorder};
    border: ${(props) => props.BorderH};
    color: ${(props) => props.HColor};
    box-shadow: ${(props) => props.HShadow};
    background-color: ${(props) =>
      props.SecondaryButton ? "#E5E5FF" : props.HBackG};
  }

  &:disabled {
    background-color: ${(props) => props.DBackG};
    border: ${(props) => props.DBorder};
    color: ${(props) => props.DColor};
    font-weight: ${(props) => props.DFontWeight};
    box-shadow: ${(props) => props.HDBox};
    cursor: ${(props) => props.DCursor};
  }

  &[disabled]:hover {
    border: ${(props) => props.HDBorder};
    color: ${(props) => props.HDColor};
    box-shadow: ${(props) => props.HDBox};
  }

  &:hover svg path {
    fill: ${(props) => props.FillIcon};
  }

  &:hover span {
    color: ${(props) => (props.SecondaryButton ? "#5A5AFF" : props.HText)};
  }

  span {
    color: ${(props) => props.TextColor};
  }
`;

ButtonGenerals.defaultProps = {
  Height: "40px",
  Justify: "center",
  Radius: "32px",
  FontSize: "16px",
  BackGC: "#5A5AFF",
  Padding: "8px 16px",
  Gap: "8px",
  Transform: "",
  HBackG: "#0D166B",
  DBackG: "#E8E9EA",
  DBorder: "none",
  Color: "#FFFFFF",
  Border: "none",
  DColor: "#a1a5aa",
  DCursor: "default",
  Cursor: "pointer",
  FontWeight: "700",
  FillIcon: "#FFFFFF",
  FontFamily: "Nunito",
};

export const SearchInput = styled.div<IPropsSearchInput>`
  background: #ffffff 0% 0% no-repeat padding-box;
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
    border-color: ${(props) => (props.error ? "#ef4f55" : "#5A5AFF")};
    box-shadow: ${(props) => props.BoxShadowH};
  }
  &:focus-within {
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
