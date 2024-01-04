import { createContext } from "react";

export interface IControls {
  play: () => void;
  reset: () => void;
  new?: () => void;
  edit?: (time: number) => void;
  isModalOpen?: (isOpen: boolean) => void;
}

interface Context {
  play: boolean;
  reset: number;
  saved?: number[];
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
