import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react"

import { PlusCircle } from "phosphor-react-native"

import logo from "../../../assets/Logo.png"
import { analitycsStyle, headerStyles, styles, taskFormStyles } from "./styles"

interface Task {
  description: string,
  complete: boolean,
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState("")

  return (
      <View style={styles.pageContainer}>
        <View style={headerStyles.container}>
          <Image source={logo} alt='' style={headerStyles.image} />
        </View>

        <View style={styles.mainContentContainer}>
          <View style={taskFormStyles.formContainer}>
            <TextInput
              placeholder="Adicione uma nova tarefa"
              value={taskInput}
              onChangeText={setTaskInput}
              style={{ ...taskFormStyles.input, borderColor: isFocused ? '#5e60ce' : '#0d0d0d' }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              selectionColor={'#f2f2f2'}
              placeholderTextColor={'#808080'}  
            />
            <TouchableOpacity style={taskFormStyles.addButton}>
              <PlusCircle size={20} color="#f2f2f2" style={taskFormStyles.AddButtonText} />
            </TouchableOpacity>
          </View>

          <View style={analitycsStyle.container}>
            <View style={analitycsStyle.infoContainer}>
              <Text style={{...analitycsStyle.label, color: '#4ea8de'}}>Criadas</Text>
              <View style={analitycsStyle.counterContainer}>
                <Text style={analitycsStyle.counterText}>0</Text>              
              </View>
            </View>

            <View style={analitycsStyle.infoContainer}>
              <Text style={{...analitycsStyle.label, color: '#8284fa'}}>Concluídas</Text>
              <View style={analitycsStyle.counterContainer}>
                <Text style={analitycsStyle.counterText}>0</Text>
              </View>
            </View>
          </View>

          {/* Próximos componentes */}
        </View>
      </View>
  )
}