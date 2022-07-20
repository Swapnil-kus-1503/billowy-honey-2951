import React from "react";

const Footer = () => {
  return (
    <footer id="footer" class="site__footer" role="contentinfo">
      <div class="container">
        <h2 class="brand -dark">
          <a href="/">Fitness Blender</a>
          <p>
            WORKOUT COMPLETE<sup>™</sup>
          </p>
        </h2>

        <nav class="footer__nav alt-nav">
          <ul>
            <li>
              <a class="demi" href="/workouts">
                Workouts
              </a>
            </li>
            <li>
              <a href="/videos">Workout Videos</a>
            </li>
            <li>
              <a href="/page/custom-workouts">Custom Workouts</a>
            </li>
            <li>
              <a class="demi" href="/programs-challenges">
                Programs
              </a>
            </li>
            <li>
              <a href="/plans">Workout Programs</a>
            </li>
            <li>
              <a href="/meal-plans">Meal Plans</a>
            </li>
            <li>
              <a href="/pilot-programs">Pilot Programs</a>
            </li>
            <li>
              <a href="/page/routines">Routines</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="demi" href="/healthy-living">
                Healthy Living
              </a>
            </li>
            <li>
              <a href="/articles?category%5B%5D=1">Fitness</a>
            </li>
            <li>
              <a href="/articles?category%5B%5D=3">Health</a>
            </li>
            <li>
              <a href="/articles?category%5B%5D=9">Nutrition</a>
            </li>
            <li>
              <a href="/healthy-living/healthy-recipes">Healthy Recipes</a>
            </li>
            <li>
              <a href="/articles?category%5B%5D=10">Experts</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="demi" href="/page/about-fitness-blender">
                About
              </a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/tutorials">Tutorials</a>
            </li>
            <li>
              <a href="/team-members">Our Team</a>
            </li>
            <li>
              <a href="/page/fb-plus-group">B2B Options</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="demi" href="/membership">
                Membership
              </a>
            </li>
            <li>
              <a class="demi" href="/fb-plus">
                FB Plus
              </a>
            </li>
            <li>
              <a class="demi" href="/community">
                Community
              </a>
            </li>
            <li>
              <a class="demi" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a class="demi" href="/page/contact-us">
                Contact Us
              </a>
            </li>
            <li>
              <a class="demi" href="/page/faq">
                FAQ
              </a>
            </li>
            <li>
              <a class="demi" href="/store">
                Store{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container">
        <div class="end">
          <p>
            Copyright © 2022 Fitness Blender. All rights reserved.{" "}
            <a href="/page/terms-of-use-agreement">Terms of Use</a>{" "}
            <a href="/page/privacy-policy">Privacy Policy</a>
          </p>
          <ul class="nav-smicons footer-smicons">
            <li class="youtube-smi">
              <a
                href="https://www.youtube.com/user/FitnessBlender"
                target="_blank"
              >
                <span class="iconfont-youtube-play"></span>
                <span class="sr-only">YouTube</span>
              </a>
            </li>
            <li class="pinterest-mi">
              <a href="https://pinterest.com/FitnessBlender/" target="_blank">
                <span class="iconfont-pinterest"></span>
                <span class="sr-only">Pinterest</span>
              </a>
            </li>
            <li class="facebook-smi">
              <a
                href="https://www.facebook.com/pages/FitnessBlendercom/151085874942542"
                target="_blank"
              >
                <span class="iconfont-facebook"></span>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li class="instagram-smi">
              <a href="https://instagram.com/fitnessblender/#" target="_blank">
                <span class="iconfont-instagram"></span>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
            <li class="twitter-smi">
              <a href="https://twitter.com/FitnessBlender" target="_blank">
                <span class="iconfont-twitter"></span>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
