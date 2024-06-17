const storeLocalStorage = (key: string, value: string): boolean => {
    //console.log('storeLocalStorage key: ', key)
    if (localStorage && localStorage.setItem) {
      localStorage.setItem(key, JSON.stringify(value))
  
      return true
    }
  
    return false
  }
  
  const loadLocalStorage = (key: string, defaultValue = null): any => {
    let item: any = null
    if (localStorage && localStorage.getItem) {
      const tmp: any = localStorage.getItem(key)
      if (tmp === 'undefined' || tmp === 'undefined') {
        return null
      }
      item = JSON.parse(tmp)
    }
    return (item === null || typeof item === 'undefined') ? defaultValue : item
  }
  
  const removeLocalStorage = (key: string) => {
    if (localStorage && localStorage.removeItem) {
      localStorage.removeItem(key)
  
      return true
    }
  
    return false  
  }