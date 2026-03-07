# 🇮🇳 Nagrik AI — AI-Powered Citizen Assistance Platform

> *Making government services as easy as chatting with a friend.*

---

## 📌 Problem Statement

Millions of citizens across Bharat struggle to access government schemes and public services due to:
- Complex legal jargon on government portals
- Severe language barriers
- Fragmented, confusing multi-portal systems
- Dependence on paid intermediaries (agents/brokers)

---

## 💡 Solution Overview

**Nagrik AI** is a conversational AI assistant that helps citizens navigate government services in simple, plain language — in Hindi, English, or any regional language.

Users simply ask questions like:
- *"PM-KISAN ke liye kaise apply karein?"*
- *"How do I update my Aadhaar address?"*
- *"What schemes are available for farmers?"*

Nagrik AI instantly replies with eligibility criteria, required documents, step-by-step guidance, and verified official links.

---

## 🏗️ Architecture

```
[ Citizen ]
     |
     v
[ Web Chat UI ]  ←→  WhatsApp-style interface (HTML/CSS/JS)
     |
     v
[ Node.js + Express Backend ]  ←  Running on port 5000
     |
     v
[ Groq API — LLaMA 3.3 70B ]  ←  Intent detection + Response generation
     |
     v
[ Government Schemes Knowledge Base ]  ←  schemes.json (25 schemes)
     |
     v
[ Citizen gets step-by-step guidance + official links ]
```

**Production Roadmap (AWS):**
- Amazon EC2 — Backend hosting
- Amazon S3 — Frontend + document storage
- Amazon API Gateway — Scalable request routing
- Amazon Bedrock — Enterprise LLM with RAG
- AWS Lambda — Serverless WhatsApp webhook processing

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| UI Design | WhatsApp-inspired dark chat interface |
| Backend | Node.js + Express.js |
| AI / LLM | Groq API (LLaMA 3.3 70B) — Free tier |
| Knowledge Base | Structured JSON — 25 government schemes |
| Cloud (Planned) | AWS EC2, S3, API Gateway, Bedrock |
| Version Control | GitHub |

---

## 🤖 AI Integration

- **LLM:** Groq's LLaMA 3.3 70B processes natural language citizen queries
- **System Prompt:** Scoped to Indian government services only — no off-topic responses
- **Knowledge Base:** 25 schemes across 8 categories injected into every prompt
- **Multilingual:** Automatically detects and responds in the user's language
- **Intent Recognition:** Identifies the specific service/scheme being asked about

---

## ☁️ AWS Usage

| Service | Purpose |
|---------|---------|
| Amazon EC2 | Host the Node.js backend server |
| Amazon S3 | Serve the static frontend + store scheme documents |
| Amazon API Gateway | Route and scale incoming API requests |
| Amazon Bedrock (Roadmap) | Production-grade RAG on government PDFs |
| AWS Lambda (Roadmap) | Process WhatsApp webhooks serverlessly |

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js v18+
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/ananyaxkashyap/Nagrik-ai.git
cd Nagrik-ai

# 2. Install dependencies
cd Backend
npm install

# 3. Set up environment variables
# Create a .env file in the Backend folder:
echo "GROQ_API_KEY=your_groq_api_key_here" > .env

# 4. Start the backend server
node server.js
# You should see: ✅ Nagrik AI server running at http://localhost:5000

# 5. Open the frontend
# Open index.html in your browser (double-click or use Live Server in VS Code)
```

---

## 📂 Project Structure

```
Nagrik-ai/
├── Backend/
│   ├── server.js        ← Express API server
│   ├── schemes.json     ← Government schemes knowledge base (25 schemes)
│   ├── package.json
│   └── .env             ← API keys (not committed to GitHub)
├── Frontend/
│   └── index.html       ← WhatsApp-style chat UI
├── .gitignore
└── README.md
```

---

## 📊 Schemes Coverage

| Category | Schemes |
|----------|---------|
| 🪪 Identity | Aadhaar, PAN Card, Passport, Income Certificate, Caste Certificate |
| 🌾 Farmer | PM-KISAN, Kisan Credit Card, PM Fasal Bima Yojana, Soil Health Card |
| 🏥 Health | Ayushman Bharat PMJAY, National Digital Health Mission |
| 🏠 Housing | Pradhan Mantri Awas Yojana (PMAY) |
| 👩 Women | PM Ujjwala Yojana, Beti Bachao Beti Padhao, Stand-Up India |
| 🎓 Student | National Scholarship Portal, National Apprenticeship Scheme |
| 💼 Employment | Skill India, e-Shram Portal, MUDRA Yojana |
| 💰 Finance | Jan Dhan Yojana, Atal Pension Yojana, Startup India |

---

## 🔮 Future Scope

- **WhatsApp Integration** — Connect to WhatsApp Business API (no app download needed)
- **Voice Support** — AWS Polly + Amazon Transcribe for rural users
- **Amazon Bedrock Migration** — RAG on official government PDFs, zero hallucinations
- **Grievance Tracking** — Real-time status via CPGRAMS API
- **Offline / SMS Mode** — Feature phone support for last-mile access
- **State Schemes** — Expand beyond central government to all state schemes

---

## 👥 Team

| Member | Role |
|--------|------|
| Deetya | Team Lead — Design & Architecture Flow |
| Ananya | Tech & AI Integration |
| Pranati | Dataset Collection & Documentation |
| Deepti | Research, Video Script & Demo |

---

## 🔗 Links

- 🐙 **GitHub:** [github.com/ananyaxkashyap/Nagrik-ai](https://github.com/ananyaxkashyap/Nagrik-ai)
- 🎥 **Demo Video:** *(coming soon)*

---

*Built for the AWS AI for Bharat Hackathon 🇮🇳*
