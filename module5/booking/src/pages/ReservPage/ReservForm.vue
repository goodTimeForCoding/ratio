<template>
  <form class="reserv-form" novalidate>
    <base-input
      class="reserv-form__input reserv-form__first-name reserv-form--short"
      type="text"
      v-model.trim="reservForm.first_name"
      placeholder="First name *"
    />
    <base-input
      class="reserv-form__input reserv-form__last-name reserv-form--short"
      type="text"
      v-model.trim="reservForm.last_name"
      placeholder="Last name *"
    />
    <base-input
      class="reserv-form__input reserv-form__info1 reserv-form--short"
      type="text"
      v-model.trim="reservForm.info_1"
      placeholder="Info-1 *"
    />
    <base-input
      class="reserv-form__input reserv-form__info2 reserv-form--short"
      type="text"
      v-model.trim="reservForm.info_2"
      placeholder="Info-2 *"
    />
    <v-select
      class="reserv-form__input reserv-form__country reserv-form--short"
      :options="location"
      v-model="reservForm.country"
      label="name"
      placeholder="Country"
    />
    <base-input
      class="reserv-form__input reserv-form__email reserv-form--short"
      type="email"
      v-model.trim="reservForm.contact.email"
      placeholder="Email address *"
    />
    <base-input
      class="reserv-form__input reserv-form__phone reserv-form--long"
      type="text"
      v-model.trim="reservForm.phone"
      placeholder="Phone number"
    />
    <base-input
      class="reserv-form__input reserv-form__comment reserv-form--long"
      v-model.trim="reservForm.comment"
      placeholder="Comment"
    />

    <button
      class="btn-reset btn btn__reserv reserv-form__btn"
      @click="reservHotels"
      type="button"
    >
      Reserve Now
    </button>
  </form>

  <my-dialog v-model:show="errorVisible">
    <h1>Fill in all the fields correctly to submit the form!</h1>
  </my-dialog>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  data() {
    return {
      errorVisible: false,
      reservForm: {
        first_name: "",
        last_name: "",
        info_1: "",
        info_2: "",
        country: "",
        contact: {
          email: "",
        },
        phone: "",
        comment: "",
      },
    };
  },

  validations() {
    return {
      reservForm: {
        first_name: { required },
        last_name: { required },
        info_1: { required },
        info_2: { required },
        country: { required },
        contact: {
          email: { required, email },
        },
        phone: { required },
        comment: { required },
      },
    };
  },

  methods: {
    ...mapActions({
      postReservData: "reserv/postReservData",
    }),

    showNoValidDialog() {
      this.errorVisible = true;
    },

    adaptForm() {
      return {
        first_name: this.reservForm.first_name,
        last_name: this.reservForm.last_name,
        info_1: this.reservForm.info_1,
        info_2: this.reservForm.info_2,
        country: this.reservForm.country.name,
        email: this.reservForm.contact.email,
        phone: this.reservForm.phone,
        comment: this.reservForm.comment,
      };
    },

    async reservHotels() {
      const data = this.adaptForm();
      const result = await this.v$.$validate();
      if (!result) {
        this.showNoValidDialog();
      } else {
        this.postReservData(data);
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
.reserv-form {
  &__input {
    border: none;
    font-family: "Montserrat";
    height: 50px;
    background: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid black;
    padding-left: 13px;

    &::placeholder {
      font-weight: 500;
      font-size: 14px;
      color: #959595;
    }
  }

  &__first-name,
  &__info1,
  &__country {
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 9px;
  }

  &--short {
    width: 328px;
  }

  &--long {
    width: 670px;
  }

  &__phone {
    margin-bottom: 9px;
  }

  @include minitablet {
    &--short {
      width: 100%;
    }

    &--long {
      width: 100%;
    }

    &__btn {
      padding: 22px 70px 19px 70px;
      margin: 0 auto;
      margin-top: 24px;
    }
  }
}
</style>

<style>
.reserv-form__country .vs__dropdown-toggle {
  padding: 0;
  border: none;
}

.reserv-form__country .vs__search,
.reserv-form__country .vs__search:focus {
  margin: 0;
  border: none;
  font-weight: 500;
  font-size: 14px;
  height: 50px;
  padding-bottom: 1px;
  padding-left: 0px;
  font-family: "Montserrat";
  color: #9a9a9a;
}

.reserv-form__country .vs__actions {
  padding-top: 0px;
  padding-bottom: 0px;
}

.reserv-form__country .vs__selected-options {
  padding: 0;
}

.reserv-form__country .vs__selected {
  border: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat";
  color: black;
  white-space: nowrap;
  overflow: hidden;
}
</style>
