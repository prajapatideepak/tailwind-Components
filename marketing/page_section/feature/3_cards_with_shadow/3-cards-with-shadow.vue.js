<template>
    <div class="mx-auto container mt-40 xl:px-4 px-4">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-4xl font-bold text-gray-900 pl-7">Services<span class="text-2xl font-normal"> We Provide</span></h1>
        </div>
        <div class="items-center justify-center mt-16 lg:flex">
            <div v-for="(service, idx) in services" v-bind:key="idx" class="xl:w-1/3 h-full shadow-lg hover:shadow-xl cursor-pointer xl:mr-7 lg:mr-3 mr-0 mb-8">
                <div class="relative">
                    <img loading="lazy" v-bind:src="service.image" class="h-96 w-full" />
                    <div class="bg-white w-full">
                        <p class="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">
                            {{ service.service }}
                        </p>
                        <p class="text-center text-2xl text-color-black py-8">
                            {{ service.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile -->
    <div class="block items-center justify-center mt-16 xl:hidden px-4">
        <div v-for="(service, idx) in services" v-bind:key="idx" class="card-shadow cursor-pointer mb-8">
            <div class="relative">
                <img loading="lazy" v-bind:src="service.image" class="xl:h-96 h-full w-full" />
                <div class="bg-white w-full">
                    <p class="p-f-f font-bold text-4xl text-color-black absolute -mt-7 ml-5">
                        {{ service.service }}
                    </p>
                    <p class="text-center text-2xl text-color-black py-8">
                        {{ service.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile -->
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    service: "01",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/dive-in.png",
                    title: "Dine In/ Takeaway",
                },
                {
                    service: "02",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/easy-reservation.png",
                    title: "Easy Table Reservation",
                },
                {
                    service: "03",
                    image: "https://cdn.tuk.dev/assets/templates/foodies/delivery.png",
                    title: "Free Home Delivery",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap");

/* card */
.card-width {
    width: 422px;
}
.card-shadow {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.card-shadow:hover {
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
}
body {
    font-family: "Open Sans", sans-serif;
}
.p-f-f {
    font-family: "Playfair Display", serif;
}
</style>
