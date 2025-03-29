/**
 * Composable for handling local storage operations
 */
export function useLocalStorage() {
  /**
   * Get an item from local storage
   * @param key Storage key
   * @param defaultValue Default value if key not found
   * @returns The stored value or the default value
   */
  const getItem = <T>(key: string, defaultValue: T | null = null): T | null => {
    if (process.client) {
      const item = localStorage.getItem(key);
      
      if (item) {
        try {
          return JSON.parse(item) as T;
        } catch (e) {
          console.error(`Error parsing stored item with key ${key}:`, e);
          return defaultValue;
        }
      }
    }
    
    return defaultValue;
  };

  /**
   * Set an item in local storage
   * @param key Storage key
   * @param value Value to store
   */
  const setItem = <T>(key: string, value: T): void => {
    if (process.client) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(`Error storing item with key ${key}:`, e);
      }
    }
  };

  /**
   * Remove an item from local storage
   * @param key Storage key
   */
  const removeItem = (key: string): void => {
    if (process.client) {
      localStorage.removeItem(key);
    }
  };

  /**
   * Clear all items from local storage
   */
  const clear = (): void => {
    if (process.client) {
      localStorage.clear();
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
} 