import styles from '../Projects.module.css';
import card from './Card.module.css'

import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKET_URL)

async function getProject(projectId) {
const data = await pb.collection('projects').getOne(projectId);
console.log(data)
  return data;
}

export default async function ProjectPage({ params }) {
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
    </div>
  );
}
