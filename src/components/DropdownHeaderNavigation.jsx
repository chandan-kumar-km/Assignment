import styles from "./DropdownHeaderNavigation.module.css";

const DropdownHeaderNavigation = () => {
  return (
    <header className={styles.dropdownHeaderNavigation}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <div className={styles.logoWrap}>
                  <div className={styles.logomark}>
                    <img
                      className={styles.contentIcon}
                      alt=""
                      src="/content.svg"
                    />
                  </div>
                  <img
                    className={styles.logotypeIcon}
                    loading="lazy"
                    alt=""
                    src="/logotype.svg"
                  />
                </div>
              </div>
              <div className={styles.navigation}>
                <div className={styles.button}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text}>Home</div>
                  <img
                    className={styles.placeholderIcon1}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className={styles.dropdownHeaderNavigationTri}>
                  <div className={styles.button1}>
                    <img
                      className={styles.placeholderIcon2}
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className={styles.label}>Products</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className={styles.dropdownHeaderNavigationTri1}>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon3}
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className={styles.text1}>Resources</div>
                    <img
                      className={styles.chevronDownIcon1}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className={styles.button3}>
                  <img
                    className={styles.placeholderIcon4}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text2}>Pricing</div>
                  <img
                    className={styles.placeholderIcon5}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navigationActions}>
            <div className={styles.dropdown}>
              <div className={styles.avatar}>
                <div className={styles.avatarContrastInnerBorder} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DropdownHeaderNavigation;
