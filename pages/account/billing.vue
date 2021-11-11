<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Manage Payment Method</p>
    </header>
    <section>
      <ValidationObserver v-slot="{ invalid }" slim ref="billing">
        <!-- ==================================================================== cname ==================================================================== -->
        <ValidationProvider rules="required" name="Name" v-slot="{ errors }">
          <span class="input">
            <label for="name">Name on card</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="Mr. John Doe"
                name="Name"
                v-model="name_card"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <!-- ==================================================================== card number ==================================================================== -->
        <ValidationProvider
          rules="required"
          name="Card Number"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="Card Number">Card Number</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="1234 **** **** ****"
                name="Card Number"
                v-model="card_number"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <!-- ==================================================================== card details====================================================================  -->
        <div class="flex flex-row items-center w-full z-10">
          <div class="">
            <!-- ==================================================================== card details====================================================================  -->

            <label for="expiry">Expiry</label>
            <div class="flex flex-row items-center justify-between w-full z-10">
              <ValidationProvider
                rules="required"
                name="Month"
                v-slot="{ errors }"
              >
                <div class="relative z-10">
                  <input
                    maxlength="2"
                    minlength="2"
                    @input="handleChange('billing')"
                    type="number"
                    placeholder="MM"
                    name="Month"
                    v-model="expiry_month"
                    class="w-20 mr-4"
                  />
                  <small class="text-error absolute left-0 top-14">{{
                    errors[0]
                  }}</small>
                </div>
              </ValidationProvider>
              <!-- ========================================================================================================================================  -->

              <ValidationProvider
                rules="required"
                name="Year"
                v-slot="{ errors }"
              >
                <div class="relative">
                  <input
                    maxlength="2"
                    minlength="2"
                    class="w-20"
                    @input="handleChange('billing')"
                    type="number"
                    placeholder="YY"
                    name="Year"
                    v-model="expiry_year"
                  />
                  <small class="text-error absolute left-0 top-14">{{
                    errors[0]
                  }}</small>
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- ========================================================================================================================================  -->

          <div class="ml-4 z-10">
            <!-- =======================================================================================================================================  -->

            <label for="expiry">CVV/Security Code</label>

            <ValidationProvider rules="required" name="CVV" v-slot="{ errors }">
              <div class="relative">
                <input
                  class="w-40"
                  @input="handleChange('billing')"
                  type="number"
                  placeholder="123"
                  name="CVV"
                  v-model="cvv"
                />
                <small class="text-error absolute left-0 top-14">{{
                  errors[0]
                }}</small>
              </div>
            </ValidationProvider>
          </div>
        </div>
        <hr class="bg-line my-16" />
        <!-- ==================================================================== street====================================================================  -->
        <ValidationProvider
          rules="required"
          name="Street Address"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="Street Address">Street Address</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="12 example street"
                name="Street Address"
                v-model="street_address"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <!-- ==================================================================== city====================================================================  -->
        <ValidationProvider rules="required" name="city" v-slot="{ errors }">
          <span class="input">
            <label for="City">City</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="City"
                name="City"
                v-model="city"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <!-- ====================================================================  province ==================================================================== -->
        <ValidationProvider
          rules="required"
          name="State / Province"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="State / Province">State / Province</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="State / Provincet"
                name="State / Province"
                v-model="state"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <!--  ==================================================================== zip ======================================================= -->
        <ValidationProvider
          rules="required"
          name="Zip / Postal Code"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="Zip / Postal Code">Zip / Postal Code</label>
            <div>
              <input
                @input="handleChange('billing')"
                type="text"
                placeholder="Zip / Postal Code"
                name="Zip / Postal Code"
                v-model="zip"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <footer>
      <button @click="validateForm" v-if="!this.loading" class="btn primary">
        Update
      </button>

      <button v-if="this.loading" class="btn primary loading">
        <svg
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </button>
      <button @click="() => this.$router.go(-1)" class="btn outline">
        Cancel
      </button>
    </footer>
  </main>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loading: false,
      name_card: 'Dylan Britz',
      card_number: '',
      expiry_year: '',
      expiry_month: '',
      cvv: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    }
  },
  methods: {
    handleChange(form) {
      this.$refs[form].reset()
    },
    async validateForm() {
      const validated = await this.$refs.billing.validate()

      if (!validated) {
        return false
      }
    },
  },
}
</script>
<style></style>
