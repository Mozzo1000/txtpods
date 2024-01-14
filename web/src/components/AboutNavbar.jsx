import React from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { SiKofi } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { RiQuestionFill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";

const sidebarTheme = {
    "root": {
      base: "border-r-2",
      inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-transparent py-4 px-3"
    }
};

function AboutNavbar() {
  return (
    <Sidebar aria-label="Default sidebar example" theme={sidebarTheme}>
      <Sidebar.Logo className=" uppercase text-gray-400">
        <p className="font-bold">About txtpods</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/about">
            <Sidebar.Item active href="" icon={RiQuestionFill}>
              What's txtpods?
            </Sidebar.Item>
          </Link>
          <Link to="/about">
            <Sidebar.Item href="" icon={FaToolbox}>
              How it works
            </Sidebar.Item>
          </Link>
          <Link to="/about/request">
            <Sidebar.Item href="" icon={MdOutlinePodcasts}>
              Request podcast
            </Sidebar.Item>
          </Link>
          <Link to="/about/api">
            <Sidebar.Item href="" icon={AiFillApi}>
              API
            </Sidebar.Item>
          </Link>
          <Link to="/about/">
            <Sidebar.Item href="" icon={SiKofi}>
              Donate
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default AboutNavbar