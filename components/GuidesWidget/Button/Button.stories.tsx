import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Guides Widget/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  selected: true,
  text: "Timeline",
};

export const NonActive = Template.bind({});
NonActive.args = {
  selected: false,
  text: "Description",
};
