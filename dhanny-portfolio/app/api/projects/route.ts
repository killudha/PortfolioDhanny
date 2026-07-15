import { NextResponse } from "next/server";

// Ini adalah simulasi database Backend Anda
const projectsDB = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "web",
    shortDesc: "Interactive web dashboard utilizing Machine Learning and SHAP.",
    fullDesc: "This project focuses on predicting customer behavior using the XGBoost algorithm. It features an interactive dashboard that not only predicts churn but also explains the reasoning behind the AI's decision using SHAP (Explainable AI), making complex data transparent for end-users.",
    tech: ["Python", "XGBoost", "Machine Learning", "SHAP"],
    github: "https://github.com/alden-nafisa/Customer_Churn_Prediction"
  },
  {
    slug: "smart-ekg-system",
    title: "Smart EKG System",
    category: "iot",
    shortDesc: "IoT-based heart monitoring system with real-time data visualization.",
    fullDesc: "An integrated hardware and software solution utilizing heart monitoring sensors and an ESP32 microcontroller. The system handles precise sensor calibration and transmits data seamlessly via Firebase.",
    tech: ["ESP32", "Firebase", "Android Studio", "C++", "Machine Learning"],
    github: "#"
  }
];

// Endpoint GET: Dipanggil saat Frontend meminta data
export async function GET() {
  // Di dunia nyata, di sinilah Anda melakukan query ke MySQL/PostgreSQL
  return NextResponse.json(projectsDB);
}