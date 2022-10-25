import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  // criar estado
  const [comments, setComments] = useState([
    'Post muito bacana hein!'
  ])


  const publishedDateFormatted = format(publishedAt, "dd LLLL 'at' HH:mm'h'", {
    locale: enUS,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    // pra pegar o texto
    const newCommentText = event.target.comment.value

    // imutabilidade
    setComments([...comments, comments.length + 1])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="http://">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form 
        onSubmit={handleCreateNewComment} 
        className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
        name="content"
        placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
