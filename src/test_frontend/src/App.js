import React, { useState, useEffect } from "react";

function App() {
  const [memoList, setMemoList] = useState([]);
  const [newMemo, setNewMemo] = useState("");

  useEffect(() => {
    const savedMemoList = JSON.parse(localStorage.getItem("memoList"));
    if (savedMemoList) {
      setMemoList(savedMemoList);
    }
  }, []);

  const handleNewMemoChange = (event) => {
    setNewMemo(event.target.value);
  };

  const handleAddMemo = () => {
    if (newMemo.trim() !== "") {
      const updatedMemoList = [...memoList, { content: newMemo }];
      setMemoList(updatedMemoList);
      localStorage.setItem("memoList", JSON.stringify(updatedMemoList));
      setNewMemo("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddMemo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newMemo}
        onChange={handleNewMemoChange}
        onKeyPress={handleKeyPress}
        placeholder="새로운 메모 입력"
      />
      <button onClick={handleAddMemo}>추가</button>
      <ul>
        {memoList.map((memo, index) => (
          <li key={index}>{memo.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
