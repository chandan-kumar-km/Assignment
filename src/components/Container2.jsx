import BlogPostCard from "./BlogPostCard";
import styles from "./Container2.module.css";

const Container2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BlogPostCard
          image="/image@2x.png"
          subheading="Design"
          heading="UX review presentations"
          supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
          authorName="Olivia Rhye"
          jan2024="20 Jan 2024"
        />
        <BlogPostCard
          image="/image-1@2x.png"
          subheading="Product"
          heading="Migrating to Linear 101"
          supportingText="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
          authorName="Phoenix Baker"
          jan2024="19 Jan 2024"
          propMinWidth="207px"
          propBackgroundImage="url('/avatar6@3x.png')"
          propMinWidth1="97px"
        />
        <BlogPostCard
          image="/image-2@2x.png"
          subheading="Software Engineering"
          heading="Building your API stack"
          supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
          authorName="Lana Steiner"
          jan2024="18 Jan 2024"
          propMinWidth="212px"
          propBackgroundImage="url('/avatar7@3x.png')"
          propMinWidth1="85px"
        />
      </div>
    </div>
  );
};

export default Container2;
