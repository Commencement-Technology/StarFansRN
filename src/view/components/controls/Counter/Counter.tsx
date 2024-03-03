import CounterNumber from "./components/CounterNumber/CounterNumber";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

type Props = { count };

const Counter = (props: Props): JSX.Element => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(props.count.toString().split("").map(Number));
  }, [props.count]);

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      {numbers.map((number, index) => (
        <CounterNumber key={numbers.length - index} number={number} />
      ))}
    </View>
  );
};

export default Counter;
