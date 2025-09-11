export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/MK3eW3As.jpg' +
        person.imageId +
        size +
        '.jpg'
    );
}