
export interface ChatResponse {
    reply: string;
    conversationId: string;
  }
  
  export interface ChatRequest {
    message: string;
    conversationId?: string;
  }
  
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";
  
  export async function sendChatMessage(
    request: ChatRequest
  ): Promise<ChatResponse> {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
  
    if (!response.ok) {
      throw new Error(
        response.status === 429
          ? "Too many messages. Please try again in a minute."
          : "The AI assistant is temporarily unavailable. Please try again."
      );
    }
  
    const data: ChatResponse = await response.json();
    return data;
  }
  