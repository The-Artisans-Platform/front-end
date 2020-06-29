import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Card, Text, theme } from "sriracha-ui";

export default function Index() {
  return (
    <Layout title="Home">
      <Card w="94%" maxW="88rem" shade>
        <Text xlf bold as="h1">
          Welcome to the Artisans Platform! 🎉
        </Text>
        <Link href="/about" passHref>
          <Text
            as="a"
            color={theme.colors.deepPurple4}
            pointer
            hvrColor={theme.colors.deepPurple3}
          >
            About
          </Text>
        </Link>
      </Card>
    </Layout>
  );
}
