import { QRCodeSVG } from 'qrcode.react';
import { useState, ChangeEvent, TextareaHTMLAttributes, useRef } from 'react';
import { GENERATE_DATA } from '../../constants.tsx';
import s from './QrCodeGenerator.module.css';

interface AutoResizeTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxWidth?: number;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = (props) => {
  const { maxWidth = 500, onChange, ...rest } = props;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const resize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      if (textareaRef.current.scrollWidth > maxWidth) {
        textareaRef.current.style.width = `${maxWidth}px`;
      } else {
        textareaRef.current.style.width = 'auto';
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    resize();
    if (onChange) {
      onChange(event);
    }
  };

  return <textarea {...rest} ref={textareaRef} onChange={handleChange} />;
};

const QrCodeGenerator: React.FC = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleGenerateClick = (): void => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    const newData = [...prevData, value];
    localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));

    setResult(value);
    setValue('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <textarea
          value={value}
          onChange={handleInputChange}
          className={s.input}
          placeholder="Enter your text..."
        />
      </div>
      
        <button onClick={handleGenerateClick} className={s.button}>
          Generate QR
        </button>
      {result !== '' && (
        <div className={s.qr_container}>
          <p className={s.p}>{result}</p>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;