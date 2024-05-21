import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <div className={styles.logoWrap}>
            <div className={styles.logomark}>
              <img className={styles.contentIcon} alt="" src="/content.svg" />
            </div>
            <img className={styles.logotypeIcon} alt="" src="/logotype.svg" />
          </div>
        </div>
        <div className={styles.footerTextWrapper}>
          <div className={styles.footerText}>
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
