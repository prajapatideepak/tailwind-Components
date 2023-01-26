import React, { useEffect } from "react";
import Head from 'next/head'

function MyApp() {
    useEffect(() => {
        Chart.pluginService.register({
            afterUpdate: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (chart.outerRadius + chart.innerRadius) / 2,
                        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
                        backgroundColor: arc._model.backgroundColor,
                    };
                }
            },

            afterDraw: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var ctx = chart.chart.ctx;
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    var startAngle = Math.PI / 2 - arc._view.startAngle;
                    var endAngle = Math.PI / 2 - arc._view.endAngle;

                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    console.log(arc.round.startAngle);
                    ctx.fillStyle = arc.round.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            },
        });

        var config = {
            type: "doughnut",
            data: {
                labels: ["Restless", "Awake"],
                datasets: [
                    {
                        data: [20, 80],
                        backgroundColor: ["#4338CA", "#DBEAFE"],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                hover: { mode: null },
                elements: {
                    arc: {
                        roundedCornersFor: 0,
                    },
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 88,
            },
        };
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, config);
    });

    return (
        <>
            <div className="md:flex justify-between w-full ">
                <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

                </Head>
                <div className="h-full relative">
                    <div className="2xl:pl-20 pl-8 pt-8 lg:flex hidden items-center border-gray-200 border-b">
                        <div className="pb-7">
                            <svg width={121} height={16} viewBox="0 0 121 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.233 7.72727C13.233 3.07528 10.4489 0.255681 6.68466 0.255681C2.90625 0.255681 0.129261 3.07528 0.129261 7.72727C0.129261 12.3722 2.90625 15.1989 6.68466 15.1989C10.4489 15.1989 13.233 12.3793 13.233 7.72727ZM11.0597 7.72727C11.0597 11.2713 9.18466 13.196 6.68466 13.196C4.17756 13.196 2.30966 11.2713 2.30966 7.72727C2.30966 4.18324 4.17756 2.25852 6.68466 2.25852C9.18466 2.25852 11.0597 4.18324 11.0597 7.72727ZM25.131 4.09091H22.8512L20.0955 12.4858H19.9819L17.2191 4.09091H14.9393L18.9023 15H21.1751L25.131 4.09091ZM31.3313 15.2202C34.4066 15.2202 36.4165 12.9688 36.4165 9.59517C36.4165 6.20028 34.4066 3.94886 31.3313 3.94886C28.256 3.94886 26.2461 6.20028 26.2461 9.59517C26.2461 12.9688 28.256 15.2202 31.3313 15.2202ZM31.3384 13.4375C29.3285 13.4375 28.391 11.6832 28.391 9.58807C28.391 7.5 29.3285 5.72443 31.3384 5.72443C33.3342 5.72443 34.2717 7.5 34.2717 9.58807C34.2717 11.6832 33.3342 13.4375 31.3384 13.4375ZM40.9105 8.52273C40.9105 6.78267 41.9759 5.78835 43.4531 5.78835C44.8949 5.78835 45.7685 6.73295 45.7685 8.31676V15H47.892V8.06108C47.892 5.36222 46.4077 3.94886 44.1776 3.94886C42.5369 3.94886 41.4645 4.70881 40.9602 5.86648H40.8253V4.09091H38.7869V15H40.9105V8.52273ZM50.9105 15H53.1051V9.49574H56.0881C56.1378 9.49574 56.1804 9.49574 56.2301 9.49574L59.1847 15H61.6847L58.4602 9.11222C60.2429 8.4517 61.1307 6.96733 61.1307 5.0142C61.1307 2.33665 59.4688 0.454545 56.0952 0.454545H50.9105V15ZM53.1051 7.60653V2.33665H55.8608C58.027 2.33665 58.9219 3.36648 58.9219 5.0142C58.9219 6.65483 58.027 7.60653 55.8892 7.60653H53.1051ZM70.5412 10.4759C70.5483 12.3295 69.1705 13.2102 67.9773 13.2102C66.6634 13.2102 65.7543 12.2585 65.7543 10.7741V4.09091H63.6307V11.0298C63.6307 13.7358 65.1151 15.142 67.2102 15.142C68.8509 15.142 69.9659 14.2756 70.4702 13.1108H70.5838V15H72.6719V4.09091H70.5412V10.4759ZM80.2269 15.2202C82.6062 15.2202 84.2894 14.0483 84.7724 12.2727L82.7624 11.9105C82.3789 12.9403 81.4556 13.4659 80.2482 13.4659C78.43 13.4659 77.2085 12.2869 77.1516 10.1847H84.9073V9.43182C84.9073 5.49006 82.5494 3.94886 80.0778 3.94886C77.038 3.94886 75.0352 6.2642 75.0352 9.61648C75.0352 13.0043 77.0096 15.2202 80.2269 15.2202ZM77.1587 8.59375C77.244 7.04545 78.3661 5.70312 80.092 5.70312C81.7397 5.70312 82.8192 6.92472 82.8263 8.59375H77.1587ZM91.3473 15.2131C93.3359 15.2131 94.1172 13.9986 94.5007 13.3026H94.6783V15H96.7521V0.454545H94.6286V5.85938H94.5007C94.1172 5.18466 93.3928 3.94886 91.3615 3.94886C88.7266 3.94886 86.7876 6.02983 86.7876 9.56676C86.7876 13.0966 88.6982 15.2131 91.3473 15.2131ZM91.8161 13.402C89.9197 13.402 88.9325 11.733 88.9325 9.54545C88.9325 7.37926 89.8984 5.75284 91.8161 5.75284C93.6697 5.75284 94.6641 7.26562 94.6641 9.54545C94.6641 11.8395 93.6484 13.402 91.8161 13.402ZM104.485 15.2202C106.864 15.2202 108.547 14.0483 109.03 12.2727L107.02 11.9105C106.637 12.9403 105.713 13.4659 104.506 13.4659C102.688 13.4659 101.466 12.2869 101.409 10.1847H109.165V9.43182C109.165 5.49006 106.807 3.94886 104.336 3.94886C101.296 3.94886 99.293 6.2642 99.293 9.61648C99.293 13.0043 101.267 15.2202 104.485 15.2202ZM101.417 8.59375C101.502 7.04545 102.624 5.70312 104.35 5.70312C105.998 5.70312 107.077 6.92472 107.084 8.59375H101.417ZM113.645 8.52273C113.645 6.78267 114.71 5.78835 116.188 5.78835C117.629 5.78835 118.503 6.73295 118.503 8.31676V15H120.626V8.06108C120.626 5.36222 119.142 3.94886 116.912 3.94886C115.271 3.94886 114.199 4.70881 113.695 5.86648H113.56V4.09091H111.521V15H113.645V8.52273Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center 2xl:ml-24 ml-16">
                            <p className="text-base font-bold border-b-2 pb-7 border-indigo-700 cursor-pointer mr-10 leading-4 text-indigo-700">01.About you</p>
                            <p className="text-base font-medium border-b-2 pb-7 border-transparent hover:border-indigo-700 cursor-pointer mr-10 leading-4 text-gray-800">02.Position</p>
                            <p className="text-base font-medium border-b-2 pb-7 border-transparent hover:border-indigo-700 cursor-pointer mr-10 leading-4 text-gray-800">03.Work</p>
                            <p className="text-base font-medium border-b-2 pb-7 border-transparent hover:border-indigo-700 cursor-pointer mr-10 leading-4 text-gray-800">04.Demographic</p>
                            <p className="text-base font-medium border-b-2 pb-7 border-transparent hover:border-indigo-700 cursor-pointer leading-4 text-gray-800">05.Essay</p>
                        </div>
                    </div>
                    <div className="2xl:p-20 p-8">
                        <p className="md:w-96 md:text-3xl text-xl md:text-left text-center font-semibold leading-10 text-gray-800">Select the category that best describe you.</p>
                        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center md:justify-start w-full justify-center">
                            <div className="flex flex-col items-center bg-white shadow rounded-lg py-10 px-14 relative">
                                <svg width={84} height={84} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graduate Cap Logo">
                                    <path d="M77 31.5L42 17.5L7 31.5L42 45.5L77 31.5ZM77 31.5V52.5" stroke="#4338CA" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 37.1V56C21 58.7848 23.2125 61.4555 27.1508 63.4246C31.089 65.3938 36.4305 66.5 42 66.5C47.5695 66.5 52.911 65.3938 56.8492 63.4246C60.7875 61.4555 63 58.7848 63 56V37.1" stroke="#4338CA" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xl font-medium leading-5 mt-10 text-gray-800 text-center">Teacher</p>
                                <div className="w-10 h-10 bg-indigo-700 shadow rounded-tr rounded-br absolute top-0 right-0 flex items-center justify-center">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white hover:shadow cursor-pointer py-10 px-14 md:mt-0 mt-4">
                                <svg width={84} height={84} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="book logo">
                                    <path d="M10.5 66.5C15.2886 63.7353 20.7206 62.2798 26.25 62.2798C31.7794 62.2798 37.2114 63.7353 42 66.5C46.7886 63.7353 52.2206 62.2798 57.75 62.2798C63.2794 62.2798 68.7114 63.7353 73.5 66.5" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 21C15.2886 18.2353 20.7206 16.7798 26.25 16.7798C31.7794 16.7798 37.2114 18.2353 42 21C46.7886 18.2353 52.2206 16.7798 57.75 16.7798C63.2794 16.7798 68.7114 18.2353 73.5 21" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 21V66.5" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M42 21V66.5" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M73.5 21V66.5" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">Student</p>
                            </div>
                            <div className="flex flex-col items-center bg-white hover:shadow cursor-pointer py-10 px-14 md:mt-0 mt-4">
                                <svg width={84} height={84} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molecule logo">
                                    <path d="M44.8455 58.779L64.75 64.75M19.25 19.25L25.221 39.1475L19.25 19.25Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.8906 43.1095L64.7501 19.25" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.25 24.5C22.1495 24.5 24.5 22.1495 24.5 19.25C24.5 16.3505 22.1495 14 19.25 14C16.3505 14 14 16.3505 14 19.25C14 22.1495 16.3505 24.5 19.25 24.5Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M64.75 24.5C67.6495 24.5 70 22.1495 70 19.25C70 16.3505 67.6495 14 64.75 14C61.8505 14 59.5 16.3505 59.5 19.25C59.5 22.1495 61.8505 24.5 64.75 24.5Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M64.75 70C67.6495 70 70 67.6495 70 64.75C70 61.8505 67.6495 59.5 64.75 59.5C61.8505 59.5 59.5 61.8505 59.5 64.75C59.5 67.6495 61.8505 70 64.75 70Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29.75 70C38.4485 70 45.5 62.9485 45.5 54.25C45.5 45.5515 38.4485 38.5 29.75 38.5C21.0515 38.5 14 45.5515 14 54.25C14 62.9485 21.0515 70 29.75 70Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">Scientist</p>
                            </div>
                            <div className="flex flex-col items-center bg-white hover:shadow cursor-pointer py-10 px-14 xl:mt-0">
                                <svg width={84} height={84} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="speaker logo" role="img">
                                    <path d="M63 28C65.7848 28 68.4555 29.1062 70.4246 31.0754C72.3938 33.0445 73.5 35.7152 73.5 38.5C73.5 41.2848 72.3938 43.9555 70.4246 45.9246C68.4555 47.8938 65.7848 49 63 49" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M35 28V66.5C35 67.4283 34.6313 68.3185 33.9749 68.9749C33.3185 69.6313 32.4283 70 31.5 70H28C27.0717 70 26.1815 69.6313 25.5251 68.9749C24.8687 68.3185 24.5 67.4283 24.5 66.5V49" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M42 28L57.834 14.805C58.2941 14.4218 58.8539 14.1776 59.4478 14.1012C60.0416 14.0247 60.645 14.1191 61.1872 14.3733C61.7293 14.6275 62.1878 15.0309 62.5089 15.5363C62.8299 16.0417 63.0003 16.6282 63 17.227V59.773C63.0003 60.3718 62.8299 60.9583 62.5089 61.4637C62.1878 61.9691 61.7293 62.3725 61.1872 62.6267C60.645 62.8809 60.0416 62.9753 59.4478 62.8988C58.8539 62.8224 58.2941 62.5782 57.834 62.195L42 49H14C13.0717 49 12.1815 48.6312 11.5251 47.9749C10.8687 47.3185 10.5 46.4283 10.5 45.5V31.5C10.5 30.5717 10.8687 29.6815 11.5251 29.0251C12.1815 28.3687 13.0717 28 14 28H42"
                                        stroke="#4B5563"
                                        strokeWidth="5.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">Speaker</p>
                            </div>
                            <div className="flex flex-col items-center bg-white hover:shadow cursor-pointer py-10 px-14 2xl:mt-0 ">
                                <svg className="mt-1" width={84} height={84} viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="badge logo">
                                    <path d="M42 52.5C53.598 52.5 63 43.098 63 31.5C63 19.902 53.598 10.5 42 10.5C30.402 10.5 21 19.902 21 31.5C21 43.098 30.402 52.5 42 52.5Z" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M42.0068 52.5117L53.9068 73.1231L59.5001 61.8109L72.0934 62.6231L60.1934 42.0117" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.8066 42.0117L11.9066 62.6231L24.4999 61.8109L30.0932 73.1231L41.9932 52.5117" stroke="#4B5563" strokeWidth="5.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">Reader</p>
                            </div>
                        </div>
                        <div className="md:flex hidden items-center w-full justify-between md:mt-10 xl:mt-44">
                            <button className="flex items-center p-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:text-gray-700 text-gray-800">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 16L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 8L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-base font-medium leading-4 ml-3 text-center">Back</span>
                            </button>
                            <button className="flex items-center bg-indigo-700 rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">
                                <span className="text-base font-medium leading-4 pr-7 text-center text-white">Conitnue</span>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 16L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 8L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white md:w-72 h-full relative flex flex-col  items-center justify-center w-full md:px-3 md:pt-0 pt-4 md:pb-24 pb-4 md:pt-40 lg:pt-0">
                    <div className="flex flex-col items-center md:mt-72 xl:mt-64 mt-12 justify-center">
                        <div className="mt- relative w-44 h-44 z-10 flex items-center h-full justify-center">
                            <canvas id="myChart" width={176} height={176} className="relative z-10" />
                            <div className="absolute flex flex-col items-center z-0 justify-center">
                                <p className="text-3xl font-semibold text-center text-gray-900">20%</p>
                                <p className="text-base leading-4 pt-2 text-center text-gray-900">Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:mt-80 xl:mt-56 mt-12  px-8 w-full">
                        <p className="text-base font-medium leading-4 text-center text-gray-800">Step</p>
                        <p className="text-base font-medium leading-4 text-center text-gray-800">2/5</p>
                    </div>
                </div>
                <div className="md:hidden flex items-center w-full justify-between py-10 px-4">
                    <button className="flex items-center p-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:text-gray-700 text-gray-800">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 16L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 8L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-base font-medium leading-4 ml-3 text-center">Back</span>
                    </button>
                    <button className="flex items-center bg-indigo-700 rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">
                        <span className="text-base font-medium leading-4 pr-7 text-center text-white">Conitnue</span>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 16L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 8L19 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default MyApp;
