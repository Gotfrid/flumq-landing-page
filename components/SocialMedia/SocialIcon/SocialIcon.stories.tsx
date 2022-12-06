import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SocialIcon } from "./SocialIcon";

import facebookIcon from "../../../public/icons/facebook-icon.svg";
import instagramIcon from "../../../public/icons/instagram-icon.svg";
import youtubeIcon from "../../../public/icons/youtube-icon.svg";
import twitterIcon from "../../../public/icons/twitter-icon.svg";
import linkedinIcon from "../../../public/icons/linkedin-icon.svg";

export default {
  title: "Social Media/Icon",
  component: SocialIcon,
} as ComponentMeta<typeof SocialIcon>;

const Template: ComponentStory<typeof SocialIcon> = (args) => <SocialIcon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  href: "www.facebook.com",
  alt: "facebook icon",
  src: facebookIcon,
};

export const Instagram = Template.bind({});
Instagram.args = {
  href: "www.instagram.com",
  alt: "instagram icon",
  src: instagramIcon,
};

export const Youtube = Template.bind({});
Youtube.args = {
  href: "www.youtube.com",
  alt: "youtube icon",
  src: youtubeIcon,
};

export const Twitter = Template.bind({});
Twitter.args = {
  href: "www.twitter.com",
  alt: "twitter icon",
  src: twitterIcon,
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  href: "www.linkedin.com",
  alt: "linkedin icon",
  src: linkedinIcon,
};
