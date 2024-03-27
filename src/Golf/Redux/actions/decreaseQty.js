export const decreaseQty = (id, qty) => {
    return {
        type: "DECREASEQTY",
        id,
        qty
    };
};
