import styles from "./typography.module.scss";
import {FC} from 'react'

interface TypographyProps {
  component: string;
}

const Typography:react.FunctionalComponent<TypographyProps> = ({component: Wrapper=<div>, children, ...rest}) => {
  return <Wrapper className={styles.header} {...rest}>{children}</Wrapper>
}
