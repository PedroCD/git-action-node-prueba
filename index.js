const core = require('@actions/core');

try {
    const nombre = await core.getInput('nombre');
    const tiempo = (new Date()).toLocaleTimeString();
} catch {
    core.setFailed(error.message);
}
