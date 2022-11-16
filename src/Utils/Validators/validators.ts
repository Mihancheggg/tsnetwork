export type FieldValidatorType = (value: string) => string | undefined

export const requiredField: FieldValidatorType = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Field is required.'
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: string) => {
    if (value && value.length > maxLength) {
        return `Max length of the field is ${maxLength} symbols.`
    }
    return undefined
}

export const maxLength140: FieldValidatorType = (value: string) => {
    if (value && value.length > 140) {
        return 'Max length of the field is 140 symbols.'
    }
    return undefined
}
