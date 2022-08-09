import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-1/285343742_5810645965619401_8863373842491284619_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEMPZKQtK2gA3B2A6ix2y99KAnLWFipIJwoCctYWKkgnOv9Cd4V5GYKAjqBTaKox511TpmsdyXNvFqbFWHrCaYV&_nc_ohc=6D97fEJSqyEAX-s8j8A&_nc_ht=scontent.fcgh55-1.fna&oh=00_AT8_98l9DSV2mDV3DmI7WGziCkCf3UW5J9o9sTES77mh1A&oe=62F17463"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Ricardo Domingos</strong>
            <span>Web Developer | React</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Published at 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀
        </p>
        <p>
          👉<a href=""> rickydomingos/ignitefeed</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a commnet" />

        <footer>
          <button type="submit">To Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment /> 
      </div>
    </article>
  );
}
