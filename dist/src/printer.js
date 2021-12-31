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
require("colors");
var commander_1 = require("commander");
var new_1 = require("./generators/new");
var component_1 = require("./generators/component");
var slice_1 = require("./generators/slice");
var page_1 = require("./generators/page");
var prisma_1 = require("./generators/prisma");
var schema_1 = require("./generators/schema");
var Print = new commander_1.Command('🖨️ Printer | By Chris Cates');
Print
    .version('1.0.1')
    .description('🖨️ Printer: A Prescriptive, Precision based approach to Next.js, Redux, Prisma Development.');
Print
    .command('new [path]')
    .description('Generate a new Printer project')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Printer project".green.bold);
                return [4 /*yield*/, (0, new_1.generateNewProject)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
Print
    .command('component [path]')
    .description('Generate a new Printer component')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Printer component ".concat(path).green.bold);
                return [4 /*yield*/, (0, component_1.generateComponent)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
Print
    .command('slice [name]')
    .description('Generate a new Printer slice')
    .action(function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Printer slice ".concat(name).green.bold);
                return [4 /*yield*/, (0, slice_1.generateSlice)(name)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
Print
    .command('page [path]')
    .description('Generate a new Printer page')
    .action(function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Printer page".green.bold);
                return [4 /*yield*/, (0, page_1.generatePage)(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
Print
    .command('prisma')
    .description('Add prisma to a Printer project')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Prisma Configuration".green.bold);
                return [4 /*yield*/, (0, prisma_1.generatePrisma)()];
            case 1:
                _a.sent();
                console.log("Don't forget to run \"yarn add prisma\" to your project.".yellow);
                console.log("Also don't forget to update your .env with the DATABASE_URL. Happy printing! \uD83D\uDDA8\uFE0F  \uD83D\uDDA8\uFE0F  \uD83D\uDDA8\uFE0F".yellow);
                return [2 /*return*/];
        }
    });
}); });
Print
    .command('schema [name]')
    .description('Generate a new Prisma schema')
    .action(function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\uD83D\uDC77  Generating new Prisma Schema".green.bold);
                return [4 /*yield*/, (0, schema_1.generatePrismaSchema)(name)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
Print.parse(process.argv);
//# sourceMappingURL=printer.js.map