// utils/session.js
export const getSessionId = () => {
  let sessionId = localStorage.getItem("chatSessionId");
  if (!sessionId) {
    sessionId = "sess-" + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("chatSessionId", sessionId);
  }
  return sessionId;
};
