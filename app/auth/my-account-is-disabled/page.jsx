import styles from './Disabled.module.css'

export default function myAccount() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Account disabled</h1>
            </div>
            <div className={styles.body}>
                <ul>
                    <h3>Theirs a few reasons why your account maybe disabled.</h3>
                    <li>It could be an error, so maybe try again...</li>
                    <li>You may be abusing this website</li>
                    <li>You've just done something that's aganist the law</li>
                    <li>OR you haven't verfied your email within 3 days!</li>
                </ul>
            </div>
        </div>
    )
}