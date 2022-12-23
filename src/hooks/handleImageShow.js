

export const handleShowImage = (event) => {
    if (event.target.files && event.target.files[0]) {
        return URL.createObjectURL(event.target.files[0])
    }
}