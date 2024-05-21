import styles from "./Container4.module.css";

const Container4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatarGroupWrapper}>
          <div className={styles.avatarGroup}>
            <div className={styles.avatar}>
              <div className={styles.avatarContrastInnerBorder} />
            </div>
            <div className={styles.avatar1}>
              <div className={styles.avatarContrastInnerBorder1} />
            </div>
            <div className={styles.avatar2}>
              <div className={styles.avatarContrastInnerBorder2} />
            </div>
          </div>
        </div>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.heading}>Still have questions?</div>
          <div className={styles.supportingText}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
        </div>
        <div className={styles.expertActions}>
          <button className={styles.actions}>
            <div className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder4.svg"
              />
              <div className={styles.expertButtonLabel}>Get in touch</div>
              <img
                className={styles.placeholderIcon1}
                alt=""
                src="/placeholder4.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container4;
