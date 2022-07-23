import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import styles from "../Styles/Store.module.css";

const Membership = () => {
  const [data, setData] = useState([]);
  const [gift, setGift] = useState([]);

  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);

  const handleClick =()=>{
    alert('Added To Cart');
  }

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      url: "http://localhost:8080/passes",
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/giftcard",
    })
      .then((res) => {
        console.log(res.data);
        setGift(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Box fontSize={"50px"} marginBottom={"1rem"}>
            <h1>Memberships</h1>
          </Box>
          <Box fontSize={"20px"} marginBottom={"0.5rem"}>
            <p>
              Memberships give you full access to everything FB Plus has to offer,
              without a long-term subscription. Choose a membership that fits your
              budget and your schedule, and extend your access with another membership
              at any time. Multiple membership can not be purchased at once for longer
              access.
            </p>
          </Box>
          <Box>
            <p>
              Note: Memberships cannot be used at the same time as a monthly or
              yearly FB Plus subscription.
            </p>
          </Box>
        </div>
        <div className={styles.divContainer}>
          {data.map((list) => (
            <div key={list.id} className={styles.passContainer}>
              <img className={styles.image} src={list.imageSrc} />
              <div className={styles.text}>{list.title}</div>
              <div className={styles.text}>{list.duration}</div>
              <div className={styles.addTobag}>
                <div className={styles.text}> $ {list.price}</div>
                <div>
                  <Button
                    onClick={handleClick}
                    marginBottom={"4px"}
                    background={"#4296cb"}
                    color={"#ffffff"}
                  >
                    ADD TO BAG
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.top}>
          <Box fontSize={"50px"} marginBottom={"1rem"}>
            <h1>Membership eGift Cards</h1>
          </Box>
          <Box fontSize={"20px"} marginBottom={"0.5rem"}>
            <p>
              Give the gift of health and fitness with Membership eGift
              Cards. Send an electronic card via email and the recipient can log
              in, redeem your gift and buy any of our Workout Programs,
              calendar-based Meal Plans, or a membership to FB Plus!
            </p>
          </Box>
          <Box marginBottom={"2rem"}>
            <p>
              Note: Fitness Blender Membership eGift Cards can only be used on
              fitnessblender.com.
            </p>
          </Box>
          <div className={styles.divContainer}>
            {gift.map((list) => (
              <div key={list.id} className={styles.passContainer}>
                <img className={styles.image} src={list.imageSrc} />
                <div className={styles.addTobag}>
                  <div className={styles.text}> $ {list.price}</div>
                  <div>
                    <Button
                      onClick={handleClick}
                      marginBottom={"4px"}
                      background={"#4296cb"}
                      color={"#ffffff"}
                    >
                      ADD TO BAG
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
