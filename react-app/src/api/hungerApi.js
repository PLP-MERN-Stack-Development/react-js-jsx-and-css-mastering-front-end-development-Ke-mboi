// src/api/hungerApi.js
export async function fetchHungerData() {
  try {
    const response = await fetch("https://api.mocki.io/v2/549a5d8b/HungerStats");
    if (!response.ok) throw new Error("Failed to fetch hunger data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching hunger data:", error);
    return null;
  }
}
