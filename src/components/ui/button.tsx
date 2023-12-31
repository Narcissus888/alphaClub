"use client";
import React from "react";
import { Loading } from "antd-mobile";
import { cn } from "@/lib/utils";
import styles from "./index.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  background?: string;

  textColor?: string;
  showBorderShodow?: boolean;
  maxWidth?: string;
  isLoading?: boolean;
  id?: string;
  disabled?: boolean;
  border?: string;
  borderRadius?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  width,
  height,
  backgroundColor,
  background,
  textColor,
  showBorderShodow = true,
  maxWidth,
  isLoading,
  border,
  id,
  disabled,
  borderRadius,
}) => {
  return (
    <div
      id={id}
      className={cn(
        styles.button,
        className,
        showBorderShodow ? styles.showShowColor : "",
        disabled && "bg-gray-500!",
      )}
      onClick={() => !disabled && onClick?.()}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: textColor,
        maxWidth: maxWidth,
        border: border,
        background: background,
        borderRadius: borderRadius,
      }}
    >
      {isLoading ? <Loading /> : children}
    </div>
  );
};

export default Button;
