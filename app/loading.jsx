import style from './Load.module.css'
export default function Loading() {
    return (
        <div className={style.loadermain}>
            <div className={style.spinner}>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
        </div>
    )
}