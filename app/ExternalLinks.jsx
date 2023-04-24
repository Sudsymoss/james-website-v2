import styles from './ExLink.module.css'
export default function ExLinks(position){
    if(position.position === 'right'){
        return(
            <div style={{right: 0, width: '10%'}} className={styles.container}>
                <div style={{borderLeft: '2px dashed gray'}} className={styles.links}/>
            </div>
        )
    }
    return(
        <div style={{left: 0}} className={styles.container}>
            <div style={{borderRight: '2px dashed gray'}}  className={styles.links}/>
        </div>
    )
}
