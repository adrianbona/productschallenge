import React, { useEffect, useState } from "react";

const withLocalStorage = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  storageKey: string
) => {
  return (props: P) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : null;
    });

    useEffect(() => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === storageKey) {
          setStoredValue(event.newValue ? JSON.parse(event.newValue) : null);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, [storageKey]);

    const updateStorage = (value: any) => {
      setStoredValue(value);
      localStorage.setItem(storageKey, JSON.stringify(value));
    };

    return (
      <WrappedComponent
        {...props}
        localStorageValue={storedValue}
        updateLocalStorage={updateStorage}
      />
    );
  };
};

export default withLocalStorage;
