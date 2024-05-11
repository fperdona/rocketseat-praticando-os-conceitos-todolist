import { Trash, Check } from 'phosphor-react';
import { ItemTask } from '../../App'
import styles from './Task.module.css'

// Definições das propriedades que o componente Task recebe
interface Props {
    data: ItemTask
    removeTask: (id: number) => void
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ data, removeTask, toggleTaskStatus }: Props){

    function handleTaskToggle() {
        toggleTaskStatus({ id: data.id, value: !data.isChecked })
    }

    function handleRemove() {
        removeTask(data.id)
    }

    // Define as classes CSS para o checkbox e o parágrafo com base no estado da tarefa
    const checkboxCheckedClassname = data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox">
                    {/* Input oculto do tipo "checkbox" */}
                    <input readOnly type="checkbox" checked={data.isChecked}/>
                    {/* Span visual que representa o checkbox */}
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`} onClick={handleTaskToggle}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                    {/* Texto da tarefa */}
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div>
            <button onClick={handleRemove}>
                <Trash size={14} className={styles.deleteTask}/>
            </button>
        </div>
    )
}