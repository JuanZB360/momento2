let db = [];

export function saveUser(user) {
    let logedUser = db.find(u => u.email === user.email);
    if (!logedUser) {
        db = [...db, user];
        console.log(db);
        return true;
    }
    return false;
}

export function findUser(user) {
    let logedUser = db.find(u => u.email === user.email && u.password === user.password);
    return logedUser;
}

export function transaction(user, newTransaction) {
    const logedUser = db.find(u => u.email === user.email);

    if (logedUser) {
        logedUser.transactions = [...logedUser.transactions, newTransaction];
        return true;
    }

    return false;
}

export function createSavings(user, newSaving) {
    let logedUser = db.find(u => u.email === user.email);

    if (logedUser) {
        let savings = logedUser.savingsGoals.find(s => s.name === newSaving.name);
        if (!savings) {
             logedUser.savingsGoals = [...logedUser.savingsGoals, newSaving];
             return true;
        }
    }
    return false;
}

export function updateSavings(user, updateSaving) {
    let logedUser = db.find(u => u.email === user.email);
    let saving = logedUser.savingsGoals.find(s => s.name === updateSaving.name);
    let message = {
        confirm: false,
        message: `Esta meta "${updateSaving.name}" no Existe Debes crearla...`
    };

    if (saving) {

        saving.current += updateSaving.current;

        if (saving.target > saving.current) {
            message.confirm = true;
            message.message = `¡¡ Vamos $ ${user.name} Estas más Cerca de la Meta solo falta $${saving.target - saving.current} !!`;
        }else if (saving.target < saving.current) {
            message.confirm = false;
            message.message = `¡¡ Excelente ${user.name} Alcansaste tu Meta con un extra de $ ${saving.current - saving.target} eres el MEJOR !!`;
        }else if (saving.target == saving.current) {
            message.confirm = false;
            message.message = `¡¡ Excelente $ ${user.name} Alcansaste tu Meta haz recogido los $${saving.current} !!`;
        }
    }

    return message;
}

export function getSavings(user){
    let logedUser = db.find(u => u.email === user.email);
    if (logedUser) {
        return logedUser.savingsGoals;
    }
    return [];
}

export function getSubtotal(user) {
    let logedUser = db.find(u => u.email === user.email);
    let value = {
        income: 0,
        expense: 0,
        subtotal: 0
    };

    if (logedUser) {
        logedUser.transactions.forEach(u => {
            
            if (u.type === 'income') {
                value.income += u.value;
                value.subtotal += u.value;
            } else if (u.type === 'expense') {
                value.expense += u.value;
                value.subtotal -= u.value;    
            }
            
        });
    }

    return value;
}