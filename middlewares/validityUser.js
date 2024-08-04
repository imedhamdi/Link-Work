module.exports = (req, res, next) => {
 
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    const regexName = /^([a-zA-Z ]){2,30}$/;

    if (regexEmail.test(req.body.email)) {
        if (regexPassword.test(req.body.password)) {
            if (regexName.test(req.body.firstName)){
                if(regexName.test(req.body.lastName)){
            }}
            next();
        } else {
            res.status(400).json({
                message: "Vérifier les champs : Nom/prenom/mot de passe"
            });
        }
    } else {
        res.status(400).json({ message: "Veuillez saisir un email valide !" });
    }
}