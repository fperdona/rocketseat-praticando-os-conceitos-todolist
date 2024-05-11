import styles from './Input.module.css';

// Define o tipo de propriedades para o componente Input
type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export function Input(props: InputProps){
    return (
        <input
            className={styles.container} // Aplica a classe CSS do módulo ao campo de entrada
            placeholder="Adicione uma nova tarefa" // Define um texto de placeholder para o campo de entrada
            {...props} // Passa todas as outras propriedades para o campo de entrada
        />
    );
}
