import styles from "./styles";
import { COLUMNS, Columns } from "../../../../types";

import { View } from "react-native";

type Props = {
  column: COLUMNS;
  withoutBorder?: boolean;
};

const CharacterTableHeaderRow = ({
  column,
  children,
  withoutBorder
}: React.PropsWithChildren<Props>): JSX.Element => (
  <View
    style={[
      styles.wrapper,
      {
        borderRightWidth: withoutBorder ? 0 : 1,
        flex: Columns[column].size
      }
    ]}
  >
    {children}
  </View>
);

export default CharacterTableHeaderRow;
