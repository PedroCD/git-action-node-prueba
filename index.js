import * as core from '@actions/core';
import * as github from '@actions/github';

try {
    const nombre = core.getInput('name');
    const tiempo = (new Date()).toLocaleTimeString();
} catch {
    core.setFailed(error.message);
}
