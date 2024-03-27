export const increaseQty = (id, qty) => {
    return {
        type: "INCREASEQTY",
        id,
        qty
    };
};