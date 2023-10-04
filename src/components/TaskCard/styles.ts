import { StyleSheet } from "react-native";

export const taskStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',

    marginBottom: 8,
  },

  completeTaskButton: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '400',
  },

  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
  }
})