import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <h1 className={styles.heading}>Start your free trial</h1>
            <div className={styles.supportingText}>
              Join over 4,000+ startups already growing with Untitled.
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder5.svg"
              />
              <div className={styles.callToAction}>Learn more</div>
              <img
                className={styles.placeholderIcon1}
                alt=""
                src="/placeholder5.svg"
              />
            </button>
            <button className={styles.button1}>
              <img
                className={styles.placeholderIcon2}
                alt=""
                src="/placeholder4.svg"
              />
              <div className={styles.text}>Get started</div>
              <img
                className={styles.placeholderIcon3}
                alt=""
                src="/placeholder4.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
