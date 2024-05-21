import styles from "./Container5.module.css";

const Container5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.faqItem}>
          <div className={styles.content1}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.answer}>
                Is there a free trial available?
              </div>
              <div className={styles.supportingText}>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </div>
            </div>
            <div className={styles.iconWrap}>
              <img
                className={styles.minusCircleIcon}
                loading="lazy"
                alt=""
                src="/minuscircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.faqItem1}>
          <div className={styles.content2}>
            <div className={styles.textAndSupportingText1}>
              <div className={styles.questions}>
                Can I change my plan later?
              </div>
            </div>
            <div className={styles.iconWrap1}>
              <img
                className={styles.plusCircleIcon}
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.faqItem2}>
          <div className={styles.content3}>
            <input
              className={styles.textAndSupportingText2}
              placeholder="What is your cancellation policy?"
              type="text"
            />
            <div className={styles.iconWrap2}>
              <img
                className={styles.plusCircleIcon1}
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.faqItem3}>
          <div className={styles.content4}>
            <div className={styles.textAndSupportingText3}>
              <div className={styles.text}>
                Can other info be added to an invoice?
              </div>
            </div>
            <div className={styles.iconWrap3}>
              <img
                className={styles.plusCircleIcon2}
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.faqItem4}>
          <div className={styles.content5}>
            <div className={styles.textAndSupportingText4}>
              <div className={styles.text1}>How does billing work?</div>
            </div>
            <div className={styles.iconWrap4}>
              <img
                className={styles.plusCircleIcon3}
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.faqItem5}>
          <div className={styles.content6}>
            <div className={styles.textAndSupportingText5}>
              <div className={styles.text2}>
                How do I change my account email?
              </div>
            </div>
            <div className={styles.iconWrap5}>
              <img
                className={styles.plusCircleIcon4}
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container5;
