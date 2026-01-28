import axios from "axios";

export async function fetchCareers(prompt) {
  const response = await axios.post(
    "/n/api/ask", // same backend endpoint you already have
    { prompt },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = response.data;

  if (!data.success) {
    throw new Error(data.message || "Career API failed");
  }

  // 👇 backend already returns parsed JSON
  return data.data.careers;
}
