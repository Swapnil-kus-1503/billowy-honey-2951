import React from "react";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <img src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" alt="" />
      <div class="unit-block full passes">
        <div class="unit-content mc-dc">
          <h2 class="unit-title">
            Introducing<br/>
            <span class="fbplus">
              <span class="fb">FB</span>
              <span class="plus">Plus</span>
            </span>
            Passes
          </h2>
          <p class="unit-body">Passes give you full access to everything FB Plus
            has to offer, without a long-term subscription. Choose a pass that
            fits your budget and your schedule.</p>
          <div class="unit-cta">
            <a class="btn -dark" href="https://www.fitnessblender.com/store#store-passes">Buy a Pass</a>
          </div>
        </div>
        <div class="unit-content wide mc-dc">
          <picture class="unit-image">
          <source type="image/webp" data-srcset="
                      https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.webp 1440w,
            https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp 720w
          " sizes="(max-width: 940px) 100vw, 50vw" srcset="
                      https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.webp 1440w,
            https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp 720w
          ">
      
          <source type="image/png" data-srcset="
                      https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.png 1440w,
            https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.png 720w
          " sizes="(max-width: 940px) 100vw, 50vw" srcset="
                      https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.png 1440w,
            https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.png 720w
          ">
        <img class="lazyfade ls-is-cached lazyloaded" data-src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.png" alt="FB Plus passes" width="720" height="250" src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.png">
  </picture>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
