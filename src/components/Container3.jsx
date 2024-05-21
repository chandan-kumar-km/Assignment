import styles from "./Container3.module.css";

const Container3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.headingAndSubheading}>
            <div className={styles.subheading}>Our blog</div>
            <h1 className={styles.heading}>Lastest blog posts</h1>
          </div>
          <div className={styles.supportingText}>
            Tool and strategies modern teams need to help their companies grow.
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button}>
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/placeholder4.svg"
            />
            <div className={styles.blogButtonLabel}>View all posts</div>
            <img
              className={styles.placeholderIcon1}
              alt=""
              src="/placeholder4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
