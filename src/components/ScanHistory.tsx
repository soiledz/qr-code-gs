import {SCAN_DATA} from "../constants.tsx";
import {QRCodeSVG} from "qrcode.react";
import {v1} from "uuid";

export const ScanHistory = () => {

    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    return (
        <div>
            {data.map((text: string) => (
                <div key={v1()} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '10px'
                }}>
                    <p >{text}</p>
                    <QRCodeSVG value={text} size={70}/>
                </div>
            ))}
        </div>
    )
}