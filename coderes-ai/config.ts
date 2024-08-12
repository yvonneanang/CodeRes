import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "@/types/config";

const config = {
  appName: "CodeRes.ai",
  appDescription:
    "Get code for scientific figures with a click",
  domainName: "CodeRes.ai",

 
  colors: {
    theme: "coderes",
    
    //main: themes["coderes"].primary,
    //main: themes["night"]["primary"],
  },

} as ConfigProps;

export default config;
