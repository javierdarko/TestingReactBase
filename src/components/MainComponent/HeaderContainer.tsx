import { useState, useEffect } from "react";
import {
  ContainerFlex,
  DesktopMenu,
  HamburgerMenuIcon,
  Image,
  MenuContainer,
  Text,
} from "../styles";
import HamburgerIcon from "../images/menu.svg";
import IconPoke from "../images/pokemon-23.svg";
import { MENULIST } from "../constants";
import { ThemeContextProps } from "./interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../config/store";
import { fetchSelectColor } from "./Redux/Actions/SetColorMode";

export const GlobalHeader = ({
  isDarkMode,
  setIsDarkMode,
}: ThemeContextProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(fetchSelectColor(isDarkMode));
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ContainerFlex
        Justify="space-between"
        Height="40px"
        Padding="16px"
        Background="#FF2400"
        Gap="16px"
      >
        <Image
          src={IconPoke}
          alt="Pokémon Logo"
          Width="90px"
          Height="40px"
          Cursor="pointer"
        />
        <ContainerFlex Justify="flex-end" Gap="16px" Margin="16px">
          {isDesktop ? (
            <DesktopMenu>
              <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
                {MENULIST.MENU}
              </Text>
              <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
                {MENULIST.RANDOM}
              </Text>
              <ContainerFlex Justify="start" Width="fit-content">
                <Text
                  Color="#F3F3F3"
                  FontWeight="700"
                  Cursor="pointer"
                  onClick={toggleTheme}
                >
                  {MENULIST.MODE} {isDarkMode ? MENULIST.LIGHT : MENULIST.DARK}
                </Text>
              </ContainerFlex>
            </DesktopMenu>
          ) : (
            <HamburgerMenuIcon
              src={HamburgerIcon}
              alt="Menu Icon"
              Width="24px"
              Height="24px"
              onClick={toggleMenu}
              Cursor="pointer"
            />
          )}
        </ContainerFlex>
      </ContainerFlex>
      {!isDesktop && isMenuOpen && (
        <MenuContainer Background={"red"}>
          <Text FontWeight="700" Cursor="pointer">
            {MENULIST.MENU}
          </Text>
          <Text FontWeight="700" Cursor="pointer">
            {MENULIST.RANDOM}
          </Text>
          <Text FontWeight="700" Cursor="pointer" onClick={toggleTheme}>
            {MENULIST.MODE} {isDarkMode ? MENULIST.LIGHT : MENULIST.DARK}
          </Text>
        </MenuContainer>
      )}
    </>
  );
};
