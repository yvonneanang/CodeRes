import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "@/types/config";

const config = {
  // REQUIRED
  appName: "CodeRes",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Get code for scientific figures in minutes",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "CodeRes.ai",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
 
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "night",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["night"]["primary"],
  },

} as ConfigProps;

export default config;
