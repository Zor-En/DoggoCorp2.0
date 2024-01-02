import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async (googleId) => {
    
    try {
      const response = await fetch(`http://localhost:3000/signin/${googleId}`);
      const data = await response.json();
      console.log("Response from getUser:", data);
      const user = data.user;
      console.log('Use data from getUser:', user)
  
      if (!user) {
        console.error("User not found:", data)
      }
  
      return user;
    } catch (error) {
      console.error("Error during user verification:", error);
      throw error; 
    }
  };

  const createUser = async (newUser) => {
    try {
      const response = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("User created successfully");
        return data.userId;
      } else {
        throw new Error(`User creation failed: ${data.error}`);
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, getUser, createUser, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
