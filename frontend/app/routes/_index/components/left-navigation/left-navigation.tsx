import { Form, Link } from "react-router";
import styles from "./left-navigation.module.css";

export type LefNavigationProps = {
}


export function LeftNavigation(props: LefNavigationProps) {
    return (
        <div className={styles.container}>
            <Link className={styles.item} to={"/queue"}>
                <div className={styles["queue-icon"]} />
                <div className={styles.title}>Queue & History</div>
            </Link>
            <Link className={styles.item} to={"/explore"}>
                <div className={styles["explore-icon"]} />
                <div className={styles.title}>Dav Explore</div>
            </Link>
            <Link className={styles.item} to={"/settings"}>
                <div className={styles["settings-icon"]} />
                <div className={styles.title}>Settings</div>
            </Link>

            <div className={styles.footer}>
                <div className={styles["footer-item"]}>
                    <div>github</div>
                    <div className={styles["github-icon"]} />
                </div>
                <div className={styles["footer-item"]}>
                    changelog
                </div>
                <div className={styles["footer-item"]}>
                    version: 0.2.0
                </div>
                <hr />
                <Form method="post" action="/logout">
                    <input name="confirm" value="true" type="hidden" />
                    <button className={styles.unstyled + ' ' + styles.item} type="submit">
                        <div className={styles["logout-icon"]} />
                        <div className={styles.title}>Logout</div>
                    </button>
                </Form>
            </div>
        </div>
    );
}