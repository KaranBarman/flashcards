"use client";

import React, { useState } from "react";

const qnas = [
  {
    question: "Who was the first president of India?",
    answer: "Rajendra Prasad",
    id: 1232,
  },
  {
    question: "Who was the first lady prime minister of India?",
    answer: "Indira Gandhi",
    id: 2908,
  },
  {
    question: "When was the first successful nuclear warhead tested in India?",
    answer: "1999, Pokhran",
    id: 3987,
  },
  {
    question: "Who was the writter of national song of india.",
    answer: "Bankim chandra chatterjee",
    id: 4765,
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id: any) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 p-4">
      {qnas.map((qna) => (
        <div
          key={qna.id}
          onClick={() => handleClick(qna.id)}
          className={`font-semibold p-4 rounded-lg border border-gray-400 ${
            qna.id === selectedId
              ? "bg-green-100 text-green-800"
              : " bg-red-100 text-red-800"
          }`}
        >
          <p className="cursor-pointer">
            {qna.id === selectedId ? qna.answer : qna.question}
          </p>
        </div>
      ))}
    </div>
  );
}
