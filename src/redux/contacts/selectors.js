import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filters;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (filter === '') {
            return contacts;
        } else {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.filter),
            );
        }
    },
);
