"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faChevronLeft,
  faChevronRight,
  faClock,
  faHouse,
  faMailBulk,
  faPhone,
  faStairs,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import HouseList from "./Components/HouseList";
import House from "./Components/House";
import HouseReview from "./Components/HouseReview";

export default function Home() {
  const [pagenation, setPagenation] = React.useState(2);

  const scrollLeft = () => {
    /* console.log(document.querySelector(".houseList").scrollLeft); */
    document.querySelector(".houseList").scrollLeft += 340 + 40;
  };

  const scrollRight = () => {
    /* console.log(document.querySelector(".houseList").scrollLeft); */
    document.querySelector(".houseList").scrollLeft -= 340 + 40;
    /*     console.log(document.querySelector(".houseList").scrollLeft); */
  };

  React.useEffect(() => {
    if (pagenation !== 2) {
      document
        .querySelector(`.house${pagenation}`)
        .scrollIntoView({ inline: "end", behavior: "smooth" });
    } else {
      document
        .querySelector(`.house${pagenation}`)
        .scrollIntoView({ inline: "center", behavior: "smooth" });
    }
  }, [pagenation]);

  return (
    <main className="bg-white overflow-hidden flex items-center justify-center antialiased">
      <div className="flex flex-col w-full max-w-[1920px] z-10 gap-32 relative">
        <Image
          src="/assets/colorblur.png"
          alt="color-blur"
          width={741}
          height={523}
          className="absolute -top-[190px] -left-[190px]"
        />

        {/* Hero Section */}
        <div className="flex flex-col relative h-[720px]">
          {/* Nav Bar */}
          <Navbar />
          <div className="flex mx-32 justify-between">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 mt-24 items-start w-[496px]">
                {/* Title */}
                <h1 className="leading-[50px] font-bold text-[40px] capitalize text-[#1B1C57] w-full not-italic">
                  Find The Place <br />
                  To Live{" "}
                  <span className="outline-1 text-transparent stroke-black font-outline-1">
                    Your Dreams
                  </span>
                  <br />
                  Easily Here
                </h1>
                <p className="leading-7 text-[#626687] opacity-75 font-normal">
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>

                {/* Search Box */}
                <div className="flex items-center p-1 pl-6 gap-4 w-full rounded-[32px] border-[#E0E3EB] border">
                  <Image
                    src="/assets/location.png"
                    alt="location"
                    width={24}
                    height={24}
                  />
                  <input
                    className="font-medium leading-5 text-sm text-[#888B97] grow outline-none bg-transparent"
                    type="text"
                    placeholder="Search for the location you want"
                  />
                  <button className="bg-[#10B981] rounded-[32px] px-4 py-3 text-white gap-1 items-center flex justify-center">
                    Search{" "}
                    <Image
                      src="/assets/arrow-right.png"
                      alt=""
                      width={8}
                      height={10}
                    />
                  </button>
                </div>

                {/* Partnership */}
                <div className="flex flex-col">
                  <span className="font-normal text-base leading-8 text-[#888B97]">
                    Our Partnership
                  </span>
                  <div className="flex gap-8 items-center">
                    <Image
                      src="/assets/travoka.png"
                      alt="logo"
                      width={82.75}
                      height={64}
                      objectFit="cover"
                    />
                    <Image
                      src="/assets/tiket.png"
                      alt="logo"
                      objectFit="cover"
                      width={82.75}
                      height={64}
                    />
                    <Image
                      src="/assets/airbnb.png"
                      alt="logo"
                      objectFit="cover"
                      width={82.75}
                      height={64}
                    />
                    <Image
                      src="/assets/tripadvisor.png"
                      alt="logo"
                      objectFit="cover"
                      width={82.75}
                      height={64}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex absolute right-0 top-0 -z-10">
              <Image
                src="/assets/houseimg.png"
                alt="house"
                objectFit="cover"
                width={720}
                height={720}
              />
              <div className="flex gap-4 absolute bottom-0 m-11 overflow-hidden w-[859px]">
                <div className="flex bg-white p-6 rounded-[32px] items-center gap-4">
                  <div className="flex -space-x-7">
                    <Image
                      src="/assets/user-1.png"
                      width={56}
                      height={56}
                      className="rounded-full border-white border-[3px]"
                      alt=""
                    />
                    <Image
                      src="/assets/user-2.png"
                      width={56}
                      height={56}
                      className="rounded-full border-white border-[3px]"
                      alt=""
                    />
                    <Image
                      src="/assets/user-3.png"
                      width={56}
                      height={56}
                      className="rounded-full border-white border-[3px]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <b>1K+ People</b>
                    <small className="text-[#68799F] leading-5 text-xs">
                      Successfully Getting Home
                    </small>
                  </div>
                </div>

                <div className="flex bg-white p-6 rounded-[32px] items-center gap-4">
                  <Image
                    src="/assets/house1.png"
                    className="rounded-full border-white border-[3px] object-cover w-14 h-14"
                    alt=""
                    width={56}
                    height={56}
                    objectFit="cover"
                  />

                  <div className="flex flex-col">
                    <b>56 Houses</b>
                    <small className="text-[#68799F] leading-5 text-xs">
                      Sold Monthly
                    </small>
                  </div>
                </div>

                <div className="flex bg-white p-6 rounded-[32px] items-center gap-4">
                  <Image
                    src="/assets/user-4.png"
                    width={56}
                    height={56}
                    className="rounded-full border-white border-[3px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <b>1K+ People</b>
                    <small className="text-[#68799F] leading-5 text-xs">
                      Successfully Getting Home
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommend section */}
        <div className="flex flex-col mx-32 gap-10">
          <div className="flex justify-between items-center">
            {/* Title */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <hr className="w-8 bg-[#F59E0B] h-1" />
                <span className="text-[#F59E0B] font-medium leading-5 text-sm">
                  Our Recommendation
                </span>
              </div>
              <h1 className="font-semibold text-[32px] leading-10 text-[#1B1C57]">
                Featured House
              </h1>
            </div>
            {/* House type */}
            <div className="flex gap-8">
              <div className="flex text-[#10B981] bg-[#D1FAE5]  px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center">
                <FontAwesomeIcon
                  icon={faHouse}
                  fixedWidth
                  width={24}
                  height={24}
                />
                <button className="font-medium text-lg leading-7  ">
                  House
                </button>
              </div>

              <div className="flex text-[#888B97] border border-[#E0E3EB]  px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center">
                <FontAwesomeIcon
                  icon={faHouse}
                  fixedWidth
                  width={24}
                  height={24}
                />
                <button className="font-medium text-lg leading-7">Villa</button>
              </div>

              <div className="flex text-[#888B97] border border-[#E0E3EB]  px-6 py-3 rounded-[32px] gap-2 cursor-pointer items-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  fixedWidth
                  width={24}
                  height={24}
                />
                <button className="font-medium text-lg leading-7  ">
                  Apartment
                </button>
              </div>
            </div>
            {/* Arrow Left/Right */}
            <div className="flex gap-4">
              <div
                className="px-4 py-3 rounded-[32px] bg-[#E0E3EB] cursor-pointer"
                onClick={() => {
                  scrollRight();
                }}
              >
                <FontAwesomeIcon
                  fixedWidth
                  icon={faChevronLeft}
                  className=" text-black"
                  width={20}
                  height={20}
                />
              </div>

              <div
                className="px-4 py-3 rounded-[32px] bg-[#10B981] cursor-pointer"
                onClick={() => {
                  scrollLeft();
                }}
              >
                <FontAwesomeIcon
                  width={20}
                  height={20}
                  fixedWidth
                  icon={faChevronRight}
                  className=" text-white"
                />
              </div>
            </div>
          </div>

          <HouseList>
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house1.png"}
              user_image={"/assets/user-1.png"}
            />
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house2.png"}
              user_image={"/assets/user-2.png"}
            />
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house3.png"}
              user_image={"/assets/user-3.png"}
            />
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house4.png"}
              user_image={"/assets/user-4.png"}
            />
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house1.png"}
              user_image={"/assets/user-1.png"}
            />
            <House
              user_name={"Sofia"}
              user_location={"Kim Giang, Hanoi"}
              house_price={"$ 35.000.000"}
              house_name={"Roselands House"}
              house_image={"/assets/house1.png"}
              user_image={"/assets/user-1.png"}
            />
          </HouseList>
        </div>

        {/* Contact To Sell Section */}
        <div className="flex mx-32  justify-between">
          {/* Left */}
          <div className="flex flex-col w-[524px]">
            <div className="flex items-center gap-2 mb-3">
              <hr className="w-8 bg-[#F59E0B] h-1" />
              <span className="text-[#F59E0B] font-medium leading-5 text-sm">
                Ready To Sell!
              </span>
            </div>
            <h1 className="font-semibold text-[32px] leading-10 text-[#1B1C57] mb-4">
              Let’s tour and see our house!
            </h1>
            <small className="text-[#626687] text-base leading-7 opacity-75 mb-4">
              Houses recommended by our partners that have
              <br />
              been curated to become the home of your dreams!
            </small>
            <div className="flex flex-col  gap-4">
              <b className="leading-7 text-[#1B1C57] opacity-75 text-base">
                House Detail
              </b>
              <div className="flex w-96 justify-between items-center">
                <div className="flex gap-4 text-[#3C4563] leading-5 w-48">
                  <FontAwesomeIcon
                    icon={faBed}
                    fixedWidth
                    width={32}
                    height={32}
                  />
                  <b>4 Bedrooms</b>
                </div>
                <div className="flex gap-4 text-[#3C4563] leading-5 w-48">
                  <FontAwesomeIcon
                    icon={faBath}
                    fixedWidth
                    width={32}
                    height={32}
                  />
                  <b>2 Bathrooms</b>
                </div>
              </div>
              <div className="flex w-96 justify-between items-center">
                <div className="flex gap-4 text-[#3C4563] leading-5 w-48">
                  <FontAwesomeIcon
                    icon={faWarehouse}
                    fixedWidth
                    width={32}
                    height={32}
                  />
                  <b>1 Carport</b>
                </div>
                <div className="flex gap-4 text-[#3C4563] leading-5 w-48">
                  <FontAwesomeIcon
                    icon={faStairs}
                    fixedWidth
                    width={32}
                    height={32}
                  />
                  <b>2 Floors</b>
                </div>
              </div>
            </div>
            <div className="my-8"></div>
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <Image
                  src="/assets/user-3.png"
                  alt=""
                  className="object-cover rounded-full w-14 h-14"
                  objectFit="cover"
                  width={56}
                  height={56}
                />
                <div className="flex flex-col gap-1">
                  <b className="text-[#0E1735] text-lg leading-6">
                    Dianne Russell
                  </b>
                  <small className="text-[#888B97] leading-6 text-base">
                    Manager Director
                  </small>
                </div>
              </div>
              <div className="bg-[#10B981] rounded-[32px] flex gap-4 px-4 py-3 items-center cursor-pointer">
                <FontAwesomeIcon
                  icon={faPhone}
                  fixedWidth
                  className="text-white"
                  width={24}
                  height={24}
                />
                <b className="leading-[22px] text-sm text-white">Contact Now</b>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex relative w-[528px] h-[459px] z-20">
            <Image
              src="/assets/house4.png"
              alt=""
              className="object-cover w-[488px] h-[416px] rounded-lg absolute right-0"
              objectFit="cover"
              width={488}
              height={416}
            />
            <div className="flex gap-3 absolute bottom-0 mr-3">
              <Image
                src="/assets/chair1.png"
                alt=""
                className="w-[296px] h-[168px] rounded-md"
                objectFit="cover"
                width={296}
                height={168}
              />
              <Image
                src="/assets/decor1.png"
                alt=""
                className="w-24 h-20 self-end rounded-md"
                objectFit="cover"
                width={96}
                height={80}
              />
              <Image
                src="/assets/decor2.png"
                alt=""
                className="w-24 h-20 self-end rounded-md"
                objectFit="cover"
                width={96}
                height={80}
              />
            </div>
          </div>
          <Image
            src="/assets/colorblur2.png"
            alt=""
            className="absolute top-[1452px] -right-40 w-[553px] h-[560px] "
            objectFit="cover"
            width={553}
            height={560}
          />
        </div>

        {/* Review  Section */}
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center items-center">
            <hr className="w-8 h-1 bg-[#F59E0B] mb-2" />
            <span className="text-[#F59E0B] text-sm leading-[18px]">
              See Our Review
            </span>
            <b className="text-[32px] leading-10 mb-10">
              What Our User Say About Us
            </b>
            <div className="flex w-full mb-8 houseReview scroll-smooth overflow-hidden items-center ">
              <div className="flex gap-14 ">
                <HouseReview classname={"house1"} />
                <HouseReview classname={"house2"} />
                <HouseReview classname={"house3"} />
              </div>
            </div>
            <div className="flex gap-4 pagenation">
              <div
                className={`${
                  pagenation === 1 ? `bg-[#3C4563]` : `bg-[#E0E3EB]`
                } rounded-full w-2 h-2 cursor-pointer  pagenation-2 duration-300 transition-all`}
                onClick={() => {
                  setPagenation(1);
                }}
              ></div>
              <div
                className={`${
                  pagenation === 2 ? `bg-[#3C4563]` : `bg-[#E0E3EB]`
                } rounded-full w-2 h-2 cursor-pointer  pagenation-2 duration-300 transition-all`}
                onClick={() => {
                  setPagenation(2);
                }}
              ></div>
              <div
                className={`${
                  pagenation === 3 ? `bg-[#3C4563]` : `bg-[#E0E3EB]`
                } rounded-full w-2 h-2 cursor-pointer  pagenation-2 duration-300 transition-all`}
                onClick={() => {
                  setPagenation(3);
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Tips And Trick Section */}
        <div className="flex flex-col mx-32 ">
          <Image
            src="/assets/colorblur3.png"
            alt=""
            className="absolute -z-10  -left-96 top-[2730px]"
            objectFit="cover"
            width={552}
            height={695}
          />
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <hr className=" bg-[#F59E0B] w-8 h-1" />
              <span className="text-[#F59E0B] text-sm leading-[18px]">
                See tips and trick from our partnership
              </span>
            </div>
            <b className="text-[32px] leading-10 text-center">
              Find Out More About
              <br />
              Selling And Buying Homes
            </b>
            <div className="bg-[#10B981] px-4 py-3 font-bold text-white rounded-[32px] cursor-pointer">
              More Artikel
            </div>
          </div>

          <div className="flex w-full gap-16">
            <div className="flex flex-col gap-10 grow">
              <div className="flex gap-8 items-center">
                <Image
                  alt=""
                  src="/assets/house1.png"
                  className="rounded-2xl w-[200px] h-[144px]"
                  width={200}
                  height={144}
                  objectFit="cover"
                />
                <div className="flex flex-col gap-4 w-[340px]">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/assets/user-1.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-full"
                      width={32}
                      height={32}
                      objectFit="cover"
                    />
                    <span className="text-[#3C4563] text-sm leading-[22px]">
                      Dianne Russell
                    </span>
                  </div>
                  <b className="text-lg leading-8 text-[#1B1C57]">
                    The Things We Need To Check When We Want To Buy A House
                  </b>
                  <div className="flex items-center text-[#888B97] gap-3">
                    <FontAwesomeIcon
                      icon={faClock}
                      fixedWidth
                      width={24}
                      height={24}
                    />
                    <small className="leading-6 text-sm">
                      4 min read | 25 Apr 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-center">
                <Image
                  alt=""
                  src="/assets/house2.png"
                  className="rounded-2xl w-[200px] h-[144px]"
                  width={200}
                  height={144}
                  objectFit="cover"
                />
                <div className="flex flex-col gap-4 w-[340px]">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/assets/user-2.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-full"
                      objectFit="cover"
                      width={32}
                      height={32}
                    />
                    <span className="text-[#3C4563] text-sm leading-[22px]">
                      Courtney Henry
                    </span>
                  </div>
                  <b className="text-lg leading-8 text-[#1B1C57]">
                    7 Ways to distinguish the quality of the house we want to
                    buy
                  </b>
                  <div className="flex items-center text-[#888B97] gap-3">
                    <FontAwesomeIcon
                      icon={faClock}
                      fixedWidth
                      width={24}
                      height={24}
                    />
                    <small className="leading-6 text-sm">
                      6 min read | 24 Apr 2021
                    </small>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-center">
                <Image
                  alt=""
                  src="/assets/house3.png"
                  className="rounded-2xl w-[200px] h-[144px]"
                  objectFit="cover"
                  width={200}
                  height={144}
                />
                <div className="flex flex-col gap-4 w-[340px]">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/assets/user-3.png"
                      alt=""
                      className="w-8 h-8 object-cover rounded-full"
                      objectFit="cover"
                      width={32}
                      height={32}
                    />
                    <span className="text-[#3C4563] text-sm leading-[22px]">
                      Darlene Robertson
                    </span>
                  </div>
                  <b className="text-lg leading-8 text-[#1B1C57]">
                    The best way to know the quality of the house we want to buy
                  </b>
                  <div className="flex items-center text-[#888B97] gap-3">
                    <FontAwesomeIcon
                      icon={faClock}
                      fixedWidth
                      width={24}
                      height={24}
                    />
                    <small className="leading-6 text-sm">
                      2 min read | 24 Apr 2021
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8 items-center flex-col w-[560px]">
              <Image
                alt=""
                src="/assets/house1.png"
                className="rounded-2xl w-[560px] h-[280px] object-cover"
                objectFit="cover"
                width={560}
                height={280}
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/user-3.png"
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                    objectFit="cover"
                    width={32}
                    height={32}
                  />
                  <span className="text-[#3C4563] text-sm leading-[22px]">
                    Darlene Robertson
                  </span>
                </div>
                <b className="text-2xl leading-8 text-[#1B1C57]">
                  12 Things To Know Before Buying A House
                </b>
                <small className="leading-6 text-sm text-[#626687]">
                  Want to buy a house but are unsure about what we should know,
                  here I will try to explain what we should know and check when
                  we want to buy a house
                </small>
                <div className="flex items-center text-[#888B97] gap-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    fixedWidth
                    width={24}
                    height={24}
                  />
                  <small className="leading-6 text-sm">
                    2 min read | 24 Apr 2021
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex items-center mx-32 relative">
          <Image
            src="/assets/Group 14.png"
            alt=""
            className="h-80 rounded-[32px] min-w-full"
            width={1200}
            height={320}
            objectFit="cover"
          />
          <div className="flex flex-col gap-8 absolute items-center w-full">
            <b className="text-[32px] leading-10 text-center">
              Subscribe For More Info
              <br />
              And Update From Hounter
            </b>
            <div className="bg-white flex items-center p-1 pl-6 rounded-[32px] gap-4 w-[496px]">
              <FontAwesomeIcon
                icon={faMailBulk}
                fixedWidth
                width={24}
                height={24}
                className="text-blue-500"
              />
              <input
                placeholder="Your email here"
                className="text-[#888B97] leading-[22px]  text-sm grow outline-none bg-transparent"
              />
              <div className="rounded-[32px] bg-[#10B981] px-4 py-3 gap-1 items-center justify-center font-bold text-white cursor-pointer">
                Subscribe Now
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex mx-32 justify-between mb-32">
          {/* Bio */}
          <div className="flex flex-col w-80 gap-4">
            <Image
              src="/assets/Logo.png"
              alt=""
              objectFit="cover"
              width={115}
              height={36}
            />
            <small className="text-[#626687] opacity-75">
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </small>
            <div className="flex items-center gap-6">
              <Image
                src="/assets/facebook.png"
                alt=""
                className="cursor-pointer"
                objectFit="cover"
                width={32}
                height={32}
              />
              <Image
                src="/assets/twitter.png"
                alt=""
                className="cursor-pointer"
                objectFit="cover"
                width={32}
                height={32}
              />
              <Image
                src="/assets/instagram.png"
                alt=""
                className="cursor-pointer"
                objectFit="cover"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex gap-20">
            {/* Property */}
            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Property</b>
              <div className="flex flex-col gap-5">
                {" "}
                <small className="text-[#888B97] text-sm leading-5">
                  House
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Apartment
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Villa
                </small>
              </div>
            </div>

            {/* Article */}
            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Article</b>
              <div className="flex flex-col gap-5">
                <small className="text-[#888B97] text-sm leading-5">
                  New Article
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Popular Article
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Most Read
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  Tips & Tricks
                </small>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <b className="text-lg leading-5 mb-6">Contact</b>
              <div className="flex flex-col gap-5">
                <small className="text-[#888B97] text-sm leading-5">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  (671) 555-0110
                </small>
                <small className="text-[#888B97] text-sm leading-5">
                  info@hounter.com
                </small>
              </div>
            </div>
          </div>
          <Image
            src="/assets/colorblur3.png"
            alt=""
            className="absolute  -right-60 bottom-0 rotate-90  top-[4100px] -z-10"
            objectFit="cover"
            width={438}
            height={494}
          />
        </footer>
      </div>
    </main>
  );
}
