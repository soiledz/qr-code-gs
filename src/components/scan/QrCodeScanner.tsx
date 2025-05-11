import {Scanner} from '@yudiel/react-qr-scanner';
import {useState} from "react";
import s from "./QrCodeScanner.module.css"
import {SCAN_DATA} from "../../constants"

export const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null)
    const scanHandler = (result: any) => {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
    }

    const settings = {
        audio: false,
        finder: false,
    }

    return (
        <div className={s.container}>
            <Scanner
                allowMultiple
                onScan={scanHandler}
                components={settings}
                styles={{container: {width: 300}}}/>
            <p className={s.result}>{scanned}</p>
        </div>
    )
}