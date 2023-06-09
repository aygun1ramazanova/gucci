import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Select.css'

export default function Select() {
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()

    const handleChange = (e) => {
        if (e.target.value !== '0') {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    const btnClick = () => {
        navigate('/form')
    }
    return (
        <>
            <select className="select" name="region" id="" onChange={handleChange}>
                <option value="0">Select your Country/Region</option>
                <option value="">Australia</option>
                <option value="">Austria</option>
                <option value="">Belgium</option>
                <option value="">Bulgaria</option>
                <option value="">Canada</option>
                <option value="">Chinese Mainland</option>
                <option value="">Chez Republic</option>
                <option value="">Denmark</option>
                <option value="">Finland</option>
                <option value="">France</option>
                <option value="">Germany</option>
                <option value="">Greece</option>
                <option value="">Hong Kong SAR</option>
                <option value="">Hungary</option>
                <option value="">Ireland</option>
                <option value="">Italy</option>
                <option value="">Japan</option>
                <option value="">Korea</option>
                <option value="">Kuwait</option>
                <option value="">Luxemburg</option>
                <option value="">Mexico</option>
                <option value="">Netherlands</option>
                <option value="">New Zeland</option>
                <option value="">Norway</option>
                <option value="">Poland</option>
                <option value="">Portugal</option>
                <option value="">Qatar</option>
                <option value="">Romania</option>
                <option value="">Saudi Arabia</option>
                <option value="">Singapore</option>
                <option value="">Slovenia</option>
                <option value="">Spain</option>
                <option value="">Sweden</option>
                <option value="">Switzerland</option>
                <option value="">Tailand</option>
                <option value="">Turkey</option>
                <option value="">United Arab Emirates</option>
                <option value="">United Kingdom</option>
                <option value="">Umited State</option>
                <option value="">Internationall Website (no shopping)</option>
            </select>
            <button className="button" disabled={disabled} onClick={btnClick}>SHOP</button>
        </>
    )

}