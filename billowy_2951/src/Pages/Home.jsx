import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import styles from "../Styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Flex gap="2rem">
          <Box className={styles.box1}>
            <h1 className={styles.h1}>
              Feel Great.
              <br />
              Body And Mind.
            </h1>

            <h2 className={styles.text} style={{ alignContent: "center" }}>
              Choose from hundreds of workouts, healthy recipes, relaxing
              meditations, and expert articles, for a whole body and mind
              approach to feeling great.
            </h2>
            <Box>
              <Button
                className={styles.joinNow}
                size="lg"
                background={"#212432"}
                textTransform="uppercase"
              >
                Join Now
              </Button>
            </Box>
          </Box>
          <Box className={styles.box2}>
            <Image
              width="700px"
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"
              alt="home"
            />
          </Box>
        </Flex>
      </div>

      <div className={styles.container2}>
        <Box>
          <h1 style={{ marginLeft: "35rem" }} className={styles.container2h1}>
            Introducing
            <br />
            FB <span color="">Plus</span> Passes.
          </h1>
        </Box>
        <Box>
          <p className={styles.unit}>
            Passes give you full access to everything FB Plus has to offer,
            without a long-term subscription. Choose a pass that fits your
            budget and your schedule.
          </p>
        </Box>
        <Box>
          <Button
            className={styles.joinNow}
            size="lg"
            background={"#212432"}
            color={"#fff"}
            textTransform="uppercase"
            marginLeft={"38rem"}
            marginTop={"2rem"}
          >
            Buy A Pass
          </Button>
        </Box>
        <Box>
          <Image
            style={{ marginLeft: "23rem" }}
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"
            alt="passes"
          />
        </Box>
      </div>
      {/* <----Footer Home----> */}
      <div backgroundColor={"#f0f4f6"}>
        <h1 className={styles.footerHeading}>Not Sure Where To Start ?</h1>
        <p className={styles.para} marginLeft="2rem">
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>
        <div className={styles.footerContainer}>
          <div className={styles.footerDiv}>
            <p className={styles.para}>Perfect for Beginners</p>
            <img
              src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg"
              alt=""
            />
            <p className={styles.paraLink}>4 WEEK PROGRAM - 34 MIN/DAY</p>
            <h3 className={styles.para}>FB Low Impact Round-2</h3>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.para}>You Choose</p>
            <img
              src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg"
              alt=""
            />
            <p className={styles.paraLink}>4 WEEK PROGRAM - 34 MIN/DAY</p>
            <h3 className={styles.para}>FB Low Impact Round-2</h3>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.para}>Short on Time?</p>
            <img
              src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg"
              alt=""
            />
            <p className={styles.paraLink}>4 WEEK PROGRAM - 34 MIN/DAY</p>
            <h3 className={styles.para}>FB Low Impact Round-2</h3>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.para}>No Equipment Necessary</p>
            <img
              src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg"
              alt=""
            />
            <p className={styles.paraLink}>4 WEEK PROGRAM - 34 MIN/DAY</p>
            <h3 className={styles.para}>FB Low Impact Round-2</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
