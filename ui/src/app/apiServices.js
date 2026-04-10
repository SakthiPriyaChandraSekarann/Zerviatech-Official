const API_BASE_URL = "http://localhost:5000/api";

export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json(); // 👈 always parse first

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message");
    }

    return data; // 👈 return parsed data
  } catch (error) {
    console.error("API Service Error:", error);
    throw error;
  }
};