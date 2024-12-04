import styled from "@emotion/styled";
import { IContainerFlex, IPropsImage, IPropsText } from "./interfaces";

export const ContainerFlex = styled.div<IContainerFlex>`
  display: ${(props) => props.Display};
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
  border-radius: ${(props) => props.Radius};
  gap: ${(props) => props.Gap};
`;

ContainerFlex.defaultProps = {
  Display: "flex",
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
