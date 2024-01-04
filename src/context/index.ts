import { createContext } from "react";

interface IControls {
  play: () => void;
  reset: () => void;
  new?: () => void;
  edit?: (time: number) => void;
  isModalOpen?: (isOpen: boolean) => void;
}

interface Context {
  play: boolean;
  reset: number;
  saved?: boolean;
  elapsed?: {
    current: number;
  };
  controls: IControls;
}

const AppContext = createContext({
  play: false,
  reset: 0,
  controls: {}
} as Context);

export const AppContextProvider = AppContext.Provider;

export default AppContext;
