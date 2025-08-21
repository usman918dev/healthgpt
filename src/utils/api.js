import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // change to your backend URL
});

// Send message
export const sendMessage = async (sessionId, message) => {
  try {
    const res = await api.post("/chat/send", { sessionId, message });
    // ✅ normalize to { message, role }
    return { message: res.data.reply, role: "assistant" };
  } catch (error) {
    console.error("API Error (sendMessage):", error.message);
    return {
      message: "⚠️ Our servers are unavailable. Please try again later.",
      role: "assistant",
    };
  }
};

// Get history
export const getHistory = async (sessionId) => {
  try {
    const res = await api.get(`/chat/history/${sessionId}`);
    return res.data.map((msg) => ({
      message: msg.message,
      role: msg.role,
    }));
  } catch (error) {
    console.error("API Error (getHistory):", error.message);
    return [
      {
        message: "⚠️ Could not load past chats. Starting fresh.",
        role: "assistant",
      },
    ];
  }
};

// Clear history
export const clearHistory = async (sessionId) => {
  try {
    const res = await api.delete(`/chat/history/${sessionId}`);
    return res.data;
  } catch (error) {
    console.error("API Error (clearHistory):", error.message);
    return { success: false, message: "⚠️ Could not clear history." };
  }
};

export default api;
