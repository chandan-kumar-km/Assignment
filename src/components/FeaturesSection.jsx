import FeatureText from "./FeatureText";
import styles from "./FeaturesSection.module.css";

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <div className={styles.headingAndSubheading}>
              <div className={styles.subheading}>Features</div>
              <h1 className={styles.heading}>
                Analytics that feels like it’s from the future
              </h1>
            </div>
            <div className={styles.supportingText}>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.content1}>
          <FeatureText
            featuredIcon="/featured-icon.svg"
            featureLabel="Share team inboxes"
            supportingText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            button={false}
          />
          <FeatureText
            featuredIcon="/featured-icon-1.svg"
            featureLabel="Deliver instant answers"
            supportingText="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            button={false}
            propMinWidth="288px"
            propWidth="116px"
            propHeight="24px"
            propFlex="1"
            propMinWidth1="unset"
          />
          <FeatureText
            featuredIcon="/featured-icon-2.svg"
            featureLabel="Manage your team with reports"
            supportingText="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
            button={false}
            propMinWidth="288px"
            propWidth="116px"
            propHeight="24px"
            propFlex="1"
            propMinWidth1="unset"
          />
        </div>
        <div className={styles.content2}>
          <FeatureText
            featuredIcon="/featured-icon-3.svg"
            featureLabel="Connect with customers"
            supportingText="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
            button={false}
            propMinWidth="288px"
            propWidth="116px"
            propHeight="24px"
            propFlex="1"
            propMinWidth1="unset"
          />
          <FeatureText
            featuredIcon="/featured-icon-4.svg"
            featureLabel="Connect the tools you already use"
            supportingText="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
            button={false}
            propMinWidth="288px"
            propWidth="116px"
            propHeight="24px"
            propFlex="1"
            propMinWidth1="unset"
          />
          <FeatureText
            featuredIcon="/featured-icon-5.svg"
            featureLabel="Our people make the difference"
            supportingText="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
            button={false}
            propMinWidth="288px"
            propWidth="116px"
            propHeight="24px"
            propFlex="1"
            propMinWidth1="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
