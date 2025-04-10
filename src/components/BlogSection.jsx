import React from "react";


const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="overlay"></div> {/* Dark Overlay */}
      <div className="container text-center content">
        <h2 className="blog-title">
          Our <span className="highlight">Blogs</span>
        </h2>
        <p className="blog-details">→ Blog Details</p>
      </div>
    </section>
  );
};

export default BlogSection;
