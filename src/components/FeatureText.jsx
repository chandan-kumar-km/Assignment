import { useMemo } from "react";
import styles from "./FeatureText.module.css";

const FeatureText = ({
  featuredIcon,
  featureLabel,
  supportingText,
  button,
  propMinWidth,
  propWidth,
  propHeight,
  propFlex,
  propMinWidth1,
}) => {
  const featureTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const buttonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth1,
    };
  }, [propHeight, propFlex, propMinWidth1]);

  return (
    <div className={styles.featureText} style={featureTextStyle}>
      <img
        className={styles.featuredIcon}
        loading="lazy"
        alt=""
        src={featuredIcon}
      />
      <div className={styles.textAndSupportingText}>
        <div className={styles.featureLabel}>{featureLabel}</div>
        <div className={styles.supportingText}>{supportingText}</div>
      </div>
      {!button && (
        <div className={styles.button} style={buttonStyle}>
          <img
            className={styles.placeholderIcon}
            alt=""
            src="/placeholder3.svg"
          />
          <div className={styles.text} style={textStyle}>
            Learn more
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-1.svg"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureText;
