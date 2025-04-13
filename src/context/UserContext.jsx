import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // initially null (not logged in)

  const login = (newUser) => setUser(newUser);
  const updateUser = (data) => setUser((prev) => ({ ...prev, ...data }));

  return (
    <UserContext.Provider value={{ user, login, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


