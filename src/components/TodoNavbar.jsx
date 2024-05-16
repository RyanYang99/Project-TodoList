// import { useState } from 'react'
// import './TodoNavbar.css'

// function TodoNavbar() {
//     const initialState = [
//         { id: 1, title: "오늘할일", detail: "리액트 복습하기" },
//         { id: 2, title: "내일할일", detail: "리액트 복습하기2" },
//     ];

//     const [texts, setTexts] = useState(initialState);
//     const [title, setTitle] = useState("");
//     const [detail, setDetail] = useState("");

//     const addText = (e) => {
//         e.preventDefault();

//         if (!title || !detail) {
//             alert("제목과 내용을 모두 입력해주세요!")
//             return;
//         }

//         setTexts([
//             ...texts,
//             {
//                 id: Date.now(),
//                 title,
//                 detail,
//             },
//         ]);

//         setTitle("");
//         setDetail("");
//     };


//     return (
//         <>
//             <TodoNavbar>
//                 <form onSubmit={addText}>
//                     <input className='title-input'
//                         type="text"
//                         placeholder="제목"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <input className='text-input'
//                         type="text"
//                         placeholder="내용"
//                         value={detail}
//                         onChange={(e) => setDetail(e.target.value)}
//                     />
//                     <button className='submit-btn' type="submit">Submit</button>
//                 </form>
//             </TodoNavbar>
//         </>
//     );
// }

// export default TodoNavbar;

