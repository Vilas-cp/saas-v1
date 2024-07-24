import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: GlobeIcon,
  },
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: ZapIcon,
  },
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: BrainCogIcon,
  },
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: EyeIcon,
  },
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: ServerCogIcon,
  },
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files security stored and easily accessible anytime,anywhere",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5  bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-6">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into interactive Conversations
            </p>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF</span>
              <br />
              <br />
              Upload your document, and our chatbot will answer questions,
              summarize content, and answer all your Qs, Ideal for everyone,
              <span className="text-indigo-600">Chat with PDF</span> turns
              static documents into{" "}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x fold efforlessly
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
