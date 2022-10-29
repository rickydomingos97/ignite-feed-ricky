import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  // criar estado
  const [comments, setComments] = useState([
    'Post muito bacana!'
  ])

  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateFormatted = format(publishedAt, "dd LLLL 'at' HH:mm'h'", {
    locale: enUS,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    // const newCommentText = 

    // imutabilidade
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }


  function handleNewCommentInvalid() {
    
  }
// deleting comments
  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne)
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
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form 
        onSubmit={handleCreateNewComment} 
        className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
        name="content"
        placeholder="Deixe seu comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
              />);
        })}
      </div>
    </article>
  );
}
