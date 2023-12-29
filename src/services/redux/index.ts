import { configureStore } from '@reduxjs/toolkit';

import userReducer from './modules/user/reducer';
import settingsReducer from './modules/settings/reducer';
import messageReducer from './modules/message/reducer';
import adminReducer from './modules/admin/reducer';
import importReducer from './modules/import/reducer';
import playlistReducer from './modules/playlist/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
    message: messageReducer,
    admin: adminReducer,
    import: importReducer,
    playlist: playlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
