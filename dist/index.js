"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration .env file
dotenv_1.default.config();
//Crate Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define the first Route
app.get('/', (req, res) => {
    //Send Hello World
    res.status(200).json({ data: { message: 'Goodbye,world' } });
});
//Define the first Route
app.get('/hello', (req, res) => {
    let name = req.query.name;
    if (!name)
        name = 'anonimo';
    //Send Hello ${name}
    res.status(200).json({ data: { message: `hola ${name} ` } });
});
//Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
//# sourceMappingURL=index.js.map