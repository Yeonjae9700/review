import classes from './Modal.module.css';

function Modal({children}) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {/* open이 있어야 다이얼로그 요소가 자동으로 화면에 표시됨 */}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
