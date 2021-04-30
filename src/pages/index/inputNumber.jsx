import { useEffect, useState } from "react";
import { View, Input } from "@tarojs/components";

function InputNumber(props) {
  const { num, type = "number", change, min, max } = props;

  useEffect(() => {
    console.log(props, "123");
  });

  console.log(num, "num");

  const handleBlur = (e) => {
    const value = Number(e.detail.value);
    if (value < (min || 0)) {
      change(min || 1);
    } else if (value > (max || 1)) {
      console.log(max);
      change(max || 1);
    } else if (isNaN(value)) {
      change(1);
    } else {
      change(value);
    }
  };
  const checkNum = (e) => {
    const { value } = e.detail;
    return { value: value.replace(/[^\d]/g, "") };
  };

  return (
    <View>
      <Input
        type={type}
        onInput={checkNum}
        onBlur={handleBlur}
        value={props.num + ""}
      />
    </View>
  );
}
export default InputNumber;
