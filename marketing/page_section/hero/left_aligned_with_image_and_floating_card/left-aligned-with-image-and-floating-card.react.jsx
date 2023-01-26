import React, { useState } from "react";
export default function IndexPage() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <div>
                    <div className="mx-auto container py-12 px-6">
                        <nav className="hidden lg:block">
                            <div className="flex justify-between items-center py-10 lg:pt-20">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={190} height={36} viewBox="0 0 190 36" fill="none">
                                        <path
                                            d="M7.062 20.28C7.062 26.1987 7.384 30.9213 8.028 34.448C7.04667 34.816 6.004 35 4.9 35C3.796 35 2.83 34.6473 2.002 33.942C1.20467 33.2367 0.806 32.2707 0.806 31.044C0.806 29.7867 0.959334 27.4253 1.266 23.96C1.57267 20.4947 1.726 17.8113 1.726 15.91C1.726 11.218 1.404 6.69467 0.76 2.34C3.02933 2.524 6.08067 2.616 9.914 2.616C13.7473 2.616 17.412 2.34 20.908 1.788C21.276 2.46266 21.46 3.27533 21.46 4.226C21.46 5.146 21.092 5.974 20.356 6.71C19.6507 7.41533 18.7613 7.768 17.688 7.768C16.6453 7.768 14.9587 7.61467 12.628 7.308C10.328 7.00133 8.626 6.848 7.522 6.848C7.27667 10.1907 7.12333 13.2573 7.062 16.048C8.84067 16.232 10.8033 16.324 12.95 16.324C15.1273 16.324 17.0133 16.002 18.608 15.358C18.976 16.0327 19.16 16.8453 19.16 17.796C19.16 18.716 18.792 19.5593 18.056 20.326C17.3507 21.062 16.5073 21.43 15.526 21.43C14.5447 21.43 13.134 21.246 11.294 20.878C9.454 20.4793 8.04333 20.28 7.062 20.28ZM43.7402 13.334C42.9122 16.8607 42.4982 20.4027 42.4982 23.96C42.4982 27.4867 42.8968 30.9827 43.6942 34.448C42.5902 34.816 41.4555 35 40.2902 35C39.1248 35 38.3122 34.6627 37.8522 33.988C37.3922 33.2827 37.1622 32.286 37.1622 30.998C37.1622 29.6793 37.3615 27.8853 37.7602 25.616C35.5828 30.2773 33.4822 33.2213 31.4582 34.448C30.5382 35 29.5875 35.276 28.6062 35.276C26.2755 35.276 24.4662 34.4173 23.1782 32.7C21.8902 30.952 21.2462 28.79 21.2462 26.214C21.2462 22.2887 22.3348 18.854 24.5122 15.91C26.6895 12.9353 29.5108 11.448 32.9762 11.448C36.4722 11.448 40.0602 12.0767 43.7402 13.334ZM37.7142 16.094C36.0888 15.6033 34.7088 15.358 33.5742 15.358C31.2742 15.358 29.5568 15.864 28.4222 16.876C27.3795 19.452 26.8582 22.074 26.8582 24.742C26.8582 26.1527 27.0728 27.5787 27.5022 29.02C27.9622 30.4613 28.6522 31.182 29.5722 31.182C30.6455 31.182 32.0255 29.6027 33.7122 26.444C35.3988 23.2853 36.7328 19.8353 37.7142 16.094ZM47.7846 33.39C48.4899 27.2873 48.8426 23.086 48.8426 20.786C48.8426 14.346 48.5819 7.768 48.0606 1.052C48.9806 0.683998 49.9619 0.499997 51.0046 0.499997C52.0472 0.499997 52.9366 0.852664 53.6726 1.558C54.4086 2.26333 54.7766 3.15266 54.7766 4.226C54.7766 6.066 54.5926 9.01 54.2246 13.058C53.8566 17.0753 53.6266 19.7587 53.5346 21.108C56.0492 16.3853 58.5486 13.4413 61.0326 12.276C62.1366 11.724 63.3172 11.448 64.5746 11.448C66.2919 11.448 67.6106 12.3527 68.5306 14.162C69.4812 15.9713 69.9566 18.1793 69.9566 20.786C69.9566 24.9567 68.8219 28.422 66.5526 31.182C64.2832 33.9113 61.3392 35.276 57.7206 35.276C54.1326 35.276 50.8206 34.6473 47.7846 33.39ZM53.3046 30.492C54.5312 30.952 55.9879 31.182 57.6746 31.182C59.3612 31.182 60.8179 30.86 62.0446 30.216C63.5472 27.64 64.2986 24.834 64.2986 21.798C64.2986 20.3567 64.1299 18.9613 63.7926 17.612C63.4552 16.232 62.9186 15.542 62.1826 15.542C61.0479 15.542 59.5606 17.106 57.7206 20.234C55.8806 23.362 54.4086 26.7813 53.3046 30.492ZM75.5434 4.962C76.5248 4.47133 77.5214 4.226 78.5334 4.226C79.5454 4.226 80.3581 4.548 80.9714 5.192C81.6154 5.836 81.9374 6.78667 81.9374 8.044C81.9374 9.30133 81.8608 10.7273 81.7074 12.322C84.0074 12.322 86.2001 12 88.2854 11.356C88.6534 11.9693 88.8374 12.69 88.8374 13.518C88.8374 14.3153 88.4694 14.9747 87.7334 15.496C87.0281 15.9867 86.3074 16.232 85.5714 16.232C84.8354 16.232 84.0074 16.14 83.0874 15.956C82.1674 15.772 81.5694 15.6647 81.2934 15.634C81.2628 15.91 81.1708 16.462 81.0174 17.29C80.8948 18.118 80.7874 18.8387 80.6954 19.452C80.4501 21.1387 80.3274 22.948 80.3274 24.88C80.3274 29.0813 81.6921 31.182 84.4214 31.182C85.4334 31.182 86.5988 30.8293 87.9174 30.124C88.3161 30.7067 88.5154 31.458 88.5154 32.378C88.5154 33.298 88.0094 34.0187 86.9974 34.54C86.0161 35.0307 84.8354 35.276 83.4554 35.276C78.0581 35.276 75.3594 32.2093 75.3594 26.076C75.3594 25.1867 75.4821 23.5767 75.7274 21.246C76.0034 18.9153 76.1414 17.0293 76.1414 15.588C74.6694 15.68 73.4888 15.9407 72.5994 16.37C72.2314 15.818 72.0474 15.1893 72.0474 14.484C72.0474 13.748 72.3081 13.15 72.8294 12.69C73.3508 12.1993 73.9948 11.954 74.7614 11.954C75.5281 11.954 76.0341 11.9693 76.2794 12C76.3101 11.7547 76.3254 11.4327 76.3254 11.034C76.3254 8.734 76.0648 6.71 75.5434 4.962ZM96.0379 24.558C96.0379 26.766 96.3905 28.514 97.0959 29.802C97.8012 31.0593 98.9819 31.688 100.638 31.688C102.294 31.688 103.582 31.136 104.502 30.032C105.453 28.8973 105.928 27.5327 105.928 25.938C106.971 25.938 107.875 26.1987 108.642 26.72C109.409 27.2413 109.792 27.962 109.792 28.882C109.792 30.7833 108.78 32.378 106.756 33.666C104.732 34.9233 102.601 35.552 100.362 35.552C96.8659 35.552 94.3359 34.6167 92.7719 32.746C91.2079 30.8447 90.4259 28.0387 90.4259 24.328C90.4259 20.6173 91.4685 17.5047 93.5539 14.99C95.6699 12.4447 98.4759 11.172 101.972 11.172C104.364 11.172 106.281 11.724 107.722 12.828C109.194 13.9013 109.93 15.588 109.93 17.888C109.93 20.1573 108.887 21.8747 106.802 23.04C104.747 24.1747 102.233 24.742 99.2579 24.742C98.2152 24.742 97.1419 24.6807 96.0379 24.558ZM96.0839 20.924C97.0039 21.108 97.9699 21.2 98.9819 21.2C101.19 21.2 103.045 20.786 104.548 19.958C104.732 19.222 104.824 18.6393 104.824 18.21C104.824 17.1367 104.441 16.324 103.674 15.772C102.907 15.22 101.849 14.944 100.5 14.944C99.1812 14.944 97.9852 15.3733 96.9119 16.232C96.3599 17.8267 96.0839 19.3907 96.0839 20.924ZM121.031 34.448C120.08 34.816 119.068 35 117.995 35C116.922 35 116.048 34.7547 115.373 34.264C114.729 33.7427 114.407 33.0373 114.407 32.148C114.407 31.228 114.545 29.572 114.821 27.18C115.097 24.788 115.235 22.4727 115.235 20.234C115.235 17.9647 114.882 15.312 114.177 12.276C115.158 11.908 116.124 11.724 117.075 11.724C118.026 11.724 118.838 12.046 119.513 12.69C120.218 13.334 120.571 14.1927 120.571 15.266C120.571 15.818 120.479 16.646 120.295 17.75C120.111 18.8233 120.004 19.636 119.973 20.188C121.169 17.4587 122.58 15.3273 124.205 13.794C125.861 12.23 127.502 11.448 129.127 11.448C130.262 11.448 131.166 11.8467 131.841 12.644C132.516 13.4413 132.853 14.4533 132.853 15.68C132.853 16.876 132.546 17.8573 131.933 18.624C131.32 19.36 130.553 19.728 129.633 19.728C128.744 19.728 128.023 19.636 127.471 19.452C127.563 19.084 127.609 18.7467 127.609 18.44C127.609 17.1827 127.164 16.554 126.275 16.554C124.926 16.554 123.653 17.9187 122.457 20.648C121.292 23.3467 120.51 25.8767 120.111 28.238C120.264 30.538 120.571 32.608 121.031 34.448ZM135.476 12.138C136.458 11.862 137.439 11.724 138.42 11.724C139.432 11.724 140.291 12.0307 140.996 12.644C141.702 13.2573 142.054 14.0547 142.054 15.036C142.054 15.9867 141.886 17.658 141.548 20.05C141.242 22.4113 141.088 24.2513 141.088 25.57C141.088 29.0047 141.41 31.964 142.054 34.448C141.104 34.816 140.076 35 138.972 35C137.868 35 136.994 34.7547 136.35 34.264C135.706 33.7427 135.384 33.0067 135.384 32.056C135.384 31.0747 135.568 29.48 135.936 27.272C136.304 25.064 136.488 23.2393 136.488 21.798C136.488 17.9647 136.151 14.7447 135.476 12.138ZM136.074 1.742C137.148 1.25133 138.206 1.006 139.248 1.006C140.291 1.006 141.058 1.282 141.548 1.834C142.07 2.35533 142.33 3.13733 142.33 4.18C142.33 5.22267 141.978 6.14267 141.272 6.94C140.598 7.73733 139.708 8.136 138.604 8.136C136.335 8.136 135.2 6.95533 135.2 4.594C135.2 3.55133 135.492 2.60066 136.074 1.742ZM155.389 35.552C152.016 35.552 149.532 34.5707 147.937 32.608C146.342 30.6147 145.545 27.8547 145.545 24.328C145.545 20.7707 146.603 17.6887 148.719 15.082C150.835 12.4753 153.549 11.172 156.861 11.172C163.669 11.172 167.073 15.0053 167.073 22.672C167.073 26.26 165.969 29.3113 163.761 31.826C161.553 34.31 158.762 35.552 155.389 35.552ZM152.077 16.232C151.525 18.0107 151.249 19.7893 151.249 21.568C151.249 23.3467 151.31 24.7267 151.433 25.708C151.556 26.6893 151.786 27.6707 152.123 28.652C152.828 30.6453 154.208 31.642 156.263 31.642C158.348 31.642 159.713 31.09 160.357 29.986C161.032 28.882 161.369 27.18 161.369 24.88C161.369 18.348 159.82 15.082 156.723 15.082C154.944 15.082 153.396 15.4653 152.077 16.232ZM177.453 34.448C176.502 34.816 175.49 35 174.417 35C173.343 35 172.469 34.7547 171.795 34.264C171.151 33.7427 170.829 33.0373 170.829 32.148C170.829 31.228 170.967 29.572 171.243 27.18C171.519 24.788 171.657 22.4727 171.657 20.234C171.657 17.9647 171.304 15.312 170.599 12.276C171.58 11.908 172.546 11.724 173.497 11.724C174.447 11.724 175.26 12.046 175.935 12.69C176.64 13.334 176.993 14.1927 176.993 15.266C176.993 15.818 176.901 16.646 176.717 17.75C176.533 18.8233 176.425 19.636 176.395 20.188C177.591 17.4587 179.001 15.3273 180.627 13.794C182.283 12.23 183.923 11.448 185.549 11.448C186.683 11.448 187.588 11.8467 188.263 12.644C188.937 13.4413 189.275 14.4533 189.275 15.68C189.275 16.876 188.968 17.8573 188.355 18.624C187.741 19.36 186.975 19.728 186.055 19.728C185.165 19.728 184.445 19.636 183.893 19.452C183.985 19.084 184.031 18.7467 184.031 18.44C184.031 17.1827 183.586 16.554 182.697 16.554C181.347 16.554 180.075 17.9187 178.879 20.648C177.713 23.3467 176.931 25.8767 176.533 28.238C176.686 30.538 176.993 32.608 177.453 34.448Z"
                                            fill="#334048"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center text-base font-normal text-gray-800">
                                    <a href="javascript:void(0)">
                                        <div className="mr-20 cursor-pointer">Home</div>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <div className="mr-20 cursor-pointer">About</div>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <div className="mr-20 cursor-pointer">Services</div>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <div className="cursor-pointer">Collections</div>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        {/* Mobile Responsive */}
                        <nav className="lg:hidden">
                            <div className="flex py-2 justify-between items-center px-4">
                                <div className="cursor-pointer">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={85} height={36} viewBox="0 0 190 36" fill="none">
                                            <path
                                                d="M7.062 20.28C7.062 26.1987 7.384 30.9213 8.028 34.448C7.04667 34.816 6.004 35 4.9 35C3.796 35 2.83 34.6473 2.002 33.942C1.20467 33.2367 0.806 32.2707 0.806 31.044C0.806 29.7867 0.959334 27.4253 1.266 23.96C1.57267 20.4947 1.726 17.8113 1.726 15.91C1.726 11.218 1.404 6.69467 0.76 2.34C3.02933 2.524 6.08067 2.616 9.914 2.616C13.7473 2.616 17.412 2.34 20.908 1.788C21.276 2.46266 21.46 3.27533 21.46 4.226C21.46 5.146 21.092 5.974 20.356 6.71C19.6507 7.41533 18.7613 7.768 17.688 7.768C16.6453 7.768 14.9587 7.61467 12.628 7.308C10.328 7.00133 8.626 6.848 7.522 6.848C7.27667 10.1907 7.12333 13.2573 7.062 16.048C8.84067 16.232 10.8033 16.324 12.95 16.324C15.1273 16.324 17.0133 16.002 18.608 15.358C18.976 16.0327 19.16 16.8453 19.16 17.796C19.16 18.716 18.792 19.5593 18.056 20.326C17.3507 21.062 16.5073 21.43 15.526 21.43C14.5447 21.43 13.134 21.246 11.294 20.878C9.454 20.4793 8.04333 20.28 7.062 20.28ZM43.7402 13.334C42.9122 16.8607 42.4982 20.4027 42.4982 23.96C42.4982 27.4867 42.8968 30.9827 43.6942 34.448C42.5902 34.816 41.4555 35 40.2902 35C39.1248 35 38.3122 34.6627 37.8522 33.988C37.3922 33.2827 37.1622 32.286 37.1622 30.998C37.1622 29.6793 37.3615 27.8853 37.7602 25.616C35.5828 30.2773 33.4822 33.2213 31.4582 34.448C30.5382 35 29.5875 35.276 28.6062 35.276C26.2755 35.276 24.4662 34.4173 23.1782 32.7C21.8902 30.952 21.2462 28.79 21.2462 26.214C21.2462 22.2887 22.3348 18.854 24.5122 15.91C26.6895 12.9353 29.5108 11.448 32.9762 11.448C36.4722 11.448 40.0602 12.0767 43.7402 13.334ZM37.7142 16.094C36.0888 15.6033 34.7088 15.358 33.5742 15.358C31.2742 15.358 29.5568 15.864 28.4222 16.876C27.3795 19.452 26.8582 22.074 26.8582 24.742C26.8582 26.1527 27.0728 27.5787 27.5022 29.02C27.9622 30.4613 28.6522 31.182 29.5722 31.182C30.6455 31.182 32.0255 29.6027 33.7122 26.444C35.3988 23.2853 36.7328 19.8353 37.7142 16.094ZM47.7846 33.39C48.4899 27.2873 48.8426 23.086 48.8426 20.786C48.8426 14.346 48.5819 7.768 48.0606 1.052C48.9806 0.683998 49.9619 0.499997 51.0046 0.499997C52.0472 0.499997 52.9366 0.852664 53.6726 1.558C54.4086 2.26333 54.7766 3.15266 54.7766 4.226C54.7766 6.066 54.5926 9.01 54.2246 13.058C53.8566 17.0753 53.6266 19.7587 53.5346 21.108C56.0492 16.3853 58.5486 13.4413 61.0326 12.276C62.1366 11.724 63.3172 11.448 64.5746 11.448C66.2919 11.448 67.6106 12.3527 68.5306 14.162C69.4812 15.9713 69.9566 18.1793 69.9566 20.786C69.9566 24.9567 68.8219 28.422 66.5526 31.182C64.2832 33.9113 61.3392 35.276 57.7206 35.276C54.1326 35.276 50.8206 34.6473 47.7846 33.39ZM53.3046 30.492C54.5312 30.952 55.9879 31.182 57.6746 31.182C59.3612 31.182 60.8179 30.86 62.0446 30.216C63.5472 27.64 64.2986 24.834 64.2986 21.798C64.2986 20.3567 64.1299 18.9613 63.7926 17.612C63.4552 16.232 62.9186 15.542 62.1826 15.542C61.0479 15.542 59.5606 17.106 57.7206 20.234C55.8806 23.362 54.4086 26.7813 53.3046 30.492ZM75.5434 4.962C76.5248 4.47133 77.5214 4.226 78.5334 4.226C79.5454 4.226 80.3581 4.548 80.9714 5.192C81.6154 5.836 81.9374 6.78667 81.9374 8.044C81.9374 9.30133 81.8608 10.7273 81.7074 12.322C84.0074 12.322 86.2001 12 88.2854 11.356C88.6534 11.9693 88.8374 12.69 88.8374 13.518C88.8374 14.3153 88.4694 14.9747 87.7334 15.496C87.0281 15.9867 86.3074 16.232 85.5714 16.232C84.8354 16.232 84.0074 16.14 83.0874 15.956C82.1674 15.772 81.5694 15.6647 81.2934 15.634C81.2628 15.91 81.1708 16.462 81.0174 17.29C80.8948 18.118 80.7874 18.8387 80.6954 19.452C80.4501 21.1387 80.3274 22.948 80.3274 24.88C80.3274 29.0813 81.6921 31.182 84.4214 31.182C85.4334 31.182 86.5988 30.8293 87.9174 30.124C88.3161 30.7067 88.5154 31.458 88.5154 32.378C88.5154 33.298 88.0094 34.0187 86.9974 34.54C86.0161 35.0307 84.8354 35.276 83.4554 35.276C78.0581 35.276 75.3594 32.2093 75.3594 26.076C75.3594 25.1867 75.4821 23.5767 75.7274 21.246C76.0034 18.9153 76.1414 17.0293 76.1414 15.588C74.6694 15.68 73.4888 15.9407 72.5994 16.37C72.2314 15.818 72.0474 15.1893 72.0474 14.484C72.0474 13.748 72.3081 13.15 72.8294 12.69C73.3508 12.1993 73.9948 11.954 74.7614 11.954C75.5281 11.954 76.0341 11.9693 76.2794 12C76.3101 11.7547 76.3254 11.4327 76.3254 11.034C76.3254 8.734 76.0648 6.71 75.5434 4.962ZM96.0379 24.558C96.0379 26.766 96.3905 28.514 97.0959 29.802C97.8012 31.0593 98.9819 31.688 100.638 31.688C102.294 31.688 103.582 31.136 104.502 30.032C105.453 28.8973 105.928 27.5327 105.928 25.938C106.971 25.938 107.875 26.1987 108.642 26.72C109.409 27.2413 109.792 27.962 109.792 28.882C109.792 30.7833 108.78 32.378 106.756 33.666C104.732 34.9233 102.601 35.552 100.362 35.552C96.8659 35.552 94.3359 34.6167 92.7719 32.746C91.2079 30.8447 90.4259 28.0387 90.4259 24.328C90.4259 20.6173 91.4685 17.5047 93.5539 14.99C95.6699 12.4447 98.4759 11.172 101.972 11.172C104.364 11.172 106.281 11.724 107.722 12.828C109.194 13.9013 109.93 15.588 109.93 17.888C109.93 20.1573 108.887 21.8747 106.802 23.04C104.747 24.1747 102.233 24.742 99.2579 24.742C98.2152 24.742 97.1419 24.6807 96.0379 24.558ZM96.0839 20.924C97.0039 21.108 97.9699 21.2 98.9819 21.2C101.19 21.2 103.045 20.786 104.548 19.958C104.732 19.222 104.824 18.6393 104.824 18.21C104.824 17.1367 104.441 16.324 103.674 15.772C102.907 15.22 101.849 14.944 100.5 14.944C99.1812 14.944 97.9852 15.3733 96.9119 16.232C96.3599 17.8267 96.0839 19.3907 96.0839 20.924ZM121.031 34.448C120.08 34.816 119.068 35 117.995 35C116.922 35 116.048 34.7547 115.373 34.264C114.729 33.7427 114.407 33.0373 114.407 32.148C114.407 31.228 114.545 29.572 114.821 27.18C115.097 24.788 115.235 22.4727 115.235 20.234C115.235 17.9647 114.882 15.312 114.177 12.276C115.158 11.908 116.124 11.724 117.075 11.724C118.026 11.724 118.838 12.046 119.513 12.69C120.218 13.334 120.571 14.1927 120.571 15.266C120.571 15.818 120.479 16.646 120.295 17.75C120.111 18.8233 120.004 19.636 119.973 20.188C121.169 17.4587 122.58 15.3273 124.205 13.794C125.861 12.23 127.502 11.448 129.127 11.448C130.262 11.448 131.166 11.8467 131.841 12.644C132.516 13.4413 132.853 14.4533 132.853 15.68C132.853 16.876 132.546 17.8573 131.933 18.624C131.32 19.36 130.553 19.728 129.633 19.728C128.744 19.728 128.023 19.636 127.471 19.452C127.563 19.084 127.609 18.7467 127.609 18.44C127.609 17.1827 127.164 16.554 126.275 16.554C124.926 16.554 123.653 17.9187 122.457 20.648C121.292 23.3467 120.51 25.8767 120.111 28.238C120.264 30.538 120.571 32.608 121.031 34.448ZM135.476 12.138C136.458 11.862 137.439 11.724 138.42 11.724C139.432 11.724 140.291 12.0307 140.996 12.644C141.702 13.2573 142.054 14.0547 142.054 15.036C142.054 15.9867 141.886 17.658 141.548 20.05C141.242 22.4113 141.088 24.2513 141.088 25.57C141.088 29.0047 141.41 31.964 142.054 34.448C141.104 34.816 140.076 35 138.972 35C137.868 35 136.994 34.7547 136.35 34.264C135.706 33.7427 135.384 33.0067 135.384 32.056C135.384 31.0747 135.568 29.48 135.936 27.272C136.304 25.064 136.488 23.2393 136.488 21.798C136.488 17.9647 136.151 14.7447 135.476 12.138ZM136.074 1.742C137.148 1.25133 138.206 1.006 139.248 1.006C140.291 1.006 141.058 1.282 141.548 1.834C142.07 2.35533 142.33 3.13733 142.33 4.18C142.33 5.22267 141.978 6.14267 141.272 6.94C140.598 7.73733 139.708 8.136 138.604 8.136C136.335 8.136 135.2 6.95533 135.2 4.594C135.2 3.55133 135.492 2.60066 136.074 1.742ZM155.389 35.552C152.016 35.552 149.532 34.5707 147.937 32.608C146.342 30.6147 145.545 27.8547 145.545 24.328C145.545 20.7707 146.603 17.6887 148.719 15.082C150.835 12.4753 153.549 11.172 156.861 11.172C163.669 11.172 167.073 15.0053 167.073 22.672C167.073 26.26 165.969 29.3113 163.761 31.826C161.553 34.31 158.762 35.552 155.389 35.552ZM152.077 16.232C151.525 18.0107 151.249 19.7893 151.249 21.568C151.249 23.3467 151.31 24.7267 151.433 25.708C151.556 26.6893 151.786 27.6707 152.123 28.652C152.828 30.6453 154.208 31.642 156.263 31.642C158.348 31.642 159.713 31.09 160.357 29.986C161.032 28.882 161.369 27.18 161.369 24.88C161.369 18.348 159.82 15.082 156.723 15.082C154.944 15.082 153.396 15.4653 152.077 16.232ZM177.453 34.448C176.502 34.816 175.49 35 174.417 35C173.343 35 172.469 34.7547 171.795 34.264C171.151 33.7427 170.829 33.0373 170.829 32.148C170.829 31.228 170.967 29.572 171.243 27.18C171.519 24.788 171.657 22.4727 171.657 20.234C171.657 17.9647 171.304 15.312 170.599 12.276C171.58 11.908 172.546 11.724 173.497 11.724C174.447 11.724 175.26 12.046 175.935 12.69C176.64 13.334 176.993 14.1927 176.993 15.266C176.993 15.818 176.901 16.646 176.717 17.75C176.533 18.8233 176.425 19.636 176.395 20.188C177.591 17.4587 179.001 15.3273 180.627 13.794C182.283 12.23 183.923 11.448 185.549 11.448C186.683 11.448 187.588 11.8467 188.263 12.644C188.937 13.4413 189.275 14.4533 189.275 15.68C189.275 16.876 188.968 17.8573 188.355 18.624C187.741 19.36 186.975 19.728 186.055 19.728C185.165 19.728 184.445 19.636 183.893 19.452C183.985 19.084 184.031 18.7467 184.031 18.44C184.031 17.1827 183.586 16.554 182.697 16.554C181.347 16.554 180.075 17.9187 178.879 20.648C177.713 23.3467 176.931 25.8767 176.533 28.238C176.686 30.538 176.993 32.608 177.453 34.448Z"
                                                fill="#334048"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="visible flex items-center">
                                    {show && (
                                        <ul className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow ] mt-24 z-40">
                                            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Home</span>
                                                </a>
                                            </li>
                                            <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">About</span>
                                                </a>
                                            </li>
                                            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Services</span>
                                                </a>
                                            </li>
                                            <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Collections</span>
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                    <div className="xl:hidden" onClick={() => setShow(!show)}>
                                        {show ? (
                                            <div className=" close-m-menu">
                                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        ) : (
                                            <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={4} y1={8} x2={20} y2={8} />
                                                <line x1={4} y1={16} x2={20} y2={16} />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* Mobile Responsive */}
                    <div className="mx-auto container px-6 xl:px-0 h-full">
                        <div className="relative w-full lg:flex items-center justify-end">
                            <div className="relative lg:flex items-center">
                                <div className="w-full lg:w-1/2 py-12 xl:py-16 px-8 xl:px-16 bg-gray-700 text-white my-auto h-full flex flex-col justify-center lg:max-w-lg xl:max-w-2xl z-50">
                                    <h1 className="text-2xl lg:text-4xl xl:text-5xl leading-normal font-bold tracking-wide f-f-d-s">We Design your Future</h1>
                                    <p className="text-base lg:text-2xl font-normal tracking-tight leading-7 py-8 f-f-l">Caroline is the Health Editor at GoodHousekeeping.com covering nutrition, fitness, wellness, and other lifestyle news.</p>
                                    <button className="px-4 lg:px-10 py-4 bg-gray-800 hover:bg-gray-900 lg:text-2xl uppercase font-bold f-f-l">Get in touch</button>
                                </div>
                                <div className="w-full lg:w-1/2 relative">
                                    <img src="https://cdn.tuk.dev/assets/templates/Fabterior/header.png" alt className="w-full object-cover object-center relative z-10" />
                                    <a href="#projects">
                                        <div className="hidden absolute z-20 right-0 bottom-0 bg-gray-700 -mb-10 mr-12 h-24 w-24 lg:flex items-center justify-center cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} viewBox="0 0 48 49" fill="none">
                                                <path d="M24 10.9639V38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M36 26.9639L24 38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 26.9639L24 38.9639" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
