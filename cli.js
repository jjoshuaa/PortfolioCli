import React from 'react'
const { render, Box, Text } = require("ink");
const BigText = require("ink-big-text");
const Gradient = require("ink-gradient");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = (items) => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};
	const items =createItems([
		{
			label: '🏡 Website (Work In Progress) ',
			value: 'first'
		},
		{
			label: '📬 Email',
			url: 'mailto:joshiirat@gmail.com.com'
		},
		{
			label: '💾 Github',
			url:'https://github.com/jjoshuaa'
		},
    {
      label: "🚪 Quit",
      action() {
       process.exit();
      }
    }
	]);

const Menu = () => (
    <Box flexDirection="column" marginTop={1}>
      <Box flexDirection="column" alignItems="center">
        <Gradient name="rainbow">
          <BigText text="Joshua" font="simple3d" space={false} />
        </Gradient>
        <Box marginY={1}>
          <Text>Just another slacker bringing ideas to fruition :)</Text>
        </Box>
      </Box>
      <Box marginLeft={1}>
        <SelectInput items={items} onSelect={handleSelect} />
      </Box>
    </Box>
  );
  
  render(<Menu />);
