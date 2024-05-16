import { useState } from 'react'
import './App.css'

function App() {
  const initialState = [
    { id: 1, title: "오늘할일", detail: "리액트 복습하기" },
    { id: 2, title: "내일할일", detail: "리액트 복습하기2" },
  ];

  const [texts, setTexts] = useState(initialState);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const addText = (e) => {
    e.preventDefault();

    if (!title || !detail) {
      alert("제목과 내용을 모두 입력해주세요!")
      return;
    }

    setTexts([
      ...texts,
      {
        id: Date.now(),
        title,
        detail,
      },
    ]);

    setTitle("");
    setDetail("");
  };

  const removeText = (id) => {
    setTexts(texts.filter((text) => text.id !== id));
  };

  return (
    <>
      <div className='TodoTemplate'>
        <header className='TodoHead'>
          <h1> My To Do List </h1>
        </header>
        
        <div className='TodoNavbar'>
          <form className='input-box' onSubmit={addText}>
            <input className='title-input'
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input className='text-input'
              type="text"
              placeholder="내용"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>
        
        <div className='content'>
          <ul>
            {texts.map((text) => (
              <li className='content-card' key={text.id} style={{ display: "flex", alignItems: "center" }}>
                <span className='content-detail'>Title: {text.title}, Detail: {text.detail}</span>
                <button className='delete-btn' onClick={() => removeText(text.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>  
      </div>  
    </>
  )
}

export default App
