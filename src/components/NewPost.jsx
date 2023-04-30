import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    // HTTP요청을 만들어 전송하고, 페이지가 다시 로드됨.
    // 이때, HTTP요청을 만들어 전송하는 것을 막아줌.
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    //입력된 값이 Post component 목록에서 나타나야함.
    console.log(postData);
    onCancel(); //submit 버튼 클릭하면 입력창 꺼지게 함.
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
        {/* Form 안에 button을 눌렀을 때 submit 이벤트가 발생해서 브라우저는 HTTP 요청을 만들어 해당 웹사이트를 서비스 하는 서버에 보내게 됨. */}
        {/* 전송되지 않게 하려면 type을 button으로 설정해주어야 함. */}
        {/* submit 버튼은 default option이 submit이므로 설정해주지 않아도 됨. */}
      </p>
    </form>
  );
}

export default NewPost;
