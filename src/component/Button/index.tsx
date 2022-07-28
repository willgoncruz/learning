import React, { ReactNode } from "react";
import { Button as AntdButton } from "antd";
import { FormattedMessage } from "react-intl";

type ButtonProps = {
  type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
  label: string | ReactNode;
  onClick: () => void;
};

const Button = (props: ButtonProps) => <AntdButton type={props.type}>{props.label}</AntdButton>;

export default Button;
