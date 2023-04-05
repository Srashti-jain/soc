import React from 'react';
import {TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ExpandableRowContent} from '@patternfly/react-table';
import {Button} from '@patternfly/react-core';

export const Table = () => {
  const teams = [{
    time: 'Developer program 1',
    agentname:'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    time: 'Developer program 2',
    agentname: 'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    time: 'Developer program 3',
    agentname:'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    time: 'Developer program 4',
    agentname:'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    time: 'Developer program 5',
    agentname:'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    time: 'Developer program 6',
    agentname:'Library Server',
    ruledesc: 'Window user log off',
    rulelevel:'3',
    ruleid:'60137',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }];
  const columnNames = {
    time: 'Time',
    agentname: 'agent.name',
    ruledesc: 'rule.description',
    rulelevel:'rule.level',
    ruleid:'rule.id',
  };
  const [expandedTeamNames, setExpandedTeamNames] = React.useState([]);
  const setTeamExpanded = (team, isExpanding = true) => setExpandedTeamNames(prevExpanded => {
    const otherExpandedTeamNames = prevExpanded.filter(t => t !== team.time);
    return isExpanding ? [...otherExpandedTeamNames, team.time] : otherExpandedTeamNames;
  });
  const isTeamExpanded = team => expandedTeamNames.includes(team.time);
  return (
      <TableComposable aria-label="expandable table" gridBreakPoint=""  variant='compact'>
        <Thead >
          <Tr>
            <Th />
            <Th width={25}> {columnNames.time} </Th>
            <Th width={20}>{columnNames.agentname}</Th>
            <Th width={15}>{columnNames.ruledesc}</Th>
            <Th width={10}>{columnNames.rulelevel}</Th>
            <Th width={10}>{columnNames.ruleid}</Th>
          </Tr>
        </Thead>
        {teams.map((team, rowIndex) => <Tbody key={team.time} isExpanded={isTeamExpanded(team)}>
            <Tr>
              <Td expand={{
    rowIndex,
    isExpanded: isTeamExpanded(team),
    onToggle: () => setTeamExpanded(team, !isTeamExpanded(team)),
    expandId: 'composable-nested-expandable-example'
  }} />
              <Td dataLabel={columnNames.time}>{team.time}</Td>
              <Td dataLabel={columnNames.agentname}>{team.agentname}</Td>
              <Td dataLabel={columnNames.ruledesc}>{team.ruledesc}</Td>
              <Td dataLabel={columnNames.rulelevel}>{team.rulelevel}</Td>
              <Td dataLabel={columnNames.ruleid}>{team.ruleid}</Td>
            </Tr>
            <Tr isExpanded={isTeamExpanded(team)}>
              <Td dataLabel={`Team ${team.time} description`} colSpan={6}>
                <ExpandableRowContent>{team.description}</ExpandableRowContent>
              </Td>
            </Tr>
          </Tbody>)}
      </TableComposable>
   );
};
export default Table;