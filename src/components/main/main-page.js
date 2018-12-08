import React, { Component } from "react"

import MainSection from "./sections/header/main-section"
import ProjectSection from "./sections/project/project-section"
import BlogSection from "./sections/blog/blog-section"
import FooterSection from "./sections/footer/footer-section"

class MainPage extends Component {
    render() {
        return (
            <div>
                <MainSection />
                <ProjectSection />
                <BlogSection />
                <FooterSection />
            </div>
        )
    }
}

export default MainPage