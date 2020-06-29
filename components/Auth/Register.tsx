import React from "react";
import { Flex, Input, Button, Text } from "sriracha-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { IS_LOGGED_IN_QUERY, REGISTER_MUTATION, ME_QUERY } from "../../gql";

export default function Register({ toggle }: any) {
  const { register: formRegister, handleSubmit } = useForm();
  const [register, { loading }] = useMutation(REGISTER_MUTATION);
  const onSubmit = async (data: Record<string, any>) => {
    console.log("data:", data);
    const { firstName, lastName, email, password } = data;

    await register({
      variables: {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      },
      refetchQueries: [{ query: IS_LOGGED_IN_QUERY }, { query: ME_QUERY }],
    });
    toggle();
  };
  const selectImageHandler = (e: any) => {
    console.log("event target file:", e.target.files[0]);
  };
  const uploadImageHandler = (e: any) => {
    return;
  };
  if (loading) return <Text>Loading...</Text>;
  return (
    <Flex as="form" drape onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="text"
        placeholder="Email..."
        ref={formRegister}
      />
      <Input
        name="firstName"
        type="text"
        placeholder="First name..."
        ref={formRegister}
      />
      <Input
        name="lastName"
        type="text"
        placeholder="Last name..."
        ref={formRegister}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password..."
        ref={formRegister}
      />
      <Input
        name="avatar"
        type="file"
        ref={formRegister}
        onChange={selectImageHandler}
      />
      <Button type="submit" primary>
        Register
      </Button>
    </Flex>
  );
}
