
export const useFormatDollar = () => {
    const formatDollar = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    return { formatDollar };
};

export const calculateDiscount = (price) => {
    const discount = price * 0.05;
    return price - discount;
};
