export const validateFormData = (formData) => {
    const errors = {};

    if (!formData.documentNumber) {
        errors.documentNumber = "El número de documento es requerido";
    } else if (formData.documentNumber.length < 8) {
        errors.documentNumber = "Debe contener al menos 8 dígitos";
    }

    if (!formData.phone) {
        errors.phone = "El número de celular es requerido";
    } else if (formData.phone.length < 9) {
        errors.phone = "Debe contener al menos 9 dígitos";
    }

    if (!formData.privacyAccepted) {
        errors.privacyAccepted = "Marca la política de privacidad";
    }

    if (!formData.communicationsAccepted) {
        errors.communicationsAccepted = "Marca la política de Comunicacion";
    }

    return errors;
};
