import styles from './Header.module.css';

// Definição das propriedades esperadas pelo componente Header
interface Props {
    tasksCounter: number;
    checkedTasksCounter: number; 
}

// Componente funcional Header
export function Header({ tasksCounter, checkedTasksCounter }: Props){
    return(
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>
            <aside>
                <p>Concluídas</p>
                <span>
                    {/* Exibe o número de tarefas concluídas de forma condicional */}
                    {tasksCounter === 0
                        ? tasksCounter // Se não houver tarefas criadas, exibe 0
                        : `${checkedTasksCounter} de ${tasksCounter}`} {/* Caso contrário, exibe o número de tarefas concluídas e o total */}
                </span>
            </aside>
        </header>
    );
}
