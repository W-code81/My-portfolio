import { MoveDown, Download } from "lucide-react";

 const btnInfo = [
  { text: "Contact Me", icon: MoveDown, variant:"primary", onClick: () => alert("Contact me clicked!") },
  { text: "Download CV", icon: Download, variant:"secondary", onClick: () => alert("Download resume clicked!") },
];

export default btnInfo;