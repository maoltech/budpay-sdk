"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const BadRequest = (message) => {
    return ({ status: '400', message });
};
exports.BadRequest = BadRequest;
