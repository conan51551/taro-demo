import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import InputNumber from "./inputNumber";

export default function page2() {
  const [num, setNum] = useState(1);

  const change = (_num) => {
    setNum(() => _num);
  };

  return (
    <View>
      <InputNumber num={num} change={change} />
    </View>
  );
}
