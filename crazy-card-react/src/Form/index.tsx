
import { FormData } from "../types"
import Select from 'react-select'


const employmentOptions: {
    value: FormData['employmentStatus'],
    label: string
}[] = [
    { value: 'fullTime', label: 'Full Time' },
    { value: 'partTime', label: 'Part Time' },
    { value: 'student', label: 'Student' },
    { value: 'unemployed', label: 'Unemployed' },
]

export function Form(data: any) {
    return (
        <>
            <p>Fill out your details and see what card you can get.</p>
            <div>
                <form>
                    <div className="selectContainer">
                        <label>What's your employment status?</label>
                        <Select options={employmentOptions}/>
                    </div>
                    <div>
                        <label>What is your income in GBP?</label>
                        <input type="text" id="incomeAmount" name="incomeAmount" onChange={console.log('do this')} required/>
                    </div>
                </form>
            </div>
        </>
    )
}