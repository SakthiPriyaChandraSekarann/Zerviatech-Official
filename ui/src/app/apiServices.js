// const API_BASE_URL = "http://localhost:5000/api";

// export const sendContactMessage = async (formData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/send`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     // 👇 check response வந்துச்சா first
//     if (!response) {
//       throw new Error("No response from server");
//     }

//     let data;

//     try {
//       data = await response.json(); // 👈 safe parse
//     } catch (err) {
//       throw new Error("Invalid JSON response from server");
//     }

//     if (!response.ok) {
//       throw new Error(data?.error || "Failed to send message");
//     }

//     return data;

//   } catch (error) {
//     console.error("❌ API Service Error:", error.message);
//     throw error;
//   }
// };



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

    let data;

    try {
      data = await response.json();
    } catch (err) {
      throw new Error("Invalid JSON response from server");
    }

    if (!response.ok) {
      throw new Error(data?.message || "Failed to send message");
    }

    return data;
  } catch (error) {
    console.error("❌ API Service Error:", error.message);
    throw error;
  }
};