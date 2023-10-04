import { Check, Trash } from "phosphor-react-native"
import { View, Text, TouchableOpacity } from "react-native"
import { taskStyles } from "./styles"

interface TaskCardProps {
  id: string,
  description: string,
  complete: boolean
  handleRemove: (taskId: string) => void
  handleComplete: (taskId: string) => void
}

export function TaskCard({ description, complete, id, handleComplete, handleRemove }: TaskCardProps) {
  return (
    <View style={{...taskStyles.container, borderColor: complete ? "transparent" : "#333"}}>
      <TouchableOpacity
          style={{
            ...taskStyles.completeTaskButton,
            backgroundColor: complete ? "#5e60ce" : "transparent",
            borderColor: complete  ? "transparent" : "#4ea8de",
          }}
          onPress={() => handleComplete(id)}
        >
        {complete && <Check size={14} weight="bold" color="#f2f2f2" />}
      </TouchableOpacity>
      <Text style={{
        ...taskStyles.text,
        textDecorationLine: complete ? 'line-through' : "none",
        color: complete ? '#808080' : '#f2f2f2',
      }}>
        {description}
      </Text>
      <TouchableOpacity
        style={taskStyles.removeButton}
        onPress={() => handleRemove(id)}
      >
        <Trash size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}