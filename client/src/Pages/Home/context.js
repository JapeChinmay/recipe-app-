import { createContext, useState } from "react";

export const MyContext = createContext();

function AppContext({ children }) {
  const [meals, setMeals] = useState([]);
  const [user, setuser] = useState(null);

  return (
    <MyContext.Provider value={{ meals, setMeals, user, setuser }}>
      {children}
    </MyContext.Provider>
  );
}

export default AppContext;
