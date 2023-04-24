import styles from './TP.module.css'
import Link from 'next/link'
import { useState } from 'react';

import { motion } from "framer-motion";

export default function topProjects() {
    const [currentProject, setCurrentProject] = useState(1);
    const projects = [{ href: 'https://gallery.jamesmowat.com', title: 'Gallery', description: 'Photo filled site full of my very own photos, with a built in filter and live updates connected to a pocket base db', }, { href: 'https://news.jamesmowat.com/', title: 'News', description: 'A site to be a kinda modernish news/blog site made with next js, with a built in editor and publisher', }, { href: '/projects/uikchjasx2lm1vw', title: 'Suddsy.dev V1', description: "My first attempt at making a website with a db querry and kinda personal profile look (it don't tho)", },];
    const handlePrev = () => {
        setCurrentProject(currentProject === 0 ? projects.length - 1 : currentProject - 1);
    };
    const handleNext = () => {
        setCurrentProject(currentProject === projects.length - 1 ? 0 : currentProject + 1);
    };
    return (
        <div className={styles.container}>
            <div className={styles.projects_data_container}>
                <div className={styles.title}>
                    <h3>Some of my projects</h3>
                </div>
                <div className={styles.carouselcontainer}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} className={styles.projects}>
                        {projects.map((project, index) => (
                            <div
                                key={project.href}
                                className={`${styles.project} ${currentProject === index ? styles.active : ''}`}
                            >
                                <Link legacyBehavior href={project.href}>
                                    <a>
                                        <h1>{project.title}</h1>
                                        <p>{project.description}<div className={styles.project_blur}></div></p>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                    <div className={styles.carousel_btns}>
                        <button className="prev" onClick={handlePrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M448 606h152q13 0 21.5-8.5T630 576q0-13-8.5-21.5T600 546H448l53-53q9-9 9-21t-9-21q-9-9-21-9t-21 9L355 555q-9 9-9 21t9 21l104 104q9 9 21 9t21-9q9-9 9-21t-9-21l-53-53Zm32 370q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" /></svg>
                        </button>
                        <button className="next" onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm32-370-53 53q-9 9-9 21t9 21q9 9 21 9t21-9l104-104q9-9 9-21t-9-21L501 451q-9-9-21-9t-21 9q-9 9-9 21t9 21l53 53H360q-13 0-21.5 8.5T330 576q0 13 8.5 21.5T360 606h152Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <svg className={styles.bottomsvg} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill" fill="#7926FF" fill-opacity="1" /><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill" fill="#7926FF" fill-opacity="1" /><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill" fill="#7926FF" fill-opacity="1" /></svg>
        </div>
    )
}