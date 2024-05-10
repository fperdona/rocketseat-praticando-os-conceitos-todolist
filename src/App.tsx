// Importa o ícone de círculo de adição da biblioteca Phosphor
import { PlusCircle } from 'phosphor-react'; 
// Importa o hook useState do React
import { useState } from 'react'; 

// Importa os componentes necessários do aplicativo
import { Header } from './components/Header'; 
import { Input } from './components/Input'; 
import { Button } from './components/Button'; 
import { Header as ListHeader } from './components/List/Header'; 
import { Empty } from './components/List/Empty'; 
import { Task} from './components/List/Task'; 

// Importa os estilos CSS do aplicativo
import styles from './App.module.css'; 

// Define a interface para representar uma tarefa
export interface ItemTask { 
  id: number;
  text: string;
  isChecked: boolean;
}

// Define o componente principal do aplicativo
function App() { 
  // Define o estado para armazenar as tarefas e a função para atualizá-lo
  const [tasks, setTasks] = useState<ItemTask[]>([]); 

  // Define o estado para armazenar o valor do campo de entrada e a função para atualizá-lo
  const [inputValue, setInputValue] = useState(''); 

  // Calcula o número de tarefas marcadas como concluídas
  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => { 
    if (currentTask.isChecked) { // Verifica se a tarefa atual está marcada como concluída
      return prevValue + 1; // Se estiver, incrementa o contador de tarefas concluídas
    }
    return prevValue; // Se não estiver, retorna o valor atual do contador sem modificação
  }, 0);


  // Função para adicionar uma nova tarefa à lista
  function handleAddTask() { 
    if (!inputValue) { // Verifica se o campo de entrada está vazio
      alert('O campo para adicionar uma tarefa não pode estar vazio!'); // Exibe um alerta se o campo estiver vazio
      return;
    }

    // Cria um novo objeto de tarefa
    const newTask: ItemTask = { 
      id: new Date().getTime(), // Atribui um ID único baseado no tempo atual
      text: inputValue, // Atribui o texto do campo de entrada à propriedade text
      isChecked: false, // Define a propriedade isChecked como falsa, pois a tarefa ainda não está concluída
    };

    // Adiciona a nova tarefa ao estado tasks
    setTasks((state) => [...state, newTask]); 
    setInputValue(''); // Limpa o valor do campo de entrada
  }

  // Função para remover uma tarefa da lista
  function handleRemoveTask(id: number) { 
    // Filtra as tarefas para remover a tarefa com o ID especificado
    const filteredTasks = tasks.filter((task) => task.id !== id); 

    // Pergunta ao usuário se ele deseja realmente apagar a tarefa
    if (!confirm('Deseja mesmo apagar essa tarefa?')) { 
      //Caso clique em cancelar retorna como estava antes e sai da função.
      return;
    }

    // Atualiza o estado tasks com as tarefas filtradas
    setTasks(filteredTasks); 
  }

  // Função para alternar o estado de conclusão de uma tarefa
  function handleToggleTask({ id, value }: { id: number; value: boolean }) { 
    // Mapeia todas as tarefas
    const updatedTasks = tasks.map((task) => { 
      // Verifica se a tarefa atual tem o mesmo ID da tarefa que deve ser atualizada
      if (task.id === id) { 
        // Retorna a tarefa com o estado isChecked atualizado
        return { ...task, isChecked: value }; 
      }
      // Retorna a tarefa sem modificação
      return { ...task }; 
    });

    // Atualiza o estado tasks com as tarefas atualizadas
    setTasks(updatedTasks); 
  }

  return ( 
    <>
      <Header/> 
      <div className={styles.wrapper}> 
        <div className={styles.formContainer}> 
          <Input 
            // Atualiza o estado inputValue quando o usuário digita algo no campo de entrada
            onChange={(e) => setInputValue(e.target.value)} 
            // Garante que o valor exibido no campo de entrada esteja sempre sincronizado com o estado inputValue
            value={inputValue} 
          />
          <Button onClick={handleAddTask}> 
              <span>Criar</span> 
              <PlusCircle size={16} weight="bold" /> 
          </Button>
        </div>
        <div className={styles.container}> 
          <ListHeader 
            tasksCounter={tasks.length} 
            checkedTasksCounter={checkedTasksCounter} 
          />
          {/* Renderiza o componente Empty se não houver tarefas, caso contrário, renderiza o componente Task para cada tarefa */}
          {tasks.length === 0 ? ( 
            <Empty /> 
          ) : (
            tasks.map(task => ( 
              <Task key={task.id} data={task} removeTask={handleRemoveTask} toggleTaskStatus={handleToggleTask}/> 
            ))
          )}
        </div>
        <div className="box"></div> 
      </div>
    </>
  );
}

export default App;
