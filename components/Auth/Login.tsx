import React from "react";
import { Flex, Input, Button } from "sriracha-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { IS_LOGGED_IN_QUERY, LOGIN_MUTATION, ME_QUERY } from "../../gql";

export default function Login({ toggle }: any) {
  const { register, handleSubmit } = useForm();
  const [login] = useMutation(LOGIN_MUTATION);
  const onSubmit = async (data: Record<string, any>) => {
    console.log("data:", data);
    const { email, password } = data;

    await login({
      variables: {
        data: {
          email,
          password,
        },
      },
      refetchQueries: [{ query: IS_LOGGED_IN_QUERY }, { query: ME_QUERY }],
    });
    toggle();
  };
  return (
    <Flex as="form" drape onSubmit={handleSubmit(onSubmit)}>
      <Input name="email" type="text" placeholder="Email..." ref={register} />
      <Input
        name="password"
        type="password"
        placeholder="Password..."
        ref={register}
      />
      <Button type="submit" primary>
        Log in
      </Button>
    </Flex>
  );
}
