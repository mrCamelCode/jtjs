import { ThemeService } from '@jtjs/core-browser';
import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Flexbox,
  Heading,
  Icon,
  ImageCard,
  LoadView,
  Radio,
  RadioGroup,
  Text,
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
      <Card>
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

        <Flexbox>
          <ImageCard
            flex
            direction="column"
            verticalAlignment="bottom"
            innerShadow
            style={{
              flexBasis: '50%',
              minHeight: '50vh',
            }}
            src="../assets/ga-screenshot0.jpg"
          >
            <Heading
              style={{
                margin: 0,
              }}
            >
              Game
            </Heading>
            <Text>This game is Galactic Assault</Text>
          </ImageCard>
        </Flexbox>

        <div
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: ThemeService.toColor(
              ThemeService.currentTheme.foreground
            )
              .darken(0.3)
              .hex(),
          }}
        ></div>

        {/* <Icon icon="address-card" iconType="solid" /> */}
      </Card>
    </div>
  );
}

export default App;
