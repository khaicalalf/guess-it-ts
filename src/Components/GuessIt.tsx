import { useEffect, useState } from "react";
import myIndira from "../assets/image/member/indira.jpg";

// const names = [
//   "Freya Jayawardana",
//   "Indira Seruni Putri",
//   "Cynthia Yaputera",
//   "Michie Alexandria",
//   "Mikaela Kusjanto",
// ];

const names = [
  { name: "Freya Jayawardana", gen: "gen 7", img: "myFreya" },
  { name: "Indira Seruni Putri", gen: "gen 10", img: myIndira },
  { name: "Cynthia Yaputera", gen: "gen 11", img: "myThya" },
  { name: "Michie Alexandria", gen: "gen 11", img: "myMichie" },
  { name: "Mikaela Kusjanto", gen: "gen 13", img: "myMika" },
];

const GuessIt = () => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState<string>("");
  const [input, setInput] = useState("");
  const [count, setCount] = useState(10);
  const [matchedSentence, setMatchedSentence] = useState<boolean>(false);
  const [oldLetterIsMatched, setOldLetterIsMatched] = useState("");
  const [newLetterIsMatched, setNewLetterIsMatched] = useState("");
  const [currentLetterIsMatched, setCurrentLetterIsMatched] = useState("");

  // Pilih 1 nama secara acak saat pertama render
  useEffect(() => {
    const random = names[Math.floor(Math.random() * names.length)];
    setAnswer(random.name.toLowerCase());
    setImage(random.img);
    console.log("answer", random);
  }, []);

  // Cek input setiap kali berubah
  const cleanedInput = input.trim().toLowerCase();

  //cek input untuk huruf
  const getMaskedAnswer = (cleanedInput: string, answer: string): string => {
    const allowedLetters = Array.from(cleanedInput);

    const letterisMatched = Array.from(answer)
      .map((char) => {
        if (char === " ") return " "; // tetap tampilkan spasi
        return allowedLetters.includes(char.toLowerCase()) ? char : "*";
      })
      .join("");

    if (oldLetterIsMatched === "") {
      setOldLetterIsMatched(letterisMatched);
      return letterisMatched;
    } else {
      setNewLetterIsMatched(letterisMatched);

      let result = "";
      for (let i = 0; i < oldLetterIsMatched.length; i++) {
        const oldChar = oldLetterIsMatched[i];
        const newChar = letterisMatched[i]; // <- pakai letterisMatched, bukan newLetterIsMatched

        result += oldChar !== "*" ? oldChar : newChar !== "*" ? newChar : "*";
      }

      setCurrentLetterIsMatched(result);
      setOldLetterIsMatched(result); // penting biar jadi old buat input berikutnya
      return result;
    }
  };

  //cek input untuk 1 kalimat
  const sentenceisMatched = (cleanedInput: string, answer: string) => {
    if (cleanedInput == answer) {
      setMatchedSentence(true);
      return;
    }
  };

  //modal pop up win
  const modalWin = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //mencegah browser reload setelah submit
    e.preventDefault();

    //mencegah input kosong
    if (!input) return;
    //kosongkan input
    setInput("");
    //memberi notif percobaan
    if (count === 3) {
      alert(`Hati - hati sisa kesempetanmu tinggal 2!`);
    } else if (count === 0) {
      alert("Kesempatanmu habis!");
      return;
    }

    //mengurangi nilai percobaan setelah submit
    setCount((count) => count - 1);

    //cek input untuk huruf
    getMaskedAnswer(cleanedInput, answer);

    //1 kalimat
    sentenceisMatched(cleanedInput, answer);

    //winner
    if (matchedSentence) {
      modalWin();
      return;
    } else if (getMaskedAnswer(cleanedInput, answer) == answer) {
      //1 kalimat
      setMatchedSentence(true);
      modalWin();
      return;
    }

    //console log input
    console.log("count", count);
    console.log("oldletterIsMatched", oldLetterIsMatched);
    console.log("newLetterIsMatched", newLetterIsMatched);
    console.log("currentLetterIsMatched", currentLetterIsMatched);
    console.log("result", getMaskedAnswer(cleanedInput, answer));
  };

  return (
    <div className="align-center flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold italic mb-4">Save ur OShi!!!</h1>
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
          <br />
          <strong>{oldLetterIsMatched}</strong>
        </p>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box card p-4">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
          </form>
          <figure>
            <img className="rounded-box" src={image} alt="Shoes" />
          </figure>
          <h2 className="card-title m-2">Selamat!</h2>
          <p>
            Kamu berhasil menebak nama lengkap <strong>{answer}</strong> dengan
            sisa langkah <strong>{count}</strong>
          </p>
          <div className="card-actions justify-end">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GuessIt;
