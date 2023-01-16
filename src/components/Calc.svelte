<script>
  let income = "";
  let hours = "";
  let rent = "";
  let transport = "";
  let food = "";
  let utilities = "";
  let insurance = "";
  let software = "";
  let entertainment = "";
  let other = "";

  $: expenses =
    (rent ? parseFloat(rent) : 0) +
    (transport ? parseFloat(transport) : 0) +
    (food ? parseFloat(food) : 0) +
    (utilities ? parseFloat(utilities) : 0) +
    (insurance ? parseFloat(insurance) : 0) +
    (software ? parseFloat(software) : 0) +
    (entertainment ? parseFloat(entertainment) : 0) +
    (other ? parseFloat(other) : 0);

  $: day = Math.ceil(expenses / 30);
  $: hour = Math.ceil(day / 24);
  $: remain = income - expenses;
  $: time = Math.ceil(360 - hours);
  $: savings = Math.ceil((remain / income) * 100)
    ? Math.ceil((remain / income) * 100)
    : 0;
  $: burnRate = Math.ceil(remain / day) ? Math.ceil(remain / day) : 0;

</script>

<div class="grid md:grid-cols-2 gap-20 my-20">
  <form id="expenses-form">
    <div class="grid md:grid-cols-2 mt-10 md:mt-5 gap-5 md:gap-10">
      <label for="income">
        <h5 class="text-xl">Income</h5>
        <p class="text-gray-500">monthly</p></label
      >

      <input
        type="number"
        id="income"
        name="income"
        bind:value={income}
        placeholder="10000"
        autocomplete="off"
        pattern="/^[0-9]*$/"
      />
      <p id="incomeHint" class="text-red hidden">only numbers</p>
    </div>

    <div class="grid md:grid-cols-2 mt-20 md:mt-5 gap-5 md:gap-10">
      <label for="hours">
        <h5 class="text-xl">Hours</h5>
        <p class="text-gray-500">of work, monthly</p>
      </label>
      <input
        name="hours"
        type="number"
        id="hours"
        bind:value={hours}
        placeholder="120"
        autocomplete="off"
      />
    </div>

    <div class="grid md:grid-cols-2 mt-20 md:mt-5 gap-5 md:gap-10">
      <label for="expenses">
        <h5 class="text-xl">Expenses</h5>
        <p class="text-gray-500">monthly</p>
      </label>
      <div>
        <input
          type="number"
          id="rent"
          name="rent"
          bind:value={rent}
          placeholder="Rent"
          autocomplete="off"
        />

        <input
          type="number"
          id="transport"
          name="transport"
          bind:value={transport}
          placeholder="Transportation"
          autocomplete="off"
        />

        <input
          type="number"
          id="food"
          name="food"
          bind:value={food}
          placeholder="Food"
          autocomplete="off"
        />

        <input
          type="number"
          id="utilities"
          name="utilities"
          bind:value={utilities}
          placeholder="Utilities"
          autocomplete="off"
        />

        <input
          type="number"
          id="insurance"
          name="insurance"
          bind:value={insurance}
          placeholder="Insurance"
          autocomplete="off"
        />

        <input
          type="number"
          id="software"
          name="software"
          bind:value={software}
          placeholder="Software"
          autocomplete="off"
        />
        <input
          type="number"
          id="entertainment"
          name="entertainment"
          bind:value={entertainment}
          placeholder="Entertainment"
          autocomplete="off"
        />

        <input
          type="number"
          id="other"
          name="other"
          bind:value={other}
          placeholder="Other"
          autocomplete="off"
        />
      </div>
    </div>
  </form>

  <div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Cost of Living:</h5>
        <p class="text-gray-500">per month</p>
      </div>
      <div>
        <p class="text-end text-xl">${expenses}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Cost of Living:</h5>
        <p class="text-gray-500">per day</p>
      </div>
      <div>
        <p class="text-end text-xl">${day}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Cost of Living:</h5>
        <p class="text-gray-500">per hour</p>
      </div>
      <div>
        <p class="text-end text-xl">${hour}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Cash Remaining:</h5>
        <p class="text-gray-500">savings</p>
      </div>
      <div>
        <p class="text-end text-xl">${remain}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Time Surplus:</h5>
        <p class="text-gray-500">hours</p>
      </div>
      <div>
        <p class="text-end text-xl">{time}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Saving Ratio:</h5>
        <p class="text-gray-500">percentage saved</p>
      </div>
      <div>
        <p class="text-end text-xl">{savings}%</p>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-10">
      <div>
        <h5 class="text-xl">Burn Rate:</h5>
        <p class="text-gray-500">
          number of days you can live off the money saved
        </p>
      </div>
      <div>
        <p class="text-end text-xl">{burnRate}</p>
      </div>
    </div>
  </div>
</div>
