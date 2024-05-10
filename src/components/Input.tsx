import styles from './Input.module.css';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export function Input(props: InputProps){
    return (
        <input
            className={styles.container}
            placeholder="Adicione uma nova tarefa"
            {...props}
        />
    );
}