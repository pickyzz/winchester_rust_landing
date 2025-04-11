import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, IconButton } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes, style } from '@/app/resources';
import { home, about, person, newsletter, social } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="l">
        <Column maxWidth="l">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="l">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-strong" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              Winchester X Rust is built for players who want the full Rust experience
              <br/>— without the chaos of pay-to-win servers or admin abuse.
              <br/>We follow official server standards with minor quality-of-life improvements to keep gameplay smooth and fair.
              <br/>Whether you're a builder, a raider, or a solo grinder, you'll find a consistent environment backed by active moderation and a growing community that actually cares.
              <br/>No gimmicks, no hand-holding — just Rust, the way it should be.
            </Text>
          </RevealFx>
        </Column>
        <Column maxWidth="l">
          <RevealFx translateY="8" delay={0.6} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-strong" variant="heading-default-xl">
              Why Play Here?
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.8} horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              Winchester X Rust sticks close to the official vanilla experience — no kits, no pay-to-win, and no crazy plugins.
              <br/>We keep the server fast, fair, and consistent so that every wipe feels like a fresh start.
              <br/>Whether you’re farming for that first base or planning a full-scale raid, you’ll always know what to expect.
            </Text>
          </RevealFx>

        </Column>
        <Column maxWidth="l">
          <RevealFx translateY="8" delay={1.0} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-strong" variant="heading-default-xl">
              Our Philosophy
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={1.2} horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              We believe Rust is at its best when it’s raw, challenging, and earned — not bought.
              <br/>That’s why we’ve built a server that respects the original game design, while still listening to our players.
              <br/>Our admins are active but not intrusive, and we’re always open to feedback.
              <br/>This is your server just as much as ours.
            </Text>
          </RevealFx>
        </Column>
        <Column maxWidth="l">
          <RevealFx translateY="12" delay={1.6} horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              We’re more than just a server — we’re a crew of survivors, builders, and fighters who actually enjoy Rust.
              <br/>Hop into our Discord to chat, share clips, report issues, or just chill between wipes.
              <br/>New players and veterans alike are welcome.
            </Text>
          </RevealFx>
        </Column>
        <Column maxWidth="l">
          <RevealFx translateY="8" delay={1.0} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-strong" variant="heading-default-xl">
              Join Us
            </Text>
          </RevealFx>
        </Column>
        <Column maxWidth="l">
          <RevealFx translateY="12" delay={1.2} horizontal="center" paddingBottom="s">
          <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="l"
              arrowIcon
            >
              <Flex horizontal="center" gap="16">
                {social.map(
                  (item) =>
                    item.link && item.name === "Discord" && (
                      <IconButton
                        key={item.name}
                        href={item.link}
                        icon={item.icon}
                        tooltip={item.name}
                        size="l"
                        variant="ghost"
                      />
                    ),
                )}
                <Text onBackground="neutral-weak" style={{ marginTop: "0.6rem", marginLeft: "-0.25rem" }}>Discord</Text>
              </Flex>
            </Button>
          </RevealFx>
        </Column>


          {/* <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx> */}
      </Column>
      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} /> */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
