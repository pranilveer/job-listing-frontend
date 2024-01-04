import React, { useState, useEffect } from "react";
import "./Health.css";
import Loading from "../Loading/Loading";
import axios from "axios";
import BASEURL from "../../constants/baseurl";
import useJobContext from "../../hooks/useJobContext";
import Error404 from "../NotFound/Error404";

const HealthComponent = () => {
  const [healthData, setHealthData] = useState(null);
  const { loading, setLoading } = useJobContext();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/health`)
      .then((res) => {
        setHealthData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="health-component">
      <h1>Health Status</h1>
      {loading ? (
        <Loading />
      ) : healthData ? (
        <>
          <p>Server: {healthData.server}</p>
          <p>Database: {healthData.database}</p>
        </>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default HealthComponent;