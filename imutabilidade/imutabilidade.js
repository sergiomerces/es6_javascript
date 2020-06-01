const user = {
    name: 'Sérgio',
    lastName: 'da Costa Mercês'
};

function getUserWithFullName(user) {
    return {
        user,
        fullName: '${user.name} ${user.lastName}'
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);