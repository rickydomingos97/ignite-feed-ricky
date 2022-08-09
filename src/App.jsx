import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

import "./global.css";


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
          author="John Doe" 
          content="Issso eh um novo post" />

          <Post 
          author="Joseane" 
          content="Eu nao fiz esse post" />
        </main>
      </div>
    </>
  );
}

export default App;
