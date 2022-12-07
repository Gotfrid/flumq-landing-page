import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppIcon } from "./AppIcon";

export default {
  title: "Branding/App Icon",
  component: AppIcon,
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = () => <AppIcon />;

export const Default = Template.bind({});
Default.args = {};
