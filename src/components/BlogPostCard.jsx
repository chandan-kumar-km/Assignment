import React from 'react';
import { useMemo } from "react";
import styles from "./BlogPostCard.module.css";

const BlogPostCard = ({
  image,
  subheading,
  heading,
  supportingText,
  authorName,
  jan2024,
  propMinWidth,
  propBackgroundImage,
  propMinWidth1,
}) => {
  const headingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const avatarStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const authorNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.blogPostCard}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndSubheading}>
          <div className={styles.subheading}>{subheading}</div>
          <div className={styles.headingAndText}>
            <div className={styles.headingAndIcon}>
              <h3 className={styles.heading} style={headingStyle}>
                {heading}
              </h3>
              <div className={styles.iconWrap}>
                <img
                  className={styles.arrowUpRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowupright.svg"
                />
              </div>
            </div>
            <div className={styles.supportingText}>{supportingText}</div>
          </div>
        </div>
        <div className={styles.avatarLabelGroup}>
          <div className={styles.avatar} style={avatarStyle}>
            <div className={styles.avatarContrastInnerBorder} />
          </div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.authorName} style={authorNameStyle}>
              {authorName}
            </div>
            <div className={styles.jan2024}>{jan2024}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
