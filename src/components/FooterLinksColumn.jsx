import { useMemo } from "react";
import styles from "./FooterLinksColumn.module.css";

const FooterLinksColumn = ({
  heading,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propMinWidth5,
}) => {
  const text1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text2Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const text3Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const text4Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const text5Style = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const text6Style = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  return (
    <div className={styles.footerLinksColumn}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.footerLinks}>
        <div className={styles.footerLink}>
          <div className={styles.button}>
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text} style={text1Style}>
              {text}
            </div>
            <img
              className={styles.placeholderIcon1}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink1}>
          <div className={styles.button1}>
            <img
              className={styles.placeholderIcon2}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text1} style={text2Style}>
              {text1}
            </div>
            <img
              className={styles.placeholderIcon3}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink2}>
          <div className={styles.button2}>
            <img
              className={styles.placeholderIcon4}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text2} style={text3Style}>
              {text2}
            </div>
            <img
              className={styles.placeholderIcon5}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink3}>
          <div className={styles.button3}>
            <img
              className={styles.placeholderIcon6}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text3} style={text4Style}>
              {text3}
            </div>
            <img
              className={styles.placeholderIcon7}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink4}>
          <div className={styles.button4}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text4} style={text5Style}>
              {text4}
            </div>
            <img
              className={styles.placeholderIcon9}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink5}>
          <div className={styles.button5}>
            <img
              className={styles.placeholderIcon10}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text5} style={text6Style}>
              {text5}
            </div>
            <img
              className={styles.placeholderIcon11}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink6}>
          <div className={styles.button6}>
            <img
              className={styles.placeholderIcon12}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text6}>Overview</div>
            <img
              className={styles.placeholderIcon13}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
        <div className={styles.footerLink7}>
          <div className={styles.button7}>
            <img
              className={styles.placeholderIcon14}
              alt=""
              src="/placeholder.svg"
            />
            <div className={styles.text7}>Overview</div>
            <img
              className={styles.placeholderIcon15}
              alt=""
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinksColumn;
