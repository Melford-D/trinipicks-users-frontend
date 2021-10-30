import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";

const routes = [
  { path: "/home", exact: true, name: "Home" },
  {
    path: "/home/terms-of-use",
    exact: true,
    name: "Terms of Use",
    component: TermsOfUse,
  },
  {
    path: "/home/privacy-policy",
    exact: true,
    name: "Privacy Policy",
    component: PrivacyPolicy,
  },
];

export default routes;
