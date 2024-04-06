export const useSessionStorage = (key:  string):  string | null => {
  const storedValue =  sessionStorage.getItem(key)

  if (!storedValue) {
    return null
  } else {
    return storedValue
  }
}