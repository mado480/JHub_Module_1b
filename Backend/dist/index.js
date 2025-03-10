"use strict";
// server/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
