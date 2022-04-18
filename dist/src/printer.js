#!/usr/bin/env node

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
require("colors");
var commander_1 = require("commander");
var log_1 = require("./helpers/log");
var new_1 = require("./generators/new");
var component_1 = require("./generators/component");
var reindex_1 = require("./generators/reindex");
var slice_1 = require("./generators/slice");
var page_1 = require("./generators/page");
var prisma_1 = require("./generators/prisma");
var api_1 = require("./generators/api");
exports.Print = new commander_1.Command('🖨️ Printer | By Chris Cates');
exports.Print
    .version('1.4.1')
    .description('🖨️ Printer: A code generation tool for Next.js, Redux, Prisma Development.');
exports.Print
    .command('new [path]')
    .description('Generate a new Printer project')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)('👷  Generating new Printer project'.green);
                return [4 /*yield*/, (0, new_1.generateNewProject)(path || '.')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('component <path>')
    .description('Generate a new Printer component')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)("\uD83D\uDC77  Generating new Printer component ".concat(path).green);
                return [4 /*yield*/, (0, component_1.generateComponent)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('reindex <path>')
    .description('Reindex all Printer components in the following path')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)("\uD83D\uDD27  Reindexing all Printer components in the ".concat(path, " folder").green);
                return [4 /*yield*/, (0, reindex_1.reindexComponents)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('slice <name>')
    .description('Generate a new Printer slice')
    .action(function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)("\uD83D\uDC77  Generating new Printer slice ".concat(name).green);
                return [4 /*yield*/, (0, slice_1.generateSlice)(name)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('page <path>')
    .description('Generate a new Printer page')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)('👷  Generating new Printer page'.green);
                return [4 /*yield*/, (0, page_1.generatePage)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('api <path>')
    .description('Generate a new Printer API route')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)('👷  Generating new Printer API route'.green);
                return [4 /*yield*/, (0, api_1.generateApi)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.Print
    .command('prisma')
    .description('Add prisma to a Printer project')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, log_1.Log)('👷  Generating new Prisma Configuration'.green);
                return [4 /*yield*/, (0, prisma_1.generatePrisma)()];
            case 1:
                _a.sent();
                (0, log_1.Log)('Don\'t forget to run "yarn add prisma @prisma/client"'.yellow);
                (0, log_1.Log)('Also don\'t forget to update your .env with the DATABASE_URL. Happy printing! 🖨️  🖨️  🖨️'.yellow);
                return [2 /*return*/];
        }
    });
}); });
if (process.env.NODE_ENV !== 'test') {
    exports.Print.parse(process.argv);
}
//# sourceMappingURL=printer.js.map