import React from 'react';
import {ContextSelector, ContextSelectorItem} from '@patternfly/react-core';
export const Selector = () => {
  const items = [{
    text: 'Auto',
  }, 'Millisecond', {
    text: ' second',
  }, {
    text: ' minute',
  }, 'Hour', 'Day', ' week', 'Month'];
  const firstItemText = typeof items[0] === 'string' ? items[0] : items[0].text;
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(firstItemText);
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState(items);
  const onToggle = (event, isOpen) => {
    setOpen(isOpen);
  };
  const onSelect = (event, value) => {
    setSelected(value);
    setOpen(!isOpen);
  };
  const onSearchInputChange = value => {
    setSearchValue(value);
  };
  const onSearchButtonClick = () => {
    const filtered = searchValue === '' ? items : items.filter(item => {
      const str = typeof item === 'string' ? item : item.text;
      return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    setFilteredItems(filtered || []);
  };
  return <ContextSelector toggleText={selected} onSearchInputChange={onSearchInputChange} isOpen={isOpen} searchInputValue={searchValue}
   onToggle={onToggle} onSelect={onSelect} onSearchButtonClick={onSearchButtonClick} screenReaderLabel="Selected Project:">
      {filteredItems.map((item, index) => {
    const [text = null, href = undefined,] = typeof item === 'string' ? [item, undefined, false] : [item.text, item.href, ];
    return <ContextSelectorItem key={index} href={href} >
            {text}
          </ContextSelectorItem>;
  })}
    </ContextSelector>;
};
export default Selector;