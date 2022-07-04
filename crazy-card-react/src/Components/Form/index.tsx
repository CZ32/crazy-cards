import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { FormData } from "../../types";

type FormProps = {
  formData: FormData;
  onChange: (formData: Partial<FormData>) => void;
  onSubmit: () => void;
  isSubmittable: boolean;
};

type FormField =
  | "employmentStatus"
  | "incomeUnitAmount"
  | "houseNumber"
  | "postCode"
  | "dateOfBirth";

export function Form({
  formData,
  isSubmittable,
  onChange,
  onSubmit,
}: FormProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    field: FormField
  ) => {
    const value = e.target.value;

    if (field === "houseNumber" || field === "postCode") {
      return onChange({
        address: {
          houseNumber:
            field === "houseNumber" ? value : formData.address.houseNumber,
          postCode: field === "postCode" ? value : formData.address.postCode,
        },
      });
    }

    if (field === "incomeUnitAmount") {
      return onChange({
        income: {
          currency: formData.income.currency,
          unitAmount: Number(value),
        },
      });
    }

    return onChange({
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p>Fill out your details and see what cards are available to you!</p>
        <label htmlFor="employmentStatus">Employment Status</label>
        <select
          name="employmentStatus"
          value={formData.employmentStatus}
          onChange={(e) => handleChange(e, "employmentStatus")}
          defaultValue="initialValue"
        >
          <option value="initialValue">Choose here</option>
          <option value="fullTime">Full Time</option>
          <option value="partTime">Part Time</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
        </select>
        <label htmlFor="incomeAmount">Income Amount (£)</label>
        <input
          name="incomeAmount"
          type="number"
          placeholder="Income Amount"
          value={formData.income.unitAmount}
          onChange={(e) => handleChange(e, "incomeUnitAmount")}
        />
        <label htmlFor="houseNumber">House Number</label>
        <input
          name="houseNumber"
          type="text"
          placeholder="House Number"
          value={formData.address.houseNumber}
          onChange={(e) => handleChange(e, "houseNumber")}
        />
        <label htmlFor="postCode">Post Code</label>
        <input
          name="postCode"
          type="text"
          placeholder="Post Code"
          value={formData.address.postCode}
          onChange={(e) => handleChange(e, "postCode")}
        />
        <label htmlFor="dateOfBirth">Date of Birth (DD-MM-YYY)</label>
        <input
          name="dateOfBirth"
          type="text"
          placeholder="date of birth"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange(e, "dateOfBirth")}
        />
        <input
          type="submit"
          disabled={!isSubmittable}
          className="submitButton"
        />
      </form>
    </>
  );
}
