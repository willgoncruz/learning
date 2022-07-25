import React from "react";
import { Button as AntdButton } from "antd";

type ButtonProps = {
  type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
  label: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => <AntdButton type={props.type}>{props.label}</AntdButton>;

export default Button;
