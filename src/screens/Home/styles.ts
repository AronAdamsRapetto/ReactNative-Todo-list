import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },

  mainContentContainer: {
    marginTop: -30,

    paddingLeft: 24,
    paddingRight: 24,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    height: 173,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 110,
    height: 32,
  },
})

export const taskFormStyles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    color: '#f2f2f2',
    fontSize: 16,
  },

  addButton: {
    backgroundColor: '#1e6f9f',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 6,
  },

  AddButtonText: {
    alignSelf: 'center',
  },
})

export const analitycsStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  label: {
    color: '#4ea8de',
    fontSize: 14,
    fontWeight: 'bold',
  },

  counterContainer: {
    backgroundColor: '#333',
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },

  counterText: {
    color: '#d9d9d9',
    fontSize: 12,
    fontWeight: 'bold',
  }
})
