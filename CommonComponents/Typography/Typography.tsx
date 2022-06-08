import styles from "./typography.module.scss";
import React from "react";

interface TypographyProps {
  tag: JSX.IntrinsicElements;
}

const Typography: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ tag: Wrapper = <div></div>, ...rest }) => {
  return (
    <Wrapper className={styles.header} {...rest}>
      {children}
    </Wrapper>
  );
};
