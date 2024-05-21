import FeatureText from "./FeatureText";
import styles from "./Container6.module.css";

const Container6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.screenMockup}>
            <div className={styles.mockupShadow} />
            <img
              className={styles.screenMockupReplaceFill}
              alt=""
              src="/screen-mockup-replace-fill-1@2x.png"
            />
          </div>
          <div className={styles.iphone12ProMockup}>
            <div className={styles.mockupWrap}>
              <div className={styles.iphoneMockupStatusBarWrapper}>
                <div className={styles.iphoneMockupStatusBar}>
                  <img
                    className={styles.dateIcon}
                    loading="lazy"
                    alt=""
                    src="/date.svg"
                  />
                  <img
                    className={styles.rightIcon}
                    loading="lazy"
                    alt=""
                    src="/right@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.screenMockupReplaceFill1}
                alt=""
                src="/screen-mockup-replace-fill-2@2x.png"
              />
              <div className={styles.iphoneMockupHome}>
                <div className={styles.home} />
              </div>
            </div>
            <img
              className={styles.iphoneMockupIcon}
              alt=""
              src="/iphone-mockup.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <FeatureText
          featuredIcon="/featured-icon.svg"
          featureLabel="Share team inboxes"
          supportingText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          button
          propMinWidth="unset"
          propWidth="unset"
          propHeight="unset"
          propFlex="unset"
          propMinWidth1="88px"
        />
        <FeatureText
          featuredIcon="/featured-icon-1.svg"
          featureLabel="Deliver instant answers"
          supportingText="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          button
          propMinWidth="unset"
          propWidth="unset"
          propHeight="unset"
          propFlex="unset"
          propMinWidth1="88px"
        />
        <FeatureText
          featuredIcon="/featured-icon-2.svg"
          featureLabel="Manage your team with reports"
          supportingText="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          button
          propMinWidth="unset"
          propWidth="unset"
          propHeight="unset"
          propFlex="unset"
          propMinWidth1="88px"
        />
      </div>
    </div>
  );
};

export default Container6;
