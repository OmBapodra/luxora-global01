import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

interface NavClickContextType {
  navClickKeys: Record<string, number>;
  triggerNavClick: (sectionId: string) => void;
}

const NavClickContext = createContext<NavClickContextType>({
  navClickKeys: {},
  triggerNavClick: () => {},
});

export const useNavClick = () => useContext(NavClickContext);

export const NavClickProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navClickKeys, setNavClickKeys] = useState<Record<string, number>>({});

  const triggerNavClick = useCallback((sectionId: string) => {
    setNavClickKeys(prev => ({
      ...prev,
      [sectionId]: (prev[sectionId] || 0) + 1,
    }));
  }, []);

  const value = useMemo(() => ({ navClickKeys, triggerNavClick }), [navClickKeys, triggerNavClick]);

  return (
    <NavClickContext.Provider value={value}>
      {children}
    </NavClickContext.Provider>
  );
};
