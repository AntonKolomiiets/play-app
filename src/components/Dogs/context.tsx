import { createContext, useState, useContext, ReactNode } from "react";

// BREED Context
interface BreedContextType {
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
}

const defaultStateBreed: BreedContextType = {
  selectedBreed: "",
  setSelectedBreed: () => {},
};

const BreedContext = createContext<BreedContextType>(defaultStateBreed);

export const useBreed = () => useContext(BreedContext);

export const BreedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  return (
    <BreedContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      {children}
    </BreedContext.Provider>
  );
};

// NUBER Context
interface NumberContextType {
  selectedNumber: number;
  setSelectedNumber: (breed: number) => void;
}

const defaultStateNumber: NumberContextType = {
  selectedNumber: 1,
  setSelectedNumber: () => {},
};

const NumberContext = createContext<NumberContextType>(defaultStateNumber);

export const useNumber = () => useContext(NumberContext);

export const NumberProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  return (
    <NumberContext.Provider value={{ selectedNumber, setSelectedNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

//LOG IN

// // Username Context
// interface UsernameContextType {
//   userUsername: string | null;
//   setUserUsername: (username: string | null) => void;
// }

// const defaultStateUsername: UsernameContextType = {
//   userUsername: null,
//   setUserUsername: () => {}, // Do nothing by default
// };

// const UsernameContext =
//   createContext<UsernameContextType>(defaultStateUsername);

// export const useUsername = () => useContext(UsernameContext);

// export const UsernameProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [userUsername, setUserUsername] = useState<string | null>(null);

//   return (
//     <UsernameContext.Provider value={{ userUsername, setUserUsername }}>
//       {children}
//     </UsernameContext.Provider>
//   );
// };

// // Password Context
// interface PasswordContextType {
//   userPassword: string | null;
//   setUserPassword: (password: string | null) => void;
// }

// const defaultStatePassword: PasswordContextType = {
//   userPassword: null,
//   setUserPassword: () => {}, // Do nothing by default
// };

// const PasswordContext = createContext<PasswordContextType>(defaultStatePassword);

// export const usePassword = () => useContext(PasswordContext);

// export const PasswordProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [userPassword, setUserPassword] = useState<string | null>(null);

//   return (
//     <PasswordContext.Provider value={{ userPassword, setUserPassword }}>
//       {children}
//     </PasswordContext.Provider>
//   );
// };


