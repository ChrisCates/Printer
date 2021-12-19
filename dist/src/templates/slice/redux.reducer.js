"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReduxReducerTemplate = void 0;
function ReduxReducerTemplate(slices) {
    return "".concat(slices.map(function (slice) { return "import { ".concat(slice, "Slice } from './slice/slice.").concat(slice, "';\n"); }).join(''), "\nexport const reducer = {\n    ").concat(slices.map(function (slice) { return "".concat(slice, ": ").concat(slice, "Slice.reducer,\n"); }).join(''), "}\n");
}
exports.ReduxReducerTemplate = ReduxReducerTemplate;
//# sourceMappingURL=redux.reducer.js.map