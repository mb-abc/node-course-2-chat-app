var generateMesage = (from, text) => {
    return {
        from: from,
        text: text,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMesage}
