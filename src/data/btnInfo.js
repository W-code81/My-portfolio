import { MoveDown, Download } from "lucide-react";

 const btnInfo = [
  { text: "Contact Me", icon: MoveDown, variant:"primary", onClick: () => document.getElementById("contact").scrollIntoView({ behavior: "smooth" }) },
  { text: "Download CV", icon: Download, variant:"secondary", onClick: () => window.open("/pdf/My_Resume.pdf" , "_blank")},
];

export default btnInfo;