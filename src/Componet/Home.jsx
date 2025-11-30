import { React,useState } from 'react'
import { motion } from "framer-motion";
import 'flowbite';
import "tailwindcss";
import sideimage from '../../public/download.png'
import { Typed } from 'react-typed';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import '../../src/CSS/Home.css'

import "swiper/css";
import "swiper/css/pagination";


const projects = [
    {
        id: 1,
        projectype: 'Client',
        title: "Phenom E cloud",
        category: "React JS",
        img: "/image.png",
        URL: "https://phenomecloud.com"
    },
    {
        id: 2,
        projectype: 'Client',
        title: "Finwickers",
        category: "React Js",
        img: "image2.png",
        URL: "https://finwickers.com/"
    },
    {
        id: 3,
        projectype: 'Client',
        title: "Lexy(Gen AI)",
        category: "React Js",
        img: "image3.png",
        URL: "https://eanalytics.phenomecloud.com/"
    },
    {
        id: 4,
        projectype: 'Personal',
        title: "ShopEasy",
        category: "React JS ",
        img: "image4.png",
        URL: "https://shop-easy-pearl.vercel.app/"
    },

];






const Home = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3, // Delay the start of children animations
                staggerChildren: 0.2 // Delay between each child
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <nav className="fixed z-50 bg-gray-800 w-full">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className=" flex h-16 items-center justify-between">

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <span className="text-blue-600">Ashribad Prusty</span>
                            </div>
                            <div className="sm:block ml-auto">
                                <div className="flex space-x-6">
                                    <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Homes </a>
                                    <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a>
                                    <a href="#portfolio" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Portfolio</a>
                                    <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>

            <div className='BodyContent   bg-gray-900'>
                <div className=" bg-gray-900 text-white flex items-center p-4 pt-20 mx-auto max-w-7xl  grid grid-cols-1 md:grid-cols-2 gap-1">

                    <div className="max-w-4xl">

                        <motion.h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hi, I'm <span className="text-blue-500">Ashribad Prusty</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-2xl text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            A Front-End Developer who builds clean, modern, and interactive web experiences.
                        </motion.p>

                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition">
                                View Portfolio
                            </button>
                            <button className="px-6 py-3 border border-gray-500 hover:bg-gray-700 rounded-lg font-medium transition">
                                Contact Me
                            </button>
                        </motion.div>

                    </div>

                    <motion.img
                        src={sideimage}
                        alt="developer"
                        className="w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    />
                </div>
            </div>

            <div id="about" className="bg-gray-900 pt-16 text-gray-800 p-4">

                <div className='mx-auto max-w-7xl'>
                    <motion.h2
                        className="text-4xl md:text-5xl text-white font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        About <span className="text-blue-500">Me</span>
                    </motion.h2>

                    <div className="max-w-5xl mx-auto grid grid-cols- text-white md:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    // variants={itemVariants}
                    >

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold mb-4">Hi, I'm Ashribad 👋</h3>

                            <p className="text-lg leading-relaxed">
                                I’m a Frontend Developer with 2+ years of experience, specializing in
                                building responsive, interactive, and user-friendly web applications.
                                I’ve worked extensively with <span className="font-semibold">React, JavaScript, jQuery, HTML, CSS, TailwindCSS, Bootstrap, Angular,</span> and
                                APIs.
                            </p>

                            <p className="text-lg mt-4 leading-relaxed">
                                I focus on creating clean UI, smooth animations, and dashboards that
                                deliver great user experience. I enjoy solving UI problems, building
                                components from scratch, and improving performance & design.
                            </p>

                            <p className="text-lg mt-4 leading-relaxed">
                                I’m always learning, experimenting, and building — passionate about
                                creating meaningful digital experiences.
                            </p>
                        </motion.div>

                        {/* RIGHT SIDE — PHOTO + EFFECT */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">


                                <video className='object-fit-cover w-100 '
                                    autoPlay
                                    loop
                                    muted
                                    playsInline src="/Hailuo_Video_Cinematic close-up of a hooded_449976855530106885.mp4">

                                </video>
                                {/* <img
                                    src="/passport.png"
                                    className="w-full h-full object-cover"
                                /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <div className=" Portfolio py-4 bg-gray-900 pt-16" id="portfolio">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    My <span className="text-blue-500">Portfolio</span>
                </motion.h2>

                <div className="max-w-7xl mx-auto px-6">
                    {/* Tabs */}
                    <ul
                        className="flex flex-wrap justify-center text-white font-medium"
                        id="default-tab"
                        data-tabs-toggle="#default-tab-content"
                        role="tablist"
                    >
                        <li className="me-2" role="presentation">
                            <button
                                className="inline-block p-4 rounded-t-base"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="true"
                            >
                                Client
                            </button>
                        </li>

                        <li className="me-2" role="presentation">
                            <button
                                className="inline-block p-4 rounded-t-base"
                                id="dashboard-tab"
                                data-tabs-target="#dashboard"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected="false"
                            >
                                Personal
                            </button>
                        </li>
                    </ul>

                    {/* TAB CONTENT */}
                    <div id="default-tab-content">
                        {/* CLIENT PROJECTS */}
                        <div
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            className="p-4 rounded-base bg-neutral-secondary-soft"
                        >
                            <section>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                    {projects
                                        .filter((p) => p.projectype === "Client")
                                        .map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-800"
                                            >
                                                <a href={project.URL} target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />

                                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center px-5 text-center">
                                                        <h3 className="text-xl text-white font-semibold mb-3">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-300">{project.category}</p>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        ))}
                                </div>
                            </section>
                        </div>

                        {/* PERSONAL PROJECTS */}
                        <div
                            id="dashboard"
                            role="tabpanel"
                            aria-labelledby="dashboard-tab"
                            className="p-4 rounded-base bg-neutral-secondary-soft">
                            <section>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                    {projects
                                        .filter((p) => p.projectype !== "Client")
                                        .map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-800"
                                            >
                                                <a href={project.URL} target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />

                                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center px-5 text-center">
                                                        <h3 className="text-xl text-white font-semibold mb-3">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-300">{project.category}</p>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" Testimonial bg-gray-900 pt-16 px-20 py-4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },

                    }}
                >
                    <SwiperSlide className=''>
                        <div className="swiper-slide">
                            <div
                                className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">

                                <div className="">
                                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-600">4.9</span>
                                    </div>
                                    <p
                                        className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                        Thanks to pagedone, I feel more informed and confident about my investment decisions
                                        than
                                        ever
                                        before.
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                                        alt="avatar" />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh B.
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div
                                className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">

                                <div className="">
                                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-600">4.9</span>
                                    </div>
                                    <p
                                        className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                        Thanks to pagedone, I feel more informed and confident about my investment decisions
                                        than
                                        ever
                                        before.
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                                        alt="avatar" />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh a.
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div
                                className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">

                                <div className="">
                                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-600">4.9</span>
                                    </div>
                                    <p
                                        className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                        Thanks to pagedone, I feel more informed and confident about my investment decisions
                                        than
                                        ever
                                        before.
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                                        alt="avatar" />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div
                                className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">

                                <div className="">
                                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor" />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-600">4.9</span>
                                    </div>
                                    <p
                                        className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                        Thanks to pagedone, I feel more informed and confident about my investment decisions
                                        than
                                        ever
                                        before.
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                                        alt="avatar" />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh c.
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <section className=" Contact pt-16 bg-gray-900 text-white px-6 py-20 flex items-center justify-center"
                id="contact"
                ref={ref}
            >
                <div className="max-w-4xl w-full">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl font-bold text-center mb-12"
                    >
                        Contact <span className="text-blue-500">Me</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-semibold">Let's Talk</h3>
                            <p className="text-gray-300">
                                Feel free to reach out for collaborations, freelance work,
                                project discussions, or any tech queries.
                            </p>

                            <div className="space-y-2">
                                <p>📧 <span className="text-blue-400">ashiii19996@gmail.com</span></p>
                                <p>📞 <span className="text-blue-400">+91 6370580463</span></p>
                                <p>📍 India</p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex space-x-5 mt-4 text-2xl">
                                <a href="" className="hover:text-blue-400 transition">🌐</a>
                                <a href="#" className="hover:text-blue-400 transition">💼</a>
                                <a href="#" className="hover:text-blue-400 transition">🐱</a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-5"
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring focus:ring-blue-500"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 bg-gray-700 rounded-lg outline-none focus:ring focus:ring-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition"
                            >
                                Send Message
                            </button>
                        </motion.form>

                    </div>
                </div>
            </section>




        </>


    )
}

export default Home

