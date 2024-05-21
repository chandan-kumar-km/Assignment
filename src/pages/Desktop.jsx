import DropdownHeaderNavigation from "../components/DropdownHeaderNavigation";
import Section from "../components/Section";
import SocialProofSection from "../components/SocialProofSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import Container7 from "../components/Container7";
import Container6 from "../components/Container6";
import Container5 from "../components/Container5";
import Container4 from "../components/Container4";
import Container3 from "../components/Container3";
import Container2 from "../components/Container2";
import CTASection from "../components/CTASection";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <section className={styles.heroHeaderSection}>
        <DropdownHeaderNavigation />
        <Section />
      </section>
      <div className={styles.sectionDivider}>
        <div className={styles.container}>
          <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        </div>
      </div>
      <SocialProofSection />
      <div className={styles.sectionDivider1}>
        <div className={styles.container1}>
          <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
        </div>
      </div>
      <FeaturesSection />
      <TestimonialSection />
      <section className={styles.featuresSection}>
        <Container7 />
        <Container6 />
      </section>
      <div className={styles.sectionDivider2}>
        <div className={styles.container2}>
          <img className={styles.dividerIcon2} alt="" src="/divider.svg" />
        </div>
      </div>
      <section className={styles.faqSection}>
        <div className={styles.container3}>
          <div className={styles.content}>
            <div className={styles.headingAndSupportingText}>
              <h1 className={styles.heading}>Frequently asked questions</h1>
              <div className={styles.supportingText}>
                Everything you need to know about the product and billing.
              </div>
            </div>
          </div>
        </div>
        <Container5 />
        <Container4 />
      </section>
      <div className={styles.sectionDivider3}>
        <div className={styles.container4}>
          <img className={styles.dividerIcon3} alt="" src="/divider.svg" />
        </div>
      </div>
      <section className={styles.blogSection}>
        <Container3 />
        <Container2 />
      </section>
      <CTASection />
      <footer className={styles.footer}>
        <Container1 />
        <Container />
      </footer>
    </div>
  );
};

export default Desktop;
