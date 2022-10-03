import { TextField } from "@mui/material";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const user = gql`
    query Query($userId: ID!) {
      user(id: $userId) {
        id
        name
        username
        email
        phone
      }
    }
  `;
  const [id, setid] = useState();
  //   const id = 5;
  const { error, loading, data } = useQuery(user, {
    variables: { userId: `${id}` },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error)
    return <h1 style={{ color: "red" }}>`Error Occured...${error}`</h1>;
  console.log(data.user.id);

  return (
    <div>
      <h5>Hello</h5>

      <TextField
        label="Id"
        variant="filled"
        type="number"
        placeholder="ENTER USER NO"
        onChange={(e) => {
          setid(e.target.value);
        }}
      />
      <div style={{ alignItems: "flex-start" }}>
        <h3>ID:-{data.user.id}</h3>
        <h3>NAME:-{data.user.name}</h3>
        <h3>USERNAME:-{data.user.username}</h3>
        <h3>EMAIL:-{data.user.email}</h3>
        <h3>PHONE:-{data.user.phone}</h3>
      </div>
    </div>
  );
};

export default Home;
