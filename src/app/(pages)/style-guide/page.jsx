import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PrimaryButton from "../../_components/elements/PrimaryButton";

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
                <h2 class="mil-up">Hello World!</h2>
                <h3 class="mil-up">Hello World!</h3>
                <h4 class="mil-up">Hello World!</h4>
                <h5 class="mil-up">Hello World!</h5>
                <h6 class="mil-up">Hello World!</h6>
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
                <h6><span class="mil marker">Lists</span></h6>
              </div>
              <div>
                <ul>
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                </ul>
                <ol>
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                </ol>
              </div>
              <div>
                <blockquote>Tetsing blockquote</blockquote>
              </div>
            </div>
            <div className="content_wrapper large">
              <h2><span class="mil marker">Spacing</span></h2>
              <div>
                <p>XXS</p>
                <div class="spacer xxs_height"></div>
              </div>
              <div>
                <p>XS</p>
                <div class="spacer xs_height"></div>
              </div>
              <div>
                <p>Small</p>
                <div class="spacer small_height"></div>
              </div>
              <div>
                <p>Medium</p>
                <div class="spacer medium_height"></div>
              </div>
              <div>
                <p>Large</p>
                <div class="spacer large_height"></div>
              </div>
              <div>
                <p>XL</p>
                <div class="spacer xl_height"></div>
              </div>
              <div>
                <p>XXL</p>
                <div class="spacer xxl_height"></div>
              </div>
              <div>
                <p>Jumbo</p>
                <div class="spacer jumbo_height"></div>
              </div>
            </div>
{/* Buttons start */}
            <div className="content_wrapper large">
              <h2><span class="mil marker">Buttons</span></h2>
              <div className="button_wrapper">
                <button className="large_button">Primary Button</button>
                <button>Primary Button</button>
                <button className="small_button">Primary Button</button>
              </div>
              <div className="button_wrapper">
                <button className="secondary_button large_button">Secondary Button</button>
                <button className="secondary_button">Seconday Button</button>
                <button className="secondary_button small_button">Secondary Button</button>
              </div>
            </div>
            <div className="content_wrapper large">
              <h6>Primary CTA Button</h6>
              <PrimaryButton />
            </div>
{/* Buttons end */}
{/* images start */}
            <div className="content_wrapper large">
              <div className="three_col_grid">
                <img src="/img/photo/4.jpg" alt="image" />
                <div>
                  <div className="subtitle_small">Default Image</div>
                  <p>
                    width: 100%;
                    <br />
                    Height: auto;
                  </p>
                </div>
              </div>
              <div className="three_col_grid">
                <img src="/img/photo/4.jpg" className="image_full" alt="image" />
                <div>
                  <div className="subtitle_small">Image Full</div>
                  <p>
                    width: 100%;
                    <br />
                    Height: 100%;
                  </p>
                </div>
              </div>
            </div>
{/* images end */}
        </div>
        <CallToActionSection />
      </>
    );
  };
  export default Styleguide;