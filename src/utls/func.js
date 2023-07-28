const checkIsAuth = async () => {
  try {
    const res = await fetch("https://chory-b.onrender.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch authentication status.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during authentication check:", error);
    // Handle the error, for example, by returning an error object.
    return { success: false, message: "Error during authentication check." };
  }
};

export { checkIsAuth };
