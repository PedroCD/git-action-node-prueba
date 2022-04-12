const core = require('@actions/core');

try {
    const nombre = core.getInput('name');
    const tiempo = (new Date()).toLocaleTimeString();
} catch {
    core.setFailed(error.message);
}
