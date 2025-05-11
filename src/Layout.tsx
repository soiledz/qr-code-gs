import {Route, Routes} from "react-router-dom";
import {QrCodeGenerator} from "./components/generate/QrCodeGenerator.tsx";
import {QrCodeScanner} from "./components/scan/QrCodeScanner.tsx";
import {Navigation} from "./components/navigation/Navigation.tsx";
import {GenerateHistory} from "./components/GenerateHistory.tsx";
import {ScanHistory} from "./components/ScanHistory.tsx";


export const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<h1></h1>}/>
                <Route path="/generate" element={<QrCodeGenerator/>}/>
                <Route path="/scan" element={<QrCodeScanner/>}/>
                <Route path="/generateHistory" element={<GenerateHistory/>}/>
                <Route path="/scanHistory" element={<ScanHistory/>}/>
            </Routes>
        </div>
    )
}