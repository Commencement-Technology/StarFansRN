import Text from "@components/typo/Text/Text";
import React, { useEffect, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

type Props = { number };

const CounterNumber = (props: Props): JSX.Element => {
  const size = useRef({ height: 40, width: 20 }).current;
  const prevValue = useRef(props.number);
  const array = useRef(Array.from(Array(10).keys()).concat([0, 1])).current;
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    if (prevValue.current === 9 && props.number === 0) {
      ref.current?.scrollToIndex({ index: 10 });
    } else if (prevValue.current === 0 && props.number === 9) {
      ref.current?.scrollToIndex({ animated: false, index: 10 });
      ref.current?.scrollToItem({ item: props.number });
    } else if (prevValue.current === 0 && props.number === 1) {
      ref.current?.scrollToItem({ animated: false, item: 0 });
      ref.current?.scrollToItem({ item: props.number });
    } else {
      ref.current?.scrollToItem({ item: props.number });
    }
    prevValue.current = props.number;
  }, [props.number]);

  return (
    <FlatList<number>
      ref={ref}
      scrollEnabled={false}
      style={{
        height: size.height,
        maxWidth: size.width,
        overflow: "hidden"
      }}
      getItemLayout={(data, index) => ({
        index,
        length: size.height,
        offset: size.height * index
      })}
      data={array}
      renderItem={({ item }) => (
        <View style={[styles.number, { ...size }]}>
          <Text type="t1">{item}</Text>
        </View>
      )}
    />
  );
};

export default CounterNumber;

const styles = StyleSheet.create({
  number: {
    alignItems: "center",
    justifyContent: "center"
  }
});
