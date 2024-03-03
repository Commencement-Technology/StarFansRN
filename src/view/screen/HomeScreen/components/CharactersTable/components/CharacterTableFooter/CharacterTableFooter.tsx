import Loader from "@components/controls/Loader/Loader";
import { charactersStore } from "@domain/stores/characters";
import { observer } from "mobx-react";
import React from "react";

const CharacterTableFooter = observer((): React.ReactNode => {
  if (charactersStore.loading) return <Loader />;
  return <></>;
});

export default CharacterTableFooter;
