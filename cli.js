import React from 'react';
import {render} from 'ink';
import SelectInput from 'ink-select-input';

const Demo = () => {
	const handleSelect = item => {
		// `item` = { label: 'First', value: 'first' }
	};

	const items = [
		{
			label: '🏡 Website  ',
			value: 'first'
		},
		{
			label: '📬 Email',
			value: 'second'
		},
		{
			label: '💾 Github',
			value: 'third'
		},
    {
      label: "🚪  Quit",
      action() {
       process.exit();
      }
    }
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

render(<Demo />);
