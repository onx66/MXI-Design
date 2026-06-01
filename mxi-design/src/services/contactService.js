const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api"
).replace(/\/$/, "");

export async function sendContactMessage(payload) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        let detail = "Message could not be sent. Please try again later.";

        try {
            const data = await response.json();
            detail = data.detail || data.message || detail;
        } catch {
            // Keep the fallback message when the server returns no JSON body.
        }

        throw new Error(detail);
    }

    return response.json();
}
