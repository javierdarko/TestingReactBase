import styled from "@emotion/styled";
import {
  IContainerFlex,
  IFixedItemContainer,
  IPropsImage,
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
    display: none; /* Oculta el ícono de hamburguesa en pantallas grandes */
  }
`;

export const MenuContainer = styled(ContainerFlex)`
  @media (max-width: 768px) {
    position: absolute;
    top: 40px;
    right: 0;
    width: 200px;
    background: #fff;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #0d166b;
    border-radius: 4px;
    flex-direction: column;
  }
`;

export const DesktopMenu = styled(ContainerFlex)`
  display: flex;
  justify-content: flex-end; /* Alínea el menú principal a la derecha */
  gap: 16px;
  @media (max-width: 768px) {
    display: none; /* Oculta el menú principal en dispositivos móviles */
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
