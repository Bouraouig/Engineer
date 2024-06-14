import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Button, ButtonToolbar, Input, SelectPicker } from "rsuite";

const Footer = () => {
  return (
    <div className="h-[80vh] bg-[#141029] grid grid-cols-3 p-2  ">
      <div className=" text-white  ">
        <img src="./logo.jpg" alt="" />
        <p className=" w-[90%] m-auto p-2 text-justify my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
          consectetur perferendis dolores molestiae delectus placeat?
          Perspiciatis architecto vero autem maiores delectus, eum minima illum
          quaerat reprehenderit, ad fuga obcaecati?
        </p>
        <div className=" flex items-center p-1 text-lg w-[90%] m-auto  my-1">
          <IoIosMail size={27} style={{ marginRight: 10 }} /> Exemple@gmail.com
        </div>
        <div className=" flex items-center p-1 text-lg w-[90%] m-auto my-1">
          <FaPhoneAlt size={25} style={{ marginRight: 10 }} /> (+971)-99-9999999
        </div>
        <div className=" flex items-center p-1 text-lg w-[90%] m-auto my-1">
          <IoLocation size={27} style={{ marginRight: 10 }} /> Place, Dubai.
        </div>
      </div>
      <div className="bg-blue-500 text-white p-5 py-10 h-full">
        <h3 className="my-3">Welcom to Our Community :</h3>
        <Input />
      </div>
      <div className="text-white p-5 py-10 h-full ">
        <h3 className=" my-3">Our Contact :</h3>
        <ButtonToolbar>
          <Button color="blue" appearance="primary" startIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button color="red" appearance="primary" startIcon={<FaInstagram />}>
            Instagram
          </Button>
          <Button color="cyan" appearance="primary" startIcon={<FaTwitter />}>
            Twitter
          </Button>
        </ButtonToolbar>
        <div className="my-3">
          <SelectPicker block data={[{ label: "Dubai", value: "Dubai" }]} />
          <div className="w-full mt-3  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2stn!4v1718402564474!5m2!1sen!2stn"
              //   style="border:0;"
              style={{ width: "100%", height: "320px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
