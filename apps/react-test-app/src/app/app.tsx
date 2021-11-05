import {
  Button,
  Checkbox,
  Dropdown,
  LoadView,
  Radio,
  RadioGroup,
  TextInput,
  Toggle,
  useTheme,
} from '@jtjs/react';
import { useEffect, useState } from 'react';

function fakeNetworkCall(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(3), 5000);
  });
}

export function App() {
  const [theme, setTheme] = useTheme();
  const [data, setData] = useState(0);
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fakeNetworkCall().then((num) => setData(num));
  }, []);

  return (
    <div
      id="content"
      style={{
        height: '100%',
        width: '100%',
        margin: '0',
      }}
    >
      {/* <Radio checked={radio} onChange={setRadio}>
        Radio 1
      </Radio>
      <Checkbox checked={checked} onChange={setChecked}>
        Check Me!
      </Checkbox> */}

      {/* <RadioGroup
        name="fav-monster"
        options={['Kraken', 'Sasquatch', 'Mothman']}
        onChange={setSelectedRadio}
        selectedOption={selectedRadio}
      >
        Choose your favorite monster
      </RadioGroup> */}

      <Dropdown
        selectedOption={selectedOption}
        options={['Kraken', 'Sasquatch', 'Mothman']}
        onChange={setSelectedOption}
      >
        Favorite Monster
      </Dropdown>

      {/* <Button>Click Me!</Button> */}
    </div>
  );
}

export default App;
