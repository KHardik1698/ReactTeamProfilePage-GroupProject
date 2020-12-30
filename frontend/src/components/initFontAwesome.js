import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
  library.add(fab, faTwitterSquare, faFacebookSquare, faLinkedin, faGithub);
}
export default initFontAwesome;
