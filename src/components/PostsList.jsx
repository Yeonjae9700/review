import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  // const [modalIsVisible, setModalIsVisible] = useState(true);

  // 방법2: JSX코드를 modalContent라는 변수에 할당
  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //     /* null 을 사용하면 아무것도 렌더링 되지 않음, false도 같은 결과 */
  //   );
  // }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
        // Wrap Component를 만들때는 children property를 넣어줘야함!
      )}

      {/* 방법3 */}
      {/* {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )} */}

      {/* 방법1: modalIsVisible이 true일때만 실행 */}
      {/* {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null} */}

      {/* {modalContent} */}

      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
