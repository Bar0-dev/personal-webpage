import styles from "./typography.module.scss";
import { ElementType, HTMLAttributes, FC } from "react";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
}

const Typography: FC<TypographyProps> = ({
  variant = "div",
  tag: Tag = variant,
  children,
  ...rest
}) => {
  return (
    <Tag className={styles[variant]} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
