import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["S", "S", "M", "T", "W ", "T", "F"],
                datasets: [
                    {
                        data: [8, 12, 6, 15, 12, 6, 12],
                        backgroundColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
                    },
                    {
                        data: [10, 14, 3, 12, 6, 10, 14],
                        backgroundColor: [],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
                    },
                ],
            },

            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 20,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            barThickness: 6,
                            barPercentage: 1.0,
                            categoryPercentage: 1.0,
                        },
                    ],
                },
            },
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                 
                <div className="max-w-xs sm:max-w-sm w-full bg-white shadow-md  dark:bg-gray-800 rounded">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col sm:pr-56 pr-10">
                                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100">Goodbank</p>
                                <p className="text-xs font-semibold leading-3 pt-1 text-gray-500 dark:text-gray-100">USD</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27" fill="none">
                                <rect width={27} height={27} rx="13.5" fill="#4338CA" />
                                <path
                                    d="M14 6.5C12.8229 6.5 11.7292 6.79688 10.7188 7.39062C9.73958 7.96354 8.96354 8.73958 8.39062 9.71875C7.79688 10.7292 7.5 11.8229 7.5 13C7.5 14.1771 7.79688 15.2708 8.39062 16.2812C8.96354 17.2604 9.73958 18.0365 10.7188 18.6094C11.7292 19.2031 12.8229 19.5 14 19.5C15.1771 19.5 16.2708 19.2031 17.2812 18.6094C18.2604 18.0365 19.0365 17.2604 19.6094 16.2812C20.2031 15.2708 20.5 14.1771 20.5 13C20.5 11.8229 20.2031 10.7292 19.6094 9.71875C19.0365 8.73958 18.2604 7.96354 17.2812 7.39062C16.2708 6.79688 15.1771 6.5 14 6.5ZM13.4375 7.53125C13.4479 7.53125 13.4583 7.53125 13.4688 7.53125H13.5V13.2031L13.6406 13.3594L17.5312 17.2344C17.0521 17.6406 16.5104 17.9531 15.9062 18.1719C15.3021 18.3906 14.6667 18.5 14 18.5C13 18.5 12.0729 18.25 11.2188 17.75C10.3958 17.2604 9.73958 16.6042 9.25 15.7812C8.75 14.9271 8.5 14 8.5 13C8.5 12.0625 8.71875 11.1875 9.15625 10.375C9.59375 9.58333 10.1875 8.9375 10.9375 8.4375C11.6875 7.92708 12.5208 7.625 13.4375 7.53125ZM14.5 7.53125C15.3646 7.61458 16.1615 7.88542 16.8906 8.34375C17.6198 8.79167 18.2083 9.38021 18.6562 10.1094C19.1146 10.8385 19.3854 11.6354 19.4688 12.5H14.5V7.53125ZM15.2188 13.5H19.4688C19.4167 14.0729 19.2865 14.6198 19.0781 15.1406C18.8698 15.651 18.5885 16.1146 18.2344 16.5312L15.2188 13.5Z"
                                    fill="#FAFBFF"
                                />
                            </svg>
                        </div>
                        <p className="text-xs leading-3 text-gray-800 dark:text-gray-100 pt-6">Balance</p>
                        <p className="sm:text-3xl text-2xl font-semibold pt-1 leading-7 text-gray-800 dark:text-gray-100">$964.45</p>
                    </div>
                    <div>
                        <div>
                            <canvas id="myChart" />
                        </div>
                    </div>
                    <div className="p-4 flex items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                                <path d="M5 0.046875L4.64062 0.390625L0.390625 4.64062L1.10938 5.35938L4.5 1.96875V12H5.5V1.96875L8.89062 5.35938L9.60938 4.64062L5.35938 0.390625L5 0.046875Z" fill="#047857" />
                            </svg>
                            <p className="text-xs font-semibold leading-3 pl-2 text-gray-800 dark:text-gray-100">3455.30</p>
                        </div>
                        <div className="flex items-center pl-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12" fill="none">
                                <path d="M4.5 0V10.0312L1.10938 6.64062L0.390625 7.35938L4.64062 11.6094L5 11.9531L5.35938 11.6094L9.60938 7.35938L8.89062 6.64062L5.5 10.0312V0H4.5Z" fill="#B91C1C" />
                            </svg>
                            <p className="text-xs font-semibold leading-3 pl-2 text-gray-800 dark:text-gray-100">2840.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
