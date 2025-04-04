import { useEffect, useState } from "react";

// const names = [
//   "Freya Jayawardana",
//   "Indira Seruni Putri",
//   "Cynthia Yaputera",
//   "Michie Alexandria",
//   "Mikaela Kusjanto",
// ];

const names = [
  { name: "Freya Jayawardana", gen: "gen 7" },
  { name: "Indira Seruni Putri", gen: "gen 10" },
  { name: "Cynthia Yaputera", gen: "gen 11" },
  { name: "Michie Alexandria", gen: "gen 11" },
  { name: "Mikaela Kusjanto", gen: "gen 13" },
];

const GuessIt = () => {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [count, setCount] = useState(10);
  const [matchedSentence, setMatchedSentence] = useState(false);

  // Pilih 1 nama secara acak saat pertama render
  useEffect(() => {
    const random = names[Math.floor(Math.random() * names.length)];
    setAnswer(random.name.toLowerCase());
    console.log("answer", random);
  }, []);

  // Cek input setiap kali berubah
  const cleanedInput = input.trim().toLowerCase();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //alert(time);
    if (!input) return;
    //Per kalimat
    if (count === 3) {
      alert(`Hati - hati sisa kesempetanmu tinggal 2!`);
    } else if (count === 0) {
      alert("Kesempatanmu habis!");
      return;
    }
    setCount((count) => count - 1);
    if (cleanedInput === answer) {
      setMatchedSentence(true);
      return;
    }
    console.log("input", cleanedInput);
  };

  return (
    <div className="align-center flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold">Tebak Nama Member</h1>
      <div className="p-2 border border-base-300 rounded-box bg-base-200 space-y-2">
        <p>
          <strong>Sisa Percobaanmu :</strong>{" "}
          {count > 0 ? `⏳ ${count}` : "❌ Habis"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm m-4">
        <input
          type="text"
          placeholder="Ketik nama..."
          className="input input-bordered w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="p-2 border border-base-300 rounded-box bg-base-200 space-y-2">
        <p>
          <strong>Kalimat cocok :</strong>{" "}
          {matchedSentence ? `✅ Ya! ${answer}` : `❌ Belum`}
        </p>
      </div>
    </div>
  );
};

export default GuessIt;
