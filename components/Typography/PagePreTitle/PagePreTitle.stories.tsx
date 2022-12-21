import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PagePreTitle } from "./PagePreTitle";

export default {
  title: "Typography/Page Pre-Title",
  component: PagePreTitle,
} as ComponentMeta<typeof PagePreTitle>;

const Template: ComponentStory<typeof PagePreTitle> = (args) => <PagePreTitle {...args} />;

export const Destination = Template.bind({});
Destination.args = { text: "Find your" };

export const Guides = Template.bind({});
Guides.args = { text: "Access", variant: "light" };

export const Community = Template.bind({});
Community.args = { text: "Join the" };
