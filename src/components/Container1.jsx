import FooterLinksColumn from "./FooterLinksColumn";
import styles from "./Container1.module.css";

const Container1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footerLinksColumn}>
          <div className={styles.heading}>Product</div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLink}>
              <div className={styles.button}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text}>Overview</div>
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
                <div className={styles.text1}>Features</div>
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
                <div className={styles.text2}>Solutions</div>
                <img
                  className={styles.placeholderIcon5}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.badge}>
                <div className={styles.text3}>New</div>
              </div>
            </div>
            <div className={styles.footerLink3}>
              <div className={styles.button3}>
                <img
                  className={styles.placeholderIcon6}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.text4}>Tutorials</div>
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
                <div className={styles.text5}>Pricing</div>
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
                <div className={styles.text6}>Releases</div>
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
                <div className={styles.text7}>Overview</div>
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
                <div className={styles.text8}>Overview</div>
                <img
                  className={styles.placeholderIcon15}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <FooterLinksColumn
          heading="Company"
          text="About us"
          text1="Careers"
          text2="Press"
          text3="News"
          text4="Media kit"
          text5="Contact"
        />
        <FooterLinksColumn
          heading="Resources"
          text="Blog"
          text1="Newsletter"
          text2="Events"
          text3="Help centre"
          text4="Tutorials"
          text5="Support"
          propMinWidth="35px"
          propMinWidth1="86px"
          propMinWidth2="53px"
          propMinWidth3="90px"
          propMinWidth4="68px"
          propMinWidth5="63px"
        />
        <FooterLinksColumn
          heading="Use cases"
          text="Startups"
          text1="Enterprise"
          text2="Government"
          text3="SaaS centre"
          text4="Marketplaces"
          text5="Ecommerce"
          propMinWidth="68px"
          propMinWidth1="81px"
          propMinWidth2="96px"
          propMinWidth3="94px"
          propMinWidth4="106px"
          propMinWidth5="92px"
        />
        <FooterLinksColumn
          heading="Social"
          text="Twitter"
          text1="LinkedIn"
          text2="Facebook"
          text3="GitHub"
          text4="AngelList"
          text5="Dribbble"
          propMinWidth="56px"
          propMinWidth1="66px"
          propMinWidth2="76px"
          propMinWidth3="55px"
          propMinWidth4="74px"
          propMinWidth5="67px"
        />
        <FooterLinksColumn
          heading="Legal"
          text="Terms"
          text1="Privacy"
          text2="Cookies"
          text3="Licenses"
          text4="Settings"
          text5="Contact"
          propMinWidth="49px"
          propMinWidth1="58px"
          propMinWidth2="63px"
          propMinWidth3="69px"
          propMinWidth4="65px"
          propMinWidth5="62px"
        />
      </div>
    </div>
  );
};

export default Container1;
