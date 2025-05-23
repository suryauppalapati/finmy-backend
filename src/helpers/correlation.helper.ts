import asyncLocalStorage from "@/config/localStorage";

const getCorrelationId = () => {
  const asyncStore = asyncLocalStorage.getStore();
  return asyncStore?.correlationId ?? "no-correlation-id-found";
};

export default getCorrelationId;
