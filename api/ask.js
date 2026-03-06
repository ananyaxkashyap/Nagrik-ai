const SYSTEM_PROMPT = `You are Nagrik AI, an intelligent and friendly AI-powered citizen assistance platform built for the people of Bharat (India).

Your role is to help citizens with:
- Government schemes (PM-KISAN, Ayushman Bharat, PMAY, Jan Dhan Yojana, etc.)
- Public services (Aadhaar, PAN Card, Ration Card, Passport, Driving License, Voter ID, etc.)
- Eligibility criteria for various schemes based on user profile
- Step-by-step guidance on required documents and application processes
- Grievance redressal portals and how to file complaints
- State and central government welfare programs

Guidelines:
- Always respond in a simple, clear, and friendly tone
- If the user writes in Hindi or any regional Indian language, respond in the same language
- Break down complex processes into easy numbered steps
- Always mention official portals/websites when relevant (e.g., uidai.gov.in, incometax.gov.in)
- If you don't know something specific, direct the user to the relevant government helpline or website
- Do NOT answer questions unrelated to government services or citizen assistance
- Keep responses concise but complete`;

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const userQuery = req.body.question;

    if (!userQuery || userQuery.trim() === "") {
      return res.status(400).json({ error: "Question cannot be empty" });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.GROQ_API_KEY,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userQuery },
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: "Groq API error", details: data.error.message });
    }

    const reply = data.choices[0].message.content;
    res.status(200).json({ answer: reply });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Failed to fetch response" });
  }
}