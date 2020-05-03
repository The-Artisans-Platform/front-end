import Link from "next/link";
import Head from "next/head";
import { Wrapper, NavBar, Box, Flex, Ref, theme } from "bushido-strap";

type Props = {
  title: string;
};

const navHeight: string = "5rem";

const navItems: string[] = ["Home", "About", "Contact"];

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <Wrapper aiStart minH="100%">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar bg={theme.colors.blackAlpha8} drape>
        <Flex stretch jcCenter h={navHeight}>
          {navItems.map((item) => (
            <>
              <Flex aiCenter p="0 1rem" pointer key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  passHref
                >
                  <Ref
                    lf
                    bold
                    pointer
                    color={theme.colors.gray0}
                    hvrColor={theme.colors.whiteAlpha6}
                  >
                    {item}
                  </Ref>
                </Link>
              </Flex>
              <Box w="2rem" key={item} />
            </>
          ))}
          {/* <Flex aiCenter p="0 1rem" pointer>
            <Link href="/" passHref>
              <Ref
                lf
                bold
                pointer
                color={theme.colors.gray0}
                hvrColor={theme.colors.whiteAlpha6}
              >
                Home
              </Ref>
            </Link>
          </Flex>
          <Box w="2rem" />
          <Flex aiCenter p="0 1rem" pointer>
            <Link href="/about" passHref>
              <Ref
                lf
                bold
                pointer
                color={theme.colors.gray0}
                hvrColor={theme.colors.whiteAlpha6}
              >
                About
              </Ref>
            </Link>
            <Box w="2rem" />
          <Flex aiCenter p="0 1rem" pointer>
            <Link href="/about" passHref>
              <Ref
                lf
                bold
                pointer
                color={theme.colors.gray0}
                hvrColor={theme.colors.whiteAlpha6}
              >
                About
              </Ref>
            </Link>
          </Flex> */}
        </Flex>
        <Box w="98%" h="1px" bg={theme.colors.gray6} backlight />
      </NavBar>
    </header>
    <Flex drape stretch>
      <Box h={navHeight} />
      <Box />
      {children}
    </Flex>
  </Wrapper>
);

export default Layout;
