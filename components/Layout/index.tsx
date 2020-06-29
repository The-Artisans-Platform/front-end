import Link from "next/link";
import Head from "next/head";
import { Wrapper, NavBar, Box, Text, Flex, theme } from "sriracha-ui";
import Gate from "./Gate";

type Props = {
  title: string;
};

const navHeight: string = "5rem";

const navItems: string[] = ["Home", "About", "Contact"];

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar bg={theme.colors.whiteAlpha9} jcBetween shadow={theme.shadows[3]}>
      <Flex h={navHeight}>
        {navItems.map((item) => (
          <Flex aiCenter p="0 1rem" pointer key={item} m="1rem">
            <Link
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              passHref
            >
              <Text
                as="a"
                lf
                pointer
                color={theme.colors.gray9}
                hvrColor={theme.colors.blackAlpha5}
              >
                {item}
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
      <Gate />
    </NavBar>
    <Box h={navHeight} />
    {children}
  </Wrapper>
);

export default Layout;
