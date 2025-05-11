import {QRCodeSVG} from 'qrcode.react';
import {useState} from "react";
import s from "./QrCodeGenerator.module.css"
import {GENERATE_DATA} from "../../constants.tsx";

export const QrCodeGenerator = () => {

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
        setResult('')
    }

    return (
        <div className={s.container}>

            <input
                placeholder="Enter your text..."
                type="text"
                value={value}
                onChange={onChangeHandler}
                className={s.input}
            />
            <button
                className={s.button}
                type="button"
                onClick={onClickHandler}
            >
                Generate QR
            </button>
            {result !== '' && (
                <div className={s.qr_container}>
                    <QRCodeSVG value={result} size={200}/>
                </div>
            )}
        </div>
    )
}
