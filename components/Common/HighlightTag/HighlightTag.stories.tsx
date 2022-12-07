import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HighlightTag } from "./HighlightTag";

export default {
  title: "Typography/Highlight Tag",
  component: HighlightTag,
} as ComponentMeta<typeof HighlightTag>;

const Template: ComponentStory<typeof HighlightTag> = (args) => <HighlightTag {...args} />;

export const HighlightDark = Template.bind({});
HighlightDark.args = {
  variant: "dark",
  children: "Know your options",
};

export const HighlightLight = Template.bind({});
HighlightLight.args = {
  variant: "light",
  children: "You're not alone",
};
