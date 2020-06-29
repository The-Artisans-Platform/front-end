import React from "react";
import { Flex, Box, Text, ToolTip, Button, Card, theme } from "sriracha-ui";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { LOGOUT_MUTATION, ME_QUERY, IS_LOGGED_IN_QUERY } from "../../gql";

export default function CurrentUser() {
  const { data: meData, loading } = useQuery(ME_QUERY);
  const [logout] = useMutation(LOGOUT_MUTATION);
  return (
    <Flex aiCenter>
      {loading ? (
        <Text lf>Loading...</Text>
      ) : (
        <>
          <Text fontSize="2rem">{meData?.me?.displayName}</Text>
          <ToolTip ttTop="3.8rem" ttRight="1.4rem">
            <Box sqr="4rem" circle bg={theme.colors.gray9} m="0 1.6rem" />
            <div className="tooltip">
              <Card invert>
                <Button
                  red
                  onClick={() => {
                    logout({
                      refetchQueries: [{ query: IS_LOGGED_IN_QUERY }],
                    });
                  }}
                  // onClick={() => alert("Hey")}
                >
                  Logout
                </Button>
              </Card>
            </div>
          </ToolTip>
        </>
      )}
    </Flex>
  );
}
