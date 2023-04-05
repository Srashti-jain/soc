import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

   const SingleSelect = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const options = [
    <SelectOption key={0} value="Filter by status" />,
    <SelectOption key={1} value="Active" />,
    <SelectOption key={2} value="Cancelled" />,
    <SelectOption key={3} value="Paused" />
  ];

  const onToggle = isOpen => setIsOpen(isOpen);

  const onSelect = (event, selection, isPlaceholder) => {
    setSelected(selection);
    setIsOpen(false);
  };

  const clearSelection = () => {
    setSelected(null);
    setIsOpen(false);
  };

  const titleId = 'placeholder-style-select-option-id';

  return (
    <React.Fragment>
      <span id={titleId} hidden>
        Placeholder styles - select option
      </span>
      <Select
        variant={SelectVariant.single}
        placeholderText="Select an option"
        hasPlaceholderStyle
        aria-label="Select input"
        onToggle={onToggle}
        onSelect={onSelect}
        onClear={clearSelection}
        selections={selected}
        isOpen={isOpen}
        aria-labelledby={titleId}
      >
        {options}
      </Select>
      </React.Fragment>
  );
}
export default SingleSelect
