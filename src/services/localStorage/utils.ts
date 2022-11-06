export const saveData = (key: string, value: string): void => {
  window.localStorage.setItem(key, value);
};

export const deleteAllData = (): void => {
  window.localStorage.clear()
  window.sessionStorage.clear()
}

export const getData = <T>(key: string): T => {
  let data: T
  if (window.localStorage) {
    try {
      data = JSON.parse(window.localStorage.getItem(key) ?? '')
      return data
    } catch (e) {
      /* Ignore */
    }
  }
  return null as any
}