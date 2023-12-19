"use client";

import { createContext, useState } from "react";

// idea: create the context and pass the functions and variables in it
export const LangContext = createContext({
  isHungarian: true,
  setIsHungarian: () => {},
  isPreloader: true,
  setIsPreloader: () => {}
});

export default function LangContextProvider({ children }) {
  // prompt: determining the variables and function for the context
  let [isHungarian, setIsHungarian] = useState(true);
  let [isPreloader, setIsPreloader] = useState(true);

  // prompt: making the contents of the context accessible for the whole application
  return (
    <LangContext.Provider
      value={{
        isHungarian: isHungarian,
        setIsHungarian: setIsHungarian,
        isPreloader: isPreloader,
        setIsPreloader: setIsPreloader
      }}
    >
      {children}
    </LangContext.Provider>
  );
}
