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
        <Box className={styles.container2h1}>
          <h1 style={{ marginLeft: "35rem" }}>
            Introducing
            <br />
            FB <span color="">Plus</span> Passes.
          </h1>
          <Text>
            Passes give you full access to everything FB Plus has to offer,
            without a long-term subscription. Choose a pass that fits your
            budget and your schedule.
          </Text>
        </Box>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
