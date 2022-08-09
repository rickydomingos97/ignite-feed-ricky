import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://xesque.rocketseat.dev/users/avatar/profile-34085266-a2f8-4d50-9aaa-32e5f01df0f2-1659571309109.jpg" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Domingos</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Published at 1h ago
        </time>
            </div>

            <button title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Ricky! parabens!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}