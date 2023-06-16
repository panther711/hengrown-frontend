import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

export function useModalContext() {
    const context = useContext(ModalContext);
    return context;
}