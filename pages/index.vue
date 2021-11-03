<template>
  <div class="p-5">
    <!-- buttons -->
    <h1>Buttons</h1>
    <button class="btn primary action">Button</button>

    <button class="btn primary">Button</button>
    <button disabled class="btn primary">Button</button>

    <button class="btn primary loading">
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

    <button class="btn outline">Button</button>
    <button disabled class="btn outline">Button</button>
    <button class="btn outline loading">
      <svg
        class="animate-spin h-5 w-5 text-primary"
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

    <h1>Inputs</h1>

    <span class="input">
      <label for="name">First Name</label>
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <small>Here’s a hint that might help you.</small>
    </span>

    <span class="input disabled">
      <label for="name">First Name</label>
      <div>
        <input disabled type="text" placeholder="Name" />
      </div>
      <small>Here’s a hint that might help you.</small>
    </span>

    <span class="input">
      <label for="name">Password</label>
      <div>
        <input type="password" placeholder="Passsword" />
      </div>
      <small>Here’s a hint that might help you.</small>
    </span>

    <span class="input">
      <label for="name">Password</label>
      <div>
        <input type="number" placeholder="1234" />
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
            stroke="currentcolor"
            stroke-width="2"
          />
          <circle
            cx="11.6797"
            cy="12"
            r="3"
            stroke="currentcolor"
            stroke-width="2"
          />
        </svg>
      </div>
      <small>Here’s a hint that might help you.</small>
    </span>

    <span class="input">
      <label for="name">Password</label>
      <div>
        <textarea rows="5" placeholder="" />
      </div>
      <small>Here’s a hint that might help you.</small>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
