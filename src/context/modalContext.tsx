import { createContext, ReactNode, useState } from "react";
import { modalContextData } from '../types/modalContextData';

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = createContext<modalContextData>({} as modalContextData);

export function ModalProvider({children}: ModalProviderProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                showModal,
                setShowModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}