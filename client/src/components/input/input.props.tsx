import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string;
}