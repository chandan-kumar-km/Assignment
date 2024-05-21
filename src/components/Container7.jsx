import styles from "./Container7.module.css";

const Container7 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.headingAndBadge}>
            <button className={styles.badge}>
              <div className={styles.badgeLabel}>Features</div>
            </button>
            <h1 className={styles.heading}>
              Cutting-edge features for advanced analytics
            </h1>
          </div>
          <div className={styles.supportingText}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container7;
