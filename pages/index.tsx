import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Card, Text, theme } from "bushido-strap";

export default function Index() {
  return (
    <Layout title="Home">
      <Card maxW="45rem">
        <Card invert shade taCenter>
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
      </Card>
    </Layout>
  );
}
