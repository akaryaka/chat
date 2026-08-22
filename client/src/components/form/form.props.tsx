import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  click: MouseEvent;
}