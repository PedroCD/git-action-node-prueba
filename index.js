//import * as core from '@actions/core';
import { getInput, setFailed } from '@actions/core';

try {
    const nombre = getInput('nombre');
    const tiempo = (new Date()).toLocaleTimeString();
} catch {
    setFailed(error.message);
}
