import React from "react";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import Home from "../Pages/Home";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Flex
        style={{
          gap: "2rem",
          padding: "1rem",
          marginLeft: "2rem",
          fontWeight: "bolder",
        }}
      >
        <Box>
          <Link to="/">
            <Image
              src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
              style={{ width: "150px", height: "90px" }}
            />
          </Link>
        </Box>
        <Flex style={{ gap: "2rem", marginTop: "45px" }}>
          <Box>
            <Link to="/workout">
              <h3>
                WORKOUT{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/programs">
              <h3>
                PROGRAMS{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/healthyliving">
              <h3>
                HEALTHY LIVING{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/community">
              <h3>
                COMMUNITY{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/about">
              <h3>
                ABOUT{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/store">
              <h3>
                STORE{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/membership">
              <h3 style={{ color: "#4296cb" }}>MEMBERSHIP</h3>
            </Link>
          </Box>
          <Flex style={{ gap: "2rem", marginTop: "-20px", marginLeft: "2rem" }}>
            <Link to="/login">
              <Box>
                <Text style={{ color: "#4296cb" }}>Hi! Sign In</Text>
                <h3>
                  MY FITNESS{" "}
                  <TriangleDownIcon
                    style={{ color: "#4296cb", width: "10px" }}
                  />
                </h3>
              </Box>
            </Link>
            <Box>
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/* <------ Footer ------> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Navbar;
