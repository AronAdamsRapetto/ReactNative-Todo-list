import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native"
import { useState } from "react"

import { ClipboardText, PlusCircle } from "phosphor-react-native"

import logo from "../../../assets/logo.png"
import { analitycsStyle, headerStyles, styles, taskFormStyles, tasksDashboardStyles } from "./styles"
import { TaskCard } from "../../components/TaskCard"

interface Task {
  id: string
  description: string,
  complete: boolean,
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInputText, setTaskInputText] = useState("")

  const completeTasks = tasks.reduce((acc, { complete }) => complete ? acc += 1 : acc, 0)
  const totalTasks = tasks.length

  const handleAddTask = (task: string) => {
    const id = Math.random().toString(16).slice(2)

    setTasks((prevState) => [...prevState, { id, description: task, complete: false }])
    setTaskInputText("")
  }

  const handleCompleteTask = (taskId: string) => {
    setTasks((prevState) => prevState.map((task) => {
      if (task.id === taskId) {
        const updatedTask = {...task, complete: !task.complete}
        return updatedTask
      }

      return task
    }).sort((a, b) => Number(a.complete) - Number(b.complete)))
  }

  const handleRemoveTask = (taskId: string) => {
    setTasks((prevState) => prevState.filter(({ id }) => id !== taskId))
  }

  return (
      <View style={styles.pageContainer}>
        <View style={headerStyles.container}>
          <Image source={logo} alt='' style={headerStyles.image} />
        </View>

        <View style={styles.mainContentContainer}>
          <View style={taskFormStyles.formContainer}>
            <TextInput
              placeholder="Adicione uma nova tarefa"
              value={taskInputText}
              onChangeText={setTaskInputText}
              style={{ ...taskFormStyles.input, borderColor: isFocused ? '#5e60ce' : '#0d0d0d' }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              selectionColor={'#f2f2f2'}
              placeholderTextColor={'#808080'}  
            />
            <TouchableOpacity
              style={taskFormStyles.addButton}
              onPress={() => handleAddTask(taskInputText)}
            >
              <PlusCircle size={20} color="#f2f2f2" style={taskFormStyles.AddButtonText} />
            </TouchableOpacity>
          </View>

          <View style={analitycsStyle.container}>
            <View style={analitycsStyle.infoContainer}>
              <Text style={{...analitycsStyle.label, color: '#4ea8de'}}>Criadas</Text>
              <View style={analitycsStyle.counterContainer}>
                <Text style={analitycsStyle.counterText}>{totalTasks}</Text>              
              </View>
            </View>

            <View style={analitycsStyle.infoContainer}>
              <Text style={{...analitycsStyle.label, color: '#8284fa'}}>Concluídas</Text>
              <View style={analitycsStyle.counterContainer}>
                <Text style={analitycsStyle.counterText}>{completeTasks}</Text>
              </View>
            </View>
          </View>

          <View style={{...tasksDashboardStyles.container, borderTopColor: totalTasks ? "transparent" : "#333" }}>
            <FlatList
              data={tasks}
              keyExtractor={({ id }) => id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TaskCard
                  id={item.id}
                  description={item.description}
                  complete={item.complete}
                  handleComplete={handleCompleteTask}
                  handleRemove={handleRemoveTask}
                />
              )}
              ListEmptyComponent={() => (
                <View style={tasksDashboardStyles.emptyListContainer}>
                  <ClipboardText size={56} color="#808080" style={{ marginBottom: 16 }}/>
                  <Text style={{ ...tasksDashboardStyles.emptyListText, fontWeight: 'bold' }}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={tasksDashboardStyles.emptyListText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>  
                </View>
              )}
            />
          </View>
        </View>
      </View>
  )
}