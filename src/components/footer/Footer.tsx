import { Button } from "antd";

const Footer = () => {
  return (
    <div className="text-center text-[#2f1533] py-8">
      {" "}
      Challenge by{" "}
      <Button
        type="link"
        className="p-0 text-[#8c6991] font-bold"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </Button>
      . Coded with ❤️ by{" "}
      <Button
        className="p-0 text-[#8c6991] font-bold"
        type="link"
        href="https://linkedin.com/in/skyv2022"
      >
        Aakash Verma
      </Button>
      .{" "}
    </div>
  );
};

export default Footer;
