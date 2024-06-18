export const storeLocalStorage = (document: any, key: string, value: any): boolean => {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage && localStorage.setItem) {
      localStorage.setItem(key, JSON.stringify(value))
  
      return true
    }
  
    return false
  }
  
  export const loadLocalStorage = (document: any, key: string, defaultValue: any = null): any => {
    const localStorage = document.defaultView?.localStorage;
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
  
  export const removeLocalStorage = (document: any, key: string) => {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage && localStorage.removeItem) {
      localStorage.removeItem(key)
  
      return true
    }
  
    return false  
  }

  export const safeReadFromObject = (obj: any, key: any, defaultValue: any): any => {
    if(key in obj){
      return obj[key]
    }

    obj[key] = defaultValue
    return defaultValue
  }