
import { FormData } from "../types"

type FormProps = {
  formData: FormData,
  handleChange: () => void
}
export function Form({formData, handleChange}: FormProps){ 
  return (
    <form className='form'>
      <select value={formData.employmentStatus}>
        <option value="fullTime">fullTime</option>
        <option value="partTime">partTime</option>
        <option value="student">student</option>
        <option value="unemployed">unemployed</option>
      </select>
      <input type="number" placeholder="Income Amount" value={formData.income.unitAmount} />
      <input type="text" placeholder="House Number" value={formData.address.houseNumber} />
      <input type="text" placeholder="Post Code" value={formData.address.postCode} />
      <input type="text" placeholder="date of birth" value={formData.dateOfBirth}/>
      <input type="submit" />
    </form>
  );
}