import { gql, useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Mutation = () => {
  const user = gql`
    mutation  ($input: CreateUserInput!) {
      createUser(input: $input) {
        username
        name
        email
        phone
      }
    }
  `;
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState("");
  const [username, setusername] = useState();

  const [handlesubmit, { error, data, loading }] = useMutation(user, {
    variables: {
      input: {
        username: `${username}`,
        name: `${name}`,
        email: `${email}`,
        phone: `${phone}`,
      },
    },
  });
  console.log(data);

  return (
    <div>
      <div style={{ margin: 5 }}>
        <TextField
          placeholder="Enter USER Name"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          type="text"
        />
      </div>
      <div style={{ margin: 5 }}>
        <TextField
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
        />
      </div>
      <div style={{ margin: 5 }}>
        <TextField
          placeholder="Enter Email"
          value={email}
          type="email"
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div style={{ margin: 5 }}>
        <TextField
          placeholder="Enter Phone"
          value={phone}
          type="number"
          onChange={(e) => setphone(e.target.value)}
        />
      </div>
      <div style={{ margin: 5 }}>
        <Button variant="contained" onClick={handlesubmit}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Mutation;
