"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReduxWrapperTemplate = void 0;
exports.ReduxWrapperTemplate = "import { configureStore, ThunkAction } from '@reduxjs/toolkit';\nimport { Action } from 'redux';\nimport { createWrapper } from 'next-redux-wrapper';\nimport { reducer } from './redux.reducer';\n\nexport function makeStore() {\n  return configureStore({ reducer });\n}\n\nexport type AppStore = ReturnType<typeof makeStore>;\nexport type AppState = ReturnType<AppStore['getState']>;\nexport type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;\n\nexport const wrapper = createWrapper<AppStore>(makeStore);\n";
//# sourceMappingURL=redux.wrapper.js.map