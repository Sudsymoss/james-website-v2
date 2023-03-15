"use client";
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import TimeLeft from './timeleft'
import Link from 'next/link';
import Image from 'next/image';
//import PocketBase from 'pocketbase';
//const pb = new PocketBase("http://192.168.86.178:8090")

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.maintop}>
          <h1>James M</h1>
          <div id="">
            <Link className={styles.button} href='/projects'>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Explore projects
            </Link>
          </div>
        </div>
        <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='white'><path d="M24 38 12 26l2.1-2.1 9.9 9.9 9.9-9.9L36 26Zm0-12.65-12-12 2.1-2.1 9.9 9.9 9.9-9.9 2.1 2.1Z"/></svg>
        </div>
      </main>
      <div className={styles.aboutsec}>
        <div className={styles.acard}>
          <div className={styles.aimg}>
            <Image width='77' height='77' alt="me" src="/Me-hmpg.jpg" />
          </div>
          <span>About Me</span>
          <p className={styles.ainfo}>I'm James, a fairly new developer with a focus on Next.js and Node.js. My specialization lies in creating efficient and scalable web applications using these technologies. Leveraging my expertise in Next.js and Node.js, I can help you build fast and responsive websites that deliver an exceptional user experience.</p>
          <div className={styles.ashare}>
            <Link className={styles.sbutt} class="sbutt" href="https://github.com/Sudsymoss" target="_blank" id='github' aria-label='github'><svg viewBox="0 0 16 16" class="bi bi-github" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>&nbsp;&nbsp;</Link>
            <Link className={styles.sbuttdis} title="Disabled" class="sbuttdis" href="/" id='twitter' aria-label='twitter'>&nbsp;&nbsp;<svg viewBox="0 0 16 16" class="bi bi-twitter" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>&nbsp;&nbsp;</Link>
            <Link className={styles.sbutt} class="sbutt" href="https://instagram.com/jamesfmow" id='instagram' target="_blank" aria-label='instagram'>&nbsp;&nbsp;<svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
            </svg>&nbsp;&nbsp;</Link>
          </div>
          <Link className={styles.acont} title='in site contact currently disabled' class="cont" href="mailto:contact@suddsy.dev" target="_blank">Contact</Link>
        </div>
        <div className={styles.ccard}>
          <div className={`${styles.citem} ${styles.citem1}`}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(149,149,255,1)" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
            <span className={styles.cquantity}> 5+ </span>
            <span className={`${styles.ctext} ${styles.ctext1}`}> Languages learned </span>
          </div>
          <div className={`${styles.citem} ${styles.citem2}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0L24 0 24 24 0 24z"></path><path d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z" fill="rgba(252,161,71,1)"></path></svg>    <span class="quantity"> 50+ </span>
            <span className={`${styles.ctext} ${styles.ctext2}`}> Unfinished side projects </span>
          </div>
          <div className={`${styles.citem} ${styles.citem3}`}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg>
            <span className={styles.cquantity}> 000+ </span>
            <span className={`${styles.ctext} ${styles.ctext3}`}> Hours spent writing code </span>
          </div>
          <div className={`${styles.citem} ${styles.citem4}`}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(220,91,183,1)" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
            <span className={styles.cquantity}> 10+ </span>
            <span className={`${styles.ctext} ${styles.ctext4}`}> Respect </span>
          </div>
        </div>
      </div>
      <div class="snow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
          <g fill="#FFF" fill-opacity=".15" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              <ellipse cx="6" cy="1009.5" rx="6" ry="5.5" />
              <ellipse cx="138" cy="1110.5" rx="6" ry="5.5" />
              <ellipse cx="398" cy="1055.5" rx="6" ry="5.5" />
              <ellipse cx="719" cy="1284.5" rx="6" ry="5.5" />
              <ellipse cx="760" cy="1155.5" rx="6" ry="5.5" />
              <ellipse cx="635" cy="1459.5" rx="6" ry="5.5" />
              <ellipse cx="478" cy="1335.5" rx="6" ry="5.5" />
              <ellipse cx="322" cy="1414.5" rx="6" ry="5.5" />
              <ellipse cx="247" cy="1234.5" rx="6" ry="5.5" />
              <ellipse cx="154" cy="1425.5" rx="6" ry="5.5" />
              <ellipse cx="731" cy="773.5" rx="6" ry="5.5" />
              <ellipse cx="599" cy="874.5" rx="6" ry="5.5" />
              <ellipse cx="339" cy="819.5" rx="6" ry="5.5" />
              <ellipse cx="239" cy="1004.5" rx="6" ry="5.5" />
              <ellipse cx="113" cy="863.5" rx="6" ry="5.5" />
              <ellipse cx="102" cy="1223.5" rx="6" ry="5.5" />
              <ellipse cx="395" cy="1155.5" rx="6" ry="5.5" />
              <ellipse cx="826" cy="943.5" rx="6" ry="5.5" />
              <ellipse cx="626" cy="1054.5" rx="6" ry="5.5" />
              <ellipse cx="887" cy="1366.5" rx="6" ry="5.5" />
              <ellipse cx="6" cy="241.5" rx="6" ry="5.5" />
              <ellipse cx="138" cy="342.5" rx="6" ry="5.5" />
              <ellipse cx="398" cy="287.5" rx="6" ry="5.5" />
              <ellipse cx="719" cy="516.5" rx="6" ry="5.5" />
              <ellipse cx="760" cy="387.5" rx="6" ry="5.5" />
              <ellipse cx="635" cy="691.5" rx="6" ry="5.5" />
              <ellipse cx="478" cy="567.5" rx="6" ry="5.5" />
              <ellipse cx="322" cy="646.5" rx="6" ry="5.5" />
              <ellipse cx="247" cy="466.5" rx="6" ry="5.5" />
              <ellipse cx="154" cy="657.5" rx="6" ry="5.5" />
              <ellipse cx="731" cy="5.5" rx="6" ry="5.5" />
              <ellipse cx="599" cy="106.5" rx="6" ry="5.5" />
              <ellipse cx="339" cy="51.5" rx="6" ry="5.5" />
              <ellipse cx="239" cy="236.5" rx="6" ry="5.5" />
              <ellipse cx="113" cy="95.5" rx="6" ry="5.5" />
              <ellipse cx="102" cy="455.5" rx="6" ry="5.5" />
              <ellipse cx="395" cy="387.5" rx="6" ry="5.5" />
              <ellipse cx="826" cy="175.5" rx="6" ry="5.5" />
              <ellipse cx="626" cy="286.5" rx="6" ry="5.5" />
              <ellipse cx="887" cy="598.5" rx="6" ry="5.5" />
            </g>
          </g>
          <g fill="#FFF" fill-opacity=".3" transform="translate(65 63)">
            <g id="snow-top-layer">
              <circle cx="8" cy="776" r="8" />
              <circle cx="189" cy="925" r="8" />
              <circle cx="548" cy="844" r="8" />
              <circle cx="685" cy="1115" r="8" />
              <circle cx="858" cy="909" r="8" />
              <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)" />
              <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)" />
              <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)" />
              <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)" />
              <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)" />
              <circle cx="8" cy="8" r="8" />
              <circle cx="189" cy="157" r="8" />
              <circle cx="548" cy="76" r="8" />
              <circle cx="685" cy="347" r="8" />
              <circle cx="858" cy="141" r="8" />
              <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)" />
              <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)" />
              <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)" />
              <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)" />
              <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
