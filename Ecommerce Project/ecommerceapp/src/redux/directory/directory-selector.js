import {createSelector} from 'reselect';
// input selctor
const sectionSelector = state => state.directory;

// output selctor to get the data related to the directory sections
export const directorySelector = createSelector(
    [sectionSelector],
    (directory) => directory.sections
)