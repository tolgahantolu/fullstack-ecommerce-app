import BackButton from "../../components/BackButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BackButton",
  compoenent: BackButton,
} as ComponentMeta<typeof BackButton>;

export const BackButtonStory: ComponentStory<typeof BackButton> = () => (
  <div className="text-white">
    <BackButton />
  </div>
);

BackButtonStory.parameters = {
  nextRouter: {
    back() {},
  },
};
