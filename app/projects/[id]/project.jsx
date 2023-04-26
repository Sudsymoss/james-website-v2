import WinCard from '../../WindowCard';
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
    <div className={styles.project_container}>
      <div className={styles.project}>
        <div className={card.card}>
          <h1>{project.title}</h1>
          {project.archived ? (<><h2 style={{margin: '0', color: 'red'}}>Archived</h2><h6>No longer updated/active</h6></>):('')}
          <h4>Created {new Date(project.created).toLocaleDateString()} | Updated {new Date(project.updated).toLocaleDateString()}</h4>
          <div className={card.project_card_info}>
            <h5>About</h5>
            <p>{project.desc}</p>
          </div>
          <Link href={project.dislink} target='_blank' className={styles.tab_button}>
            Open
          </Link>
        </div>
        <WinCard>
          <iframe src={project.dislink} className={styles.projectpage} />
        </WinCard>
      </div>

    </div>
  );
}
