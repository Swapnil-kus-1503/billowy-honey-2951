import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Footer.module.css";
const Footer = () => {
  return (
    <div>
      <Flex className={styles.container}>
        <Box>
          <Link to="/">
            <Image
              className={styles.imgBackground}
              style={{
                width: "156px",
                height: "45px",
              }}
            />
          </Link>
          <h3 style={{ marginLeft: "7rem" }}>WORKOUT COMPLETE</h3>
          <Box style={{ marginLeft: "7rem" }} marginTop="19rem">
            <h1>Copyright © 2022 Fitness Blender. All rights reserved</h1>
          </Box>
        </Box>

        <Box>
          <Flex direction={"column"} gap="1rem" className={styles.text}>
            <Text className={styles.textContent}>WORKOUTS</Text>
            <h1 className={styles.footerh1}>WORKOUT VIDEOS</h1>
            <h1 className={styles.footerh1}>CUSTOM WORKOUTS</h1>
            <Text className={styles.textContent}>PROGRAMS</Text>
            <h1 className={styles.footerh1}>WORKOUT PROGRAMS</h1>
            <h1 className={styles.footerh1}>MEAL PLANS</h1>
            <h1 className={styles.footerh1}>PILOT PROGRAMS</h1>
            <h1 className={styles.footerh1}>ROUTINES</h1>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={"column"}
            gap="1rem"
            marginLeft={"3rem"}
            marginTop={"2rem"}
          >
            <Text className={styles.textContent}>HEALTHY LIVING</Text>
            <h1 className={styles.footerh1}>FITNESS</h1>
            <h1 className={styles.footerh1}>HEALTH</h1>
            <h1 className={styles.footerh1}>NUTRITION</h1>
            <h1 className={styles.footerh1}>HEALTHY RECIPES</h1>
            <h1 className={styles.footerh1}>EXPERTS</h1>
          </Flex>
        </Box>

        <Box>
          <Flex
            direction={"column"}
            gap="1rem"
            marginLeft={"3rem"}
            marginTop={"2rem"}
          >
            <Text className={styles.textContent}>ABOUT</Text>
            <h1 className={styles.footerh1}>CAREERS OPTIONS</h1>
            <h1 className={styles.footerh1}>TUTORIALS</h1>
            <h1 className={styles.footerh1}>OUR TEAM</h1>
            <h1 className={styles.footerh1}>B2B OPTIONS</h1>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction={"column"}
            gap="1rem"
            marginLeft={"3rem"}
            marginTop={"2rem"}
          >
            <Text className={styles.textContent}>MEMBERSHIPS</Text>
            <Text className={styles.textContent}>FB PLUS</Text>
            <Text className={styles.textContent}>BLOG</Text>
            <Text className={styles.textContent}>CONTACT US</Text>
            <Text className={styles.textContent}>FAQ</Text>
            <Text className={styles.textContent}>STORE</Text>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;
