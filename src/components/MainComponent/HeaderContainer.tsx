import { useState, useEffect } from "react";
import {
  ContainerFlex,
  HamburgerMenuIcon,
  Image,
  MenuContainer,
  Text,
} from "../styles";
import HamburgerIcon from "../images/menu.svg";
import IconPoke from "../images/pokemon-23.svg";
import { MENULIST } from "../constants";
import { ThemeContextProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import {
  getPokemonListSearchByUrl,
  resetSelectedPokemon,
} from "./Redux/Actions/getPokemonSearch";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../config/store";

export const GlobalHeader = ({
  isDarkMode,
  setIsDarkMode,
}: ThemeContextProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const ReturnHome = () => {
    setIsMenuOpen(false);
    navigate("/");
    dispatch(resetSelectedPokemon());
  };
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setIsMenuOpen(false);
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

  const PokedexList = useSelector(
    (state: RootState) => state.GetPokemonList?.data
  );
  const getRandomPokemon = () => {
    if (PokedexList && PokedexList.length > 0) {
      const randomIndex = Math.floor(Math.random() * PokedexList.length);
      const randomPokemon = PokedexList[randomIndex];
      if (randomPokemon?.url) {
        dispatch(getPokemonListSearchByUrl(randomPokemon.url));
        navigate("/PokemonDetails");
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <ContainerFlex
        Justify="space-between"
        Height="60px"
        Background="#FF2400"
        Gap="16px"
      >
        <Image
          onClick={ReturnHome}
          src={IconPoke}
          alt="Pokémon Logo"
          Width="90px"
          Height="40px"
          Cursor="pointer"
        />
        <ContainerFlex Justify="flex-end">
          {isDesktop ? (
            <>
              <ContainerFlex
                Justify="start"
                HoverBackground="#CC1E00"
                Cursor="pointer"
                Width="fit-content"
                Padding="0 8px"
                onClick={ReturnHome}
              >
                <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
                  {MENULIST.MENU}
                </Text>
              </ContainerFlex>
              <ContainerFlex
                Justify="start"
                HoverBackground="#CC1E00"
                Cursor="pointer"
                Width="fit-content"
                Padding="0 8px"
              >
                <Text
                  Color="#F3F3F3"
                  FontWeight="700"
                  Cursor="pointer"
                  onClick={getRandomPokemon}
                >
                  {MENULIST.RANDOM}
                </Text>
              </ContainerFlex>
              <ContainerFlex
                Justify="start"
                HoverBackground="#CC1E00"
                Cursor="pointer"
                Width="fit-content"
                Padding="0 8px"
              >
                <Text
                  Color="#F3F3F3"
                  FontWeight="700"
                  Cursor="pointer"
                  onClick={toggleTheme}
                >
                  {MENULIST.MODE} {isDarkMode ? MENULIST.LIGHT : MENULIST.DARK}
                </Text>
              </ContainerFlex>
            </>
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
        <MenuContainer Background="#FF2400">
          <ContainerFlex
            Justify="start"
            HoverBackground="#CC1E00"
            Padding="8px"
            Cursor="pointer"
            onClick={ReturnHome}
          >
            <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
              {MENULIST.MENU}
            </Text>
          </ContainerFlex>
          <ContainerFlex
            Justify="start"
            HoverBackground="#CC1E00"
            Padding="8px"
            Cursor="pointer"
            onClick={getRandomPokemon}
          >
            <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
              {MENULIST.RANDOM}
            </Text>
          </ContainerFlex>
          <ContainerFlex
            Justify="start"
            HoverBackground="#CC1E00"
            Padding="8px"
            Cursor="pointer"
            onClick={toggleTheme}
          >
            <Text Color="#F3F3F3" FontWeight="700" Cursor="pointer">
              {MENULIST.MODE} {isDarkMode ? MENULIST.LIGHT : MENULIST.DARK}
            </Text>
          </ContainerFlex>
        </MenuContainer>
      )}
    </>
  );
};
