import styles from './Notice.module.css'
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETURL)

async function getProjects() {
    //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    //await delay(5000);
    const data = await pb.collection('notices').getList(1, 1, { sort: '-created' });
    console.log(data)
    return data;
}

export default async function notice() {
    const notice = await getProjects();
    return (
        <div className={styles.main}>
            <div className={styles.notice} id="notice">
                <div className={styles.msg}>
                <h1>{notice.items[0].msg}</h1>
                </div>
            </div>
        </div>
    )
}