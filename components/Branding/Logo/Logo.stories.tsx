import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  title: "Branding/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ variant }) => <Logo variant={variant} />;

export const Text = Template.bind({});
Text.args = { variant: "text" };

export const Symbol = Template.bind({});
Symbol.args = { variant: "symbol" };
