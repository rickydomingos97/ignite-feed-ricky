import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// interface criada para corrigir erro no content={post.content}
// essa interface tem de ser igual a PostProps que vem do Post.tsx
interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  },

  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[],
  publishedAt: Date;
}



const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Anne Lousiane",
      role: "UI Designer @ SabakaSabaka",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },
      { type: "link", content: "annelousiane/ignitefeeed" },
    ],
    publishedAt: new Date("2022-11-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sophie Charson",
      role: "Marketing @ SabakaSabaka",
    },
    content: [
      { type: "paragraph", content: "Privet  👋" },
      {
        type: "paragraph",
        content: "Esse app ta ficando muito bom 🚀",
      },
      { type: "link", content: "iamsophie/ignitefeeed" },
    ],
    publishedAt: new Date("2022-10-20 20:00:00"),
  },

  {
    id: 3,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1552162864-987ac51d1177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
      name: "Maria Rosa",
      role: "Design Thinking @ SabakaSabaka",
    },
    content: [
      { type: "paragraph", content: "Salur  👋" },
      {
        type: "paragraph",
        content: "Agora mais um projeto no ar 🚀",
      },
      { type: "link", content: "rosamaria/ignitefeeed" },
    ],
    publishedAt: new Date("2022-11-25 22:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
