<template>
  <form class="hero-form" novalidate>
    <h2 class="hero-form__header">FIND</h2>

    <label class="hero-form__field">
      <span class="hero-form__caption hero-form__caption--city">Location</span>
      <v-select
        class="hero-form__input hero-form__input-city"
        :options="location"
        placeholder="Which city do you prefer?"
        v-model="searchForm.location"
        label="name"
        @update:model-value="setLocation"
      />
    </label>

    <label class="hero-form__field">
      <span class="hero-form__caption hero-form__caption--datein">Check In</span>
      <vue-date-picker
        class="hero-form__input hero-form__input-datein"
        v-model="searchForm.checkIn"
        placeholder="Add Dates"
        monthNameFormat="short"
        :enable-time-picker="false"
        auto-apply
        @update:model-value="setDateIn"
      />
    </label>

    <label class="hero-form__field">
      <span class="hero-form__caption hero-form__caption--dateout">Check Out</span>
      <vue-date-picker
        class="hero-form__input hero-form__input-dateout"
        v-model="searchForm.checkOut"
        placeholder="Add Dates"
        monthNameFormat="short"
        :enable-time-picker="false"
        auto-apply
        @update:model-value="setDateOut"
      />
    </label>

    <label class="hero-form__field"
      ><span class="hero-form__caption hero-form__caption--guests">Guests</span
      ><input
        class="hero-form__input hero-form__input-guests"
        v-model="searchForm.guest"
        type="number"
        max="10"
        min="1"
        placeholder="Add Guests"
        @update:model-value="setGuest"
      />
    </label>
    <button class="btn-reset hero-form__btn" @click="searchHotelBtn" type="button">
      <icon-base width="20" height="20" icon-name="search"><icon-search /></icon-base>
    </button>
  </form>

  <my-dialog v-model:show="errorVisible">
    <h1>Fill in all fields to submit the form!</h1>
  </my-dialog>
</template>
<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      errorVisible: false,
      searchForm: {
        location: "",
        checkIn: "",
        checkOut: "",
        guest: "",
      },
    };
  },

  validations() {
    return {
      searchForm: {
        location: { required },
        checkIn: { required },
        checkOut: { required },
        guest: { required },
      },
    };
  },

  methods: {
    setLocation() {
      ym(93555198, "reachGoal", "website__select-one");
    },

    setDateIn() {
      ym(93555198, "reachGoal", "website__select-two");
    },

    setDateOut() {
      ym(93555198, "reachGoal", "website__select-three");
    },

    setGuest() {
      ym(93555198, "reachGoal", "website__select-four");
    },

    ...mapActions({
      fetchSearchData: "search/fetchSearchData",
    }),

    searchHotels() {
      this.fetchSearchData(this.searchForm).then(this.$router.push("search"));
    },

    showNoValidDialog() {
      this.errorVisible = true;
    },

    async searchHotelBtn() {
      const result = await this.v$.$validate();
      if (!result) {
        this.showNoValidDialog();
      } else {
        this.searchHotels();
        ym(93555198, "reachGoal", "website__redirect");
      }
    },
  },

  components: {
    IconBase,
    IconSearch,
  },

  computed: {
    ...mapGetters({
      location: "location/all",
    }),
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/components/hero-form.scss";
</style>

<style>
.hero-form__input-city .vs__dropdown-toggle {
  padding: 0;
  border: none;
}

.hero-form__input-city .vs__search,
.hero-form__input-city .vs__search:focus {
  margin: 0;
  padding: 0;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat";
  color: #9a9a9a;
}

.hero-form__input-city .vs__selected {
  border: none;
  padding: 0;
  padding-left: 6px;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat";
  color: black;
  white-space: nowrap;
  overflow: hidden;
}

.hero-form__input-city .vs__actions {
  display: none;
}

.hero-form__input-city .vs--single .vs__selected {
  max-width: 190px;
}

.hero-form__input-datein .dp__input,
.hero-form__input-dateout .dp__input {
  border: none;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat";
  width: 225px;
}

.hero-form__input-datein .dp__icon,
.hero-form__input-dateout .dp__icon {
  display: none;
}
</style>
