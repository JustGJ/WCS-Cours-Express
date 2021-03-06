export const listErrors = (err) => {
    let errors = {};
    err.errors &&
        Object.keys(err.errors).map((key) => {
            errors = { ...errors, [key]: err.errors[key].message };
        });
    err.code === 11000 &&
        Object.keys(err.keyPattern).map((key) => {
            errors = { ...errors, [key]: `${key} existe déjà` };
        });
    if (err.kind && err.kind === 'ObjectId') {
        errors = { ...errors, objectId: "Cet identifiant n'est pas un ObjectId valide" };
    }
    return errors;
};
