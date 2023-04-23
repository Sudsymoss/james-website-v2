"use client";
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import TopProjects from './topprojects'
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className={styles.topsvg}><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#7926ff"></stop><stop offset="95%" stop-color="#7926ff"></stop></linearGradient></defs><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#7926ff"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 185.86666666666667,263.20000000000005 371.73333333333335,260.40000000000003 530,269 C 688.2666666666667,277.59999999999997 818.9333333333334,297.59999999999997 966,299 C 1113.0666666666666,300.40000000000003 1276.5333333333333,283.20000000000005 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className={styles.path1} transform="rotate(-180 720 200)"></path></svg>
        <div className={styles.maintop}>
          <Link className={styles.namelink} href='/projects'>
            <h1>James M</h1>
          </Link>
          <p>A devloper like no other</p>
        </div>
        </main>
      <div className={styles.aboutsec}>
        <div className={styles.abbba}>
          <div className={styles.acard}>
            <div className={styles.aimg}>
              <Image priority width='400' height='400' alt="me" src="/Me-hmpg.jpg" />
            </div>
            <div className={styles.ccc}>
              <span className={styles.sectitle}>About Me</span>
              <p className={styles.ainfo}>I'm James, a fairly new developer with a focus on Next.js and Node.js. My specialization lies in creating efficient and scalable web applications using these technologies. Leveraging my expertise in Next.js and Node.js, I can help you build fast and responsive websites that deliver an exceptional user experience.</p>
              <div className={styles.ashare}>
                <Link className={styles.sbutt} href="https://github.com/jfmow" target="_blank" id='github' aria-label='github'><svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>&nbsp;&nbsp;</Link>
                <Link className={styles.sbutt} href="https://instagram.com/jamesfmow" id='instagram' target="_blank" aria-label='instagram'>&nbsp;&nbsp;<svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>&nbsp;&nbsp;</Link>
              </div>
            </div>
          </div>
        </div>
        <TopProjects />
        <div className={styles.ccard_container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7926ff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,224C672,224,768,256,864,224C960,192,1056,96,1152,90.7C1248,85,1344,171,1392,213.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

          <span className={`${styles.sectitle} ${styles.ccard_title}`}>Some stats</span>
          <div className={styles.ccard}>
            <div className={`${styles.citem} ${styles.citem1}`}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(149,149,255,1)" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
              <span className={styles.cquantity}> 5+ </span>
              <span className={`${styles.ctext} ${styles.ctext1}`}> Languages learned </span>
            </div>
            <div className={`${styles.citem} ${styles.citem2}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0L24 0 24 24 0 24z"></path><path d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z" fill="rgba(252,161,71,1)"></path></svg>    <span className={styles.cquantity}> 50+ </span>
              <span className={`${styles.ctext} ${styles.ctext2}`}> Unfinished side projects </span>
            </div>
            <div className={`${styles.citem} ${styles.citem3}`}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg>
              <span className={styles.cquantity}> 3000+ </span>
              <span className={`${styles.ctext} ${styles.ctext3}`}> Hours spent writing code </span>
            </div>
            <div className={`${styles.citem} ${styles.citem4}`}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(220,91,183,1)" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
              <span className={styles.cquantity}> 10+ </span>
              <span className={`${styles.ctext} ${styles.ctext4}`}> Respect </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
