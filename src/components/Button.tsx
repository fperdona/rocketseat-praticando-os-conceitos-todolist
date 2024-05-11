import styles from './Button.module.css';

// Define o tipo de propriedades para o componente Button
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props){
    return (
        // Renderiza um botão HTML com todas as propriedades passadas
        <button className={styles.container} {...rest}>
            {children} {/* Renderiza o conteúdo do botão*/}
        </button>
    );
}
