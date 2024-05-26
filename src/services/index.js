export const calculateNumberQueenAttacks = async (separatedInput) => {
  try {
    const response = await fetch("http://localhost:8000/api/attack", {
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
