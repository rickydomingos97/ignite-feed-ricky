import { PencilSimpleLine } from 'phosphor-react'

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

  
    
    <div className={styles.profile}>
      <img 
        className={styles.avatar}
      src="https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-1/285343742_5810645965619401_8863373842491284619_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEMPZKQtK2gA3B2A6ix2y99KAnLWFipIJwoCctYWKkgnOv9Cd4V5GYKAjqBTaKox511TpmsdyXNvFqbFWHrCaYV&_nc_ohc=6D97fEJSqyEAX-s8j8A&_nc_ht=scontent.fcgh55-1.fna&oh=00_AT8_98l9DSV2mDV3DmI7WGziCkCf3UW5J9o9sTES77mh1A&oe=62F17463" alt="" />
      <strong>Ricardo Domingos</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
      <PencilSimpleLine
        size={20}
      
      />
        Edit Profile
      </a>
    </footer>
    </aside>
  );
}
