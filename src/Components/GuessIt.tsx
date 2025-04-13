import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import feni from "../assets/image/member/frame-feni.png";
import cigre from "../assets/image/member/frame-gracia.png";
import gita from "../assets/image/member/frame-gita.png";
import kitoy from "../assets/image/member/frame-kitoy.png";
import olla from "../assets/image/member/frame-olla.png";
import eli from "../assets/image/member/frame-eli.png";
import jeci from "../assets/image/member/frame-jeci.png";
import mumu from "../assets/image/member/frame-mumu.png";
import frey from "../assets/image/member/frame-freya.png";
import fio from "../assets/image/member/frame-fio.png";
import onyil from "../assets/image/member/frame-onyil.png";
import lulu from "../assets/image/member/frame-lul.png";
import indah from "../assets/image/member/frame-indah.png";
import atin from "../assets/image/member/frame-atin.png";
import meng from "../assets/image/member/frame-meng.png";
import manda from "../assets/image/member/frame-manda.png";
import indira from "../assets/image/member/frame-indira.png";
import lia from "../assets/image/member/frame-lia.png";
import ellay from "../assets/image/member/frame-ellay.png";
import lyn from "../assets/image/member/frame-lyn.png";
import raisha from "../assets/image/member/frame-raisha.png";
import alya from "../assets/image/member/frame-alya.png";
import anin from "../assets/image/member/frame-anin.png";
import cathy from "../assets/image/member/frame-cathy.png";
import elin from "../assets/image/member/frame-elin.png";
import chelsea from "../assets/image/member/frame-chelsea.png";
import danella from "../assets/image/member/frame-danella.png";
import daisy from "../assets/image/member/frame-daisy.png";
import gendis from "../assets/image/member/frame-gendis.png";
import icel from "../assets/image/member/frame-icel.png";
import grace from "../assets/image/member/frame-grace.png";
import thya from "../assets/image/member/frame-thya.png";
import mich from "../assets/image/member/frame-mich.png";
import aralie from "../assets/image/member/frame-aralie.png";
import delynn from "../assets/image/member/frame-delynn.png";
import lana from "../assets/image/member/frame-lana.png";
import erine from "../assets/image/member/frame-erine.png";
import fritzy from "../assets/image/member/frame-fritzy.png";
import lyly from "../assets/image/member/frame-lyly.png";
import trisha from "../assets/image/member/frame-trisha.png";
import moreen from "../assets/image/member/frame-moreen.png";
import levi from "../assets/image/member/frame-levi.png";
import nayra from "../assets/image/member/frame-nayra.png";
import nachia from "../assets/image/member/frame-nachia.png";
import oyin from "../assets/image/member/frame-oyin.png";
import regi from "../assets/image/member/frame-regi.png";
import ribka from "../assets/image/member/frame-ribka.png";
import nala from "../assets/image/member/frame-nala.png";
import kimmy from "../assets/image/member/frame-kimmy.png";
import virg from "../assets/image/member/frame-virg.png";
import auw from "../assets/image/member/frame-auw.png";
import maira from "../assets/image/member/frame-maira.png";
import giaa from "../assets/image/member/frame-giaa.png";
import rili from "../assets/image/member/frame-rili.png";
import ekin from "../assets/image/member/frame-ekin.png";
import jemima from "../assets/image/member/frame-jemima.png";
import nur from "../assets/image/member/frame-nur.png";
import mika from "../assets/image/member/frame-mika.png";
import tanav from "../assets/image/member/frame-tana.png";
import piav from "../assets/image/member/frame-pia.png";
import kanav from "../assets/image/member/frame-kana.png";

// const names = [
//   "Freya Jayawardana",
//   "Indira Seruni Putri",
//   "Cynthia Yaputera",
//   "Michie Alexandria",
//   "Mikaela Kusjanto",
// ];

const names = [
  { name: "Feni Fitriyanti", gen: "gen 3", img: feni },
  { name: "Shania Gracia", gen: "gen 3", img: cigre },
  { name: "Gita Sekar Andarini", gen: "gen 5", img: gita },
  { name: "Angelina Christy", gen: "gen 7", img: kitoy },
  { name: "Febriola Sinambela", gen: "gen 7", img: olla },
  { name: "Helisma Putri", gen: "gen 7", img: eli },
  { name: "Jessica Chandra", gen: "gen 7", img: jeci },
  { name: "Mutiara Azzahra", gen: "gen 7", img: mumu },
  { name: "Freya Jayawardana", gen: "gen 7", img: frey },
  { name: "Fiony Alveria", gen: "gen 8", img: fio },
  { name: "Cornelia Vanisa", gen: "gen 8", img: onyil },
  { name: "Lulu Salsabila", gen: "gen 8", img: lulu },
  { name: "Kathrina Irene", gen: "gen 9", img: atin },
  { name: "Marsha Lenathea", gen: "gen 9", img: meng },
  { name: "Indah Cahya", gen: "gen 9", img: indah },
  { name: "Indira Seruni Putri", gen: "gen 10", img: indira },
  { name: "Amanda Sukma", gen: "gen 10", img: manda },
  { name: "Aurellia", gen: "gen 10", img: lia },
  { name: "Gabriela Abigail", gen: "gen 10", img: ellay },
  { name: "Jesslyn Elly", gen: "gen 10", img: lyn },
  { name: "Raisha Syifa", gen: "gen 10", img: raisha },
  { name: "Cynthia Yaputera", gen: "gen 11", img: thya },
  { name: "Michie Alexandra", gen: "gen 11", img: mich },
  { name: "Alya Amanda", gen: "gen 11", img: alya },
  { name: "Anindya Ramadhani", gen: "gen 11", img: anin },
  { name: "Cathleen Nixie", gen: "gen 11", img: cathy },
  { name: "Celline Thefani", gen: "gen 11", img: elin },
  { name: "Chelsea Davina", gen: "gen 11", img: chelsea },
  { name: "Dena Natalia", gen: "gen 11", img: danella },
  { name: "Desy Natalia", gen: "gen 11", img: daisy },
  { name: "Gendis Mayrannisa", gen: "gen 11", img: gendis },
  { name: "Grace Oktaviani", gen: "gen 11", img: grace },
  { name: "Greesella Adhalia", gen: "gen 11", img: icel },
  { name: "Abigail Rachel", gen: "gen 12", img: aralie },
  { name: "Adeline Wijaya", gen: "gen 12", img: delynn },
  { name: "Aurhel Alana", gen: "gen 12", img: lana },
  { name: "Catherina Vallencia", gen: "gen 12", img: erine },
  { name: "Fritzy Rosmerian", gen: "gen 12", img: fritzy },
  { name: "Hillary Abigail", gen: "gen 12", img: lyly },
  { name: "Jazzlyn Trisha", gen: "gen 12", img: trisha },
  { name: "Letycia Moreen", gen: "gen 12", img: moreen },
  { name: "Michelle Levia", gen: "gen 12", img: levi },
  { name: "Nayla Suji", gen: "gen 12", img: nayra },
  { name: "Nina Tutachia", gen: "gen 12", img: nachia },
  { name: "Oline Manuel", gen: "gen 12", img: oyin },
  { name: "Regina Wilian", gen: "gen 12", img: regi },
  { name: "Ribka Budiman", gen: "gen 12", img: ribka },
  { name: "Shabilqis Naila", gen: "gen 12", img: nala },
  { name: "Victoria Kimberly", gen: "gen 12", img: kimmy },
  { name: "Mikaela Kusjanto", gen: "gen 13", img: mika },
  { name: "Astrella Virgiananda", gen: "gen 13", img: virg },
  { name: "Aulia Riza", gen: "gen 13", img: auw },
  { name: "Bong Aprili", gen: "gen 13", img: rili },
  { name: "Hagia Sopia", gen: "gen 13", img: giaa },
  { name: "Humaira Ramadhani", gen: "gen 13", img: maira },
  { name: "Jacqueline Immanuela", gen: "gen 13", img: ekin },
  { name: "Jemima Evodie", gen: "gen 13", img: jemima },
  { name: "Nur Intan", gen: "gen 13", img: nur },
  { name: "Kanaia Asa", gen: "gen 1 virtual", img: kanav },
  { name: "Pia Meraleo", gen: "gen 1 virtual", img: piav },
  { name: "Tana Nona", gen: "gen 1 virtual", img: tanav },
];

const GuessIt = () => {
  const [answer, setAnswer] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState(5);
  const [matchedSentence, setMatchedSentence] = useState<boolean>(false);
  const [oldLetterIsMatched, setOldLetterIsMatched] = useState<string>("");
  const [currentLetterIsMatched, setCurrentLetterIsMatched] =
    useState<string>("");

  // Pilih 1 nama secara acak saat pertama render
  useEffect(() => {
    const random = names[Math.floor(Math.random() * names.length)];
    setAnswer(random.name.toLowerCase());
    setImage(random.img);
    setName(random.name);
    //console.log("answer", random);
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
      setCurrentLetterIsMatched(letterisMatched);
      return letterisMatched;
    } else {
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
    // console.log("count", count);
    // console.log("newLetterIsMatched", newLetterIsMatched);
    // console.log("oldletterIsMatched", oldLetterIsMatched);
    // console.log("currentLetterIsMatched", currentLetterIsMatched);
    // console.log("result", getMaskedAnswer(cleanedInput, answer));
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
          <strong>{count > 0 ? `${currentLetterIsMatched}` : `${name}`}</strong>
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
