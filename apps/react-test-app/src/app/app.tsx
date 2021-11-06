import {
  Button,
  Checkbox,
  Dropdown,
  Icon,
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
  const [toggle, setToggle] = useState(false);

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
      <Radio checked={radio} onChange={setRadio}>
        Radio 1
      </Radio>
      <Checkbox checked={checked} onChange={setChecked}>
        Check Me!
      </Checkbox>

      <RadioGroup
        name="fav-monster"
        options={['Kraken', 'Sasquatch', 'Mothman']}
        onChange={setSelectedRadio}
        selectedOption={selectedRadio}
      >
        Choose your favorite monster
      </RadioGroup>

      <Toggle isOn={toggle} onChange={setToggle}>
        Toggle Me!
      </Toggle>

      <Dropdown
        selectedOption={selectedOption}
        options={['Kraken', 'Sasquatch', 'Mothman']}
        onChange={setSelectedOption}
      >
        Favorite Monster
      </Dropdown>

      <Button>Click Me!</Button>

      {/* <Icon icon="address-card" iconType="solid" /> */}
    </div>
  );
}

export default App;
