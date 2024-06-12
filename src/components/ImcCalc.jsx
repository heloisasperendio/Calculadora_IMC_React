import "./ImcCalc.css"
import Button from "./Button"
import { useState } from "react"

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault()

        setWeight("")
        setHeight("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }
    const handleHeightChange = (e) => {

        const updatedValue = validDigits(e.target.value)
        
        setHeight(updatedValue)
    }

    const handleWeightChange = (e) => {

        const updatedValue = validDigits(e.target.value)
        
        setWeight(updatedValue)
    }

  return (
    <div id="calc-container">
        <h2>Calculadora IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Ex: 1,80 (m)" onChange={(e) => handleHeightChange(e)} value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Ex: 100 (kg)" onChange={(e) => handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id= "calc-btn" text= "Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id= "clear-btn" text= "Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc