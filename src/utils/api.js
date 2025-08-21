import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // change to your backend URL
});

// Send message
export const sendMessage = async (sessionId, message) => {
  const res = await api.post("/chat/send", { sessionId, message });
  return res.data;
};

// Get history
export const getHistory = async (sessionId) => {
  const res = await api.get(`/chat/history/${sessionId}`);
  return res.data;
};

// Clear history
export const clearHistory = async (sessionId) => {
  const res = await api.delete(`/chat/history/${sessionId}`);
  return res.data;
};

export default api;
