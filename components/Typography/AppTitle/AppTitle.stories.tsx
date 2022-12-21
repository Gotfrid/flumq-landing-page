import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppTitle } from "./AppTitle";

export default {
  title: "Typography/App Title",
  component: AppTitle,
} as ComponentMeta<typeof AppTitle>;

const Template: ComponentStory<typeof AppTitle> = (args) => <AppTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  title: "This is a title",
  subtitle: "This is a subtitle",
};
