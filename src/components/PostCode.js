import { useState } from "react";
import classes from "../styles/Postcode.module.css";
import axios from "axios";
async function getGeoLocation(locationName) {
  const apiKey = process.env.APIKEY;
  const encodedLocationName = encodeURIComponent(locationName);
  // console.log(encodedLocationName);
  const geocodingEndpoint =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    encodedLocationName +
    "&key=" +
    apiKey;
  try {
    const response = await axios.get(geocodingEndpoint);
    const results = response.data.results;
    if (results && results.length > 0) {
      const latitude = results[0].geometry.location.lat;
      const longitude = results[0].geometry.location.lng;
      const address = results[0].formatted_address;
      return { latitude, longitude, address };
    } else {
      return "Location not found";
    }
  } catch (error) {
    console.error("Error:", error);
    return "Error occurred";
  }
}
async function getPostalCode(longitude, latitude) {
  const response = await axios.get(
    `https://api.postcodes.io/postcodes?lon=${longitude}&lat=${latitude}`
  );
  return response.data.result[0].postcode;
}

export default function PostCode() {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    setLocation("");
    const response = await getGeoLocation(location);
    console.log(response);
    setAddress(response.address);
    if (response.ok) {
      const postcodeResponse = await getPostalCode(
        response.longitude,
        response.latitude
      );
      setPostcode(postcodeResponse);
    } else {
      setError("An error occured. Try another Location");
    }
    setLoading(false);
  }
  return (
    <div className={classes["postcode-card"]}>
      <form onSubmit={submitHandler}>
        <h4>Get your Postcode</h4>
        {error !== "" && (
          <strong>
            <p>{error}</p>
          </strong>
        )}
        <input
          type="text"
          size="20"
          tabindex="100"
          autocomplete="off"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a Town in UK"
        />

        {loading ? (
          <button className={classes.button} disabled={true}>
            Loading...
          </button>
        ) : (
          <button className={classes.button}>Get Postcode</button>
        )}
      </form>
      {postcode !== "" && (
        <>
          <h3>Location: {address} </h3>
          <br />
          <h3>Postcode: {postcode} </h3>
        </>
      )}
    </div>
  );
}
