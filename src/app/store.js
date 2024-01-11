import { configureStore  } from '@reduxjs/toolkit';
import librarySlice from '../features/library/book';

export const store=configureStore ({
    reducer:{libraryBook:librarySlice}
})
