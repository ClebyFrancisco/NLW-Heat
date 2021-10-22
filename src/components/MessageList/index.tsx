import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            deserunt qui aut. Quam nihil dolorum nostrum
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ClebyFrancisco.png" alt="" />
            </div>
            <span>Cleby Francisco</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            deserunt qui aut. Quam nihil dolorum nostrum
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ClebyFrancisco.png" alt="" />
            </div>
            <span>Cleby Francisco</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            deserunt qui aut. Quam nihil dolorum nostrum
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/ClebyFrancisco.png" alt="" />
            </div>
            <span>Cleby Francisco</span>
          </div>
        </li>

        
      </ul>
    </div>
  );
}
