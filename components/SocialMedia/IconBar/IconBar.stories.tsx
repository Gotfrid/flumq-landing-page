import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconBar } from "./IconBar";

export default {
  title: "Social Media/IconBar",
  component: IconBar,
} as ComponentMeta<typeof IconBar>;

const Template: ComponentStory<typeof IconBar> = () => <IconBar />;

export const Default = Template.bind({});
Default.args = {};
