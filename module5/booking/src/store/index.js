import { createStore } from "vuex";
import { latestModule } from "@/store/modules/latestModule.js";
import { bannerModule } from "@/store/modules/bannerModule.js";
import { featuredModule } from "@/store/modules/featuredModule.js";
import { hotelModule } from "@/store/modules/hotelModule.js";
import { locationModule } from "@/store/modules/locationModule.js";
import { searchModule } from "@/store/modules/searchModule.js";
import { coordsModule } from "@/store/modules/coordsModule.js";
import { reservModule } from "@/store/modules/reservModule.js";

export default createStore({
  modules: {
    latest: latestModule,
    banner: bannerModule,
    featured: featuredModule,
    hotel: hotelModule,
    location: locationModule,
    search: searchModule,
    coords: coordsModule,
    reserv: reservModule,
  },
  strict: process.env.NODE_ENV !== "production",
});
