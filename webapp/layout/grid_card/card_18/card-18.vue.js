<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="bg-white md:w-96 rounded px-5 py-5 w-full shadow">
                <p class="text-lg font-bold leading-none text-gray-800">Reviews</p>
                <div v-for="(review, idx) in reviews" v-bind:key="idx" class="mt-6">
                    <div class="flex items-start justify-between">
                        <div class="flex items-start">
                            <img class="w-8 h-8 rounded-full shadow" :src="review.img" alt="profile" />
                            <div class="ml-3">
                                <p class="text-sm leading-4 text-gray-800 font-semibold">{{ review.name }}</p>
                                <p class="text-xs leading-3 text-gray-600 mt-1">{{ review.position }}</p>
                                <p class="text-sm leading-4 text-gray-800 my-3">{{ review.comment }}</p>
                                <p class="text-xs leading-3 text-gray-500">{{ review.day }} days ago</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                <path
                                    d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
                                    fill="#EAB308"
                                />
                            </svg>
                            <p class="text-sm leading-none text-yellow-500 ml-1">{{ review.stars }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            reviews: [
                {
                    name: "Mike Scarn",
                    img: "https://i.ibb.co/6rj5KQ1/card-1.png",
                    position: "Marketing Manager, IMC",
                    comment: "Incredible job and outstanding work",
                    day: "6",
                    stars: "5",
                },
                {
                    name: "Jim Halpert",
                    img: "https://i.ibb.co/3pLWb3j/card-2.png",
                    position: "Head of Talent, Creative Co",
                    comment: "Amazing as always. Very challenging work, with revisions and she made it all to perfection. Third time working together and there will be a lot more!",
                    day: "10",
                    stars: "4.5",
                },
                {
                    name: "Dwight Schrute",
                    img: "https://i.ibb.co/6rj5KQ1/card-1.png",
                    position: "Project Manager, J&Ds",
                    comment: "It was a breeze coordinating with the team, definitely recommended.",
                    day: "6",
                    stars: "5",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
