import { configure } from "@storybook/vue"
import { configureViewport } from "@storybook/addon-viewport"

function loadStories() {
  require("../stories")
}

configure(loadStories, module)
