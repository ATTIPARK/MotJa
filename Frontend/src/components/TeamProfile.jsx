"use client";

import { Box, Link } from "@chakra-ui/react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Text } from "@nextui-org/react";
import { ProfileCard } from "./ProfileCard";

export const TeamProfile = () => {
  return (
    <Box mt="100px">
      <Text h1 size={80} color="#E6FAFE" weight="700">
        Profile
      </Text>
      <Box className="profile" minh="100vh">
        <ProfileCard
          profilImageSrc="/images/park.png"
          name="ATTIPARK👑"
          discription="🫧 Full-Stack 🫧"
          icon={
            <Link href="https://github.com/ATTIPARK" target="_blank">
              <BsGithub />
            </Link>
          }
          icon2={
            <Link href="https://www.instagram.com/buuum95/" target="_blank">
              <BsInstagram />
            </Link>
          }
        />
        <ProfileCard
          profilImageSrc="/images/lee.png"
          name="OLLOK"
          discription="🫧 Frontend & DB & PM 🫧"
          icon={
            <Link href="https://github.com/lhjbg0821" target="_blank">
              <BsGithub />
            </Link>
          }
          icon2={
            <Link href="https://www.instagram.com/ollok_99/" target="_blank">
              <BsInstagram />
            </Link>
          }
        />
        <ProfileCard
          profilImageSrc="/images/choi.png"
          name="RoRA"
          discription="🫧 Frontend & DB & Design 🫧"
          icon={
            <Link href="https://github.com/Choi-jujuyeon " target="_blank">
              <BsGithub />
            </Link>
          }
          icon2={
            <Link
              href="https://www.instagram.com/etoile_brillante_jy/"
              target="_blank"
            >
              <BsInstagram />
            </Link>
          }
        />
      </Box>
    </Box>
  );
};
