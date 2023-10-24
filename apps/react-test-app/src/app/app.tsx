import {
  Button,
  Checkbox,
  Collapsible,
  Contentbox,
  Flexbox,
  Heading,
  HideBehaviour,
  Icon,
  LabelPosition,
  LabelledCheckboxGroup,
  LabelledColorInput,
  LabelledInput,
  LabelledMaskedMultilineTextInput,
  LabelledMaskedTextInput,
  LabelledRadio,
  LabelledRadioGroup,
  LabelledSelect,
  LabelledTextInput,
  LabelledToggle,
  Link,
  LoadView,
  Radio,
  Select,
  Table,
  Text,
  ThemeMode,
  ThemeToggle,
  Toggle,
  Tooltipped,
  useBreakpoint,
  useTheme,
} from '@jtjs/react';
import { ThemeService } from '@jtjs/view';
import { Size } from 'libs/react/src/types/sizable.props';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function fakeNetworkCall(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(3), 5000);
  });
}

ThemeService.registerTheme({
  ...ThemeService.dark,
  name: 'dark',
});
ThemeService.registerTheme({
  ...ThemeService.parchment,
  name: 'light',
});

// UserActivityService.onActivity.subscribe(() => console.log('activity'));
// UserActivityService.onChangeActivityState.subscribe((state) => {
//   console.log('activity state changin to:', ActivityState[state].toString());
// });

export function App() {
  const [theme, setTheme] = useTheme();
  const [data, setData] = useState(0);
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [toggle, setToggle] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(theme.background);

  const currentBreakpoint = useBreakpoint();

  console.log('render');

  const { register, handleSubmit } = useForm<{
    name: string;
    otherName: string;
    anotherName: string;
  }>();

  useEffect(() => {
    fakeNetworkCall().then((num) => setData(num));
  }, []);

  useEffect(() => {
    ThemeService.updateTheme(theme.name, {
      background: backgroundColor,
    });
  }, [backgroundColor]);

  const themeColors: { name: string; color: string }[] = Object.entries(theme)
    .map(([colorName, hex]) => {
      return {
        name: colorName,
        color: hex,
      };
    })
    .filter((c) => c.name !== 'name');

  const onSubmit = (data: any) => console.log(data);

  return (
    <div
      id="content"
      style={{
        height: '100%',
        width: '100%',
        margin: '0',
      }}
    >
      <Contentbox direction="column">
        <Text>Current breakpoint is: {currentBreakpoint}</Text>

        <Radio checked={radio} onChangeChecked={setRadio} />

        <Checkbox checked={checked} onChangeChecked={setChecked} />

        <LabelledRadioGroup
          label="Favorite Monster"
          options={[
            {
              label: 'Kraken',
              value: 'K',
              props: {
                labelPosition: LabelPosition.Before,
              },
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
          error="Bad news!"
        />

        <LabelledRadioGroup
          inlineItems
          label="Favorite Monster Inline"
          options={[
            {
              label: 'Kraken',
              value: 'K',
              props: {
                labelPosition: LabelPosition.Before,
              },
            },
            {
              label: 'Sasquatch',
              value: 'S',
            },
            {
              label: 'Mothman',
              value: 'M',
            },
            {
              label: 'Cthulhu',
              value: 'C',
            },
            {
              label: 'Werewolf',
              value: 'W',
            },
            {
              label: 'Vampire',
              value: 'V',
            },
          ]}
        />

        <LabelledCheckboxGroup
          label="Cool Games"
          options={[
            {
              label: 'Fallout',
              name: 'fo',
            },
            {
              label: 'The Elder Scrolls',
              name: 'tes',
            },
            {
              label: 'FFXIV',
              name: 'ffxiv',
              props: {
                labelPosition: LabelPosition.Before,
              },
            },
            {
              label: "Baldur's Gate 3",
              name: 'bg3',
            },
          ]}
        />

        <LabelledCheckboxGroup
          inlineItems
          label="Cool Games Inline"
          options={[
            {
              label: 'Fallout',
              name: 'fo',
            },
            {
              label: 'The Elder Scrolls',
              name: 'tes',
            },
            {
              label: 'FFXIV',
              name: 'ffxiv',
              props: {
                labelPosition: LabelPosition.Before,
              },
            },
            {
              label: "Baldur's Gate 3",
              name: 'bg3',
            },
          ]}
        />

        <LabelledRadio disabled label="Labelled Radio" />

        <Toggle isOn={toggle} onToggle={setToggle} />

        <Toggle />

        <LabelledToggle label="Labelled Toggle" />

        <LabelledToggle
          label="Labelled Toggle"
          labelPosition={LabelPosition.After}
        />

        <LabelledToggle label="Disabled Labelled Toggle" disabled />
        <Toggle disabled />

        <Tooltipped tooltip="Toggle App Theme" disableWrapperFocus>
          <ThemeToggle
            mode={theme.name === 'light' ? ThemeMode.Light : ThemeMode.Dark}
            onToggle={(mode) =>
              mode === ThemeMode.Light ? setTheme('light') : setTheme('dark')
            }
          />
        </Tooltipped>

        <Select
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
          onChangeSelection={setSelectedOption}
        />

        <LabelledSelect
          label="Subscription Tier"
          options={[
            {
              groupLabel: 'Totally Awesomesauce',
              options: [
                {
                  label: 'Richest Elitest',
                  value: 0,
                },
                {
                  label: 'Richer Eliter',
                  value: 1,
                },
                {
                  label: 'Rich Elite',
                  value: 2,
                },
              ],
            },
            {
              groupLabel: 'Okay',
              options: [
                {
                  label: 'A Fair Amount of Dough',
                  value: 3,
                },
                {
                  label: 'An Okay Amount of Dough',
                  value: 4,
                },
              ],
            },
            {
              label: "You're Such a Schlub, You Don't Get an Option Group",
              value: 5,
            },
          ]}
        />
        <LabelledSelect
          label="Subscription Tier"
          labelPosition={LabelPosition.After}
          options={[
            {
              groupLabel: 'Totally Awesomesauce',
              options: [
                {
                  label: 'Richest Elitest',
                  value: 0,
                },
                {
                  label: 'Richer Eliter',
                  value: 1,
                },
                {
                  label: 'Rich Elite',
                  value: 2,
                },
              ],
            },
            {
              groupLabel: 'Okay',
              options: [
                {
                  label: 'A Fair Amount of Dough',
                  value: 3,
                },
                {
                  label: 'An Okay Amount of Dough',
                  value: 4,
                },
              ],
            },
            {
              label: "You're Such a Schlub, You Don't Get an Option Group",
              value: 5,
            },
          ]}
        />

        <Button>Click Me!</Button>
        <Button>Another Button</Button>
        <Button disabled>Can't Click Me!</Button>

        <Collapsible
          heading="Collapsible Heading"
          collapseBehaviour={HideBehaviour.Hide}
        >
          <Text>I can be collapsed!</Text>

          <Button>Focusable Button</Button>
        </Collapsible>

        <Collapsible defaultIsCollapsed heading="Tables">
          <Table
            title="Empty Table"
            columnHeaders={['Data Col 1', 'Data Col 2']}
          />

          <Table
            title="Example Table"
            columnHeaders={[
              'Name',
              'Age',
              {
                header: 'Profession',
                headerProps: {
                  onClick: () => console.log('click!'),
                  style: {
                    cursor: 'pointer',
                  },
                },
              },
              'Input',
            ]}
            rows={new Array(20).fill(0).map(() => ({
              cells: [
                'JT',
                26,
                'Software Dev',
                <LabelledTextInput label="Something" />,
              ],
            }))}
          />

          <Table
            title="Example Table With Capped Height"
            columnHeaders={['Name', 'Age', 'Profession', 'Input']}
            rows={new Array(20).fill(0).map(() => ({
              cells: [
                'JT',
                26,
                'Software Dev',
                <LabelledTextInput label="Something" />,
              ],
            }))}
            maxHeight="15rem"
          />
        </Collapsible>

        <Contentbox filled>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flexbox direction="column">
              <LabelledMaskedTextInput
                label="RHF: Name (A-Z only)"
                mask={/[a-z]/i}
                {...register('name')}
              />

              <LabelledMaskedMultilineTextInput
                label="RHF: Multline Name (no numbers)"
                labelPosition={LabelPosition.After}
                mask={/[^\d]/}
                {...register('otherName')}
              />

              <input type="text" {...register('anotherName')} />

              <Button type="submit">Submit</Button>
            </Flexbox>
          </form>
        </Contentbox>

        <LabelledInput label="Password" type="password" />
        <LabelledInput label="Numbers" type="number" />

        <LabelledTextInput label="Labelled Text Input" error="Problem!" />
        <LabelledTextInput
          label="Bottom Label Error"
          labelPosition={LabelPosition.After}
          error="This is a longer error message that's probably too long."
        />

        <Collapsible heading="Input Sizes" style={{ width: '100%' }}>
          {Object.entries(Size).map(([sizeName, size]) => {
            return (
              <LabelledInput key={sizeName} label={sizeName} prefWidth={size} />
            );
          })}
        </Collapsible>

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
        <Link external href="https://google.com">
          Google as External
        </Link>
        <Icon icon="address-card" iconType="solid" />
        <Tooltipped tooltip="Totally neat extra information that's really long and just keeps going like wow who would write a tooltip this long I have no idea!">
          <Text>I have a tooltip!</Text>
        </Tooltipped>

        <Text>
          Here's some text that has a{' '}
          <Tooltipped tooltip="Hey look, an inline tooltip" inline>
            TOOLTIP!
          </Tooltipped>{' '}
          inside it inline.
        </Text>

        <LoadView isLoading />

        <Flexbox>
          <LabelledColorInput
            label="Background Color"
            value={theme.background}
            onChangeColor={setBackgroundColor}
          />

          <LabelledColorInput
            label="Some Color"
            defaultValue="#00ffff"
            labelPosition={LabelPosition.After}
          />
        </Flexbox>

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
              <Flexbox spacing="0" key={themeColor.name}>
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
      </Contentbox>
    </div>
  );
}

export default App;
