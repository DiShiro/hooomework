const changeProposal = (arr) => {
    return arr.map(item => {
      const { word, divisibility } = item;
      let newWord = "";
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        
        if (divisibility === "чётный") {
          newWord += (i % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
        } else if (divisibility === "нечётный") {
          newWord += (i % 2 !== 0) ? char.toUpperCase() : char.toLowerCase();
        }
      }
  
      return newWord;
    });
  };
  
  const result = changeProposal([
    { word: "чётный текст", divisibility: "чётный" },
    { word: "нечётный текст", divisibility: "нечётный" },
    { word: "этот текст тоже должен быть с каждым большим чётным символом", divisibility: "чётный" },
    { word: "а у этого текста должен быть каждый нечётный большой символ", divisibility: "нечётный" },
  ]);