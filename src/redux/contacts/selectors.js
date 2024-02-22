import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectLoading = state => state.contacts.loading;

export const selectAllContacts = state => state.contacts.items;

export const selectFilters = state => state.filters;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilters],
  (contacts, filter) => {
    if (!filter.name) {
      return contacts;
    }

    const fuse = new Fuse(contacts, {
      keys: ['name', 'number'],
      includeScore: true,
    });

    const filteredContacts = fuse.search(filter.name.toLowerCase());

    return filteredContacts.map(result => result.item);
  }
);
