
import { useNumber } from "../context";

export default function GetNumber() {
    const { selectedNumber, setSelectedNumber } = useNumber();

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value, 10);
      if (!isNaN(newValue) && newValue >= 1 && newValue <= 50) {
        setSelectedNumber(newValue);
      }
    };
    
    return (
      <input
        type="number"
        value={selectedNumber}
        min="1"
        max="50"
        onChange={handleNumberChange}
      />
    );
}