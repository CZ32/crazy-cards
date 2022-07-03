import { ChangeEvent } from "react";
import { FormData } from "../types";

type FormProps = {
  formData: FormData;
  onChange: (formData: Partial<FormData>) => void;
};

type FormField =
  | "employmentStatus"
  | "incomeUnitAmount"
  | "houseNumber"
  | "postCode"
  | "dateOfBirth";

export function Form({ formData, onChange }: FormProps) {
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

  return (
    <form className="form">
      <label htmlFor="employmentStatus">Employment Status</label>
      <select
        name="employmentStatus"
        value={formData.employmentStatus}
        onChange={(e) => handleChange(e, "employmentStatus")}
      >
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
      <input type="submit" />
    </form>
  );
}
