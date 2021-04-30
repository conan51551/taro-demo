import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import InputNumber from "./inputNumber";
import "./index.scss";

export default class PagePicker extends Component {
  state = {
    num: 1,
  };

  changeNum = (_num) => {
    this.setState({
      num: _num,
    });
  };

  render() {
    return (
      <View className="container">
        <Button
          onClick={() => {
            Taro.navigateTo({ url: "/pages/page2/index" });
          }}
        >
          跳转
        </Button>

        <InputNumber
          num={this.state.num}
          min={1}
          max={5}
          change={this.changeNum}
        />
      </View>
    );
  }
}
