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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodo = exports.getTodos = void 0;
const services_1 = require("../services");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retVal = yield services_1.todoService.getTodos();
        res.json(retVal);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
});
exports.getTodos = getTodos;
const postTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todo } = req.body;
    try {
        const retVal = yield services_1.todoService.postTodo(todo);
        res.json(retVal);
    }
    catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
});
exports.postTodo = postTodo;
