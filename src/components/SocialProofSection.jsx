import styles from "./SocialProofSection.module.css";

const SocialProofSection = () => {
  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        <div className={styles.proofCopy}>
          Join 4,000+ companies already growing
        </div>
        <div className={styles.logos}>
          <div className={styles.fictionalCompanyLogo}>
            <img className={styles.logomarkIcon} alt="" src="/logomark.svg" />
            <div className={styles.logotypeWrapper}>
              <img
                className={styles.logotypeIcon}
                alt=""
                src="/logotype-1.svg"
              />
            </div>
          </div>
          <div className={styles.fictionalCompanyLogo1}>
            <img
              className={styles.logomarkIcon1}
              alt=""
              src="/logomark-1.svg"
            />
            <button className={styles.logotypeContainer}>
              <img
                className={styles.logotypeIcon1}
                alt=""
                src="/logotype-2.svg"
              />
            </button>
          </div>
          <div className={styles.fictionalCompanyLogo2}>
            <img
              className={styles.logomarkIcon2}
              alt=""
              src="/logomark-2.svg"
            />
            <div className={styles.logotypeFrame}>
              <img
                className={styles.logotypeIcon2}
                alt=""
                src="/logotype-3.svg"
              />
            </div>
          </div>
          <div className={styles.fictionalCompanyLogo3}>
            <img
              className={styles.logomarkIcon3}
              alt=""
              src="/logomark-3.svg"
            />
            <button className={styles.frameButton}>
              <img
                className={styles.logotypeIcon3}
                alt=""
                src="/logotype-4.svg"
              />
            </button>
          </div>
          <div className={styles.fictionalCompanyLogo4}>
            <img
              className={styles.logomarkIcon4}
              alt=""
              src="/logomark-4.svg"
            />
            <div className={styles.frameDiv}>
              <img
                className={styles.logotypeIcon4}
                alt=""
                src="/logotype-5.svg"
              />
            </div>
          </div>
          <div className={styles.fictionalCompanyLogo5}>
            <img
              className={styles.logomarkIcon5}
              alt=""
              src="/logomark-5.svg"
            />
            <div className={styles.logotypeWrapper1}>
              <img
                className={styles.logotypeIcon5}
                alt=""
                src="/logotype-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
