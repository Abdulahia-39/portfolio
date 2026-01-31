import { url } from "inspector";
import agile from "@/assets/projectpics/agile.jpg";
import { type } from "os";

export const posts = [
  {
    id: 1,
    title:
      "Transforming Healthcare in Borama: The Future of AI at Al-Hayat Hospital",
    url: "transforming-healthcare-borama-ai-al-hayat",
    content: [
      {
        type: "paragraph",
        text: "In the heart of Borama, Al-Hayat Hospital has long been a pillar of the community. However, like many healthcare facilities in the region, it has struggled with a universal challenge: the 'Queue Crisis.'",
      },
      {
        type: "paragraph",
        text: "Currently, patients must travel up to 3 kilometers—often while feeling unwell—just to stand in a long line to book a future appointment. This manual process isn't just tiring; it’s inefficient and creates a crowded environment where infectious diseases can easily spread.",
      },
      {
        type: "paragraph",
        text: "But change is coming. Our latest project, the AI-Powered Consultation and Booking App, is designed to move Al-Hayat Hospital into the digital age.",
      },
      {
        type: "header",
        level: 2,
        text: "The Problem: Beyond Just a Long Wait",
      },
      {
        type: "paragraph",
        text: "The current system at Al-Hayat is purely manual. This leads to:",
      },
      {
        type: "list",
        items: [
          "Geographical Barriers: The 3km journey is a physical and financial burden.",
          "Administrative Overload: Staff are overwhelmed by physical paperwork and constant phone calls.",
          "Health Risks: Crowded waiting areas increase the risk of spreading infectious diseases.",
          "High No-Show Rates: Without digital reminders, many appointments are simply forgotten.",
        ],
      },
      {
        type: "header",
        level: 2,
        text: "The Solution: A Smart Digital Gateway",
      },
      {
        type: "paragraph",
        text: "We aren't just building a booking app; we are building an Intelligent Triage System. By leveraging Artificial Intelligence, the app will act as a digital 'first responder.'",
      },
      {
        type: "header",
        level: 3,
        text: "Key Features of the App:",
      },
      {
        type: "list",
        items: [
          "AI Symptom Checker: Using Natural Language Processing (NLP), the app analyzes symptoms and suggests whether you need an urgent in-person visit or a simple video consultation.",
          "Real-Time Booking: No more physical lines. Patients can see a doctor’s live schedule and book a slot in seconds.",
          "Telemedicine Integration: For non-emergency cases, patients can consult with Al-Hayat’s specialists via secure video calls from home.",
          "Instant Notifications: Automated SMS and email reminders ensure you never miss your appointment.",
        ],
      },
      {
        type: "header",
        level: 2,
        text: "How We’re Building It (The Tech Behind the Magic)",
      },
      {
        type: "paragraph",
        text: 'To ensure the app is reliable and secure, we adopted the Agile Methodology. This means we build the app in "sprints," constantly testing and improving it based on feedback from real doctors and patients at Al-Hayat.',
      },
      {
        type: "image",
        src: agile,
        alt: "Agile development process",
        caption: "Agile development process in action.",
      },
      {
        type: "paragraph",
        text: "Our technical stack is built for the future:",
      },
      {
        type: "list",
        items: [
          "Frontend: Developed with JavaScript and frameworks like Flutter or React Native for a smooth experience on any smartphone.",
          "Intelligence: Python powers the AI engine, ensuring clinical accuracy.",
          "Security: A MongoDB database hosted on a scalable cloud ensures that your medical records are encrypted and HIPAA-compliant.",
        ],
      },
      {
        type: "header",
        level: 3,
        text: "Why It Matters",
      },
      {
        type: "paragraph",
        text: "By the end of this project, we expect to see a massive shift in how Borama accesses healthcare. We are aiming for a 40% reduction in administrative workload and a significant drop in hospital congestion.",
      },
      {
        type: "paragraph",
        text: "Most importantly, we are making healthcare safer. By triaging patients digitally, we keep the waiting rooms clear for those who truly need urgent, physical care.",
      },
      {
        type: "header",
        level: 3,
        text: "Looking Ahead",
      },
      {
        type: "paragraph",
        text: "The AI Consultation and Booking App is more than just a piece of software; it is a commitment to the health of our community. As we move into the pilot phase at Al-Hayat Hospital, we invite the people of Borama to join us in this digital revolution.",
      },
      {
        type: "header",
        level: 3,
        text: "The future of healthcare isn't in a waiting line—it’s in your hand.",
      },
      {
        type: "paragraph",
        text: "About the Author: Abdilahi Abdirahman is a Software Engineering student at Amoud University, dedicated to solving local problems through global technology.",
      },
    ],
  },
];
