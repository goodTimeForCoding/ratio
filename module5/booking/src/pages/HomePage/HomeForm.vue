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
        :auto-position="false"
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
        :auto-position="false"
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
      <SvgSprite symbol="search" size="20" />
    </button>
  </form>

  <my-dialog v-model:show="errorVisible">
    <h1>Fill in all fields to submit the form!</h1>
  </my-dialog>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapGetters, mapActions } from "vuex";

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

  computed: {
    ...mapGetters({
      location: "location/all",
    }),
  },
};
</script>
<style scoped lang="scss">
.hero-form {
  position: relative;
  margin: 0 auto;
  max-width: 794px;

  &__wrap {
    display: flex;
  }

  &__header {
    font-weight: 700;
    font-size: 40px;
    color: #484848;
    margin-left: 31px;
    margin-bottom: 22px;
  }

  &__field {
    position: relative;
  }

  &__input {
    border: none;
    background: white;
    font-family: "Montserrat";
    padding: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-top: 36px;
    padding-bottom: 13px;
    border-right: 1px solid transparent;
    -o-border-image: -o-linear-gradient(
      bottom,
      transparent 30%,
      #dddddd 30%,
      #dddddd 70%,
      transparent 70%
    );
    border-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(30%, transparent),
      color-stop(30%, #dddddd),
      color-stop(70%, #dddddd),
      color-stop(70%, transparent)
    );
    border-image: linear-gradient(
      to top,
      transparent 30%,
      #dddddd 30%,
      #dddddd 70%,
      transparent 70%
    );
    border-image-slice: 1;

    &::placeholder {
      color: #9a9a9a;
    }
  }

  &__input-city {
    border-radius: 35px 0 0 35px;
    width: 281px;
    padding-left: 29px;
    padding-right: 10px;
    display: inline-block;

    & vs__dropdown-toggle {
      border: none;
    }
  }

  &__input-datein {
    display: inline-block;
    padding-left: 17px;
    width: 142px;
  }

  &__input-dateout {
    display: inline-block;
    padding-left: 17px;
    width: 167px;
  }

  &__input-guests {
    border: none;
    border-radius: 0 35px 35px 0;
    padding-left: 16px;
    width: 203px;
    padding-right: 80px;
  }

  &__caption {
    position: absolute;
    top: -17px;
    left: 30px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #484848;
    z-index: 1;

    &--datein {
      left: 14px;
    }

    &--dateout {
      left: 15px;
    }

    &--guests {
      left: 14px;
    }

    @include tablet {
      &--datein {
        left: 30px;
      }

      &--dateout {
        left: 30px;
      }

      &--guests {
        left: 30px;
      }
    }
  }

  &__btn {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 8px;
    top: 79px;
    bottom: 0;
    width: 54px;
    height: 54px;
    background-color: #484848;
    color: #ffffff;
    border-radius: 10em;
    border: none;
    transition: background-color 0.5s ease;

    &:hover,
    &:focus {
      background-color: #333333;
    }

    &:active {
      background-color: #1f1f1f;
    }
  }

  @include tablet {
    max-width: 282px;

    &__input {
      border: none;
    }

    &__input-city,
    &__input-datein,
    &__input-dateout,
    &__input-guests {
      border-radius: 35px;
      width: 283px;
      margin-bottom: 10px;
      padding-left: 30px;
    }

    &__btn {
      position: static;
      margin: 0 auto;
      width: 140px;
    }
  }
}
</style>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.hero-form__input-city .vs__dropdown-toggle {
  padding: 0;
  border: none;
}

.hero-form__input-city .vs__dropdown-menu {
  border-radius: 5%;
}

.hero-form__input-city .vs__dropdown-menu::-webkit-scrollbar {
  width: 0px;
  height: 7px;
  background-color: transparent;
}

.hero-form__input-city .vs__dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #9a9a9a;
  border-radius: 5px;
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

.hero-form__input-datein .dp__menu,
.hero-form__input-dateout .dp__menu {
  top: 66px !important;
}

.hero-form__input-datein .dp__icon,
.hero-form__input-dateout .dp__icon {
  display: none;
}

.hero-form__input-city .vs__selected-options {
  flex-wrap: nowrap;
  overflow: hidden;
}
</style>
