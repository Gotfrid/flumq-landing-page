import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreButton } from "./StoreButton";

export default {
  title: "Common/Store Button",
  component: StoreButton,
} as ComponentMeta<typeof StoreButton>;

const Template: ComponentStory<typeof StoreButton> = (args) => <StoreButton {...args} />;

export const AppleBlack = Template.bind({});
AppleBlack.args = {
  store: "apple",
  color: "black",
};

export const AppleGray = Template.bind({});
AppleGray.args = {
  store: "apple",
  color: "gray",
};

export const GoogleBlack = Template.bind({});
GoogleBlack.args = {
  store: "google",
  color: "black",
};

export const GoogleGray = Template.bind({});
GoogleGray.args = {
  store: "google",
  color: "gray",
};
