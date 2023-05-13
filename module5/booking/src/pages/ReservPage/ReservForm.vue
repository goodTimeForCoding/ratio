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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

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
    showNoValidDialog() {
      this.errorVisible = true;
    },

    resetForm() {
      this.reservForm.first_name = "";
      this.reservForm.last_name = "";
      this.reservForm.info_1 = "";
      this.reservForm.info_2 = "";
      this.reservForm.country = "";
      this.reservForm.contact.email = "";
      this.reservForm.phone = "";
      this.reservForm.comment = "";
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

    postRequest(reset) {
      axios({
        method: "post",
        url: "https://module5.vue.panfilov.academy/order",
        data: this.adaptForm(),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(function (response) {
          reset();
          toast.success("The apartments are booked!");
          ym(93555198, "reachGoal", "website__order-success");
        })
        .catch(function (error) {
          toast.error("Server error try booking later!");
          ym(93555198, "reachGoal", "website__order-error");
        });
    },

    async reservHotels() {
      const result = await this.v$.$validate();
      if (!result) {
        this.showNoValidDialog();
      } else {
        this.postRequest(this.resetForm);
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
@import "@/assets/styles/components/reserv-form.scss";
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
