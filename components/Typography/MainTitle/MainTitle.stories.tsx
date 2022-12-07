import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainTitle } from "./MainTitle";

export default {
  title: "Typography/Main Title",
  component: MainTitle,
} as ComponentMeta<typeof MainTitle>;

const Template: ComponentStory<typeof MainTitle> = (args) => <MainTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  title: "This is a title",
  subtitle: "This is a subtitle",
};
