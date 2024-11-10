import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import UINavbar from "../../components/UINavbar";
import Calculator from "./assets/icon-calculator.svg";
import IllustrationEmpty from "./assets/illustration-empty.svg";

const MortrageCalculator = () => {
  const [formState, setFormState] = useState({
    mortrageAmount: null,
    mortrageTerm: null,
    interestRate: null,
    mortrageType: null,
  });

  const [result, setResult] = useState(null);

  const handleFormChange = () => {
    console.log(formState);
    if (
      !formState.mortrageAmount ||
      !formState.mortrageTerm ||
      !formState.interestRate
    ) {
      return false;
    }

    let p = getNumericValue(formState.mortrageAmount);
    let n = formState.mortrageTerm * 12;
    let r = formState.interestRate / 100 / 12;

    if (formState.mortrageType === "repayment") {
      let result = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setResult(result);
    } else {
      let result = (p * (formState.interestRate / 100)) / 12;
      setResult(result);
    }
  };

  const numberFormatter = (num) => {
    const options = { maximumFractionDigits: 2 };
    const formattedNumber = Intl.NumberFormat("en-US", options).format(num);
    return formattedNumber;
  };

  const clearAll = () => {
    setFormState({
      mortrageAmount: "",
      mortrageTerm: "",
      interestRate: "",
      mortrageType: "",
    });
    setResult("");
  };

  const handleMortrageAmount = (e) => {
    const inputValue = e.target.value.replace(/,/g, "");
    if (!isNaN(inputValue)) {
      const formattedValue = Number(inputValue).toLocaleString();
      setFormState((prev) => ({ ...prev, mortrageAmount: formattedValue }));
    }
  };

  const getNumericValue = (value) => {
    return parseFloat(value.replace(/,/g, "")) || 0;
  };

  return (
    <>
      <UINavbar />
      <div className="plus-jakarta-sans-regular bg-[#e3f4fc] h-screen flex items-center justify-center">
        <div className="flex bg-white rounded-[1.75rem] w-[55vw]">
          <div className="flex flex-col gap-10 p-10 w-[44vw]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-[1.5rem]">Mortrage Calculator</h1>
              <button
                onClick={clearAll}
                className="underline text-[#68787f] hover:text-black cursor-pointer"
              >
                Clear all
              </button>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h1 className="text-[1.2rem] text-[#657479] font-semibold">
                  Mortrage Amount
                </h1>

                <div className="flex border hover:border-black border-[#8a9da5] rounded-md mt-3 group focus-within:border-[#d9db30]`">
                  <h1 className="transition-colors bg-[#e3f4fc] group-focus-within:text-black text-[#48616d] text-[1.5rem] font-semibold p-2 px-4 rounded-l-md group-focus-within:bg-[#d9db30]">
                    £
                  </h1>
                  <input
                    type="text"
                    name="mortgageAmount"
                    className="w-full pl-4 font-bold text-[1.2rem] focus:outline-none focus:border-[#d9db30] focus:ring-0 rounded-r-md"
                    onChange={handleMortrageAmount}
                    value={formState.mortrageAmount}
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <h1 className="text-[1.2rem] text-[#657479] font-semibold">
                    Mortrage Term
                  </h1>
                  <div className="flex border hover:border-black border-[#8a9da5] group focus-within:border-[#d9db30] rounded-md mt-2">
                    <input
                      type="number"
                      name="term"
                      className="w-full pl-4 text-[1.2rem] font-bold focus-within:outline-none rounded-md"
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          mortrageTerm: event.target.value,
                        }))
                      }
                      value={formState.mortrageTerm}
                    />
                    <h1 className="transition-colors bg-[#e3f4fc] text-[#48616d] text-[1.2rem] font-semibold p-2 px-4 rounded-r-md group-focus-within:text-black group-focus-within:bg-[#d9db30]">
                      years
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-[1.2rem] text-[#657479] font-semibold">
                    Interest Rate
                  </h1>
                  <div className="flex border hover:border-black border-[#8a9da5] group focus-within:border-[#d9db30] rounded-md mt-2">
                    <input
                      type="number"
                      name="term"
                      className="w-full pl-4 text-[1.2rem] font-bold focus-within:outline-none rounded-md"
                      onChange={(event) =>
                        setFormState((prev) => ({
                          ...prev,
                          interestRate: event.target.value,
                        }))
                      }
                      value={formState.interestRate}
                    />
                    <h1 className="transition-colors bg-[#e3f4fc] text-[#48616d] text-[1.2rem] font-semibold p-2 px-4 rounded-r-md group-focus-within:text-black group-focus-within:bg-[#d9db30]">
                      %
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-[1.2rem] text-[#657479] font-semibold">
                  Mortrage Type
                </h1>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={formState.mortrageType}
                  onChange={(event) => {
                    setFormState((prev) => ({
                      ...prev,
                      mortrageType: event.target.value,
                    }));
                  }}
                  className="ml-3 w-full mt-3"
                >
                  <FormControlLabel
                    value="repayment"
                    control={
                      <Radio
                        sx={{
                          color: "#8a9da5",
                          "&.Mui-checked": {
                            color: "#d5d82d",
                          },
                        }}
                      />
                    }
                    label={
                      <h1 className="text-[1.2rem] text-[#133041] ml-2 plus-jakarta-sans-bold">
                        Repayment
                      </h1>
                    }
                    className={`border hover:border-[#d0d483] border-[#8a9da5] ${
                      formState.mortrageType === "repayment" &&
                      "bg-[#fafae0] border-[#e0e3ad]"
                    } mb-3 px-2 py-1 rounded-md`}
                  />
                  <FormControlLabel
                    value="interestOnly"
                    control={
                      <Radio
                        sx={{
                          color: "#8a9da5",
                          "&.Mui-checked": {
                            color: "#d5d82d",
                          },
                        }}
                      />
                    }
                    label={
                      <h1 className="text-[1.2rem] text-[#133041] ml-2 plus-jakarta-sans-bold">
                        Interest Only
                      </h1>
                    }
                    className={`border hover:border-[#d0d483] border-[#8a9da5] ${
                      formState.mortrageType === "interestOnly" &&
                      "bg-[#fafae0] border-[#e0e3ad]"
                    } px-2 py-1 rounded-md`}
                  />
                </RadioGroup>
              </div>

              <button
                onClick={handleFormChange}
                className="transition-opacity bg-[#d9db30] hover:bg-opacity-50 w-[17vw] flex gap-4 justify-center items-center rounded-full px-3 py-3"
              >
                <img src={Calculator} alt="Calculator Icon" className="w-6" />
                <h1 className="plus-jakarta-sans-bold text-[#133041] text-[1.2rem]">
                  Calculate Payments
                </h1>
              </button>
            </div>
          </div>

          <div className="bg-[#133040] text-white rounded-e-[1.75rem] rounded-es-[5rem] w-[45vw] flex justify-center">
            {result ? (
              <>
                {formState.mortrageType === "repayment" && (
                  <div className="flex flex-col m-12 gap-4">
                    <h1 className="font-bold text-[1.5rem]">Your results</h1>
                    <p className="text-[#83a2b6]">
                      Your results are shown below based on the information you
                      provided. To adjust the results, edit the form and click
                      &quot;calculate repayments&quot;.
                    </p>
                    <div className="mt-10">
                      <div className="bg-[#d9db30] h-3 rounded-md"></div>
                      <div className="bg-[#0e2431] rounded-md -mt-2 p-10">
                        <h1 className="text-[#83a2b6]">
                          Your monthly repayments
                        </h1>
                        <h1 className="text-[#d9db30] text-[3.5rem] font-bold">
                          £{numberFormatter(result)}
                        </h1>

                        <hr className="border-[#83a2b6] mt-8 mb-7" />

                        <h1 className="text-[#83a2b6]">
                          Total you&lsquo;ll repay over the term
                        </h1>
                        <h1 className="text-[1.7rem] font-semibold mt-1">
                          £
                          {numberFormatter(
                            result * 12 * formState.mortrageTerm
                          )}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
                {formState.mortrageType === "interestOnly" && (
                  <div className="flex flex-col m-12 gap-4">
                    <h1 className="font-bold text-[1.5rem]">Your results</h1>
                    <p className="text-[#83a2b6]">
                      Your results are shown below based on the information you
                      provided. To adjust the results, edit the form and click
                      &quot;calculate repayments&quot;.
                    </p>
                    <div className="mt-10">
                      <div className="bg-[#d9db30] h-3 rounded-md"></div>
                      <div className="bg-[#0e2431] rounded-md -mt-2 p-10">
                        <h1 className="text-[#83a2b6]">Your interest</h1>
                        <h1 className="text-[#d9db30] text-[3.5rem] font-bold">
                          £{numberFormatter(result)}
                        </h1>

                        <hr className="border-[#83a2b6] mt-8 mb-7" />

                        <h1 className="text-[#83a2b6]">
                          Total you&lsquo;ll repay over the term
                        </h1>
                        <h1 className="text-[1.7rem] font-semibold mt-1">
                          £
                          {numberFormatter(
                            result * 12 * formState.mortrageTerm
                          )}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <img
                  src={IllustrationEmpty}
                  alt="Illustration Empty"
                  className="w-64"
                />
                <h1 className="text-white font-bold text-[1.5rem]">
                  Result shown here
                </h1>
                <p className="text-[#83a2b6] mx-12">
                  Complete the form and click &quot;calculate repayments&quot;
                  to see what your monthly repayments would be.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MortrageCalculator;
