import { useState } from "react"

export default function Child(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')
    //alternative way to use state
    // const [enteredValue, setValue] = useState({ title: '', amount: '', date: '' })

    const TitleHandler = (e) => {
        setEnterTitle(e.target.value)
        // console.log(enterTitle)

        //alternative way to use single  state
        // setValue({
        //     title: e.target.value
        // })
        // console.log(enteredValue.title)

        //best to ensure use state values are latest updated
        // setValue((prevState) => {
        //     return { ...prevState, enteredValue: e.target.value }

        // })

    }
    const AmountHandler = (e) => {
        setEnterAmount(e.target.value)
        //alternative way to use single  state
        // setValue({
        //     amount: e.target.value
        // })
        // console.log(enteredValue.amount)
    }
    const DateHandler = (e) => {
        setEnterDate(e.target.value)
        //alternative way to use single  state
        // setValue({
        //     date: e.target.value
        // })
        // console.log(enteredValue.date)
    }

    //using a single handler func....alter..
    // const OnchangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnterTitle(value)
    //     } else if (identifier === 'date') {
    //         setEnterDate(value)
    //     } else {
    //         setEnterAmount(value)
    //     }
    // }
    const SubmitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: enterTitle,
            date: new Date(enterDate),
            amount: enterAmount
        }

        console.log(expenseData)
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')

    }

    return (<form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                    value={enterTitle}
                    onChange={TitleHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                    min='0.01' step='0.01'
                    value={enterAmount}
                    onChange={AmountHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                    min='2019-01-01'
                    max='2023-12-31'
                    value={enterDate}
                    onChange={DateHandler}
                />
            </div>
            < div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </div>
    </form>)
}