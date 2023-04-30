import classes from "./Modal.module.css";
//classes - 이 jsx 파일에만 적용되는 스타일을 작성할 때 사용함.

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      {/* backdrop - 어두운 배경색 */}
      <dialog open className={classes.modal}>
        {/* open이 있어야 다이얼로그 요소가 자동으로 화면에 표시됨 */}
        {children}
        {/* 이 자리에 감싸는 내용이 들어감 */}
      </dialog>
    </>
  );
}

export default Modal;
