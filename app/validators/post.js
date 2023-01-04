exports.create = (request) => {
    const errors = []

    if (request.title === '') {
        errors.push('عنوان نمی تواند خالی باشد.')
    }
    
    if (request.slug === '') {
        errors.push('نامک نمی تواند خالی باشد.')
    }

    if (request.content === '') {
        errors.push('محتوا نمی تواند خالی باشد.')
    }
    
    return errors
}