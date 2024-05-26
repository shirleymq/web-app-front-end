const BASE_URL = "http://localhost:8000/api";

export const getQueenAttackableSquares = async (separatedInput) => {
  try {
    const response = await fetch(`${BASE_URL}/chess/square`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(separatedInput),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const getMaximunValueFunction = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/string/max-value`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
