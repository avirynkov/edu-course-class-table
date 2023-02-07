export function validateData(name, age) {
    if (!name) {
        alert('Name is required!');
        return false;
    }

    if (!age) {
        alert('Age is required!');
        return false;
    }

    if (age < 18) {
        alert('Age must be >18!');
        return false;
    }

    if (age > 120) {
        alert('Are you serious?');
        return false;
    }

    return true;
}