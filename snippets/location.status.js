import React, { useState } from "react";

const getLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latlong, setLatlong] = useState("");
  const [err, setErr] = useState("");

  // success handler
  function success(res) {
    setLatlong(`${res.coords.latitude},${res.coords.longitude}`);
    setIsLoading(false);
    setErr("");
  }

  // error handler
  function error(e) {
    setErr(e.message);
    setIsLoading(false);
    setLatlong("");
  }

  function getUserLocation() {
    if (!navigator.geolocation) {
      setErr("Your browser does not supports location");
    } else {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    getUserLocation,
    latlong,
    err,
    isLoading,
  };
};

export default getLocation;
