import {
  ActivityState,
  ThemeService,
  UserActivityService,
} from '@jtjs/core-browser';
import {
  BackgroundImageCard,
  Button,
  Card,
  Checkbox,
  Dropdown,
  Flexbox,
  Heading,
  // ImageCard,
  Link,
  LoadView,
  Radio,
  RadioGroup,
  Text,
  Toggle,
  useTheme,
} from '@jtjs/react';
import { useEffect, useState } from 'react';

function fakeNetworkCall(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(3), 5000);
  });
}

UserActivityService.onActivity.subscribe(() => console.log('activity'));
UserActivityService.onChangeActivityState.subscribe((state) => {
  console.log('activity state changin to:', ActivityState[state].toString());
});

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

  const themeColors: { name: string; color: string }[] = Object.entries(theme)
    .map(([colorName, hex]) => {
      return {
        name: colorName,
        color: hex,
      };
    })
    .filter((c) => c.name !== 'name');

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
          options={[
            {
              label: 'Kraken',
              value: 'K',
            },
            {
              label: 'Sasquatch',
              value: 'S',
            },
            {
              label: 'Mothman',
              value: 'M',
            },
          ]}
          onChange={setSelectedRadio}
          value={selectedRadio}
        >
          Choose your favorite monster
        </RadioGroup>

        <Toggle isOn={toggle} onChange={setToggle}>
          Toggle Me!
        </Toggle>

        <Dropdown
          value={selectedOption}
          options={[
            {
              label: 'Kraken',
              value: 'K',
            },
            {
              label: 'Sasquatch',
              value: 'S',
            },
            {
              label: 'Mothman',
              value: 'M',
            },
          ]}
          onChange={setSelectedOption}
        >
          Favorite Monster
        </Dropdown>

        <Button>Click Me!</Button>
        <Button disabled>Can't Click Me!</Button>

        <Flexbox>
          {/* <ImageCard
            flex
            direction="column"
            verticalAlignment="bottom"
            innerShadow
            style={{
              flexBasis: '50%',
              minHeight: '50vh',
            }}
            src="../assets/ga-screenshot0.jpg"
            imgOptions={{
              horizontalAlignment: 'center',
            }}
          >
            <Heading
              style={{
                margin: 0,
              }}
            >
              Game
            </Heading>
            <Text>This game is Galactic Assault</Text>
          </ImageCard> */}
          <BackgroundImageCard
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
          </BackgroundImageCard>
        </Flexbox>

        <div
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: ThemeService.darken(
              ThemeService.currentTheme.foreground,
              0.5
            ),
          }}
        ></div>

        <Link href="https://google.com">Google</Link>

        {/* <Icon icon="address-card" iconType="solid" /> */}

        <LoadView isLoading />

        <Heading importance={3}>Colors</Heading>
        <Flexbox direction="column">
          {themeColors.map((themeColor) => {
            const ThemeColorSample = ({
              themeColor,
            }: {
              themeColor: { color: string; name: string };
            }) => {
              return (
                <Flexbox
                  horizontalAlignment="center"
                  verticalAlignment="center"
                  style={{
                    height: '2rem',
                    width: '6rem',
                    backgroundColor: themeColor.color,
                  }}
                  key={themeColor.name}
                >
                  <span
                    style={{
                      textShadow: '1px 1px black',
                      color: 'white',
                    }}
                  >
                    {themeColor.name}
                  </span>
                </Flexbox>
              );
            };

            return (
              <Flexbox spacing="0">
                <ThemeColorSample
                  key={`${themeColor.name}-2`}
                  themeColor={{
                    name: `${themeColor.name}-lightened`,
                    color: ThemeService.lighten(themeColor.color),
                  }}
                />
                <ThemeColorSample
                  key={`${themeColor.name}-1`}
                  themeColor={themeColor}
                />
                <ThemeColorSample
                  key={`${themeColor.name}-3`}
                  themeColor={{
                    name: `${themeColor.name}-darkened`,
                    color: ThemeService.darken(themeColor.color),
                  }}
                />
              </Flexbox>
            );
          })}
        </Flexbox>
      </Card>
    </div>
  );
}

export default App;
