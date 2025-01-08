import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const DATA = [
    { question: "Foli", answer: "Notopterus notopterus" },
    { question: "Chital", answer: "Notopterus chitala" },
    { question: "Khalibaush", answer: "Labeo rohita" },
    { question: "Bahngan bata", answer: "Labeo bata" },
    { question: "Nandina", answer: "Labeo nandina" },
    { question: "Mrigal", answer: "Cirrhina mrigala" },
    { question: "Mola", answer: "Amblypharyngodon mola" },
    { question: "Silver carp", answer: "Hypophthalmichthys molitrix" },
    { question: "Grass carp", answer: "Ctenopharyngodon ldella" },
    { question: "Gold carp", answer: "Carassius auratus" },
    { question: "Titpuri", answer: "Puntius ticto" },
    { question: "Puti", answer: "Puntius stigma" },
    { question: "Rani/Bou", answer: "Botia dario" },
    { question: "Tilapia", answer: "Oreochoromis mossambicus" },
    { question: "Common carp", answer: "Cyprinus carpio" },
    { question: "Rajputi", answer: "Barbonemus gonionotus" },
    { question: "Mirror carp", answer: "Cyprinus carpio var specularis" },
    { question: "Sucker fish", answer: "Hypostomus plecostomus" },
    { question: "Big-head carp", answer: "Aristhichthys nobilis" },
    { question: "Black carp", answer: "Mylopharyngodon pisceus" },
    { question: "Pangas", answer: "Pangasius hypophthalmus" },
    { question: "African magur", answer: "Clarias garipinus" },
    { question: "Milkfish", answer: "Chanos chanos" },
    { question: "Kuchia", answer: "Monopterus cuchia" },
    { question: "Taki", answer: "Channa orientalis" },
    { question: "Chanda", answer: "Chanda nama" },
    { question: "Golsha tengra", answer: "Mystus cavasius" },
  ];

  const [randData, setRandData] = useState("");
  const [randQuestion, setRandQuestion] = useState("");
  const [showResult, setShowResult] = useState(null);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    setRanQfunction();
  }, []);

  const setRanQfunction = () => {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * DATA.length);
    } while (randIndex == prevIndex);
    setRandData(DATA[randIndex]);
    setRandQuestion(DATA[randIndex].question);
    setPrevIndex(randIndex);
    setShowResult(null);
  };

  const onValueChange = (val) => {
    // console.log(
    //   " q is: " +
    //     randData.question +
    //     " and selected answeer is : " +
    //     selAns +
    //     " real ans : " +
    //     randData.answer
    // );

    randData.answer == val ? setShowResult(true) : setShowResult(false);
  };

  return (
    <>
      <div className="main-con">
        <div className="form-wrapper">
          {showResult != null ? (
            <div className="result">
              {showResult == true ? "Correct!" : "Wrong!"}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="question">Local Name</label>
          <input type="text" id="question" value={randQuestion} disabled />
          <label htmlFor="answer">Scientific Name</label>
          <select
            name="answer"
            id="answer"
            onChange={(e) => onValueChange(e.target.value)}
          >
            <option value="select-answer">Select Answer</option>
            {DATA.map((q_data, i) => (
              <option key={i} value={q_data.answer}>
                {q_data.answer}
              </option>
            ))}
          </select>
          <button onClick={setRanQfunction}>Try another</button>
        </div>
      </div>
    </>
  );
}

export default App;
