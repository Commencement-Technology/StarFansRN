import Header from "./components/Header/Header";
import styles from "./styles";
import CharacterTable from "./components/CharactersTable/CharactersTable";
import FavoritesStats from "./components/FavoriteStatistic/FavoritesStats";
import React from "react";
import BlurBox from "@components/box/BlurBox/BlurBox";

const HomeScreen = (): JSX.Element => (
  <BlurBox style={styles.wrapper}>
    <Header />
    <FavoritesStats />
    <CharacterTable />
  </BlurBox>
);

export default HomeScreen;
