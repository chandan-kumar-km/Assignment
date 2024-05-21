import styles from "./TestimonialSection.module.css";

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.quoteAndAttribution}>
            <div className={styles.fictionalCompanyLogoWrapper}>
              <div className={styles.fictionalCompanyLogo}>
                <img
                  className={styles.logomarkIcon}
                  alt=""
                  src="/logomark-6.svg"
                />
                <button className={styles.logotypeWrapper}>
                  <img
                    className={styles.logotypeIcon}
                    alt=""
                    src="/logotype-7.svg"
                  />
                </button>
              </div>
            </div>
            <h1 className={styles.quote}>
              We’ve been using Untitled to kick start every new project and
              can’t imagine working without it.
            </h1>
            <div className={styles.avatarAndText}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  <div className={styles.avatarContrastInnerBorder} />
                </div>
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.nameLabel}>Candice Wu</div>
                <div className={styles.supportingText}>
                  Product Manager, Sisyphus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
