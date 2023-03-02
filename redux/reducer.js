const initialState = {
    count: 0,
    items: []
};

const changeProductCount = (list, product, increment) => {
    const clone = require('rfdc')();
    const newList = clone(list);

    let found = false;
    for (let i = 0; !found && i < newList.length; ++i) {
        if (product == newList[i].id) {
            newList[i].count += increment;

            if (newList[i].count <= 0) newList.splice(i, 1);

            found = true;
        }
    }

    if (!found) newList.push({id: product, count: increment});
    return newList;
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'add':
        return {
            count: state.count + 1,
            items: changeProductCount(state.items, action.payload, 1)
        };

    case 'remove': 
        return {
            count: state.count - 1,
            items: changeProductCount(state.items, action.payload, -1)
        };

    case 'empty':
        return {
            count: 0,
            product: []
        };

    default: 
        return state;
    }
};