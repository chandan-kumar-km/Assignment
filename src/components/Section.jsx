import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <div className={styles.headingAndBadge}>
              <div className={styles.badgeGroup}>
                <div className={styles.badge}>
                  <div className={styles.badgeLabel}>New feature</div>
                </div>
                <div className={styles.content1}>
                  <div className={styles.message}>
                    Check out the team dashboard
                  </div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
              <h1 className={styles.heading}>
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <div className={styles.supportingText}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>
              <img
                className={styles.playCircleIcon}
                alt=""
                src="/playcircle.svg"
              />
              <div className={styles.buttonLabel}>Demo</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder1.svg"
              />
            </button>
            <button className={styles.button1}>
              <img
                className={styles.placeholderIcon1}
                alt=""
                src="/placeholder2.svg"
              />
              <div className={styles.text}>Sign up</div>
              <img
                className={styles.placeholderIcon2}
                alt=""
                src="/placeholder2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.content2}>
          <div className={styles.screenMockup}>
            <div className={styles.mockupShadow} />
            <img
              className={styles.screenMockupReplaceFill}
              alt=""
              src="/screen-mockup-replace-fill@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
