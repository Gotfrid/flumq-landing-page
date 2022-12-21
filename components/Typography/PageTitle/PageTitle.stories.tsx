import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageTitle } from "./PageTitle";

export default {
  title: "Typography/Page Title",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Destination = Template.bind({});
Destination.args = { text: "Destination" };

export const Guides = Template.bind({});
Guides.args = { text: "Step-by-Step Guides" };

export const Community = Template.bind({});
Community.args = { text: "Community" };
