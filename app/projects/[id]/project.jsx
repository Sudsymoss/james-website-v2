import styles from '../Projects.module.css';
import card from './Card.module.css'
import Link from 'next/link';
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)

async function getProject(projectId) {
const data = await pb.collection('projects').getOne(projectId.id);
console.log(data)
  return data;
}

export default async function ProjectPage(params) {
  const project = await getProject(params.id);
  return (
    <div>
      <div className={styles.title}>
        <h1>{project.title}</h1>
      </div>
      <div className={styles.project}>
        <div className={card.card}>
        <iframe src={project.dislink} className={styles.projectpage} />
          <div className={card.carddescription}>
            <p className={card.texttitle}>{project.title}</p>
            <p className={card.textbody}>About: {project.desc || "no description"}<br/>Last updated {project.updated}<br/>Created: {project.created}</p>
          </div>
        </div>
      </div>
      <Link href={project.dislink} target="_blank" className={styles.tabbutton}>
  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg>Open in tab</span>
</Link>
    </div>
  );
}
