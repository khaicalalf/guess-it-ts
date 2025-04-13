import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import indira from "../assets/image/member/frame-indira.png";
import frey from "../assets/image/member/frame-freya.png";
import mich from "../assets/image/member/frame-mich.png";
import mika from "../assets/image/member/frame-mika.png";
import thya from "../assets/image/member/frame-thya.png";

// const names = [
//   "Freya Jayawardana",
//   "Indira Seruni Putri",
//   "Cynthia Yaputera",
//   "Michie Alexandria",
//   "Mikaela Kusjanto",
// ];

const names = [
  { name: "Freya Jayawardana", gen: "gen 7", img: frey },
  { name: "Indira Seruni Putri", gen: "gen 10", img: indira },
  { name: "Cynthia Yaputera", gen: "gen 11", img: thya },
  { name: "Michie Alexandra", gen: "gen 11", img: mich },
  { name: "Mikaela Kusjanto", gen: "gen 13", img: mika },
];

const GuessIt = () => {
  const [answer, setAnswer] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState(5);
  const [matchedSentence, setMatchedSentence] = useState<boolean>(false);
  const [oldLetterIsMatched, setOldLetterIsMatched] = useState<string>("");
  const [newLetterIsMatched, setNewLetterIsMatched] = useState<string>("");
  const [currentLetterIsMatched, setCurrentLetterIsMatched] =
    useState<string>("");

  // Pilih 1 nama secara acak saat pertama render
  useEffect(() => {
    const random = names[Math.floor(Math.random() * names.length)];
    setAnswer(random.name.toLowerCase());
    setImage(random.img);
    setName(random.name);
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
      const alert = document.querySelector(".alert-carefull") as HTMLDivElement;
      alert.classList.remove("hidden");
    } else if (count <= 1) {
      const alertEnd = document.querySelector(".alert-end") as HTMLDivElement;
      alertEnd.classList.remove("hidden");
      const buttonEnd = document.querySelector(".btn-end") as HTMLDivElement;
      buttonEnd.classList.remove("hidden");
      const alert = document.querySelector(".alert-carefull") as HTMLDivElement;
      alert.classList.add("hidden");
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

  const handleCaptureClick = () => {
    const node = document.getElementById("capture-area");
    if (!node) return;

    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "save-ur-oshi.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };

  return (
    <div className="align-center flex flex-col items-center justify-center p-4">
      <div className="justify-between flex items-center w-full max-w-sm m-4">
        <h1 className="title text-xl font-bold italic">Save ur OShi!!!</h1>
        <div className="p-2 border border-base-300 rounded-box bg-base-200 space-y-2">
          <p>
            <strong>{count > 0 ? `⏳ ${count}` : `❌ 0`}</strong>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm m-4">
        <input
          type="text"
          placeholder="Write your guess..."
          className="input input-bordered w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="p-2 border border-base-300 rounded-box bg-base-200 space-y-2">
        <p>
          <strong>{count > 0 ? `${oldLetterIsMatched}` : `${name}`}</strong>
        </p>
      </div>
      <button
        className="btn-end btn text-lg bg-error text-base-200 p-4 mt-5 hidden"
        onClick={() => window.location.reload()}
      >
        reset
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2 z-2"
              onClick={() => window.location.reload()}
            >
              ✕
            </button>
          </form>
          <div
            id="capture-area"
            className="card p-8 bg-base-200 text-center space-y-4"
          >
            <h2 className="text-4xl font-bold text-error italic">YEAHH !!!!</h2>
            <figure className="justify-center">
              <img
                className="floating-hand w-84 h-auto mt-10"
                src={image}
                alt="oshi!!!"
              />
            </figure>
            <p className="text-lg leading-relaxed px-4">
              You have saved <br />{" "}
              <strong className="text-info text-xl">{name}</strong> <br />
              with <strong className="text-error">{count}</strong> left chances
            </p>
          </div>
          <div className="card-actions justify-center mt-4">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn text-lg p-4" onClick={handleCaptureClick}>
              Save your Saves !!!
            </button>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => window.location.reload()}
        >
          {/* if there is a button in form, it will close the modal */}
          <button>Close</button>
        </form>
      </dialog>
      <div className="alert-carefull toast toast-top toast-end hidden">
        <div className="alert alert-warning">
          <span>
            <strong>Be Carefull!</strong>
          </span>
        </div>
      </div>
      <div className="alert-end toast toast-top toast-end hidden">
        <div className="alert alert-error">
          <span>
            <strong>Ah crap!</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuessIt;
