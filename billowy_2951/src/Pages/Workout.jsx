import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Components/Footer";
import styles from "../Styles/Store.module.css";

const Workout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [programs, setPrograms] = useState([]);

  const handleClick = () => {
    alert("Added To Cart");
  };

  useEffect(() => {
    axios({
      url: `http://localhost:8080/programs?_page=${page}&_limit=20`,
    })
      .then((res) => {
        console.log(res.data);
        setPrograms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page, setSearchParams]);

  return (
    <div>
      <Box fontSize='45px' paddingBottom={"1rem"} paddingLeft={'5rem'}>
        <h1>Workouts Available</h1>
      </Box>
      <div>
        <div className={styles.divContainer}>
          {programs.map((list) => (
            <div key={list.id} className={styles.passContainer}>
              <img className={styles.image} src={list.imageSrc} />
              <div className={styles.text}>{list.title}</div>
              <div className={styles.text}>{list.desc}</div>
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
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page===1}
          marginLeft={"30rem"}
          marginRight={"10rem"}
          background={"#4296cb"}
        >
          Prev
        </Button>
        <Button disabled={page===5} onClick={() => setPage(page + 1)} background={"#4296cb"}>
          Next
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Workout;
