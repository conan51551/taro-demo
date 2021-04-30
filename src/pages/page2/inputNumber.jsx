import { View, Input } from "@tarojs/components";

function InputNumber(props) {
  const { num, change } = props;

  console.log(num, "num");

  const handleBlur = (e) => {
    const value = Number(e.detail.value);
    if (value >= 5) {
      change(5);
    } else {
      change(value);
    }
  };

  return (
    <View>
      <Input
        type='number'
        onBlur={handleBlur}
        value={props.num}
        key={props.num}
        placeholder='只能输入小于5的数字'
      />
    </View>
  );
}
export default InputNumber;
