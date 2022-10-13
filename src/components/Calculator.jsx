import preact from "@astrojs/preact";
import { h } from "preact";
import { signal } from "@preact/signals";

export default function Calculator() {
  const expenses = signal(0);
  const month = signal(0);
  const day = signal(0);
  const hour = signal(0);
  const remain = signal(0);
  const time = signal(0);
  const savings = signal(0);
  const burnRate = signal(0);


  function calculate(e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById("income").value);
    const hrsworked = parseFloat(document.getElementById("hrsworked").value);
    const rent = parseFloat(document.getElementById("rent").value)
      ? parseFloat(document.getElementById("rent").value)
      : 0;
    const transport = parseFloat(document.getElementById("transport").value)
      ? parseFloat(document.getElementById("transport").value)
      : 0;
    const food = parseFloat(document.getElementById("food").value)
      ? parseFloat(document.getElementById("food").value)
      : 0;
    const utilities = parseFloat(document.getElementById("utilities").value)
      ? parseFloat(document.getElementById("utilities").value)
      : 0;
    const insurance = parseFloat(document.getElementById("insurance").value)
      ? parseFloat(document.getElementById("insurance").value)
      : 0;
    const software = parseFloat(document.getElementById("software").value)
      ? parseFloat(document.getElementById("software").value)
      : 0;
    const entertainment = parseFloat(
      document.getElementById("entertainment").value
    )
      ? parseFloat(document.getElementById("entertainment").value)
      : 0;
    const other = parseFloat(document.getElementById("other").value)
      ? parseFloat(document.getElementById("other").value)
      : 0;
    const costMonth =
      rent +
      transport +
      food +
      utilities +
      insurance +
      software +
      entertainment +
      other;
    const costDay = Math.ceil(costMonth / 30);
    const costHour = Math.ceil(costDay / 24);
    const cashRemain = income - costMonth;
    const monSurplus = Math.ceil(360 - hrsworked);
    const savingsRate = Math.ceil((cashRemain / income) * 100);
    const burnDays = Math.ceil(cashRemain / costDay);

    expenses.value = costMonth;
    month.value = costMonth;
    day.value = costDay;
    hour.value = costHour;
    remain.value = cashRemain;
    time.value = monSurplus;
    savings.value = savingsRate;
    burnRate.value = burnDays;

    console.log("works");
  }
 


  return (
    <div class="grid md:grid-cols-2 my-20 gap-20">
      <form id="expenses-form">
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Income</h5>
            <h6 class="text-gray-700">monthly</h6>
          </div>
          <div>
            <input
              type="text"
              id="income"
              name="income"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="10000"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Hours</h5>
            <h6 class="text-gray-700">of work, monthly</h6>
          </div>
          <div>
            <input
              name="hrsworked"
              type="text"
              id="hrsworked"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="120"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 mt-20 gap-10">
          <div>
            <h5 class="text-xl">Expenses</h5>
            <h6 class="text-gray-700">monthly</h6>
          </div>
          <div>
            <input
              type="text"
              id="rent"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Rent"
            />

            <input
              type="text"
              id="transport"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Transportation"
            />

            <input
              type="text"
              id="food"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Food"
            />

            <input
              type="text"
              id="utilities"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Utilities"
            />

            <input
              type="text"
              id="insurance"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Insurance"
            />

            <input
              type="text"
              id="software"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Software"
            />
            <input
              type="text"
              id="entertainment"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Entertainment"
            />

            <input
              type="text"
              id="other"
              class="mt-2 form-control bg-transparent border-b rounded-0 text-white"
              placeholder="Other"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-7 mt-10">
          <button
            onClick={reset}
            type="reset"
            id="reset"
            class="border p-2 rounded-none"
          >
            Reset
          </button>
          <button
            onClick={calculate}
            type="submit"
            id="submit"
            class="border p-2 rounded-none plac"
          >
            Submit
          </button>
        </div>
      </form>

      <div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Cost of Living:</h5>
            <h6 class="text-gray-700">per month</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="costmonth">
                ${month}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Cost of Living:</h5>
            <h6 class="text-gray-700">per day</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="costday">
                ${day}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Cost of Living:</h5>
            <h6 class="text-gray-700">per hour</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="costhour">
                ${hour}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Cash Remaining:</h5>
            <h6 class="text-gray-700">savings</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="cashremain">
                ${remain}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Time Surplus:</h5>
            <h6 class="text-gray-700">hours</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="monsurplus">
                {time}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Saving Ration:</h5>
            <h6 class="text-gray-700">percentage saved</h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="saveratio">
                ${savings}
              </p>
            )}
          </div>
        </div>
        <div class="grid grid-cols-2 mt-3 gap-10">
          <div>
            <h5 class="text-xl">Burn Rate:</h5>
            <h6 class="text-gray-700">
              number of days you can live off the money saved
            </h6>
          </div>
          <div>
            {expenses && (
              <p class="text-end" id="burnrate">
                {burnRate}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
