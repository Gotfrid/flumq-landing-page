import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Guides Widget/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonNames: ["Description", "Timeline", "Stats"],
};
