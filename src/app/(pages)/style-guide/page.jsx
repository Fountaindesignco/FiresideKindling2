import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

export const metadata = {
    title: {
          default: "Style Guide",
      },
    description: AppData.settings.siteDescription,
  }

  const Styleguide = () => {
    return (
      <>
        <PageBanner pageTitle={"Style Guide"} breadTitle={"Style Guide"} bgImage={"/img/photo/12.jpg"} />
        <div className="main_section page_content">
            <div className="content_wrapper large">
              <h2><span class="mil marker">Typography</span></h2>
              <div>
                <h6><span class="mil marker">Headings</span></h6>
                <h1 class="mil-up">Hello World!</h1>
                <h2 class="mil-up">Hello World</h2>
                <h3 class="mil-up">Hello World</h3>
                <h4 class="mil-up">Hello World</h4>
                <h5 class="mil-up">Hello World</h5>
                <h6 class="mil-up">Hello World</h6>
              </div>
              <div>
                <h6><span class="mil marker">Sub Headings</span></h6>
                <div class="subtitle_large mil-up">Subtitle Large</div>
                <div class="subtitle_medium mil-up">Subtitle Medium</div>
                <div class="subtitle_small mil-up">Subtitle Small</div>
              </div>
              <div>
                <h6><span class="mil marker">Body Copy</span></h6>
                <p className="body_copy_xs mil-up">Hello World</p>
                <p className="body_copy_medium mil-up">Hello World</p>
                <p className="body_copy_large mil-up">Hello World</p>
                <p className="body_copy_xl mil-up">Hello World</p>
                <a href="#">Text Link</a>
              </div>
            </div>
            <div className="content_wrapper large">
              <h2><span class="mil marker">Spacing</span></h2>
            </div>
            <div className="content_wrapper large">
              <h2><span class="mil marker">Buttons</span></h2>
              <div><a className="button">Primary Button</a></div>
            </div>
        </div>
        <CallToActionSection />
      </>
    );
  };
  export default Styleguide;