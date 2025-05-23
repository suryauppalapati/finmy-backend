import { AsyncLocalStorage } from "async_hooks";
import LocalStorage from "@/types/localStorage.type";

const asyncLocalStorage = new AsyncLocalStorage<LocalStorage>();

export default asyncLocalStorage;
