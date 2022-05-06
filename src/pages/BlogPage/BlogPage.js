import React from "react";

// styles
import "./style.scss"
// pages
import SectionIntro from "../../components/SectionIntro/SectionIntro";
import BlogCard from "../../components/BlogCard/BlogCard";
import Newsletter from "../../components/NewLetter/Newsletter";
import ContactHero from "../../components/contactHeroposter/ContactHero";

const BlogPage = () => {
  return (
    <>
      <div className="blog-page">
        <div className="blog_intro_section">
          <SectionIntro
            title="Blogs" intro_para="Agency provides a full service range including technical skills, design, business understanding."
          />
        </div>
        <div className="blogs">
          <div className="big-blog-list container">
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Digital marketing channels" blogDate="7 Dec, 2021" />
          </div>
          <div className="full-blog-list container">
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
            <BlogCard blogImg={require("../../assets/imags/1.webp")}
              blogTitle="Stories" blogDescription="Performance marketing agencies specialize" blogDate="7 Dec, 2021" />
          </div>
        </div>

        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
