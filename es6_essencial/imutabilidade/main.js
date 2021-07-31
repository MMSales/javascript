
const user = {

    name: 'Guilherme',
    lastName: 'Maciel de Sales'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName, user) 

