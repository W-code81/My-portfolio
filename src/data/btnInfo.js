import { MoveDown, Download } from "lucide-react";

const btnInfo = [
  { text: "Contact Me", icon: MoveDown, variant: "primary", onClick: () => document.getElementById("contact").scrollIntoView({ behavior: "smooth" }) },
  {
    text: "Download CV", icon: Download, variant: "secondary",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "/pdf/My_Resume.pdf";
      link.download = "My_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
];

export default btnInfo;